interface Plan {
    title: string,
    price: string,
    service: string[],
    hint: string
}

type Plans = Array<Plan>

export {Plan, Plans}
