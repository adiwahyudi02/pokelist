import { onMounted, onUnmounted, type Ref } from 'vue'

export const useInfiniteScroll = (scrollElement: Ref, handleLoadMore: () => void) => {
    const handleScroll = () => {
        let element = scrollElement.value

        if (element && element.getBoundingClientRect().bottom < window.innerHeight) {
            handleLoadMore()
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll)
    })
}