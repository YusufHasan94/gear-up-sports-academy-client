import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Message = () => {
    return (
        <div>
            <SectionTitle heading="Contact With Us"></SectionTitle>
            <div className="hero  my-5 p-5">
                <div className="hero-content md:w-1/2 w-full">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form action="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name="" id="" cols="30" rows="8" className="border-gray-200 border-2 rounded-lg p-4"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-rose-400 text-white">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;