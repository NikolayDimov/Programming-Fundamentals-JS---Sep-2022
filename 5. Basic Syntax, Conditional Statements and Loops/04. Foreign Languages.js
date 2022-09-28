function solve(country) {
    switch (country) {
        case 'England':
        case 'USA': lang = 'English'; break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico': lang = 'Spanish'; break;
        default: lang = 'unknown'; break;
    }
    console.log(lang);
}
solve('USA');
solve('Germany');
solve('Spain');
solve('England');
solve(5);