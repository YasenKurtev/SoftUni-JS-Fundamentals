function vacation(group, type, day) {

    let total = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                total = group * 8.45;
            } else if (day === 'Saturday') {
                total = group * 9.80;
            } else if (day === 'Sunday') {
                total = group * 10.46;
            }

            if (group >= 30) {
                total = total * 0.85;
            }
            break;
        case 'Business':
            if (group >= 100) {
                group = group - 10;
            }

            if (day === 'Friday') {
                total = group * 10.90;
            } else if (day === 'Saturday') {
                total = group * 15.60;
            } else if (day === 'Sunday') {
                total = group * 16;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                total = group * 15;
            } else if (day === 'Saturday') {
                total = group * 20;
            } else if (day === 'Sunday') {
                total = group * 22.50;
            }

            if (group >= 10 && group <= 20) {
                total = total * 0.95;
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday"
    )
vacation(40,
    "Regular",
    "Saturday"
    )