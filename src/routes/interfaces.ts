export type Score = 8 | 6 | 5 | 4 | 3 | 2 | 1 | 0 | "drop" | "killHit8" | "killHit6" | "killMiss";
export interface GameStats { totalSixKills: number; totalEightKills: number; killAttempts: number, drops: number, bulls: number}
export class Game {
    public scores: Score[] = [];
    public stats: GameStats = this.GenerateStats();
    public addScore(score: Score) {
        this.scores.push(score);
        this.scores = [...this.scores]
        this.stats = this.GenerateStats();
    }
    public removeScore(scoreNumber: number) {
        this.scores.splice(scoreNumber, 1);
        this.scores = [...this.scores]
        this.stats = this.GenerateStats();
    }
    public replaceScore(scoreNumber: number, score: Score) {
        this.scores[scoreNumber] = score;
        this.scores = [...this.scores]
        this.stats = this.GenerateStats();
    }
    public get isComplete() {
        return this.scores.length === 10;
    }
    public convertScoreToNumber(score: Score): number {
		if (score === 'killHit6') {
			return 6;
		}
		if (score === 'killHit8') {
			return 8;
		}
		if (score === 'killMiss') {
			return 0;
		}
        if (score === 'drop') {
            return 0;
        }
		return score;
	}
    public get totalScore() : number {
        return this.scores.reduce((acc: number, current) => {
            return acc + this.convertScoreToNumber(current);
        }, 0);
    }
    public get KillEnabled() {
        const stats = this.GenerateStats();
        if(stats.killAttempts < 2) {
            return true;
        }
        if(stats.killAttempts === 2 && stats.drops > 0) {
            return true;
        }
        return false;
    }
    public GenerateStats(): { totalSixKills: number; totalEightKills: number; killAttempts: number, drops: number, bulls: number} {
        const data = { totalSixKills: 0, totalEightKills: 0, killAttempts: 0, drops: 0, bulls: 0}
        this.scores.forEach(score => {
            if(score === 6) {
                data.bulls += 1
            }
            if(score === "drop") {
                data.drops += 1;
            }
            if( score === "killHit6" || score === "killHit8" || score === "killMiss") {
                data.killAttempts += 1;
            }
            if(score === "killHit6") {
                data.totalSixKills += 1;
            }
            if(score === "killHit8") {
                data.totalEightKills += 1;
            }
            
        })
        return data;
    }
}