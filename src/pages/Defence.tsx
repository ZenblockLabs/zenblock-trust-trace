import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Eye, CheckCircle2, Lock, Database, Wifi, Zap, Tag, FileCheck, Server, Key, FileText, Plane, Rocket, Cpu, Cog, Layers, RotateCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Defence = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    useCase: ""
  });

  const scrollToForm = () => {
    document.getElementById("pilot-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "We'll contact you shortly to discuss your pilot program.",
    });
    setFormData({ name: "", organisation: "", email: "", phone: "", useCase: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zenblock-mint-whisper to-zenblock-pure-white min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in space-y-6 sm:space-y-8 pt-24 sm:pt-28 md:pt-32">
            <div className="inline-block mb-4 px-4 py-2 bg-zenblock-professional-green/10 backdrop-blur-sm rounded-full border border-zenblock-professional-green/20">
              <p className="text-zenblock-professional-green font-semibold">Zenblock Labs · Defence</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-zenblock-charcoal mb-4 sm:mb-6 leading-tight">
              <span className="flex flex-col space-y-2 sm:space-y-4 md:space-y-6">
                <span>Trust Where</span>
                <span className="text-zenblock-professional-green">
                  Lives Depend On It
                </span>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] text-zenblock-medium-grey mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Zenblock Labs brings defence-grade traceability, provenance, and indigenisation proof to India's aerospace and defence supply chains. Built on secure, permissioned blockchain — engineered for on-prem, air-gapped facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Button 
                size="lg" 
                className="bg-zenblock-professional-green text-white hover:bg-zenblock-fresh-green hover:scale-105 text-base sm:text-[1rem] px-6 sm:px-8 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]"
              >
                Explore Defence Solutions
              </Button>
              
              <Button 
                size="lg" 
                onClick={scrollToForm}
                variant="outline"
                className="border-2 border-zenblock-professional-green text-zenblock-professional-green hover:bg-zenblock-mint-whisper text-base sm:text-[1rem] px-6 sm:px-8 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto min-h-[44px] sm:min-h-[56px]"
              >
                Request a Pilot Demo
              </Button>
            </div>
            
            <div className="bg-zenblock-mint-whisper border border-zenblock-border-grey rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto px-4 sm:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                      <Shield className="w-6 h-6 text-zenblock-professional-green" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in">100%</div>
                  <div className="text-zenblock-medium-grey text-xs sm:text-sm">Tamper-Proof Provenance</div>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                      <Lock className="w-6 h-6 text-zenblock-professional-green" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>On-Prem</div>
                  <div className="text-zenblock-medium-grey text-xs sm:text-sm">Air-Gapped Deployment</div>
                </div>
                
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-zenblock-professional-green/10 rounded-full group-hover:bg-zenblock-professional-green/20 transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-zenblock-professional-green" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-[1.5rem] font-bold text-zenblock-deep-forest mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>DAP 2020</div>
                  <div className="text-zenblock-medium-grey text-xs sm:text-sm">Compliance Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Defence Needs Traceability */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Defence Needs Traceability
            </h2>
            <p className="text-muted-foreground text-lg">Securing the supply chain for mission-critical operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Counterfeit Prevention</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suspect components can infiltrate multi-tier supply chains. We provide tamper-evident provenance for every part.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Eye className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Supply-Chain Visibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track Tier-1 to Tier-N suppliers with complete chain-of-custody.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Indigenisation Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automated proof of local content to support DAP 2020 requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Zenblock Labs Enables */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Zenblock Labs Enables
            </h2>
            <p className="text-muted-foreground text-lg">Comprehensive capabilities for defence manufacturing</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <Database className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">End-to-End Provenance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track every part from manufacturing to installation using Hyperledger Fabric.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <Wifi className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Air-Gapped Verification</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Offline verification app for secure facilities — authenticate parts without internet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <Zap className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Fast Recall & Forensics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Instantly identify and isolate affected assemblies with our lineage engine.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                    <Tag className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Secure Tags & Hardware Attestations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      QR/NFC/PUF-based secure tagging prevents cloning and ensures authenticity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Indian Defence Manufacturers */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for Indian Defence Manufacturers
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-center max-w-4xl mx-auto">
            India's defence ecosystem — from DPSUs and private primes to MSME suppliers — requires transparent, auditable, and secure component provenance. Zenblock Labs supports Make-in-India, indigenisation, and secure sourcing initiatives with cryptographically verifiable supply-chain infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <span className="text-muted-foreground">Works with DPSUs, Tier-1 suppliers, and MSMEs</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <span className="text-muted-foreground">On-prem deployment with mTLS and HSM-backed keys</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <span className="text-muted-foreground">Integrates with ERP/PLM systems (SAP, Oracle, 3DX)</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-card hover:bg-accent/50 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <span className="text-muted-foreground">Supports DGQA, CEMILAC, vendor audits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Defence Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Defence Use Cases
            </h2>
            <p className="text-muted-foreground text-lg">Critical applications across defence manufacturing</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Plane, text: "Aircraft components & avionics" },
              { icon: Rocket, text: "Missile subsystems" },
              { icon: Cpu, text: "Secure electronics" },
              { icon: Cog, text: "Engine parts & fasteners" },
              { icon: Layers, text: "Materials (titanium alloys, composites)" },
              { icon: RotateCw, text: "MRO & lifecycle tracking" }
            ].map((useCase, idx) => (
              <Card key={idx} className="card-hover group">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-foreground font-medium">{useCase.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Compliance & Security
            </h2>
            <p className="text-muted-foreground text-lg">Enterprise-grade security and regulatory compliance</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <FileCheck className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">DAP 2020 Ready</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Server className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Data Sovereignty<br />(On-Prem Option)</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Key className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Role-Based, Attribute-Based Access</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-accent/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Lock className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Tamper-Evident Audit Trails</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Pilot */}
      <section id="pilot-form" className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Request a Pilot
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We run 8–12 week pilots with primes, DPSUs, and defence corridors to validate component provenance, cold-chain integrity, and full chain-of-custody transparency.
            </p>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                    Organisation *
                  </label>
                  <Input
                    id="organisation"
                    required
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-foreground mb-2">
                    Interested Use Case *
                  </label>
                  <Textarea
                    id="useCase"
                    required
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all">
                  Request Pilot
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground text-center mt-8 italic">
            Zenblock Labs Defence is an optional module available to eligible organisations and governed by security and compliance protocols.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Defence;
