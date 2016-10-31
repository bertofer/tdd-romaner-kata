const lookup = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
}

function getClosest(num) {
    let aux = num
    while (!lookup[aux]) --aux
    return aux
}

export default function romaner (num: number) {
    if (lookup[num]) return lookup[num]
    let closest = getClosest(num)
    return lookup[closest] + romaner(num - closest)
}