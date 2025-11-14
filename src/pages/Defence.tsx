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
      <section className="pt-24 sm:pt-28 md:pt-32 pb-20 bg-gradient-to-br from-zenblock-deep-forest via-zenblock-charcoal to-zenblock-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-zenblock-professional-green/10 rounded-full">
              <p className="text-zenblock-professional-green font-semibold">Zenblock Labs · Defence</p>
            </div>
            <p className="text-xl text-zenblock-mint-whisper mb-8">
              Tamper-proof provenance for mission-critical defence manufacturing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trust Where Lives Depend On It.
            </h1>
            <p className="text-xl text-zenblock-mint-whisper mb-10 leading-relaxed">
              Zenblock Labs brings defence-grade traceability, provenance, and indigenisation proof to India's aerospace and defence supply chains. Built on secure, permissioned blockchain — engineered for on-prem, air-gapped facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zenblock-professional-green hover:bg-zenblock-fresh-green text-white">
                Explore Defence Solutions
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToForm} className="border-zenblock-professional-green text-zenblock-professional-green hover:bg-zenblock-professional-green/10">
                Request a Pilot Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Defence Needs Traceability */}
      <section className="py-20 bg-zenblock-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-16">
            Why Defence Needs Traceability
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-6">
                  <Shield className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <h3 className="text-2xl font-bold text-zenblock-charcoal mb-4">Counterfeit Prevention</h3>
                <p className="text-zenblock-medium-grey">
                  Suspect components can infiltrate multi-tier supply chains. We provide tamper-evident provenance for every part.
                </p>
              </CardContent>
            </Card>

            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-6">
                  <Eye className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <h3 className="text-2xl font-bold text-zenblock-charcoal mb-4">Supply-Chain Visibility</h3>
                <p className="text-zenblock-medium-grey">
                  Track Tier-1 to Tier-N suppliers with complete chain-of-custody.
                </p>
              </CardContent>
            </Card>

            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-zenblock-professional-green" />
                </div>
                <h3 className="text-2xl font-bold text-zenblock-charcoal mb-4">Indigenisation Compliance</h3>
                <p className="text-zenblock-medium-grey">
                  Automated proof of local content to support DAP 2020 requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Zenblock Labs Enables */}
      <section className="py-20 bg-zenblock-mint-whisper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-16">
            What Zenblock Labs Enables
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Database className="w-10 h-10 text-zenblock-professional-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">End-to-End Provenance</h3>
                    <p className="text-zenblock-medium-grey">
                      Track every part from manufacturing to installation using Hyperledger Fabric.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Wifi className="w-10 h-10 text-zenblock-professional-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">Air-Gapped Verification</h3>
                    <p className="text-zenblock-medium-grey">
                      Offline verification app for secure facilities — authenticate parts without internet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Zap className="w-10 h-10 text-zenblock-professional-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">Fast Recall & Forensics</h3>
                    <p className="text-zenblock-medium-grey">
                      Instantly identify and isolate affected assemblies with our lineage engine.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-zenblock-border-grey">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Tag className="w-10 h-10 text-zenblock-professional-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-zenblock-charcoal mb-3">Secure Tags & Hardware Attestations</h3>
                    <p className="text-zenblock-medium-grey">
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
      <section className="py-20 bg-zenblock-pure-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-12">
            Built for Indian Defence Manufacturers
          </h2>
          <p className="text-lg text-zenblock-medium-grey mb-8 leading-relaxed">
            India's defence ecosystem — from DPSUs and private primes to MSME suppliers — requires transparent, auditable, and secure component provenance. Zenblock Labs supports Make-in-India, indigenisation, and secure sourcing initiatives with cryptographically verifiable supply-chain infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zenblock-professional-green flex-shrink-0 mt-1" />
              <span className="text-zenblock-medium-grey">Works with DPSUs, Tier-1 suppliers, and MSMEs</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zenblock-professional-green flex-shrink-0 mt-1" />
              <span className="text-zenblock-medium-grey">On-prem deployment with mTLS and HSM-backed keys</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zenblock-professional-green flex-shrink-0 mt-1" />
              <span className="text-zenblock-medium-grey">Integrates with ERP/PLM systems (SAP, Oracle, 3DX)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-zenblock-professional-green flex-shrink-0 mt-1" />
              <span className="text-zenblock-medium-grey">Supports DGQA, CEMILAC, vendor audits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Defence Use Cases */}
      <section className="py-20 bg-zenblock-mint-whisper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-16">
            Defence Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Plane, text: "Aircraft components & avionics" },
              { icon: Rocket, text: "Missile subsystems" },
              { icon: Cpu, text: "Secure electronics" },
              { icon: Cog, text: "Engine parts & fasteners" },
              { icon: Layers, text: "Materials (titanium alloys, composites)" },
              { icon: RotateCw, text: "MRO & lifecycle tracking" }
            ].map((useCase, idx) => (
              <Card key={idx} className="border-zenblock-border-grey">
                <CardContent className="p-6 flex items-center gap-4">
                  <useCase.icon className="w-8 h-8 text-zenblock-professional-green flex-shrink-0" />
                  <span className="text-zenblock-charcoal font-medium">{useCase.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-zenblock-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-16">
            Compliance & Security
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-4">
                <FileCheck className="w-8 h-8 text-zenblock-professional-green" />
              </div>
              <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">DAP 2020 Ready</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-4">
                <Server className="w-8 h-8 text-zenblock-professional-green" />
              </div>
              <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">Data Sovereignty (On-Prem Option)</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-4">
                <Key className="w-8 h-8 text-zenblock-professional-green" />
              </div>
              <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">Role-Based, Attribute-Based Access</h3>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zenblock-professional-green/10 mb-4">
                <Lock className="w-8 h-8 text-zenblock-professional-green" />
              </div>
              <h3 className="text-xl font-bold text-zenblock-charcoal mb-2">Tamper-Evident Audit Trails</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Big Banner */}
      <section className="py-16 bg-gradient-to-r from-zenblock-professional-green to-zenblock-fresh-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Zenblock Labs is now available for Defence
          </h2>
          <p className="text-xl text-white/90 mb-8">
            This capability is being showcased at the ISB Aerospace & Defence Manufacturing Summit.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-zenblock-professional-green hover:bg-white/90 border-white">
            <FileText className="w-5 h-5 mr-2" />
            Download Defence Brief
          </Button>
        </div>
      </section>

      {/* Request a Pilot */}
      <section id="pilot-form" className="py-20 bg-zenblock-pure-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-zenblock-deep-forest text-center mb-6">
            Request a Pilot
          </h2>
          <p className="text-lg text-zenblock-medium-grey text-center mb-12">
            We run 8–12 week pilots with primes, DPSUs, and defence corridors to validate component provenance, cold-chain integrity, and full chain-of-custody transparency.
          </p>
          <Card className="border-zenblock-border-grey">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zenblock-charcoal mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-zenblock-border-grey"
                  />
                </div>
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-zenblock-charcoal mb-2">
                    Organisation *
                  </label>
                  <Input
                    id="organisation"
                    required
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    className="border-zenblock-border-grey"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zenblock-charcoal mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-zenblock-border-grey"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zenblock-charcoal mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-zenblock-border-grey"
                  />
                </div>
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-zenblock-charcoal mb-2">
                    Interested Use Case *
                  </label>
                  <Textarea
                    id="useCase"
                    required
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="border-zenblock-border-grey min-h-[120px]"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-zenblock-professional-green hover:bg-zenblock-fresh-green text-white">
                  Request Pilot
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-sm text-zenblock-medium-grey text-center mt-8 italic">
            Zenblock Labs Defence is an optional module available to eligible organisations and governed by security and compliance protocols.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Defence;
