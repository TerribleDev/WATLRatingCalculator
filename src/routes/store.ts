
import { writable } from "svelte/store";
import { Game, type IStoredGame } from "./interfaces";
import { browser } from "$app/environment";
const DATASTORAGEKEY = "WATLCALC";
const gamesFromLocalStorage = browser ? localStorage.getItem(DATASTORAGEKEY) : null;
const parsedGamesFromLocalStorage: IStoredGame[] | undefined | null = gamesFromLocalStorage ? JSON.parse(gamesFromLocalStorage) : null;
let gamesParsed: Game[] = [];
if(!parsedGamesFromLocalStorage || parsedGamesFromLocalStorage?.length === 0) {
    gamesParsed = [new Game()];
}
if(parsedGamesFromLocalStorage && Array.isArray(parsedGamesFromLocalStorage) && parsedGamesFromLocalStorage.length > 0) {
    gamesParsed = parsedGamesFromLocalStorage.map(i => deserializeGames(i));
}

export const storedGames = writable<Game[]>(gamesParsed);
storedGames.subscribe(value => {
    browser && localStorage.setItem(DATASTORAGEKEY, JSON.stringify(value));
});

function deserializeGames(loadedDate: IStoredGame | Game): Game {
    if(loadedDate instanceof Game) {
        return loadedDate;
    }
    const game = new Game();
    game.scores = loadedDate.scores;
    game.stats = loadedDate.stats;
    game.gameId = loadedDate.gameId;
    return game;
}