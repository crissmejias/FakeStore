const Footer = () => {
    return(
        <footer className="flex gap-2 text-xl justify-center items-center py-4 mt-10 bg-gray-800 text-gray-100 flex-col">
            <h3 className="text-2xl">Practice made by @CrissMejias</h3>
            <div className="flex text-3xl justify-evenly w-2/12">
            <a className="hover:text-orange-400 transition-colors" target="_blank" href="https://github.com/crissmejias"><i className="fi fi-brands-github"></i></a>
            <a className="hover:text-orange-400 transition-colors" target="_blank" href="https://twitter.com/crissmejias"><i className="fi fi-brands-twitter"></i></a>
            <a className="hover:text-orange-400 transition-colors" target="_blank" href="https://linkedin.com/in/criss-mejias/"><i className="fi fi-brands-linkedin"></i></a>
            </div>
        </footer>
    )
}
export {Footer};