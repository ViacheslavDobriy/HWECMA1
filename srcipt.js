// Task 1

const arr = [1, 5, 7, 9];

console.log(Math.min(...arr));

// Task 2

function createCounter() {
    let counter = 0;
    const changer = {
        increment: () => {
            return ++counter;
        },
        decrement: () => {
            return --counter;
        }
    };
    return changer;
}

const counterGoodNews = createCounter();
console.log(`Good news is coming: ${counterGoodNews.increment()}`);
console.log(`Good news is leaving us: ${counterGoodNews.decrement()}`);

// Task 3

let flag = false;
let result;

function findElementByClass(root, string) {
    const childrenElements = root.childNodes;
    if (childrenElements.length != 0 && flag == false) {
        childrenElements.forEach(element => {
            if (element.className == `${string}`) {
                flag = true;
                result = element;
            } else {
                findElementByClass(element, string);
            }
        });
    }
    return result;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);