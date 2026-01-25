const Section = ({children}) => {
    return (
        <section>
            <div className="section-body">
                <div className="container flex flex-col min-h-screen md:flex-row">
                    {children}
                </div>
            </div>
        </section>
    )
}
export default Section