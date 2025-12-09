// app/research/[slug]/page.tsx
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { researchAreas, ResearchArea } from "@/data/reasearchArea"

type Props = {
    params: { slug: string }
}

export default function ResearchAreaPage({ params }: Props) {
    const slug = params.slug
    const area: ResearchArea | undefined = researchAreas.find((a) => a.slug === slug)

    if (!area) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="max-w-3xl mx-auto p-8">
                    <h2 className="text-2xl font-bold mb-3">Research area not found</h2>
                    <p className="text-gray-600 mb-6">No research area matches "{slug}".</p>
                    <Link href="/research" className="inline-block px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition">
                        Back to Research
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* page header */}
            <section className="bg-gradient-to-r from-primary via-blue-900 to-primary text-white py-8">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">{area.title}</h1>
                    <p className="text-sm md:text-base text-blue-100 mt-2">{area.slug.replace(/-/g, " ")}</p>
                </div>
            </section>

            {/* main two-column layout */}
            <section className="py-10">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* left: description + selected topics */}
                        <div className="md:col-span-2">
                            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                                <h2 className="text-xl font-semibold text-primary mb-3">Overview</h2>
                                <p className="text-gray-700 leading-relaxed">{area.description}</p>
                            </div>

                            {/* selected topics & applications */}
                            <div className="mt-6 bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                                <h3 className="text-lg font-semibold text-primary mb-3">Selected topics & applications</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {area.keyPoints && area.keyPoints.length > 0 ? (
                                        area.keyPoints.map((kp, i) => <li key={i}>{kp}</li>)
                                    ) : (
                                        <li>Details will be updated soon.</li>
                                    )}
                                </ul>
                            </div>

                            {/* back link */}
                            <div className="mt-6">
                                <Link href="/research" className="inline-block px-4 py-2 border border-primary rounded-lg text-primary bg-white hover:bg-primary hover:text-white transition">
                                    ← Back to Research
                                </Link>
                            </div>
                        </div>

                        {/* right: faculties (clean + compact UI) */}
                        <aside className="md:col-span-1">
                            <div className="bg-gray-100 rounded-lg p-5 h-full border border-gray-200">
                                <h3 className="text-lg font-semibold text-primary mb-4">Faculty Involved</h3>

                                {area.faculties && area.faculties.length > 0 ? (
                                    <ul className="space-y-2">
                                        {area.faculties.map((f, idx) => (
                                            <li
                                                key={idx}
                                                className="p-2 bg-white rounded-md text-gray-800 text-sm border border-gray-200 hover:border-primary hover:shadow-sm transition-all"
                                            >
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-600 text-sm">Faculty list will be updated soon.</p>
                                )}
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
