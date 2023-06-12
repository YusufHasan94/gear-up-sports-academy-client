import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";

const Feedback = () => {

    const handleFeedback = event =>{
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        console.log(feedback);
    }

    return (
        <div>
            <div>
                <SectionTitle heading="Feedback About Class"></SectionTitle>
            </div>
            <div className="flex justify-center my-20">
                <form className="w-1/2 flex flex-col" onSubmit={handleFeedback}>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Bio" name="feedback"></textarea>
                    <input type="submit" value="Submit" className="btn bg-rose-400 my-4 text-white"/>
                </form>
            </div>
        </div>
    );
};

export default Feedback;