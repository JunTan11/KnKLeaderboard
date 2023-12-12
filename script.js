document.addEventListener('DOMContentLoaded', (event) => {
    const leaderboard = document.querySelector('.leaderboard');

    for (let i = 2; i <= 50; i++) {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';

        const rankSpan = document.createElement('span');
        rankSpan.className = 'rank';
        rankSpan.textContent = i + '.';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name';
        nameSpan.textContent = 'Name' + i;

        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = 'Score' + i;

        entryDiv.appendChild(rankSpan);
        entryDiv.appendChild(nameSpan);
        entryDiv.appendChild(scoreSpan);

        leaderboard.appendChild(entryDiv);
    }
})
