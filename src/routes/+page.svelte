<script lang="ts">
	import { Game, type GameRatingData, type Score } from './interfaces';
	import { storedGames } from './store';
	export const ssr = false;
	let gameEditing = '';
	let scoreEditing = -1;
	$: currentGameEditing =
		(gameEditing && $storedGames.find((g) => g.gameId === gameEditing)) ||
		$storedGames[$storedGames.length - 1];
	$: currentScoreEditing = scoreEditing > -1 ? currentGameEditing.scores[scoreEditing] : null;
	$: gamesComplete = $storedGames.filter((g) => g.isComplete);
	$: gamesCompletedWithRating = calculateRatingForGames(gamesComplete);
	$: currentGameRating = calculateRating([currentGameEditing]);
	$: completedStats = calculateTotalGameStats(gamesComplete);
	$: disableEditing = currentGameEditing.isComplete && scoreEditing === -1;
	$: storedGames;
	function calculateRatingForGames(games: Game[]): GameRatingData[] {
		return games.map((g, index) => {
			const allGamesFromThisPointBack = games.slice(0, index + 1);
			const totalRating = calculateRating(allGamesFromThisPointBack);
			return {
				game: g,
				rating: calculateRating([g]),
				totalRating: totalRating ? Math.round(totalRating * 10000) / 10000 : 0
			};
		});
	}
	function isKill(score: Score | undefined | null) {
		return score === 'killHit6' || score === 'killHit8' || score === 'killMiss';
	}
	function isDrop(score: Score | undefined | null) {
		return score === 'drop';
	}
	function addScore(score: Score) {
		const targetGame = currentGameEditing;
		targetGame.addScore(score);
		$storedGames = [...$storedGames];
	}
	function replaceScore(score: Score) {
		const targetGame = currentGameEditing;
		targetGame.replaceScore(scoreEditing, score);
		scoreEditing = -1;
		$storedGames = [...$storedGames];
	}
	function setScore(score: Score) {
		if (scoreEditing === -1) {
			addScore(score);
		} else {
			replaceScore(score);
		}
		$storedGames = [...$storedGames];
	}
	function saveGame() {
		if (!currentGameEditing.isComplete) {
			return;
		}
		const lastGame = $storedGames[$storedGames.length - 1];
		if (lastGame !== currentGameEditing) {
			$storedGames = [...$storedGames];
		} else {
			$storedGames = [...$storedGames, new Game()];
		}
		gameEditing = '';
		scoreEditing = -1;
	}
	function calculateAverage(gamesToCalculate: Game[]): number {
		if (gamesToCalculate.length < 1) {
			return 0;
		}
		const totalScore = gamesToCalculate.reduce((acc, g) => acc + g.totalScore, 0);
		return totalScore / gamesToCalculate.length;
	}
	function checkDiff(games: GameRatingData[], targetGameIndex: number): '👆' | '👇' | '-' {
		const targetGame = games[targetGameIndex];
		const previousGame = games[targetGameIndex - 1];
		if (!previousGame) {
			return '-';
		}
		if (targetGame.totalRating > previousGame.totalRating) {
			return '👆';
		}
		if (targetGame.totalRating < previousGame.totalRating) {
			return '👇';
		}
		return '-';
	}
	function calculateRating(gamesToCalculate: Game[]): number {
		const totalGames = gamesToCalculate.length;

		if (totalGames === 0) {
			return 0; // Return 0 if there are no completed games
		}

		const average = calculateAverage(gamesToCalculate);
		const hitPercent = calculateHitPercentage(gamesToCalculate);
		const killsHit = calculateKillsHit(gamesToCalculate);

		// Apply weights and combine according to the formula
		const rating = average * 8 + hitPercent * 500 + killsHit * 2;

		return rating;
	}

	function calculateHitPercentage(games: Game[]): number {
		const totalThrows = games.length * 10;
		let totalHits = 0;

		for (const game of games) {
			for (const score of game.scores) {
				if (score === 6 || score === 8 || score === 'killHit6' || score === 'killHit8') {
					totalHits++;
				}
			}
		}

		return totalHits / totalThrows; // Calculate hit percentage
	}

	function calculateKillsHit(games: Game[]) {
		return games.reduce((accum: number, current) => {
			return current.stats.totalEightKills + current.stats.totalSixKills + accum;
		}, 0);
	}
	// function calculateBullsHit(games: Game[]) {
	// 	return games.reduce((accum: number, current) => {
	// 		return current.stats.bulls + accum;
	// 	}, 0);
	// }
	// function calculateTotalScore(games: Game[]) {
	// 	return games.reduce((accum: number, current) => {
	// 		return current.totalScore + accum;
	// 	}, 0);
	// }
	function calculateTotalGameStats(gamesToCalc: Game[]) {
		const stats = gamesToCalc.reduce(
			(accum, current) => {
				return {
					bulls: current.stats.bulls + accum.bulls,
					kills: current.stats.totalEightKills + current.stats.totalSixKills + accum.kills,
					drops: current.stats.drops + accum.drops,
					totalScore: current.totalScore + accum.totalScore
				};
			},
			{ bulls: 0, kills: 0, drops: 0, totalScore: 0 } as {
				bulls: number;
				kills: number;
				drops: number;
				totalScore: number;
			}
		);
		const rating = calculateRating(gamesToCalc);
		return {
			...stats,
			average:
				stats.totalScore && gamesToCalc.length
					? Math.round((stats.totalScore / gamesToCalc.length) * 10000) / 10000
					: 0,
			rating: rating ? Math.round(rating * 100) / 100 : 0,
			totalGames: gamesToCalc.length
		};
	}
	function getLabelForScore(score: Score) {
		if (typeof score === 'number') {
			return score.toString();
		}
		switch (score) {
			case 'killHit6':
				return 'Kill 6';
			case 'killHit8':
				return 'Kill 8';
			case 'killMiss':
				return 'Miss';
			case 'drop':
				return 'Drop';
		}
	}
	function deleteAllGames() {
		$storedGames = [new Game()];
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Figure out ratings" />
</svelte:head>
<h1 class="center">WATL rating simulator</h1>
<section>
	<div class="stats">
		<div>Score {currentGameEditing.totalScore}</div>
		<div>
			Rating: {currentGameRating}
		</div>
		<div>
			Throw: {currentGameEditing.scores.length < 10
				? currentGameEditing.scores.length + 1
				: currentGameEditing.scores.length}
		</div>
	</div>
	<div class="flexrow">
		{#each currentGameEditing.scores as score, scoreIndex}
			<div>
				{#if scoreIndex === scoreEditing}
					<button
						class="outline"
						on:click={() => {
							scoreEditing = -1;
						}}>Cancel</button
					>
				{:else}
					<button class="outline secondary scorebtn" on:click={() => (scoreEditing = scoreIndex)}
						>{getLabelForScore(score)}</button
					>
				{/if}
			</div>
		{/each}
	</div>
</section>
<section>
	<div>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(0);
			}}>0</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(1);
			}}>1</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(2);
			}}>2</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(3);
			}}>3</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(4);
			}}>4</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(5);
			}}>5</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore(6);
			}}>6</button
		>
	</div>
	<div>
		<button
			class="flexrowButton"
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killHit6');
			}}>{getLabelForScore('killHit6')}</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killHit8');
			}}>{getLabelForScore('killHit8')}</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killMiss');
			}}>{getLabelForScore('killMiss')}</button
		>
		<button
			class="flexrowButton"
			disabled={disableEditing}
			on:click={() => {
				setScore('drop');
			}}>{getLabelForScore('drop')}</button
		>
		<!-- {#if currentGameEditing.isComplete} -->
		<button disabled={!currentGameEditing.isComplete} class="contrast" on:click={saveGame}
			>New Game</button
		>
		<!-- {/if} -->
	</div>
</section>

<section>
	<h2>Past Games</h2>
	<button on:click={deleteAllGames}>Delete All</button><br /><br />
	<p>
		Rating: {completedStats.rating} <br />
		Games: {completedStats.totalGames} <br />
		Average: {completedStats.average} <br />
		Kills: {completedStats.kills} <br />
		Bulls: {completedStats.bulls} <br />
		Score: {completedStats.totalScore}
	</p>
	<div class="overflow-auto">
		<table class="">
			<thead>
				<tr>
					<th>Game</th>
					<th>Score</th>
					<th>Bulls</th>
					<th>Kills 8</th>
					<th>Kills 6</th>
					<th>Drops</th>
					<th>Rating</th>
					<th>Total Rating</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each gamesCompletedWithRating as { game, rating, totalRating }, gameIndex}
					{#if game.isComplete || (!game.isComplete && currentGameEditing !== game)}
						<tr>
							<td class="tdSmall">{gameIndex + 1}</td>
							<td class="tdSmall">{game.totalScore}</td>
							<td class="tdSmall">{game.stats.bulls}</td>
							<td class="tdSmall">{game.stats.totalEightKills}</td>
							<td class="tdSmall">{game.stats.totalSixKills}</td>
							<td class="tdSmall">{game.stats.drops}</td>
							<td class="tdSmall">{rating}</td>
							<td class="tdSmall"
								>{checkDiff(gamesCompletedWithRating, gameIndex)} &nbsp; &nbsp; {totalRating}</td
							>
							<td
								><button
									disabled={game === currentGameEditing}
									on:click={() => {
										gameEditing = game.gameId;
									}}>Edit</button
								>
							</td>
							<td>
								<button
									disabled={game === currentGameEditing}
									on:click={() => {
										const newGames = ($storedGames = $storedGames.filter(
											(g, i) => i !== gameIndex
										));
										if (newGames.length < 1) {
											newGames.push(new Game());
										}
										$storedGames = newGames;
										gameEditing = '';
									}}>Delete</button
								>
							</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.scorebtn {
		min-width: 4.25rem;
	}
	.stats {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.flexrow {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		row-gap: 0.5rem;
		column-gap: 0.75rem;
		min-height: 7rem;
		width: fit-content;
	}
	.flexrowButton {
		margin-bottom: 1rem;
	}
	/* mobile only */
</style>
