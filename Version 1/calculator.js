const treeData = [
    {"tree_type": "Alder", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Almond", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Apple", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Apricot", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Ash", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Aspen", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Bamboo", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Banyan", "firewood": "10m-15m", "industrial": "15m-20m"},
    {"tree_type": "Beech", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Birch", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Black Cherry", "fruit": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Black Walnut", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Boxwood", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Brazilian Pepper", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "California Redwood", "firewood": "10m-15m", "industrial": "15m-20m"},
    {"tree_type": "Cedar", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Cherry", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Chestnut", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Citrus", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Crabapple", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Dawn Redwood", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Dogwood", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Douglas Fir", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Eucalyptus", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Fig", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Ginkgo", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Golden Chain", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Hawthorn", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Holly", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Koa", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Kumquat", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Magnolia", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Maple", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Mango", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Mulberry", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Nannyberry", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Norway Maple", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Olive", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Papaya", "fruit": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Paulownia", "firewood": "2m-4m", "industrial": "4m-5m"},
    {"tree_type": "Peach", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Pear", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Persimmon", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Pine", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Plum", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Poplar", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Red Maple", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Red Oak", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Redwood", "firewood": "10m-15m", "industrial": "15m-20m"},
    {"tree_type": "River Birch", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Rosewood", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Sassafras", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Sequoia", "firewood": "10m-15m", "industrial": "15m-20m"},
    {"tree_type": "Sweet Chestnut", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Sycamore", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Tamarack", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Tawari", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Teak", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Thornless Honeylocust", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Tilia", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Tulip Tree", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Umbrella Tree", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Valley Oak", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Walnut", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Western Red Cedar", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Willow Oak", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Yellow Birch", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Yellow Buckeye", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zelkova", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Ziziphus", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zebrawood", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zanthoxylum", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zinnia", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Ziziphus jujuba", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zamia", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Zebra Plant", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Zaunkoenig", "firewood": "3m-6m", "industrial": "6m-9m"},
    {"tree_type": "Zinfandel", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zizyphus spina-christi", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zelkova serrata", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zanthoxylum americanum", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zanthoxylum clava-herculis", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zeyheria tuberculosa", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zingiber zerumbet", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zinnia elegans", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zinnia haageana", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Ziziphus mauritiana", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Ziziphus nummularia", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zostera marina", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zoysia matrella", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zucchini", "fruit": "6m-9m", "industrial": "6m-9m"},
    {"tree_type": "Zymolysis", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zyzyphus", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zyzygos", "firewood": "6m-9m", "industrial": "9m-15m"},
    {"tree_type": "Zyzyphus jujuba", "fruit": "6m-9m", "industrial": "6m-9m"},
    
];

 // Function to populate the select element with tree types
 function populateTreeTypes() {
    const selectElement = document.getElementById('treeType');
    
    treeData.forEach(tree => {
        const option = document.createElement('option');
        option.value = tree.tree_type;
        option.text = tree.tree_type;
        selectElement.appendChild(option);
    });
}

// Call the function to populate the dropdown when the page loads
window.onload = populateTreeTypes;

function updateSuggestedValues() {
    const treeType = document.getElementById('treeType').value;
    const suggestedValuesDiv = document.getElementById('suggestedValues');
    suggestedValuesDiv.innerHTML = '';

    const tree = treeData.find(tree => tree.tree_type === treeType);
    if (tree) {
        const firewood = tree.firewood || 'N/A';
        const fruit = tree.fruit || 'N/A';
        const industrial = tree.industrial || 'N/A';

        suggestedValuesDiv.innerHTML = `
            <p><strong>Suggested spacing between plants:</strong></p>
            <p>=> Firewood production: ${firewood}</p>
            <p>=> Fruit production: ${fruit}</p>
            <p>=> Industrial wood production: ${industrial}</p>
        `;
    }
}

function updateLandSize() {
    const landWidth = parseFloat(document.getElementById('landWidth').value);
    const landHeight = parseFloat(document.getElementById('landHeight').value);
    const unit = document.getElementById('unit').value;
    const landSizeDiv = document.getElementById('landSize');
    const areaSquareMetersField = document.getElementById('areaSquareMeters');

    let area; // Declare area outside of the condition

    // Check if both landWidth and landHeight are valid numbers
    if (!isNaN(landWidth) && !isNaN(landHeight)) {
        area = landWidth * landHeight; // Calculate area

        // Update the area in square meters field
        areaSquareMetersField.value = area.toFixed(2); // Show area in m²

        let landSizeText = `Land size: ${landWidth} x ${landHeight} ${unit} = ${area.toFixed(2)} m²`;
        
        // If the unit is meters, also show hectares if applicable
        if (unit === 'meters' && area >= 10000) {
            landSizeText += ` = ${(area / 10000).toFixed(2)} hectares`;
        }

        // Update the display text
        landSizeDiv.innerHTML = landSizeText;
    } else {
        // If input is invalid, clear the output
        landSizeDiv.innerHTML = '';
    }
}

// Event listener for areaSquareMetersField
document.getElementById('areaSquareMeters').addEventListener('input', function() {
    const areaSquareMeters = parseFloat(this.value); // Get current area input
    if (!isNaN(areaSquareMeters) && areaSquareMeters > 0) {
        // Calculate dimensions from area
        const newDimension = Math.sqrt(areaSquareMeters);
        document.getElementById('landWidth').value = newDimension.toFixed(2);
        document.getElementById('landHeight').value = newDimension.toFixed(2);
        
        // Call updateLandSize to recalculate area and display
        updateLandSize();
    } else {
        // If area input is invalid, clear fields
        document.getElementById('landSize').innerHTML = '';
    }
});

// Event listeners for landWidth and landHeight
document.getElementById('landWidth').addEventListener('input', function() {
    updateLandSize();
    // Additionally update areaSquareMeters if inputs are valid
    if (!isNaN(parseFloat(this.value)) && !isNaN(parseFloat(document.getElementById('landHeight').value))) {
        const landHeight = parseFloat(document.getElementById('landHeight').value);
        const area = parseFloat(this.value) * landHeight;
        document.getElementById('areaSquareMeters').value = area.toFixed(2);
    }
});

document.getElementById('landHeight').addEventListener('input', function() {
    updateLandSize();
    // Additionally update areaSquareMeters if inputs are valid
    if (!isNaN(parseFloat(this.value)) && !isNaN(parseFloat(document.getElementById('landWidth').value))) {
        const landWidth = parseFloat(document.getElementById('landWidth').value);
        const area = parseFloat(this.value) * landWidth;
        document.getElementById('areaSquareMeters').value = area.toFixed(2);
    }
});

// Event listener for the "Use this value in the plant calculator" button
document.getElementById('copyArea').addEventListener('click', function() {
    const totalArea = 5000; // Example value; replace with actual calculation
    const areaSquareMetersField = document.getElementById('areaSquareMeters');

    // Update the areaSquareMetersField with the totalArea value
    areaSquareMetersField.value = totalArea.toFixed(2);

    // Trigger the updateLandSize function to update other fields
    updateLandSize();
});







function calculateTrees() {
const distanceX = parseFloat(document.getElementById('distanceX').value);
const distanceY = parseFloat(document.getElementById('distanceY').value);
const landWidth = parseFloat(document.getElementById('landWidth').value);
const landHeight = parseFloat(document.getElementById('landHeight').value);
const plantingStyle = document.querySelector('input[name="plantingStyle"]:checked').value;
const denominator = (Math.pow(distanceX, 2) * 0.866);


if (!distanceX || !distanceY || !landWidth || !landHeight) {
document.getElementById('result').innerText = 'Please fill all requested fields!';
return;
}

let totalTrees = 0;
const numTreesX = Math.floor(landWidth / distanceX) + 1;
const numTreesY = Math.floor(landHeight / distanceY) + 1;
const distance = distanceX * 2;
const area = landWidth * landHeight;
    

switch (plantingStyle) {
    case 'Square':
        // Check if all values are the same
    if (distanceX === distanceY && distanceX === landWidth && distanceX === landHeight) {
        document.getElementById('result').innerText = 'The way you entered the values, if you plant one tree in each corner, that gives you 4 seedlings.';
        return;
    }
    
        if (distanceX !== distanceY) {
            document.getElementById('result').innerText = 'In the square system, the spacing between seedlings must be equal (the values X and Y (plant and row spacing) must be the same).';
            return;
        }

        if (distanceX > landWidth && distanceY > landHeight) {
            document.getElementById('result').innerText = 'You cannot have the spacing between seedlings and rows greater than the length of the plot.';
            return;
        }

        totalTrees = Math.floor(landWidth / distanceX) * Math.floor(landHeight / distanceY);
        break;

    case 'Rectangular':
        if (distanceX === distanceY) {
            document.getElementById('result').innerText = 'In the rectangular system, the spacing between seedlings must differ (the values X and Y (plant and row spacing) must be different).';
            return;
        }
        if (distanceX > landWidth && distanceY > landHeight) {
            document.getElementById('result').innerText = 'You cannot have the spacing between seedlings and rows greater than the length of the plot.';
            return;
        }
        totalTrees = Math.floor(landWidth / distanceX) * Math.floor(landHeight / distanceY);
        break;


case 'Hexagonal':
        if (distanceX !== distanceY) {
        document.getElementById('result').innerText = 'In the triangular (hexagonal) system, the spacing between seedlings must be equal (the values X and Y (plant and row spacing) must be the same).';
        return;
        }
        // Check if all values are the same
    if (distanceX === distanceY && distanceX === landWidth && distanceX === landHeight) {
        document.getElementById('result').innerText = 'Theoretically, 4 seedlings can be planted on this area, but only under the assumption that the area is in the shape of a diamond (rhombus). If the land is square-shaped, 3 seedlings can be planted using the triangular system.';
        return;
    }
    if (distanceX > landWidth && distanceY > landHeight) {
        document.getElementById('result').innerText = 'You cannot have the spacing between seedlings and rows greater than the length of the plot.';
        return;
    }
        
        // Calculate row spacing based on plant spacing
    const rowSpacing = distanceX * 0.866; // distanceX and distanceY are equal

    // Calculate the total number of rows
    const totalRows = Math.floor((landWidth - distanceX) / rowSpacing) + 1;

    // Calculate the number of plants in odd and even rows
    const plantsOddRow = Math.floor(landHeight / distanceX);
    const plantsEvenRow = Math.floor((landHeight - (distanceX * 0.5)) / distanceX);

    // Calculate the number of even and odd rows
    const evenRows = Math.floor(totalRows / 2);
    const oddRows = totalRows - evenRows;

    // Calculate the total number of plants
    totalTrees = (plantsOddRow * oddRows) + (plantsEvenRow * evenRows);

        
    break;

default:
    document.getElementById('result').innerText = 'Invalid planting style selected.';
    return;
}

document.getElementById('result').innerText = `Optimal number of trees that can be planted on this land: ${totalTrees}`;
checkSpecialComment();
}


function checkSpecialComment() {
const distanceX = parseFloat(document.getElementById('distanceX').value);
const distanceY = parseFloat(document.getElementById('distanceY').value);
const landWidth = parseFloat(document.getElementById('landWidth').value);
const landHeight = parseFloat(document.getElementById('landHeight').value);
const plantingStyle = document.querySelector('input[name="plantingStyle"]:checked').value;


const specialCommentDiv = document.getElementById('specialcomment');
specialCommentDiv.innerHTML = ''; // Clear previous comments

if (plantingStyle === 'Square') {
specialCommentDiv.innerHTML = '<b>The square planting system </b> is an effective method for growing various tree species due to its efficient use of space and resources. By arranging trees in a grid pattern, this approach ensures even spacing, allowing each tree ample access to light, water, and nutrients. This uniformity fosters healthy growth and maximizes overall yield. For instance, a typical spacing of 3 meters between trees and 3 meters between rows optimizes the growth potential of each tree while simplifying maintenance.';
}

if (plantingStyle === 'Rectangular') {
specialCommentDiv.innerHTML = '<b>The rectangular planting system </b>is an effective method for cultivating various tree species due to its efficient use of space and resources. By arranging trees in a structured layout, this approach ensures consistent spacing, allowing each tree to receive adequate light, water, and nutrients. This uniformity promotes healthy growth and maximizes overall yield. For instance, a typical spacing might be 2 meters between trees and 3 meters between rows, optimizing the growth potential of each tree while facilitating easier maintenance.';
}

if (plantingStyle === 'Hexagonal') {
specialCommentDiv.innerHTML = '<b>The hexagonal (triangular) planting method </b>allows for optimal space utilization, minimizing gaps between trees. This increases the number of trees per unit area, enhancing yield and efficiency. Additionally, this approach facilitates better access to each tree, making maintenance and harvesting easier. Furthermore, the balance of light and nutrients is improved due to reduced shading among the trees.';
}
}



window.onload = function() {
    populateTreeTypes();
}