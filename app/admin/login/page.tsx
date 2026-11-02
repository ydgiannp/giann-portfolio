import { Globe, IdentificationCard, LockKey, WarningCircle } from '@phosphor-icons/react/dist/ssr'
import { signIn } from '../actions'
import { supabaseConfigured } from '@/lib/supabase/env'

const field =
  'mt-2 block w-full min-h-[48px] rounded-[4px] border border-eclipse/20 bg-white px-4 text-eclipse transition-colors focus:border-denim'

const WATCHED = [
  { icon: Globe, text: 'Website online dan waktu responsnya' },
  { icon: LockKey, text: 'Masa berlaku sertifikat SSL' },
  { icon: IdentificationCard, text: 'Tanggal habis domain' },
]

export default async function LoginPage(props: { searchParams: Promise<{ error?: string }> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="grid min-h-screen lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <aside className="ch-eclipse bg-ground text-ink flex flex-col justify-between gap-12 px-[var(--frame)] py-10 lg:py-14">
        <p className="font-display text-[1.5rem] font-extrabold tracking-[-0.04em]">Yulius Giann</p>
        <div className="max-w-[440px]">
          <p className="t-lead font-display font-extrabold tracking-[-0.03em]">
            Satu halaman untuk memastikan semua situs klien tetap jalan.
          </p>
          <ul className="mt-8 space-y-4 t-small text-soft">
            {WATCHED.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-[4px] bg-tone text-honey">
                  <Icon size={18} aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <p className="hidden lg:block t-small text-soft">Khusus admin. Halaman ini tidak diindeks.</p>
      </aside>

      <div className="flex items-center px-[var(--frame)] py-12">
        <div className="mx-auto w-full max-w-[400px]">
          <h1 className="t-head">Masuk</h1>
          <p className="mt-3 text-soft">Gunakan akun admin yang terdaftar di Supabase.</p>

          {!supabaseConfigured && (
            <p role="alert" className="mt-8 flex gap-3 rounded-[4px] bg-amber-50 p-4 t-small text-amber-900 ring-1 ring-inset ring-amber-600/25">
              <WarningCircle size={20} weight="fill" className="shrink-0" aria-hidden />
              <span>
                Supabase belum dikonfigurasi. Isi <code>NEXT_PUBLIC_SUPABASE_URL</code> dan{' '}
                <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> di <code>.env.local</code>, lalu jalankan ulang server.
              </span>
            </p>
          )}

          {searchParams.error && (
            <p role="alert" className="mt-8 flex items-center gap-3 rounded-[4px] bg-red-50 p-4 t-small text-red-800 ring-1 ring-inset ring-red-600/20">
              <WarningCircle size={20} weight="fill" className="shrink-0" aria-hidden />
              Email atau password salah.
            </p>
          )}

          <form action={signIn} className="mt-8 space-y-5">
            <label className="block t-small font-semibold">
              Email
              <input name="email" type="email" required autoComplete="username" className={field} />
            </label>
            <label className="block t-small font-semibold">
              Password
              <input name="password" type="password" required autoComplete="current-password" className={field} />
            </label>
            <button type="submit" disabled={!supabaseConfigured} className="btn btn-dark w-full disabled:opacity-50">
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
