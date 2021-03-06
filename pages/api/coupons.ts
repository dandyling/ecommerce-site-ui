// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface Coupon {
  name: string
  code: string
  discount: number
}

const coupons: Coupon[] = [
  {
    name: "Monday Happy",
    code: "#MONHPY",
    discount: 0.2
  },
  {
    name: "Payday SURPRISE",
    code: "#SRPSPYDY",
    discount: 0.2
  },
  {
    name: "First Order",
    code: "#HPYFRST",
    discount: 0.2
  },
  {
    name: "Vegetarian Food",
    code: "#VEGANLOVE",
    discount: 0.2
  },
]

export default (req, res) => {
  res.status(200).json(coupons)
}
