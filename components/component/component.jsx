/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NjT8Bm2YvMK
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from 'next/link'

export function Component() {
  return (
    (<div className="bg-[#00a497] text-white">
      <section className="max-w-5xl mx-auto p-8 text-center">
        <h1 className=" font-bold mb-4 text-xl md:text-4xl">KATAOMOI説明ページデモ</h1>
        <p className="mb-8">第一印象をハックする</p>
        <img src="./images/goto7540_Craft_a_hyper-realistic_image_that_perfectly_encapsula_461144e0-a90e-425b-8212-8fc407c63026.jpg" className="App-logo" alt="logo" />
        <h2 className="text-xl md:text-3xl font-bold mb-4 mt-24">KATAOMOI名刺を使りませんか？</h2>

        <Link href ="/item">
        <Button>商品一覧ページへ</Button>
        </Link>
        <Link href ="/item" className="hidden">Contactページへ移動</Link>
      
        
        <div className="brock md:grid grid-cols-3 gap-8 mb-16 mt-20 items-center">
          <div className="mx-auto">
            <img
              alt="ASP+7"
              className="mb-4 mx-auto"
              height="200"
              src="./images/2oCg0XxGLvkqBPDIuOQo4CAp4dTy0FZd6-nI5GLd8RY.jpg"
              style={{
                aspectRatio: "150/200",
                objectFit: "cover",
              }}
              width="150" />
            <p className="mb-2">名刺A</p>
            <Link href ="/A">
            <Button variant="default">商品詳細ページへ</Button>
            </Link>
          </div>
          <div className="mx-auto mt-16 md:mt-0">
            <img
              alt="ASP+30"
              className="mb-4 mx-auto"
              height="200"
              src="./images/1670490186744.jpg"
              style={{
                aspectRatio: "150/200",
                objectFit: "cover",
              }}
              width="150" />
            <p className="mb-2">名刺B</p>
            <Link href ="/B">
            <Button variant="default">商品詳細ページへ</Button>
            </Link>
          </div>
          <div className="mx-auto mt-16 md:mt-0">
            <img
              alt="B&W cream"
              className="mb-4 mx-auto"
              height="200"
              src="./images/forloop.jpg"
              style={{
                aspectRatio: "150/200",
                objectFit: "cover",
              }}
              width="150" />
            <p className="mb-2">名刺C</p>
            <Link href ="/C">
            <Button variant="default">商品詳細ページへ</Button>
            </Link>
          </div>
        </div>
        
        <div className="text-center text-xs mb-2">
          <p>© 2024, KATAOMOI Deom Powered by Shopify</p>
          <Link className="hidden" href ="https://www.shopify.com/jp/free-trial/3r-newh?term=shopify&adid=566070247150&campaignid=15433369599&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&gclid=CjwKCAiAk9itBhASEiwA1my_6yKm8IdfL_FrlRbsQ0y2YnGikH1qg1YMvcsfb9e81ucnskhiLUHCoxoCTaMQAvD_BwE&cmadid=516585705;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494758;cmcreativeid=163722649;cmsiteid=5500011">Contactページへ移動</Link>
        </div>
      </section>
    </div>)
  );
}


function PlayCircleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12" />
    </svg>)
  );
}
