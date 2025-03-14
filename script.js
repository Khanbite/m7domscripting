const data = [
    { Car: 'Chevrolet', Top: '120mph', Price: '$10,000'},
    { Car: 'Pontiac', Top: '140mph', Price: '$20,000'}
];

function generateTable() {
    const table = document.createElement('table');
            table.setAttribute("style", "background-color: green");
            table.setAttribute('border', '1');
            table.style.borderColor = "yellow";
            table.style.fontWeight = "700";

            const headerRow = document.createElement('tr');
            Object.keys(data[0]).forEach(key => {
                const th = document.createElement('th');
                th.appendChild(document.createTextNode(key));
                headerRow.appendChild(th);
                table.appendChild(headerRow);
            });

            data.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const td = document.createElement('td');
                    td.appendChild(document.createTextNode(value));
                    row.appendChild(td);
                });
                table.appendChild(row);
            });

            

            document.body.appendChild(table);
        }

generateTable();