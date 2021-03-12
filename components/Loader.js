export default function Loader({ show }) {
    // When show is true, the loader will be shown
    return show ? <div className="loader"></div> : null
}