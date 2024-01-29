import { Button } from "@/components/ui/button"
import { CardContent, CardTitle, CardDescription, Card, CardHeader } from "@/components/ui/card"
import Link from 'next/link'

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-28">
      <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
        <img
          alt="Smartwatch Image"
          className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
          height={600}
          src="./images/1670490186744.jpg"
          width={600}
        />
      </div>
      <div className="grid gap-4 md:gap-10 items-start order-1">
        <h1 className="font-bold text-3xl lg:text-4xl">KATAOMOI名刺E</h1>
        <div className="text-4xl font-bold">2,000円</div>
        <p className="text-lg text-gray-500 dark:text-gray-400">ここにKATAOMOI名刺Eの特徴が入ります。ここにKATAOMOI名刺Eの特徴が入ります。ここにKATAOMOI名刺Eの特徴が入ります。
        </p>
        <h2 className="font-bold text-2xl mt-6">特徴</h2>
        <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-400">
          <li>商品の特徴を入れます</li>
          <li>商品の特徴を入れます</li>
          <li>商品の特徴を入れます</li>
        </ul>
        <Link href ="https://nftticket-alpha-v1.myshopify.com/products/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%81%E3%82%B1%E3%83%83%E3%83%88%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88">
        <Button size="lg">購入ページへ</Button>
        </Link>
        <Link href ="/item">
        <p className="font-bold text-sm mt-6">商品一覧ページに戻る</p>
        </Link>
        <div className="grid gap-4" />
      </div>
    </div>
  )
}

