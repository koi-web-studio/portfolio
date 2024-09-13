import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

function Vcl() {
    return (
        <div className="absolute top-0">
            <HeroVideoDialog
                className="block"
                animationStyle="fade"
                videoSrc="https://www.youtube.com/embed/FTByB-GRnTM?si=EHg50Rs3FVJUNcY4"
                thumbnailSrc="/koi/sticker1.png"
                thumbnailAlt="Hero Video"
            />
        </div>
    );
}

export default Vcl;
