// – Є масив coursesArray котрий лежить в arrays.js
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql','mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {
    const Wrap=document.createElement('div');
    Wrap.classList.add('wrap');

    const Title=document.createElement('div');
    Title.classList.add('top');
    Title.innerHTML=item.title;

    const MonthDuration=document.createElement('div');
    MonthDuration.classList.add('left');
    MonthDuration.innerHTML=item.monthDuration;

    const HourDuration=document.createElement('div');
    HourDuration.classList.add('right');
    HourDuration.innerHTML=item.hourDuration;

    const Line=document.createElement('div');
    Line.classList.add('line');
    Line.append(MonthDuration, HourDuration)

    const Modules=document.createElement('div');
    Modules.classList.add('end');
    const menu=document.createElement('ul')
    for (let i=0; i<item.modules.length; i++) {
            const li = document.createElement('li');
            li.innerText = item.modules[i];
            menu.appendChild(li);
        }
    Modules.appendChild(menu)
    Wrap.append(Title, Line, Modules);

    document.body.appendChild(Wrap);
}