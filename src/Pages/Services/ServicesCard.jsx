import webApp from "../../assets/services/web.gif";
const ServicesCard = () => {
  return (
    <div className="card w-4/5 p-8 bg-base-100 shadow-xl h-full">
      <img className="w-5/6 mx-auto" src={webApp} alt="Shoes" />
      <div className="card-body pt-0">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServicesCard;
