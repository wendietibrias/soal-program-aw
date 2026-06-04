
const transactions = [
    { id: 1, buyer: 'Ayu', category: 'Buku', amount: 85000 },
    { id: 2, buyer: 'Budi', category: 'Elektronik', amount: 450000 },
    { id: 3, buyer: 'Ayu', category: 'Buku', amount: 60000 },
    { id: 4, buyer: 'Citra', category: 'Elektronik', amount: 320000 },
    { id: 5, buyer: 'Dani', category: 'Buku', amount: 75000 },
    { id: 6, buyer: 'Budi', category: 'Fashion', amount: 130000 },
];

function totalRevenue(transactions){
    return transactions.reduce((a,b) => a + b.amount,0); // should return number
}

function revenueByCategory(transactions){
    const grouppedObjectByRevenue = []; // should return    
    for(const item of transactions){
        const findIndexByName
        grouppedObjectByRevenue.push()
    }
}

function repeatBuyers(transactions){
    return [] 
}

function topCategory(transactions){
    return {} 
}