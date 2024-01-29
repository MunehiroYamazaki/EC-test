import { Button } from "@/components/ui/button"
import { CardContent, CardTitle, CardDescription, Card, CardHeader } from "@/components/ui/card"
import Link from 'next/link'

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 w-11/12 mx-auto">
      <header className="mb-10">
        <h1 className="md:text-4xl text-xl font-bold">KATAOMOI商品一覧ページデモ</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>名刺A</CardTitle>
            <CardDescription>400円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/A">
          <img
              alt="Imagen Noticia 1"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/2oCg0XxGLvkqBPDIuOQo4CAp4dTy0FZd6-nI5GLd8RY.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
        </Link>
            <p className="mt-4">名刺Aの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>名刺B</CardTitle>
            <CardDescription>800円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/B">
            <img
              alt="Imagen Noticia 2"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/1670490186744.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            </Link>
            <p className="mt-4">名刺Bの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>名刺C</CardTitle>
            <CardDescription>1,200円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/C">
            <img
              alt="Imagen Noticia 3"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/forloop.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            </Link>
            <p className="mt-4">名刺Cの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>名刺D</CardTitle>
            <CardDescription>1,600円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/D">
            <img
              alt="Imagen Noticia 4"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/2oCg0XxGLvkqBPDIuOQo4CAp4dTy0FZd6-nI5GLd8RY.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            </Link>
            <p className="mt-4">名刺Dの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>名刺E</CardTitle>
            <CardDescription>2,000円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/E">
            <img
              alt="Imagen Noticia 4"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/1670490186744.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            </Link>
            <p className="mt-4">名刺Eの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>名刺F</CardTitle>
            <CardDescription>2,400円</CardDescription>
          </CardHeader>
          <CardContent>
          <Link href ="/F">
            <img
              alt="Imagen Noticia 4"
              className="w-full h-64 object-cover"
              height="200"
              src="./images/forloop.jpg"
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            </Link>
            <p className="mt-4">名刺Fの説明文がここに入ります。</p>
          </CardContent>
        </Card>
        <Link href ="page.js">
        <p className="font-bold text-sm mt-6">トップページに戻る</p>
        </Link>
      </div>
    </main>
  )
}

