import PageLayout from "@/layout/PageLayout";

const Detail = ({note}) => {
    return (
        <PageLayout>
            <div className="mt-6 bg-white dark:bg-secondary-dark text-text-light dark:text-text-dark   p-6 rounded-lg">
                <h3 className="">{note["note_title"]}</h3>
                <p className="text-sm mt-4">{note["created_at"]}</p>
                <p className="text-sm mt-3">{note["note_text"]}</p>
            </div>
        </PageLayout>
    );
}

export default Detail;