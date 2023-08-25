function permute(array) {
    if (array.length === 0) {
        return [[]];
    }

    const permutations = [];
    for (let i = 0; i < array.length; i++) {
        const remainingArray = array.slice(0, i).concat(array.slice(i + 1));
        const permutedArray = permute(remainingArray);
        for (const permuted of permutedArray) {
            permutations.push([array[i], ...permuted]);
        }
    }

    return permutations;
}

function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

document.addEventListener('DOMContentLoaded', function () {
    let runBtn = document.getElementById('runBtn');
    let itemsBox = document.getElementById('items');
    let results = document.getElementById('results');

    let process = () => {
        let values = itemsBox.value;
        let cleanValues = [];
        values.split(',').forEach(element => {
            cleanValues.push(element.trim());
        });

        let allPermutations = permute(cleanValues);
        allPermutations = randomizeArray(allPermutations);

        let ol = document.createElement("ol");
        allPermutations.forEach(element => {
            let li = document.createElement("li");
            li.textContent = element.join(', ');
            ol.appendChild(li);
        })
        results.innerHTML = '';
        results.appendChild(ol);
    };

    runBtn.addEventListener("click", process);
}, false);