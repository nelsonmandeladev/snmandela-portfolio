import Image from "@rasenganjs/image";
import me from "@/assets/aaa-picc.png";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import facebook from "@/assets/facebook.svg";
import x_social from "@/assets/x.svg";
import instagram from "@/assets/instagram.svg";
import { Link } from "rasengan";

export function SidebarInfo() {
  return (
    <div className="border-r-[0.5px] border-body/30 sticky top-0 h-screen overflow-y-auto">
      <div className="h-full w-full bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px] xl:px-10 py-20 space-y-10">
        {/* <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti facilis provident consequuntur earum sequi corrupti unde neque eos possimus, mollitia quas error distinctio. Aperiam vel natus consequuntur harum a perspiciatis!
        </p> */}
        <div className="flex items-center justify-center">
          <div className="size-90 aspect-auto object-cover">
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={me}
              alt="Sonfack Nelson Mandela"
              width={360}
              height={360}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 gap-10">
          <span className="text-primary/40 p-2.5 px-10 rounded-full border-[0.5px] border-primary/40 w-auto">
            @sn_mandela
          </span>
          <div className="w-full flex justify-between gap-2.5">
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={github}
              alt="Github"
              width={32}
              height={32}
            />
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={linkedin}
              alt="Linkedin"
              width={32}
              height={32}
            />
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={x_social}
              alt="X"
              width={32}
              height={32}
            />
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={facebook}
              alt="facebook"
              width={32}
              height={32}
            />
            <Image
              className="w-full h-full object-cover aspect-auto"
              src={instagram}
              alt="Instagram"
              width={32}
              height={32}
            />
          </div>
          <Link
            to={"#"}
            className=" border border-body px-20 py-2.5 rounded-full mt-10"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
