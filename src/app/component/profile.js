import Image from "next/image";
import "./style.css";
import imgprofile from "../image/profile.jpg";
import camera from "../image/photo-camera.png";
import jps from "../image/jps.png";
import euro from "../image/coin.png";
import briefcase from "../image/briefcase.png";

export default function profile() {
  return (
    <section className="mx-2 mt-12">
      <div>
        <h1 className="text-3xl font-bold text-[#bb86fc] text-center">Profile Details</h1>
      </div>
      <div className="flex items-center my-4">
        <div className="w-[50%] mr-2 relative">
          <Image
            className="rounded-3xl"
            src={imgprofile}
            alt="profile"
            width='auto'
            height='auto'
          />
          <div className="iconcam">
            <span>
              <Image
                className="scale-[0.5]"
                src={camera}
                alt="camera"
                width='auto'
                height='auto'
              />
            </span>
          </div>
        </div>
        <div className="w-[50%] pl-2" >
          <div className="flex flex-col group-input">
            <label className="text-[#717171]">First Name</label>
            <input className="input-item" type="text" id="firstname" name="firstname" />
          </div>
          <div className="flex flex-col group-input">
            <label className="text-[#717171]">Last Name</label>
            <input className="input-item" type="text" id="lastname" name="lastname" />
          </div>
        </div>
      </div>
      <div className="flex items-center my-4">
        <div className="w-[50%] mr-2">
          <p className="text-[#717171]">location</p>
          <Image
            className="rounded-3xl"
            src={jps}
            alt="profile"
            width='auto'
            height='auto'
          />
        </div>
        <div className="w-[50%] pl-2" >
          <div className="flex flex-col mb-4">
            <p className="text-[#717171]">Budget</p>
            <div className="price-item" >
              <Image
                className="m-2"
                src={euro}
                alt="profile"
                width='30'
                height='30'
              />
              <h1 className="text-[#471aa0] mx-2 font-bold">1900</h1>
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-[#717171]">Previons Event</p>
            <div className="price-item" >
              <Image
                className="m-2"
                src={briefcase}
                alt="profile"
                width='30'
                height='30'
              />
              <h1 className="text-[#471aa0] mx-2 font-bold">1</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
