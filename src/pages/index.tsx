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
        <p className=" text-white font-bold text-[270%] pb-5">
          Faça o futuro acontecer!
        </p>
        <p className="text-gray-200 text-[140%]">
          A transformação que sua carreira precisa na palma das suas mãos!
        </p>
      </div>

      <div className="w-[75%] mx-auto mt-6 mb-8">
        <CarroselDestaque></CarroselDestaque>
      </div>

      <div className="bg-gray-600 mt-6 mb-8 flex flex-wrap justify-center">
        {cursosPresenciais.map((cursoPresencial) => (
          <Card key={cursoPresencial} className="w-1/2 lg:w-1/4 p-5">
            <CardHeader>
              <CardTitle>Gerente de Marketing Digital</CardTitle>
              <CardDescription>Categoria do curso</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <p>div Imagem</p>
              </div>
              <div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[red]"></span>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Descrição breve do curso elit. Cum eius officia dolorem
                      quam? Perferendis distinctio ad culpa perspiciatis
                      laudantium vero natus optio voluptatem. Magnam excepturi
                      neque dolor aperiam, debitis deleniti.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-red-600">Matricule-se!</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
