import { defineStore } from "pinia";
import { Plan } from "@/interface/Plan";

export const useHomePageData = defineStore('homePageData', {
    state: () => {
        return {
            steps: [
                [
                    "一鍵開始你的夢想，\n",
                    "我們的應用程式在 App Store, Google Play 和 Amazon Store 都可以下載！"
                ],
                [
                    "進入我們的應用程式，客製化屬於你的亡後計畫，這將包括葬禮場地的選擇、儀式形式、音樂選擇、道具布置以及其他相關安排。\n",
                    "我們致力於提供靈活且個性化的解決方案，以確保你的想法能被完美表達。"
                ],
                [
                    "在這一階段，我們將安排專業的葬禮顧問與你進行一對一的諮詢。我們將聆聽你的需求、偏好以及特殊要求，確認你葬禮的細節，為你",
                    "評估可行性，並且做初步報價。"
                ],
                [
                    "一切安排妥當後，你就可以安心等死，無後顧之憂，\n",
                    "因為我們會全力以赴在你死後執行屬於你的「亡者計劃」，盡力讓每個細節都能如你所願。"
                ]
            ],
            features: {
                clothing: [
                    {
                        title: "婚紗",
                        message: "婚紗 婚紗 婚紗 婚紗 婚紗 婚紗 婚紗 婚紗",
                        image: require("@/assets/images/feature/clothing/wedding-dress.svg")
                    },
                    {
                        title: "小丑",
                        message: "小丑 小丑 小丑 小丑 小丑 小丑 小丑 小丑",
                        image: require("@/assets/images/feature/clothing/clown.svg")
                    },
                    {
                        title: "塑料袋",
                        message: "塑料袋 塑料袋 塑料袋 塑料袋 塑料袋 塑料袋 塑料袋 塑料袋",
                        image: require("@/assets/images/feature/clothing/plastic-bag.svg")
                    },
                    {
                        title: "裸體",
                        message: "裸體 裸體 裸體 裸體 裸體 裸體 裸體 裸體",
                        image: require("@/assets/images/feature/clothing/nude.svg")
                    },
                    {
                        title: "木乃伊",
                        message: "木乃伊 木乃伊 木乃伊 木乃伊 木乃伊 木乃伊 木乃伊 木乃伊",
                        image: require("@/assets/images/feature/clothing/mummy.svg")
                    },
                ],
                location: [{
                    title: "",
                    message: "",
                    image: require("@/assets/images/feature/location/cliff.png")
                },
                    {
                        title: "",
                        message: "",
                        image: require("@/assets/images/feature/location/nightclub.png")
                    },
                    {
                        title: "",
                        message: "",
                        image: require("@/assets/images/feature/location/playground.png")
                    },
                    {
                        title: "",
                        message: "",
                        image: require("@/assets/images/feature/location/universe.png")
                    },
                    {
                        title: "",
                        message: "",
                        image: require("@/assets/images/feature/location/waste-dump.png")
                    }
                ],
                method: [
                    {
                        title: "粉筆",
                        message: "粉筆粉筆粉筆粉筆粉筆粉筆粉筆粉筆",
                        image: require("@/assets/images/feature/method/chalk.svg")
                    },
                    {
                        title: "奶粉罐",
                        message: "奶粉罐奶粉罐",
                        image: require("@/assets/images/feature/method/milk-jug.svg")
                    },
                    {
                        title: "石頭",
                        message: "石頭石頭石頭",
                        image: require("@/assets/images/feature/method/rock.svg")
                    },
                    {
                        title: "垃圾車",
                        message: "垃圾車垃圾車垃圾車",
                        image: require("@/assets/images/feature/method/rubbish-trucks.svg")
                    },
                    {
                        title: "海",
                        message: "聽～海哭的聲音",
                        image: require("@/assets/images/feature/method/sea.svg")
                    },
                ]
            },
            cases: [
                {
                    title: "夜店PARTY灑骨灰",
                    avatar: {
                        name: "亡X宏",
                        img: require("@/assets/images/avatar/casey-wang.png")
                    },
                    background: require("@/assets/images/cases/night-club.png"),
                    message: "人生就是要嗨吧 ！ 夜店咚ㄘ咚ㄘ的精神" +
                        "才是屬於我的世界，我要把自己葬送在" +
                        "這個極樂世界，人生就是要開開心心地" +
                        "結束啊 ！ 希望我的朋友們可以在我離開" +
                        "的日子也能夠盡情的狂歡 。"
                },
                {
                    title: "渣男前任PARTY",
                    avatar: {
                        name: "亡X宏",
                        img: require("@/assets/images/avatar/casey-wang.png")
                    },
                    background: require("@/assets/images/cases/cry.png"),
                    message: "說真的我人生其實沒什麼遺憾，但我最" +
                        "後悔的是曾經的我做過那些踐踏別人的" +
                        "心的那些事，我想要和我的前任們深深" +
                        "地道歉，我依然沒辦法正面的面對他們，" +
                        "但我願意在最後向他們贖罪，至少會讓" +
                        "她們的心好過一點吧..." +
                        "幸好有亡者計畫讓我能夠辦一個我想要" +
                        "的後事。"
                },
                {
                    title: "遺骨吉他",
                    avatar: {
                        name: "亡X宏",
                        img: require("@/assets/images/avatar/casey-wang.png")
                    },
                    background: require("@/assets/images/cases/guitar.png"),
                    message: "我一生奉獻於音樂，從小就跟叔叔一起" +
                        "玩各種樂器甚至一起組了樂團，我們渴" +
                        "望嗨翻全世界，讓世界變得更活躍，也" +
                        "因此我也希望在我不在這個世界上的時" +
                        "候能夠延續我的熱情，所以就向亡者計" +
                        "畫申請了服務，我想要藉由我的遺骨製" +
                        "作的吉他讓來到我的葬禮的人，能享受" +
                        "我的最後一份狂野，讓大家記得我帶給" +
                        "他們的熱情。"
                }
            ],
            plans: <Plan[]>[
                {
                    title: "霹哩喀霹哩拉拉 酷酷告別式",
                    price: "NT 80,000起",
                    service: [
                        "場地", "人員需求", "道具準備",
                        "花卉", "場地佈置", "接待",
                        "規劃流程", "道具準備", "其他..."
                    ],
                    hint: "和世界說掰掰就趁現在 ！ 想來一場主題派對嗎 ？"
                },
                {
                    title: "波波力吶貝貝魯多 華麗下葬",
                    price: "NT 10,000起",
                    service: [
                        "下葬方式", "大體處理", "道具準備",
                        "墓地", "特殊壽衣", "音樂清單",
                        "規劃流程", "其他..."
                    ],
                    hint: "想要穿著理想中的壽衣嗎 ？ 想在棺材中發"
                },
                {
                    title: "嗶哩巴拉蹦 全都要葬禮",
                    price: "NT 100,000起",
                    service: [
                        "場地", "人員需求", "大體處理",
                        "花卉", "場地佈置", "特殊壽衣",
                        "規劃流程", "接待", "靈車",
                        "道具準備", "下葬方式", "禮車",
                        "音樂清單", "墓地", "其他..."
                    ],
                    hint: "從告別式到下葬幫你一手包辦  。 來一場逼哩巴拉蹦的最後旅程吧 ！"
                }
            ],
            qa: [
                {
                    title: "如何聯繫亡者計劃以安排服務 ？",
                    description: "你可以下載亡者計劃的app並填寫表單或是通過我們的網站上的聯繫表格或電話與我們聯繫 。 我們的客服團隊將會盡快與你取得聯繫，安排適合你的諮詢時間 。",
                    icon: require("@/assets/images/qa/q1.svg")
                },
                {
                    title: "可以只客製化單項服務嗎 ？ 例如 : 特殊祭品 、 壽衣 。",
                    description: "可以哦，可以單獨項目獨立出來為你估價，每個項目會依據不同的需求和細節衡量，最後彙整給你 。 ",
                    icon: require("@/assets/images/qa/q2.svg")
                },
                {
                    title: "我可以估價再購買服務嗎？估價需要費用嗎？*抵銷",
                    description: "可以哦，但估價時會先跟你收一筆估價費，費用為2000以內，後續確認要購買服務後將會退回估價費用 。 ",
                    icon: require("@/assets/images/qa/q3.svg")
                },
                {
                    title: "非亡者本人可以預約嗎？*授權書 找律師",
                    description: "可以哦，但是要得到亡者本人的授權書或遺囑證明我們才能為你進行服務 。 ",
                    icon: require("@/assets/images/qa/q4.svg")
                },
                {
                    title: "取消服務可以退款嗎？",
                    description: "取消服務是否可以退款通常取決於您所選擇的服務類型以及取消的時間 。 一般來說，如果您在服務開始之前取消，您通常可以獲得全額退款或部分退款。但如果服務已經開始進行或完成，則退款可能會受到限制 。",
                    icon: require("@/assets/images/qa/q5.svg")
                }
            ]
        }
    }
})
