
//schema for person data
export type ProfileLink = { label: string; url: string }
export type Category = "faculty" | "staff" | "students"
export type Field = "metallurgy" | "materials"

export interface Person {
id: number
name: string
title: string
specialization: string
category: "faculty" | "staff" | "students"
field?: "metallurgy" | "materials"
image: string
email?: string
office?: string
phone?: string
profiles?: ProfileLink[]
}