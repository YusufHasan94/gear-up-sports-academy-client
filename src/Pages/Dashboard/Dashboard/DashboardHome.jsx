import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import dashboardImg from "../../../assets/dashboard.png";

const DashboardHome = () => {
    return (
        <div>
            <SectionTitle heading="Welcome to dashboard"></SectionTitle>
            <div className="flex justify-center">
                <img src={dashboardImg} alt="" />
            </div>
        </div>
    );
};

export default DashboardHome;