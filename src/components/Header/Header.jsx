import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div>
        <div className="flex justify-between m-4">
      <h1 className="font-bold text-4xl">Coding Forum</h1>
      <img src={profile} alt="" />
    </div>
    <hr />
    </div>
  );
};

export default Header;
