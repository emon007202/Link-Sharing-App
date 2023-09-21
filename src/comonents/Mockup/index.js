import { linkContext } from "../../Context/linkContext";
import { useContext } from "react";
import { hexToRgb, isLight } from "../../utils"

function MockupPreview() {
    const { data, linkTypes } = useContext(linkContext);
    return (
        <div className='mockup' style={{ position: `relative` }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="308" height="632" fill="none" viewBox="0 0 308 632">
                <path stroke="#737373" d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z" />
                <path fill="#fff" stroke="#737373" d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z" />
                {<circle cx="153.5" cy="112" r="48" fill="#EEE" />}
                <rect width="160" height="16" x="73.5" y="185" rx="8" />
                <rect width="72" height="8" x="117.5" y="214" rx="4" />
                <rect width="237" height="44" x="35" y="278" rx="8" />

                {data.name && (
                    <text x="154" y="197" fill="#737373" fontSize="15" fontWeight="Bolder" textAnchor="middle">
                        {`${data.name}`}
                    </text>
                )}
                {data.email && (
                    <text x="154" y="220" fill="#737373" fontSize="14" textAnchor="middle">
                        {data.email}
                    </text>
                )}
            </svg>
            {data.avatar && (
                <img
                    src={data.avatar}
                    alt='avatar'
                    style={{
                        position: "absolute",
                        borderRadius: "50%",
                        left: "200px",
                        top: "108px",
                        height: "100px",
                        width: "100px",
                        border: "Blue solid 1px",
                        backgroundColor: "none"
                    }}
                />
            )}
            <div className="link" style={{ height: 240, width: 300, overflowY: `scroll`, position: `absolute`, left: "105px", top: "300px", alignItems: "center" }}>
                {data.links.map((link) => {
                    if (link.typeId === 0 || link.url.length === 0) return " ";
                    else {
                        const type = linkTypes.find((linkType) => linkType.id === link.typeId)
                        const bgRGB = hexToRgb(type.bg)
                        return (<div style={{
                            display: 'flex',
                            backgroundColor: type.bg,
                            width: 237,
                            minHeight: 44,
                            borderRadius: 10,
                            margin: '10px 0px',
                            textAlign: `center`,
                            alignItems: `center`,
                            justifyContent: `center`,
                            border:!isLight(bgRGB.r, bgRGB.g, bgRGB.b) ? '1px black solid ': 'none',
                            color: !isLight(bgRGB.r, bgRGB.g, bgRGB.b) ? 'black' : 'white'
                        }}> <p style={{
                            marginRight: "10px"
                        }}>{type.icon}</p>
                            <p>{type.name}</p>
                        </div>)
                    }
                })}
            </div>
        </div >
    );
}

export default MockupPreview;
