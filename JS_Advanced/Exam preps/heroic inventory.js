function heroicInventory(arr) {
    let res = []
    arr.map((x) => {
        let [name, level, items] = x.split(' / ')
        res.push({ name, level: Number(level), items: items ? items.split(', ') : [] })
    })
    console.log(JSON.stringify(res))
}