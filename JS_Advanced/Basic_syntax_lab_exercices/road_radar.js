function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;
    let diff = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`)
            } else {
                diff = speed - motorwayLimit;
                if (diff <= 20) {
                    status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`)
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`)
                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`)
                }
            }
            break;
        case 'interstate':
            if (speed <= interstateLimit) {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`)
            } else {
                diff = speed - interstateLimit;
                if (diff <= 20) {
                    status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`)
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`)
                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${status}`)
                }
            }
            break;
        case 'city':
            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
            } else {
                diff = speed - cityLimit;
                if (diff <= 20) {
                    status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
                }
            }
            break;
        case 'residential':
            if (speed <= residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`)
            } else {
                diff = speed - residentialLimit;
                if (diff <= 20) {
                    status = 'speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`)
                } else if (diff > 20 && diff <= 40) {
                    status = 'excessive speeding'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`)
                } else {
                    status = 'reckless driving'
                    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${status}`)
                }
            }
            break;
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
