// Task 1 
function playDiceGame(playersCount, throwsCount) {
    const players = [];
    // генерируем броски всех игроков и высчитываем общую сумму результатов этих бросков
    for (let i = 0; i < playersCount; i++) {
        const throws = [];
        let totalResult = 0;

        for (let j = 0; j < throwsCount; j++) {
            const result = Math.floor(Math.random() * 6) + 1;

            throws.push(result);
            totalResult += result;
        }

        players.push({
            player: i + 1,
            throws,
            totalResult: totalResult
        });

        console.log(
            `Player ${i + 1} throws: ${throws.join(", ")}. Total Result: ${totalResult}`
        );


    }
    // ищем максимальную сумму
    const maxTotalResult = Math.max(
        ...players.map(player => player.totalResult)
    );
    // ищем победителей и выводим результаты игры
    const winners = players.filter(
        player => player.totalResult === maxTotalResult
    );
    if (winners.length === 1) {
        console.log(
            `Winner: Player ${winners[0].player} with ${winners[0].totalResult} points`
        );
    }
    else {
        const winnersList = winners.map(
            player => 'Player ' + player.player
        );
        console.log('Draw between players: ', winnersList.join(", "))
    }
}
playDiceGame(3, 4);



// Task 2
function splitNumber(number, partsCount) {
    const result = [];
    let remaining = number;

    for (let i = 0; i < partsCount - 1; i++) {
        const partsLeft = partsCount - i;
        const maxPart = remaining - (partsLeft - 1);
        const randomPart = Math.floor(Math.random() * maxPart) + 1;
        result.push(randomPart);
        remaining -= randomPart;
    }
    result.push(remaining);

    return result;
}
console.log(splitNumber(20, 10));


// Task 3
function countFriday13(startDate, endDate) {

    // Преобразовать входные значения в объекты `Date`
    const start = new Date(startDate);
    const end = new Date(endDate);


    // Проверить все даты в заданном диапазоне - найти все пятницы 13
    const friday13Dates = [];

    for (let currentDate = new Date(start); currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
        if (currentDate.getDate() === 13 && currentDate.getDay() === 5) {
            friday13Dates.push(
                `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`
            );
        }
    }

    // вывести список дат и их количество 
    console.log('Friday 13th dates:',)
    friday13Dates.forEach(date => { console.log(date); });
    console.log('Total Friday 13th count:', friday13Dates.length)
}

countFriday13("2020-01-01", "2026-12-31");