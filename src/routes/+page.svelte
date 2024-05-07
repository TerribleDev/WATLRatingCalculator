<script lang="ts">
	import { Game, type Score } from './interfaces';
	import { storedGames } from './store';
	export const ssr = false;
	let gameEditing = '';
	let scoreEditing = -1;
	$: currentGameEditing =
		(gameEditing && $storedGames.find((g) => g.gameId === gameEditing)) ||
		$storedGames[$storedGames.length - 1];
	$: currentScoreEditing = scoreEditing > -1 ? currentGameEditing.scores[scoreEditing] : null;
	$: gamesComplete = $storedGames.filter((g) => g.isComplete);
	$: disableEditing = currentGameEditing.isComplete && scoreEditing === -1;
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
	<div class="stats"><div>Score {currentGameEditing.totalScore}</div> <div>Throw: {currentGameEditing.scores.length}</div></div>
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
					<button class="outline secondary" on:click={() => (scoreEditing = scoreIndex)}>{getLabelForScore(score)}</button>
				{/if}
			</div>
		{/each}
	</div>
</section>
<section>
	<div>
		<button
		class="flexrowButton "
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
		class="flexrowButton "
		disabled={disableEditing}
		on:click={() => {
			setScore(3);
		}}>3</button
	>
	<button
		class="flexrowButton "
		disabled={disableEditing}
		on:click={() => {
			setScore(4);
		}}>4</button
	>
	<button
		class="flexrowButton "
		disabled={disableEditing}
		on:click={() => {
			setScore(5);
		}}>5</button
	>
	<button
		class="flexrowButton "
		disabled={disableEditing}
		on:click={() => {
			setScore(6);
		}}>6</button
	>
	</div>
	<div>
		<button
			class="flexrowButton "
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killHit6');
			}}>{getLabelForScore('killHit6')}</button
		>
		<button
			class="flexrowButton "
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killHit8');
			}}>{getLabelForScore('killHit8')}</button
		>
		<button
			class="flexrowButton "
			disabled={disableEditing ||
				(!currentGameEditing.KillEnabled &&
					!isKill(currentScoreEditing) &&
					!isDrop(currentScoreEditing))}
			on:click={() => {
				setScore('killMiss');
			}}>{getLabelForScore('killMiss')}</button
		>
		<button
			class="flexrowButton "
			disabled={disableEditing}
			on:click={() => {
				setScore('drop');
			}}>{getLabelForScore('drop')}</button
		>
		<!-- {#if currentGameEditing.isComplete} -->
				<button disabled={!currentGameEditing.isComplete} class="contrast" on:click={saveGame}>Save Game</button>
		<!-- {/if} -->
	</div>
</section>

<section>
	<h2>Past Games</h2>
	<button on:click={deleteAllGames}>Delete All</button><br /><br />
	<p>
		Rating: {calculateRating(gamesComplete)} <br /> Average: {calculateAverage(gamesComplete)} <br /> total kills:
		{calculateKillsHit(gamesComplete)}
	</p>
	<div class="overflow-auto">
		<table class="striped">
			<thead>
				<tr>
					<th>Game</th>
					<th>Score</th>
					<th>Bulls</th>
					<th>Kills 8</th>
					<th>Kills 6</th>
					<th>Drops</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each $storedGames as game, gameIndex}
					<tr>
						<td class="tdSmall">{gameIndex + 1}</td>
						<td class="tdSmall">{game.totalScore}</td>
						<td class="tdSmall">{game.stats.bulls}</td>
						<td class="tdSmall">{game.stats.totalEightKills}</td>
						<td class="tdSmall">{game.stats.totalSixKills}</td>
						<td class="tdSmall">{game.stats.drops}</td>
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
									const newGames = ($storedGames = $storedGames.filter((g, i) => i !== gameIndex));
									if (newGames.length < 1) {
										newGames.push(new Game());
									}
									$storedGames = newGames;
									gameEditing = '';
								}}>Delete</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	.stats {
		display: flex;
		justify-content: space-between;
	
	}
	.center {
		display: flex;
		justify-content: center;
	}
	.flexrow {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		min-height: 7rem;
		flex-wrap: wrap;
	}
	.flexrowButton  {
		margin-bottom: 1rem;
	}
	/* mobile only */
</style>
