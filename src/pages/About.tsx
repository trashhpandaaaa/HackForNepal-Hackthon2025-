
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-24 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-3xl font-bold mb-4">About HackForNepal</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about Nepal's biggest hackathon and how we're working to drive innovation and positive change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia atque accusamus fugit distinctio est molestias cumque commodi quos. Dignissimos explicabo fugit eos vel repudiandae ad tempora nostrum dolore assumend.
              </p>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum est animi sed voluptatum iure omnis totam ipsam assumenda quos voluptates perspiciatis, corrupti ullam incidunt, consequatur commodi aliquam, nulla tempora quis?
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="mb-4 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ducimus ut cumque officiis quasi mollitia maiores! Voluptates eum enim saepe error aliquid voluptatum molestiae quae magni, veniam a nesciunt perferendis.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Foster innovation and entrepreneurship in Nepal's tech ecosystem</li>
                <li>Create practical solutions to real-world problems facing Nepalese communities</li>
                <li>Build a supportive community of developers, designers, and changemakers</li>
                <li>Connect talented individuals with opportunities for growth and impact</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">2025 Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-red text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Development</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquid alias quidem architecto nihil inventore facere et minima odit quis aliquam voluptatibus, vel numquam pariatur ullam amet earum non? Repellendus.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-blue/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-blue text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Inclusion</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quae sapiente! Alias eum numquam qui labore voluptas reprehenderit eveniet nihil, earum a quae recusandae ex? Commodi qui tenetur expedita saepe!
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-nepal-red/10 flex items-center justify-center rounded-full mb-4">
                  <span className="text-nepal-red text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias explicabo rerum. Fugit saepe corrupti est consequuntur maiores, ducimus odit earum nobis provident consectetur nemo blanditiis eius minima delectus minus.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">AP</span>
                </div>
                <h3 className="font-semibold">Someone</h3>
                <p className="text-sm text-muted-foreground">Founder & Director</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">SM</span>
                </div>
                <h3 className="font-semibold">SOmeone</h3>
                <p className="text-sm text-muted-foreground">Program Coordinator</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-nepal-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nepal-blue text-2xl font-bold">RG</span>
                </div>
                <h3 className="font-semibold">Someone</h3>
                <p className="text-sm text-muted-foreground">Technical Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
