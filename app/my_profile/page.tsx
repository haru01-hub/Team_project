import { auth, currentUser } from '@clerk/nextjs/server'

import Link from 'next/link'

export default async function DashboardPage() {
  const { userId } = auth()
  const user = await currentUser()
  return (
    <div>
      <h3 className="text-2xl text-left font-bold mb-2">My profile</h3>
      <hr />
      <br />
      <div className="flex">
        <div>
          <img
            className="bg-gray-400 hover:bg-cyan-200 mr-2 ml-4"
            style={{ width: '90px', height: '90px', borderRadius: '50%' }}
            src="/profile.jpg"
            alt="   설정 사진"
          />
        </div>
        <div>
          {userId && (
            <div className="mt-5 ml-5">
              <p>이름: {user?.fullName}</p>
              <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          )}
          <Link href="/profile" className="ml-5 underline hover:text-gray-400">
            ▶ 내 프로필 보기
          </Link>
        </div>
        <p className="ml-20 text-center font-bold ">
          ❝ 모든 인간의 삶은 각자 자신에게로 이르는 길이다. ❞<br />- 데미안
        </p>
      </div>
      <div
        className="bg-gray-300 mt-5 rounded-3xl"
        style={{
          width: '100%',
          height: '90px',
        }}
      >
        <div className="flex items-center justify-between mr-5 mt-10">
          <h1 className="ml-10 pt-7">
            My Point
            <span className="ml-5 mr-5 font-bold text-3xl text-yellow-100">
              10,000
            </span>
            Point
          </h1>
          <div className="flex text-gray-800">
            <Link href="/receipt">
              <p className="p-3 bg-yellow-100 rounded-3xl mt-5 mr-5 hover:bg-blue-200">
                이용내역
              </p>
            </Link>
            <Link href="/purchase">
              <p className="p-3  bg-yellow-100 rounded-3xl mt-5 hover:bg-blue-200">
                포인트사용하기
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="border-2 mt-10 p-10 underline ">
          <Link href="" className="mb-5 text-black hover:text-purple-500">
            새로 작성하기
          </Link>
          <hr />
          <Link href="" className=" hover:text-blue-400 mb-4">
            2024.10.08
          </Link>
          <br />
          <hr />
          <Link href="" className=" hover:text-blue-400 mb-4">
            2024.06.18
          </Link>
          <br />
          <hr />
          <Link href="" className=" hover:text-blue-400 mb-4">
            2024.01.13
          </Link>
          <br />
          <hr />
          <Link href="" className=" hover:text-blue-400 mb-4">
            2023.09.23
          </Link>
          <br />
        </div>
        <div className="border-2 ml-6 mt-10 ">
          <h2 className="ml-40 mr-40">오늘의 독서감상문을 작성해주세요!!</h2>
          <hr />
        </div>
      </div>
    </div>
  )
}
