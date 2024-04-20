
import BookingCard from "./BookingCard"

export default function MenuCardSectionDiseño() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 justify-items-center">
                <BookingCard
                    imagen="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Next JS"
                    ranking="4.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>

                <BookingCard
                    imagen="https://plus.unsplash.com/premium_photo-1711134826547-169d7de16190?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Node JS"
                    ranking="3.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>

                <BookingCard
                    imagen="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    title="Taiwindcss"
                    ranking="3.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>

                <BookingCard
                    imagen="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Mongo DB"
                    ranking="4.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>

                <BookingCard
                    imagen="https://plus.unsplash.com/premium_photo-1711134826547-169d7de16190?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="MySql"
                    ranking="3.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>

                <BookingCard
                    imagen="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    title="Prisma"
                    ranking="4.0"
                    description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
                    storeName="300$"
                ></BookingCard>
            </div>

        </>
    )
}