"use client";

import { Grid, GridItem, CharacterCard, Carousel, CarouselSlide, Image, Icon, Tabs, TabsList, TabsTrigger, TabsContent, Empty, Badge, Sticky } from "@packages/components";
import "./page.css";

export default function Home() {
    return (
        <>
            <Carousel>
                <CarouselSlide image="https://picsum.photos/1920/400?random=1">
                    <h1>Slide 01</h1>
                </CarouselSlide>
                <CarouselSlide image="https://picsum.photos/1920/400?random=2">
                    <h1>Slide 02</h1>
                </CarouselSlide>
                <CarouselSlide image="https://picsum.photos/1920/400?random=3">
                    <h1>Slide 03</h1>
                </CarouselSlide>
                <CarouselSlide image="https://picsum.photos/1920/400?random=4">
                    <h1>Slide 04</h1>
                </CarouselSlide>
            </Carousel>

            <Tabs value="characters">
                <Sticky>
                    <TabsList>
                        <TabsTrigger value="all">
                            <Icon library="untitledui" name="Grid01" size="lg" inline />
                            Everything
                        </TabsTrigger>
                        <TabsTrigger value="characters">
                            <Icon library="untitledui" name="User01" size="lg" inline />
                            Characters
                        </TabsTrigger>
                        <TabsTrigger value="scenarios">
                            <Icon library="untitledui" name="Clapperboard" size="lg" inline />
                            Scenarios
                        </TabsTrigger>
                        <TabsTrigger value="personas">
                            <Icon library="untitledui" name="FaceWink" size="lg" inline />
                            Personas
                        </TabsTrigger>
                    </TabsList>
                </Sticky>
                <TabsContent value="characters">
                    {/* <Sticky>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                            <Badge type="hashtag">Alternative</Badge>
                            <Badge type="hashtag">Anime</Badge>
                            <Badge type="hashtag">Asian</Badge>
                            <Badge type="hashtag">BDSM</Badge>
                            <Badge type="hashtag">Big Ass</Badge>
                            <Badge type="hashtag">Big Tits</Badge>
                            <Badge type="hashtag">Bisexual</Badge>
                            <Badge type="hashtag">Blonde</Badge>
                            <Badge type="hashtag">Bondage</Badge>
                            <Badge type="hashtag">Brunette</Badge>
                            <Badge type="hashtag">Cheating</Badge>
                            <Badge type="hashtag">Cheerleader</Badge>
                            <Badge type="hashtag">Chubby</Badge>
                            <Badge type="hashtag">Cuckold</Badge>
                            <Badge type="hashtag">Cum Slut</Badge>
                            <Badge type="hashtag">Dominant</Badge>
                            <Badge type="hashtag">Emo</Badge>
                            <Badge type="hashtag">Femdom</Badge>
                            <Badge type="hashtag">Fetish</Badge>
                            <Badge type="hashtag">Furry</Badge>
                            <Badge type="hashtag">Gay</Badge>
                            <Badge type="hashtag">Girlfriend</Badge>
                            <Badge type="hashtag">Goth</Badge>
                            <Badge type="hashtag">Hentai</Badge>
                            <Badge type="hashtag">Incest</Badge>
                            <Badge type="hashtag">Interracial</Badge>
                            <Badge type="hashtag">Lesbian</Badge>
                            <Badge type="hashtag">Lolita</Badge>
                            <Badge type="hashtag">Mature</Badge>
                            <Badge type="hashtag">MILF</Badge>
                            <Badge type="hashtag">Monster</Badge>
                            <Badge type="hashtag">Petite</Badge>
                            <Badge type="hashtag">Pregnant</Badge>
                            <Badge type="hashtag">Redhead</Badge>
                            <Badge type="hashtag">Rimjob</Badge>
                            <Badge type="hashtag">Romance</Badge>
                            <Badge type="hashtag">Schoolgirl</Badge>
                            <Badge type="hashtag">Shaved</Badge>
                            <Badge type="hashtag">Sister</Badge>
                            <Badge type="hashtag">Slut</Badge>
                            <Badge type="hashtag">Slave</Badge>
                            <Badge type="hashtag">Smut</Badge>
                            <Badge type="hashtag">Stripper</Badge>
                            <Badge type="hashtag">Submissive</Badge>
                            <Badge type="hashtag">Steamy</Badge>
                            <Badge type="hashtag">Straight</Badge>
                            <Badge type="hashtag">Teen</Badge>
                            <Badge type="hashtag">Transgender</Badge>
                            <Badge type="hashtag">Virgin</Badge>
                            <Badge type="hashtag">Witch</Badge>
                            <Badge type="hashtag">Wolf</Badge>
                            <Badge type="hashtag">Yaoi</Badge>
                            <Badge type="hashtag">Yuri</Badge>
                        </div>
                    </Sticky> */}
                    <Grid>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/3b88ef92-d32e-4261-9161-94fed989f50a" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/876ad990-de87-4c92-a03f-c1485665de7c" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/71b6518e-e53a-42c1-b97f-a39bd414d245" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/8c6fb276-17e0-4488-97f6-00a897428043" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/c0b04702-512a-4bd6-a2cb-272e8a89c220_0.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/5fcf17f6-ec4d-46b3-8b41-d294837db3e2" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/4e3f1398-efa5-4475-b8a3-712dc9446d57_1.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/2822f6c5-02ff-42fb-b38d-8dc8fd7ccf82_1.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/2dc27c4b-1874-4d6f-8583-c817c3732f59_0.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/f6443db8-e65f-4d67-82ee-b8a909653e07_0.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/215ef91b-218b-4c70-b423-fe792faf8425" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/c07b0eca-8445-4d61-b901-b0e73c34c4e8" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/e1b20b23-a7f9-474d-b1ac-21d3f72a3e22" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/555da4c1-5594-4179-96ea-63768857497f" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/4d322428-1787-4b58-9427-2dfda07fb2ad_1.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/80ad2034-d301-4a58-b1ef-f6b6028aca5e" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/767ee64e-bef7-4ce2-9981-b391e83aacca" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/avatars/8ffbc7d5-8fc2-4a2c-9c07-5a9adbf9615c" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/295b4a83-935c-4b5e-8d2a-3d1c0cb216ac_1.jpeg" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/c26eeab8-c155-41ea-9dcb-a4be73d31450" />
                        </GridItem>
                        <GridItem>
                            <CharacterCard portraitImage="https://cdn.gptgirlfriend.online/gens/086d17eb-3a40-4733-9a7d-f88e542e8cec" />
                        </GridItem>
                    </Grid>
                </TabsContent>
                <TabsContent value="scenarios">
                    <Empty />
                </TabsContent>
                <TabsContent value="personas">
                    <Empty />
                </TabsContent>
            </Tabs>
        </>
    );
}