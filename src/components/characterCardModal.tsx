import { Link } from "react-router-dom"

interface ICharacterProps { id?: Number, firstName: string, lastName: string, fullName: string, image: string, title: string, family: string }

function CharacterCardModal({ image, title, family }: ICharacterProps) {
    if (family.includes('Stark')) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Stark`}</div>
                        <p>{'Rulers of the North from the castle of Winterfell and the royal house of the independent Kingdom of the North. Retook their lands from House Bolton, who usurped House Stark at the Red Wedding, after the Battle of the Bastards. The house is ruled by Sansa Stark, the Queen in the North. The heir is Princess Arya Stark.'}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes('Targaryen')) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Targaryen`}</div>
                        <p>{"the former royal house of the Seven Kingdoms since Aegon's Conquest. Overthrown in Robert's Rebellion, but restored following the Battle of King's Landing. After Jon Snow rejoined the Night's Watch, House Targaryen became legally extinct. The bloodline of House Targaryen lives in House Baratheon and House Martell"}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes('Lannister')) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Lannister`}</div>
                        <p>{"rulers of the Westerlands from the castle of Casterly Rock. The former royal house of the Seven Kingdoms after the destruction of the Great Sept of Baelor until the Battle of King's Landing. Its leadership was disputed by Queen Cersei I Lannister and Hand of the Queen to Daenerys Targaryen, Lord Tyrion Lannister, who became the head of House Lannister after the Battle of King's Landing."}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes('Baratheon')) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Baratheon`}</div>
                        <p>{"rulers of the Stormlands from the castle of Storm's End. The former royal house of the Seven Kingdoms after Robert's Rebellion. The bloodline went extinct after Stannis Baratheon was killed at the battle in the ice. Legally went extinct when King Tommen Baratheon killed himself in King's Landing after the destruction of the Great Sept of Baelor. Restored when Queen Daenerys Targaryen legitimized Robert's unacknowledged bastard son Gendry Baratheon."}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes(`Greyjoy`)) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Greyjoy`}</div>
                        <p>{"rulers of the Iron Islands from the castle of Pyke. Its leadership was disputed by King Euron Greyjoy and claimant Queen Yara Greyjoy. However, following the Battle of King's Landing, and with Euron's death at the hands of Ser Jaime Lannister, Yara is now the head of the house."}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes(`Bolton`)) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Bolton`}</div>
                        <p>{"former vassals to House Stark, rulers of the North from the castle of Winterfell after usurping their positions from House Stark during the Red Wedding. Ramsay Bolton, the sole heir, was killed in the aftermath of the Battle of the Bastards by his own hounds, rendering the house extinct."}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes(`Tyrell`)) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Tyrell`}</div>
                        <p>{"rulers of the Reach from the castle of Highgarden after the extinction of House Gardener. The bloodline is wiped out as a result of the destruction of the Great Sept of Baelor and the Sack of Highgarden"}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes(`Mormont`)) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Mormont`}</div>
                        <p>{"House Mormont of Bear Island is an extinct vassal house from the North that held fealty to House Stark of Winterfell. They ruled Bear Island, an island far to the northwest of Winterfell, from the castle Mormont Keep. The head of the house was the Lord of Bear Island. The family possessed the Valyrian sword Longclaw, which later was given to Jon Snow."}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    if (family.includes(`Tarly`)) {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                        <div className="bd-notification is-primary title mt-6">{`About the House Tarly`}</div>
                        <p>{"House Tarly of Horn Hill is a noble house from the Reach and a vassal of Lord Bronn of Highgarden. House Tarly has a militarist tradition, and possesses a Valyrian steel sword called Heartsbane"}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
    else {
        return <> <section>
            <div className="m-6">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-centered">
                        <figure className="image is-centered is-fullwidth">
                            <img className="is-square " src={image} />
                        </figure>
                    </div>
                    <div className="column has-text-centered">
                        <div className="bd-notification is-primary title">{`Title:`}</div>
                        <div className="bd-notification is-primary mb-6">{title}</div>
                        <div className="bd-notification is-primary title mt-6">{`Family:`}</div>
                        <div className="bd-notification is-primary ">{family}</div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
        </>
    }
}
export default CharacterCardModal;
