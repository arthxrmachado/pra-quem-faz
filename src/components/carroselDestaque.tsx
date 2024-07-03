import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";

import Image from "next/image";

/*Carrosel destaque, na teoria, deve receber os 5 cursos mais bem avaliados como argumentos
   Ou seja, esse componente recebe uma lista de CursoDestaque.

   Espera-se que em cada CursoDestaque contenha:
   - ID do curso
   - Imagem (string no formato url para imagem SVG)
   - Nome do curso (String)
   - Descrição breve do curso
*/
export default function CarroselDestaque() {
  const cursosDestaque = [1, 2, 3, 4, 5];

  return (
    <Carousel className="w-full h-full" opts={{ align: "start", loop: true }}>
      <CarouselContent className="-ml-8">
        {cursosDestaque.map((cursoDestaque) => (
          <CarouselItem
            key={cursoDestaque}
            className="md:basis-1/2 lg:basis-1/3 pl-10"
          >
            <div className="p-1">
              <Card className="bg-[rgb(60,60,60)] text-white border border-transparent">
                <CardHeader>
                  <CardTitle>Gerente de Marketing Digital</CardTitle>
                  <CardDescription className="text-white">
                    Categoria do curso
                  </CardDescription>
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
                          Descrição breve do curso elit. Cum eius officia
                          dolorem quam? Perferendis distinctio ad culpa
                          perspiciatis laudantium vero natus optio voluptatem.
                          Magnam excepturi neque dolor aperiam, debitis
                          deleniti.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-red-600 hover:bg-white hover:text-black hover:font-bold">
                    Matricule-se!
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
        ;
      </CarouselContent>
      <CarouselPrevious className="bg-[rgb(60,60,60)] text-white" />
      <CarouselNext className="bg-[rgb(60,60,60)] text-white" />
    </Carousel>
  );
}
