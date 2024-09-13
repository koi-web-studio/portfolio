import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <span className="text-base text-start">
                            Cuanto tiempo tarda en estar lista mi página web?
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        Tranqui! En general, entre 4 a 6 semanas la tenés online
                        y funcionando, pero todo depende de lo que quieras. Si
                        es más simple, puede estar antes; si es más completita,
                        capaz nos lleva un poco más.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        <span className="text-base text-start">
                            Puedo hacer cambios una vez que la web esté
                            terminada?
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        ¡Obvio! La web es tuya. Podés hacer los cambios que
                        necesites. Si no te animás solo, nosotros te damos una
                        mano para que quede joya.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        <span className="text-base text-start">
                            Necesito tener algo preparado antes de empezar con
                            el diseño?
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        Lo ideal sería que tengas una idea clara de qué querés
                        comunicar, fotos copadas y un logo si ya lo tenés. Pero
                        no te preocupes, si no tenés todo listo, nosotros te
                        ayudamos a definirlo.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        <span className="text-base text-start">
                            Mi página web va a ser responsiva?
                        </span>
                    </AccordionTrigger>
                    <AccordionContent>
                        ¡100%! Todas nuestras webs se adaptan a cualquier
                        pantalla, desde el celu hasta la compu, así que olvidate
                        de los sustos cuando navegues desde cualquier
                        dispositivo.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default FAQ;
