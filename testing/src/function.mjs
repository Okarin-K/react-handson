export function timesTwo(value) {
    return value * 2;
}

export function order(memuItems) {
    const total = memuItems.reduce((previous, current) => previous + current.price, 0);

    return {
        orderItems: [...memuItems],
        total: total
    }
}