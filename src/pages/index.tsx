import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import CarroselDestaque from "@/components/carroselDestaque";

export default function Home() {
  const cursosPresenciais = [1, 2, 3, 4];

  return (
    <>
      <div className="bg-black text-left pl-[5%] pr-[3%] mt-[90px] mb-8">
        <p className="text-white font-bold text-[270%] pb-5">
          Faça o futuro acontecer!
        </p>
        <p className="text-gray-200 text-[140%]">
          A transformação que sua carreira precisa na palma das suas mãos!
        </p>
      </div>

      <div className="w-[75%] mx-auto mt-6 mb-8">
        <CarroselDestaque></CarroselDestaque>
      </div>

      <section className="w-full h-full flex flex-col flex-wrap mb-[80px]  px-5 sm:px-0 sm:py-0">
        <p className="text-white text-[24px] text-center mt-[50px] pb-14 font-bold">
          Conheça nossos cursos EAD
        </p>

        <div className="grid grid-cols-2 gap-4 mx-[18px] sm:grid-cols-4">
          {cursosPresenciais.map((cursoPresencial) => (
            <Card
              key={cursoPresencial}
              className="bg-[rgb(60,60,60)] border border-transparent"
            >
              <div className="flex items-center m-[5px] h-[150px] rounded-md border p-4">
                <p>Imagem minicurso</p>
              </div>
              <CardHeader>
                <CardTitle className="m-[-15px] text-[20px]">
                  Gastronomia Francesa do seculo XXI
                </CardTitle>
              </CardHeader>

              <CardFooter className="mb-[-10px] mt-[10px]">
                <Button className="w-full bg-red-600 hover:bg-white hover:text-black hover:font-bold">
                  Saiba Mais
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
