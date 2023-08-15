export type Message = {
    role: "user" | "assistant"
    content: string
    links?: string[]
}