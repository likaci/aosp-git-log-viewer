const repoLogs = [];
repoLogs.push({ path: "art", logs: [
  { hash: "75d4422b08", date: "2024-04-26", author: "jiakaiz@google.com", message: "Implement Pre-reboot Dexopt." },
  { hash: "b9198f3b3a", date: "2024-04-26", author: "ngeoffray@google.com", message: "Adjust JIT thresholds." },
  { hash: "99d99134a5", date: "2024-04-26", author: "vmarko@google.com", message: "Skip some simd run-tests for `optimizing & no-image`." },
  { hash: "5117fe6bf9", date: "2024-04-25", author: "dubt@google.com", message: "Revert ＂Fast-path for `HInstanceOf`/`kInterfaceCheck`.＂" },
  { hash: "20668496dd", date: "2024-04-25", author: "vmarko@google.com", message: "Fast-path for `HInstanceOf`/`kInterfaceCheck`." },
  { hash: "fd74412291", date: "2024-04-25", author: "scianciulli@google.com", message: "Add explicit L literal for 0 long values when reporting BackgroundDexoptJobEnded atoms in ART" },
  { hash: "23d8f2c4a9", date: "2024-04-25", author: "mythria@google.com", message: "Remove listeners installed for tracing  when there is an overflow" },
  { hash: "3b6f3b2d02", date: "2024-04-25", author: "jdduke@google.com", message: "Madvise uncompressed app images" },
  { hash: "d3e3da35d2", date: "2024-04-24", author: "spandandas@google.com", message: "Update tracking bug to remove art source_build defaults modules" },
  { hash: "e337c94fc7", date: "2024-04-24", author: "mast@google.com", message: "Clean up the test mocks." },
  { hash: "1dc111804f", date: "2024-04-24", author: "mast@google.com", message: "Repurpose libnativeloader_lazy tests as shallow tests for API coverage in CTS." },
  { hash: "186ee7b672", date: "2024-04-24", author: "solanes@google.com", message: "Don't resolve dex files eagerly for verify single thread" },
  { hash: "1fcae1235a", date: "2024-04-23", author: "jiakaiz@google.com", message: "Refactor ArtFileManager." },
  { hash: "450e26a2be", date: "2024-04-23", author: "jiakaiz@google.com", message: "Implement preRebootInit in artd." },
  { hash: "0d05c3c08a", date: "2024-04-23", author: "mast@google.com", message: "Remove dynamic link exception for libc++." },
  { hash: "3939bde62a", date: "2024-04-23", author: "mast@google.com", message: "Set test ownerships for ART." },
  { hash: "8668ae56bf", date: "2024-04-23", author: "vmarko@google.com", message: "Refactor error reporting in `OatFileBase::Setup()`." },
  { hash: "9e68e9b2d0", date: "2024-04-22", author: "jiakaiz@google.com", message: "Add profman path to Compiler Explorer local properties." },
  { hash: "030a225ade", date: "2024-04-22", author: "ngeoffray@google.com", message: "Revert ＂Reland ＂Revamp JIT GC.＂＂" },
  { hash: "63843bf469", date: "2024-04-22", author: "vmarko@google.com", message: "Do not generate dead jump for interface instance-of." },
  { hash: "a9e7ce337a", date: "2024-04-22", author: "vmarko@google.com", message: "Disable run-test 732 for `optimizing & no-image`." },
  { hash: "d229e50a7c", date: "2024-04-22", author: "rprichard@google.com", message: "ART standalone tests: use static STL and version scripts" },
  { hash: "4a79b17f37", date: "2024-04-22", author: "vmarko@google.com", message: "Optimizing: Treat app image objects as non-movable." },
  { hash: "55e99bd1c5", date: "2024-04-19", author: "hboehm@google.com", message: "Add debug info for failure to become 1-threaded" },
  { hash: "1df1ff5f6c", date: "2024-04-19", author: "spandandas@google.com", message: "Delete disabling of art in non source builds" },
  { hash: "30b1e9b7e0", date: "2024-04-19", author: "jdduke@google.com", message: "Allow ahat usage with Java 11 runtimes" },
  { hash: "649b885213", date: "2024-04-19", author: "vilasbhat@google.com", message: "oatdump: Disable test cases failing due to x86 disassembler issues" },
  { hash: "69928e7a68", date: "2024-04-19", author: "vmarko@google.com", message: "Apply `CompilerDriver::LoadImageClasses()` to app images." },
  { hash: "716516147c", date: "2024-04-18", author: "ishcheikin@google.com", message: "Separate libart runtime/compiler static_defaults" },
  { hash: "718bcbec38", date: "2024-04-18", author: "vmarko@google.com", message: "ART: Fix missing nativeloader symbols for Golem." },
  { hash: "b1eb2853b3", date: "2024-04-18", author: "roman.artemev@syntacore.com", message: "riscv64: Reorganize list of branches bound to the same label" },
  { hash: "c7bc9f5834", date: "2024-04-18", author: "ngeoffray@google.com", message: "Do not encode out of range dex pcs in the profile." },
  { hash: "f3cb22e820", date: "2024-04-18", author: "solanes@google.com", message: "Add BCP dex file's BSS mappings to boot image extension compiles" },
  { hash: "afc4444793", date: "2024-04-18", author: "mast@google.com", message: "Remove libunwindstack dependency from runtime tests." },
  { hash: "bda11bd682", date: "2024-04-18", author: "jiakaiz@google.com", message: "Add instructions for generating boot images for local Compiler Explorer." },
  { hash: "16567ac3d6", date: "2024-04-18", author: "ngeoffray@google.com", message: "Reland ＂Revamp JIT GC.＂" },
  { hash: "36aba6488c", date: "2024-04-18", author: "mythria@google.com", message: "Reset the method trace buffer index when handling overflow" },
  { hash: "680e7679b6", date: "2024-04-17", author: "christofferqa@google.com", message: "Check existence of class data in profman resolution" },
  { hash: "b9247e265b", date: "2024-04-17", author: "pierre.langlois@arm.com", message: "16k: Hint that allocation spaces should be 32mb aligned" },
  { hash: "21be0617dc", date: "2024-04-17", author: "solanes@google.com", message: "Fix typo in x86_64 VisitJdkUnsafePutByte" },
  { hash: "c66a8e5557", date: "2024-04-17", author: "vmarko@google.com", message: "Clean up target retrieval from `LinkerPatch`." },
  { hash: "de8e6689cb", date: "2024-04-17", author: "ngeoffray@google.com", message: "Revert ＂Revamp JIT GC.＂" },
  { hash: "5209a09e00", date: "2024-04-17", author: "jeongik@google.com", message: "Add //packages/modules/common/build" },
  { hash: "366d45a8b5", date: "2024-04-16", author: "rprichard@google.com", message: "TrackingAllocator and GcRootArenaAllocator: C++20 fixes" },
  { hash: "1f8f41b219", date: "2024-04-16", author: "rprichard@google.com", message: "Avoid calling Alloc::{address,construct,destroy}" },
  { hash: "5ab729974f", date: "2024-04-16", author: "mast@google.com", message: "Implement a check that standalone tests only link known available libs dynamically." },
  { hash: "5009fef90f", date: "2024-04-16", author: "jiakaiz@google.com", message: "Add instructions to run a local Compiler Explorer." },
  { hash: "253075f929", date: "2024-04-16", author: "vmarko@google.com", message: "Rename `.data.bimg.rel.ro` to `.data.img.rel.ro`." },
  { hash: "3293b63fd3", date: "2024-04-16", author: "nelsonli@google.com", message: "Convert `dump-oat` to Android.bp" },
  { hash: "073051281c", date: "2024-04-15", author: "rprichard@google.com", message: "Declare OatWriter::BssMappingInfo sooner" },
  { hash: "03ffba5552", date: "2024-04-15", author: "rprichard@google.com", message: "CompilationResult: remove private default ctor" },
  { hash: "f257588ba1", date: "2024-04-15", author: "rprichard@google.com", message: "Fix ExperimentalFlags operator== ambiguity" },
  { hash: "855f1680b0", date: "2024-04-15", author: "mast@google.com", message: "Revert libunwindstack back to dynamic linking in runtime tests." },
  { hash: "f9bde50747", date: "2024-04-15", author: "ngeoffray@google.com", message: "Revamp JIT GC." },
  { hash: "1b5d0be125", date: "2024-04-12", author: "rprichard@google.com", message: "Fix NameAndSignature::operator== ambiguity" },
  { hash: "b66eb3bc87", date: "2024-04-12", author: "rprichard@google.com", message: "Avoid comparing std::memory_order_relaxed with 0" },
  { hash: "876dc7650f", date: "2024-04-12", author: "rprichard@google.com", message: "Improve std::memory_order enum usage" },
  { hash: "3f29f3783b", date: "2024-04-12", author: "jiakaiz@google.com", message: "Wait for the boot to complete before running dexopt_chroot_setup_test." },
  { hash: "013d57de57", date: "2024-04-12", author: "jiakaiz@google.com", message: "Skip dexopt_chroot_setup_test on old platforms." },
  { hash: "245509c7a7", date: "2024-04-12", author: "mast@google.com", message: "Fix standalone tests to only link NDK and module exported libraries dynamically." },
  { hash: "2b963f984f", date: "2024-04-12", author: "vmarko@google.com", message: "riscv64: Support auto-compression for raw branches." },
  { hash: "83aab099bc", date: "2024-04-12", author: "solanes@google.com", message: "Add Parse Verifier Deps timing" },
  { hash: "d378234a2a", date: "2024-04-12", author: "solanes@google.com", message: "Speed up FastVerify by resolving the dex files" },
  { hash: "69c9ea4f93", date: "2024-04-11", author: "ngeoffray@google.com", message: "Revert ＂x86_64: Add JIT support for LoadMethodType.＂" },
  { hash: "e8da7cd1d0", date: "2024-04-11", author: "vmarko@google.com", message: "Clean up string data access in `DexFile`." },
  { hash: "69dc24557f", date: "2024-04-11", author: "jiakaiz@google.com", message: "Implement dexopt_chroot_setup." },
  { hash: "53ca944020", date: "2024-04-11", author: "mingaleev@google.com", message: "x86_64: Add JIT support for LoadMethodType." },
  { hash: "a7bc7cbf31", date: "2024-04-11", author: "ngeoffray@google.com", message: "Fetch class loaders and wait for GC in JitCodeCache::GetProfiledMethods." },
  { hash: "98556fe15d", date: "2024-04-10", author: "mattgilbride@google.com", message: "oatdump --dump-method-and-offset-as-json" },
  { hash: "3e410f15ea", date: "2024-04-10", author: "richard.neill@arm.com", message: "Support sparsity in FdFile::Copy" },
  { hash: "db9cd130d8", date: "2024-04-09", author: "lokeshgidra@google.com", message: "Reland^2 ＂Batch compacted pages to reduce number of uffd ioctls.＂" },
  { hash: "25f75a799b", date: "2024-04-09", author: "mast@google.com", message: "Add a README for native bridge and libnativebridge." },
  { hash: "cabfc7506c", date: "2024-04-09", author: "vmarko@google.com", message: "Change `TypeLookupTable` to use `std::string_view`." },
  { hash: "420ffd6837", date: "2024-04-09", author: "ngeoffray@google.com", message: "Add another failing test on gcstress+debug." },
  { hash: "558e95446d", date: "2024-04-09", author: "solanes@google.com", message: "Replace OatClassType::kOatClassMax with KLast" },
  { hash: "2fa8453d70", date: "2024-04-09", author: "ngeoffray@google.com", message: "Fixes related to inlined inline caches." },
  { hash: "69560c6844", date: "2024-04-09", author: "mythria@google.com", message: "Avoid looking up for method id on each trace entry" },
  { hash: "116231387e", date: "2024-04-08", author: "rprichard@google.com", message: "Remove use of std::iterator and std::result_of" },
  { hash: "68e9af2dd0", date: "2024-04-08", author: "vmarko@google.com", message: "ART Faster `LinkCode()` in `ClassLinker`." },
  { hash: "cfff041514", date: "2024-04-08", author: "mythria@google.com", message: "Update the code to sign extend the result after decoding from leb128" },
  { hash: "367cf319d5", date: "2024-04-08", author: "vmarko@google.com", message: "Move some code from `ArtMethod` to run-test 664." },
  { hash: "ad8837d06c", date: "2024-04-05", author: "jiakaiz@google.com", message: "Change the default dexopt concurrency for all other reasons to 4." },
  { hash: "172ae8d8ee", date: "2024-04-05", author: "mythria@google.com", message: "Annotate GetDiscontinuousSpaces requires shared mutator_lock" },
  { hash: "5fe81fd246", date: "2024-04-05", author: "dimitry@google.com", message: "Add getTrampolineForFunctionPointer method to native bridge" },
  { hash: "4e6db6efb3", date: "2024-04-05", author: "vmarko@google.com", message: "Faster annotations processing in `ClassLinker::LoadClass()`." },
  { hash: "9486862224", date: "2024-04-05", author: "mast@google.com", message: "Consolidate OWNERS in libnativebridge and libnativeloader." },
  { hash: "9b3acf7e0c", date: "2024-04-04", author: "solanes@google.com", message: "Remove RegisterAllocator::Strategy" },
  { hash: "97cf36494e", date: "2024-04-04", author: "enh@google.com", message: "Simplify and explain the ELF_ST_*() macros." },
  { hash: "17f80ec045", date: "2024-04-04", author: "jiakaiz@google.com", message: "Move art_standalone_dexopt_chroot_setup_tests to eng only." },
  { hash: "97d9a1d950", date: "2024-04-04", author: "enh@google.com", message: "elf_utils.h: remove two unused functions." },
  { hash: "6c095f094a", date: "2024-04-04", author: "jiakaiz@google.com", message: "Promote art_standalone_dexopt_chroot_setup_tests to Presubmit." },
  { hash: "9bdfed7499", date: "2024-04-04", author: "mingaleev@google.com", message: "Update strings in 2237-checker-inline-multidex." },
  { hash: "d923c47f74", date: "2024-04-04", author: "anton.romanov@syntacore.com", message: "riscv64: Create InstructionSimplifierRiscv64, ShiftAdd" },
  { hash: "aa2fe78514", date: "2024-04-03", author: "spandandas@google.com", message: "Add comment that host variant of libdexfile is dropped in >=V sdks" },
  { hash: "738911f0e2", date: "2024-04-03", author: "jiakaiz@google.com", message: "Don't copy dex code for plain dex files." },
  { hash: "a4e0034c3a", date: "2024-04-03", author: "ddiproietto@google.com", message: "Rename thread that does OOM perfetto dump" },
  { hash: "dec2fdc543", date: "2024-04-03", author: "enh@google.com", message: "elf_utils.h: remove more duplicated constants." },
  { hash: "cf654f0fe5", date: "2024-04-03", author: "jiakaiz@google.com", message: "Support disabling embedded profile through a dm file." },
  { hash: "52a32e5446", date: "2024-04-02", author: "enh@google.com", message: "Remove duplicate STV_DEFAULT definition." },
  { hash: "f2760bda7a", date: "2024-04-02", author: "solanes@google.com", message: "Make DexCachePairArray Set/GetPair use release/acquire" },
  { hash: "e9c64c9f13", date: "2024-04-02", author: "jiakaiz@google.com", message: "Add JNI equivalent methods in artd for Pre-reboot Dexopt use." },
]});
repoLogs.push({ path: "bionic", logs: [
  { hash: "e7efd77d2", date: "2024-04-26", author: "appujee@google.com", message: "Merge ＂[RISC-V] Add misaligned load store tests＂ into main" },
  { hash: "f789ddab1", date: "2024-04-26", author: "enh@google.com", message: "Merge ＂get_executable_info: minor clarification.＂ into main" },
  { hash: "fc306b951", date: "2024-04-26", author: "rprichard@google.com", message: "Merge ＂Revert ＂Switch the loader to a noexcept version of libc++＂＂ into main" },
  { hash: "698ca39c9", date: "2024-04-26", author: "rprichard@google.com", message: "Revert ＂Switch the loader to a noexcept version of libc++＂" },
  { hash: "24705dbdb", date: "2024-04-25", author: "appujee@google.com", message: "[RISC-V] Add misaligned load store tests" },
  { hash: "686803d2a", date: "2024-04-25", author: "rprichard@google.com", message: "Merge ＂Switch the loader to a noexcept version of libc++＂ into main" },
  { hash: "33de2737d", date: "2024-04-25", author: "enh@google.com", message: "get_executable_info: minor clarification." },
  { hash: "c5be8dfe7", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂linker: use realpath instead of readlink when getting the symlink path＂ into main" },
  { hash: "9c7892202", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Only try to initialize appcompat properties if the folder is present＂ into main" },
  { hash: "f31e93c6e", date: "2024-04-24", author: "prashanthsw@google.com", message: "Merge ＂Revert ＂[RISC-V] Add misaligned load store tests＂＂ into main" },
  { hash: "1cb919c07", date: "2024-04-24", author: "prashanthsw@google.com", message: "Revert ＂[RISC-V] Add misaligned load store tests＂" },
  { hash: "cf02614a4", date: "2024-04-24", author: "appujee@google.com", message: "Merge ＂[RISC-V] Add misaligned load store tests＂ into main" },
  { hash: "425034212", date: "2024-04-23", author: "appujee@google.com", message: "[RISC-V] Add misaligned load store tests" },
  { hash: "5063d2624", date: "2024-04-23", author: "enh@google.com", message: "Merge ＂Always use `__foo__` for attribute names.＂ into main" },
  { hash: "ae038dcde", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Replace commented-out deprecated attribute with doc comment.＂ into main" },
  { hash: "899d809bc", date: "2024-04-22", author: "enh@google.com", message: "Merge ＂__system_property_set: add string names for init's error codes.＂ into main" },
  { hash: "a933582f3", date: "2024-04-22", author: "enh@google.com", message: "__system_property_set: add string names for init's error codes." },
  { hash: "9b9371bd0", date: "2024-04-22", author: "enh@google.com", message: "Replace commented-out deprecated attribute with doc comment." },
  { hash: "a1b5ca2fe", date: "2024-04-22", author: "enh@google.com", message: "Always use `__foo__` for attribute names." },
  { hash: "8d7c0f4f0", date: "2024-04-22", author: "chenxinyuanchen@xiaomi.corp-partner.google.com", message: "linker: use realpath instead of readlink when getting the symlink path" },
  { hash: "ed21ffc70", date: "2024-04-20", author: "enh@google.com", message: "Merge ＂Document pthread_key_create(3), pthread_key_delete(3), and PTHREAD_KEYS_MAX.＂ into main" },
  { hash: "9437444cf", date: "2024-04-19", author: "ntmyren@google.com", message: "Only try to initialize appcompat properties if the folder is present" },
  { hash: "7d3c6cd25", date: "2024-04-18", author: "enh@google.com", message: "Document pthread_key_create(3), pthread_key_delete(3), and PTHREAD_KEYS_MAX." },
  { hash: "785e161dd", date: "2024-04-18", author: "cferris@google.com", message: "Merge ＂Update to v6.8 kernel headers.＂ into main" },
  { hash: "5716586cf", date: "2024-04-18", author: "ndesaulniers@google.com", message: "Merge ＂libc: remove __size_mul_overflow＂ into main" },
  { hash: "ceed466d6", date: "2024-04-17", author: "ndesaulniers@google.com", message: "libc: remove __size_mul_overflow" },
  { hash: "0be8f184c", date: "2024-04-17", author: "ndesaulniers@google.com", message: "Merge ＂Use inline keyword without underscores consistently＂ into main" },
  { hash: "0b1161d9b", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Clean up __always_inline＂ into main" },
  { hash: "58f06e111", date: "2024-04-17", author: "ndesaulniers@google.com", message: "Use inline keyword without underscores consistently" },
  { hash: "c574f79af", date: "2024-04-17", author: "ndesaulniers@google.com", message: "Clean up __always_inline" },
  { hash: "08b1404cc", date: "2024-04-16", author: "fmayer@google.com", message: "Merge ＂Fix incorrect links＂ into main" },
  { hash: "7d098bbee", date: "2024-04-16", author: "fmayer@google.com", message: "Fix incorrect links" },
  { hash: "6b776d9db", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tlsdesc_resolver.S: use L() macro for local labels.＂ into main" },
  { hash: "b830ddf90", date: "2024-04-16", author: "cferris@google.com", message: "Update to v6.8 kernel headers." },
  { hash: "12773b6ec", date: "2024-04-16", author: "enh@google.com", message: "Merge ＂Simplify Oryon ifunc resolvers.＂ into main" },
  { hash: "f978a85cc", date: "2024-04-16", author: "enh@google.com", message: "Simplify Oryon ifunc resolvers." },
  { hash: "e7f4506bc", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add LINE_MAX.＂ into main" },
  { hash: "d73b7b3e2", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[[nodiscard]] the various ElfReader functions.＂ into main" },
  { hash: "396868c74", date: "2024-04-10", author: "enh@google.com", message: "[[nodiscard]] the various ElfReader functions." },
  { hash: "117478dd4", date: "2024-04-10", author: "smoreland@google.com", message: "Merge ＂Prefer __BIONIC_DEPRECATED_PAGE_SIZE_MACRO＂ into main" },
  { hash: "4435aff51", date: "2024-04-10", author: "mitchp@google.com", message: "Merge ＂[GWP-ASan] Use recoverable everywhere＂ into main" },
  { hash: "3db97c73a", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add NGROUPS.＂ into main" },
  { hash: "2f526fb4d", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂<sys/shm.h>: fix a hard-coded 4096 page size.＂ into main" },
  { hash: "e5bd239ba", date: "2024-04-09", author: "enh@google.com", message: "Add NGROUPS." },
  { hash: "f666d822b", date: "2024-04-09", author: "enh@google.com", message: "<sys/shm.h>: fix a hard-coded 4096 page size." },
  { hash: "a69e5af7e", date: "2024-04-09", author: "smoreland@google.com", message: "Prefer __BIONIC_DEPRECATED_PAGE_SIZE_MACRO" },
  { hash: "b266f6522", date: "2024-04-09", author: "enh@google.com", message: "Add LINE_MAX." },
  { hash: "aa8c229e7", date: "2024-04-09", author: "mitchp@google.com", message: "[GWP-ASan] Use recoverable everywhere" },
  { hash: "252ed5704", date: "2024-04-08", author: "enh@google.com", message: "Merge ＂riscv64: use L() in the handful of places we didn't already.＂ into main" },
  { hash: "b064be8bc", date: "2024-04-08", author: "enh@google.com", message: "Merge ＂arm64: use L() in the handful of places we didn't already.＂ into main" },
  { hash: "6937761c5", date: "2024-04-08", author: "enh@google.com", message: "arm64: use L() in the handful of places we didn't already." },
  { hash: "9e892499d", date: "2024-04-08", author: "enh@google.com", message: "riscv64: use L() in the handful of places we didn't already." },
  { hash: "f1bb28054", date: "2024-04-08", author: "enh@google.com", message: "tlsdesc_resolver.S: use L() macro for local labels." },
  { hash: "d162eb922", date: "2024-04-05", author: "rprichard@google.com", message: "Switch the loader to a noexcept version of libc++" },
  { hash: "b97459693", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Hide overaligned global address from the compiler.＂ into main" },
  { hash: "8bd83d8c9", date: "2024-04-04", author: "pcc@google.com", message: "Hide overaligned global address from the compiler." },
  { hash: "1d141ce1c", date: "2024-04-04", author: "rprichard@google.com", message: "Merge ＂Call relocate_relr before the ifunc resolvers＂ into main" },
  { hash: "e56406669", date: "2024-04-04", author: "fmayer@google.com", message: "Merge ＂Disable USE_SCUDO branches for HWASan＂ into main" },
  { hash: "d8ad15220", date: "2024-04-04", author: "fmayer@google.com", message: "Disable USE_SCUDO branches for HWASan" },
  { hash: "2a901e693", date: "2024-04-04", author: "rprichard@google.com", message: "Call relocate_relr before the ifunc resolvers" },
  { hash: "2931c646d", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove duplicate PT_ARM_EXIDX definition.＂ into main" },
  { hash: "0e179328f", date: "2024-04-03", author: "enh@google.com", message: "Remove duplicate PT_ARM_EXIDX definition." },
  { hash: "74d67442a", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ReadPadSegmentNote: Skip PT_NOTEs that are beyond the end of the file＂ into main" },
]});
repoLogs.push({ path: "bootable/libbootloader", logs: [
  { hash: "3b27c6f", date: "2024-04-26", author: "zyecheng@google.com", message: "Fix build error due to chkstk/alloca on x86" },
  { hash: "57d214e", date: "2024-04-24", author: "zyecheng@google.com", message: "Add a top-level LICENSE file" },
  { hash: "c984ad8", date: "2024-04-22", author: "dovs@google.com", message: "Use safemath library within GBL" },
  { hash: "276f9de", date: "2024-04-22", author: "zyecheng@google.com", message: "Flush cache by VA on aarch64" },
  { hash: "ed983f7", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add GBL interfaces for block device, console, boot＂ into main" },
  { hash: "e20b165", date: "2024-04-17", author: "zyecheng@google.com", message: "Add GBL interfaces for block device, console, boot" },
  { hash: "5c5ea94", date: "2024-04-15", author: "dovs@google.com", message: "Initial commit for checked arithmetic library" },
  { hash: "910eb0f", date: "2024-04-12", author: "dpursell@google.com", message: "Merge ＂gbl: update BUILD rules for ATX->Cert rename＂ into main" },
  { hash: "e106162", date: "2024-04-10", author: "zyecheng@google.com", message: "Move avb sysdeps implementation into libavb" },
  { hash: "4603ced", date: "2024-04-09", author: "dpursell@google.com", message: "gbl: update BUILD rules for ATX->Cert rename" },
  { hash: "836d997", date: "2024-04-08", author: "zyecheng@google.com", message: "Support Fastboot over USB" },
  { hash: "f504deb", date: "2024-04-08", author: "zyecheng@google.com", message: "Merge ＂Support EFI_ANDROID_BOOT_PROTOCOL＂ into main" },
  { hash: "a3c9a6a", date: "2024-04-05", author: "zyecheng@google.com", message: "Support EFI_ANDROID_BOOT_PROTOCOL" },
  { hash: "79b50a4", date: "2024-04-03", author: "dovs@google.com", message: "First commit for libstorage testlib" },
  { hash: "85f238b", date: "2024-04-03", author: "zyecheng@google.com", message: "Add libavb_atx to bindgen" },
  { hash: "e5526fb", date: "2024-04-03", author: "zyecheng@google.com", message: "Merge ＂Support flashing sparse image＂ into main" },
]});
repoLogs.push({ path: "bootable/recovery", logs: [
  { hash: "cd6618b6", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "3bf54b57", date: "2024-04-08", author: "royluo@google.com", message: "Merge ＂recovery: do not update bootloader message for boot-fastboot＂ into main" },
  { hash: "17833ea6", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix sticky rescue party boot＂ into main" },
  { hash: "e288aff6", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Check for build-tags before installing sideload OTA＂ into main" },
  { hash: "cdcdf52e", date: "2024-04-05", author: "royluo@google.com", message: "recovery: do not update bootloader message for boot-fastboot" },
]});
repoLogs.push({ path: "build/bazel", logs: [
]});
repoLogs.push({ path: "build/bazel_common_rules", logs: [
  { hash: "212bca4", date: "2024-04-08", author: "elsk@google.com", message: "Merge changes from topic ＂exec_deprecate＂ into main" },
  { hash: "1222b8f", date: "2024-04-05", author: "elsk@google.com", message: "Prevent public usage of exec.bzl and exec_aspect.bzl (2/2)" },
  { hash: "0b901c9", date: "2024-04-03", author: "elsk@google.com", message: "Prevent public usage of exec.bzl and exec_aspect.bzl (1/2)" },
  { hash: "ce02d49", date: "2024-04-03", author: "elsk@google.com", message: "Delete test_mappings/." },
]});
repoLogs.push({ path: "build/blueprint", logs: [
  { hash: "c10b49b", date: "2024-04-25", author: "haamed@google.com", message: "Use relative GOPATH for microfactory golang builds." },
  { hash: "36b6322", date: "2024-04-24", author: "twasilczyk@google.com", message: "Merge ＂Add support for go:embed＂ into main" },
  { hash: "185cb44", date: "2024-04-23", author: "colefaust@google.com", message: "Export ConfigurableCase and add constructors" },
  { hash: "51b4b03", date: "2024-04-22", author: "twasilczyk@google.com", message: "Add support for go:embed" },
  { hash: "d7474dd", date: "2024-04-16", author: "ccross@android.com", message: "Call TransitionMutator.IncomingTransition when adding dependencies later" },
  { hash: "6ed94b7", date: "2024-04-16", author: "ccross@android.com", message: "Merge ＂Move TransitionMutator to transition.go and add tests＂ into main" },
  { hash: "28357db", date: "2024-04-12", author: "colefaust@google.com", message: "Support unpacking a variable to a configurable property" },
  { hash: "3311deb", date: "2024-04-12", author: "colefaust@google.com", message: "Support multi-variable selects and typed selects" },
  { hash: "95b3627", date: "2024-04-12", author: "ccross@android.com", message: "Move TransitionMutator to transition.go and add tests" },
  { hash: "09fe90e", date: "2024-04-04", author: "colefaust@google.com", message: "Rename Evaluate() to Get() and add GetDefault()" },
  { hash: "2437d5e", date: "2024-04-04", author: "colefaust@google.com", message: "Add android:replace_instead_of_append" },
  { hash: "0173a22", date: "2024-04-04", author: "colefaust@google.com", message: "Rename default select branch to 'default' keyword" },
  { hash: "021cc8f", date: "2024-04-02", author: "colefaust@google.com", message: "Add support for unset select branches" },
  { hash: "a6074ea", date: "2024-04-02", author: "ccross@android.com", message: "Merge changes I4bb1a17f,I05ffdf6d,I5dc201f4,If16ee798,I2e42c0d6, ... into main" },
  { hash: "d5d55e5", date: "2024-04-01", author: "ccross@android.com", message: "Store mutator in mutatorContext instead of name" },
  { hash: "1d5e1a5", date: "2024-04-01", author: "ccross@android.com", message: "Explicitly delete old logicModule entries from Context.moduleInfo" },
  { hash: "7b5888a", date: "2024-04-01", author: "ccross@android.com", message: "Keep logicModule for obsolete variants" },
  { hash: "fab4866", date: "2024-04-01", author: "ccross@android.com", message: "Add Provider to transition contexts" },
  { hash: "fca423d", date: "2024-04-01", author: "ccross@android.com", message: "Cache outgoing transitions" },
]});
repoLogs.push({ path: "build/make", logs: [
  { hash: "cfd7b0df36", date: "2024-04-26", author: "jeffdq@google.com", message: "Merge ＂Generate CustomFeatureFlags＂ into main" },
  { hash: "5e6df98fc3", date: "2024-04-26", author: "fennema@google.com", message: "Merge ＂Allow setting --boot_variable_file in build-ota-package-target＂ into main" },
  { hash: "f089d9a587", date: "2024-04-26", author: "fennema@google.com", message: "Allow setting --boot_variable_file in build-ota-package-target" },
  { hash: "527363c906", date: "2024-04-26", author: "michaelwr@google.com", message: "Merge ＂check-flagged-apis: parse classes＂ into main" },
  { hash: "d71cd85c0a", date: "2024-04-26", author: "michaelwr@google.com", message: "Merge ＂check-flagged-apis: add missing requireNotNull＂ into main" },
  { hash: "18ff19a563", date: "2024-04-26", author: "amhk@google.com", message: "check-flagged-apis: parse classes" },
  { hash: "04e4564f49", date: "2024-04-26", author: "amhk@google.com", message: "check-flagged-apis: add missing requireNotNull" },
  { hash: "68d63d47af", date: "2024-04-26", author: "weiwli@google.com", message: "Merge ＂Add license metadata declarations which are moved from device/google/gs101/Android.mk.＂ into main" },
  { hash: "ad77da348c", date: "2024-04-26", author: "inseob@google.com", message: "Merge ＂Build audio_effects.xml with Soong＂ into main" },
  { hash: "49b87dbdd6", date: "2024-04-26", author: "zhuoyao@google.com", message: "Merge ＂Define trendy_team_adte under build/make＂ into main" },
  { hash: "e88b47c119", date: "2024-04-25", author: "zhuoyao@google.com", message: "Define trendy_team_adte under build/make" },
  { hash: "671bb0bd4a", date: "2024-04-25", author: "weiwli@google.com", message: "Add license metadata declarations which are moved from device/google/gs101/Android.mk." },
  { hash: "c6e4a86b03", date: "2024-04-25", author: "fennema@google.com", message: "Merge ＂Allow boot_variable_file to be read from input_target_files＂ into main" },
  { hash: "cd6de1bc7f", date: "2024-04-25", author: "fennema@google.com", message: "Allow boot_variable_file to be read from input_target_files" },
  { hash: "966e558e9f", date: "2024-04-25", author: "tedbauer@google.com", message: "Merge ＂Prune unnecessary symbols from read API＂ into main" },
  { hash: "489b828297", date: "2024-04-25", author: "dzshen@google.com", message: "Merge ＂aconfig: update aconfig storage write api and test update＂ into main" },
  { hash: "ad07bd54f6", date: "2024-04-25", author: "tedbauer@google.com", message: "Prune unnecessary symbols from read API" },
  { hash: "fe5065705c", date: "2024-04-25", author: "dzshen@google.com", message: "aconfig: update aconfig storage write api and test update" },
  { hash: "5deb660e32", date: "2024-04-25", author: "weiwli@google.com", message: "Merge ＂Add license metadata declarations which are moved from device/google/coral/Android.mk.＂ into main" },
  { hash: "83f8fb1643", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add appcompat system properties flag to soong＂ into main" },
  { hash: "b2050366ef", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow specifying load order for 16K kernel modules＂ into main" },
  { hash: "8edc560eda", date: "2024-04-24", author: "weiwli@google.com", message: "Add license metadata declarations which are moved from device/google/coral/Android.mk." },
  { hash: "c3bc24f33b", date: "2024-04-24", author: "jeffdq@google.com", message: "Generate CustomFeatureFlags" },
  { hash: "e0c74fbdd6", date: "2024-04-24", author: "fabiancanas@google.com", message: "Merge ＂Add --unused parameter to whichgit＂ into main" },
  { hash: "6916e64027", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make check-flagged-apis executable＂ into main" },
  { hash: "27abc3abc3", date: "2024-04-24", author: "annabauza@google.com", message: "Merge ＂Adding avatar picker to install on all platform phones and tablets＂ into main" },
  { hash: "7123699d09", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop INDIVIDUALLY_TOGGLEABLE_PREBUILT_MODULES＂ into main" },
  { hash: "97ea68aea6", date: "2024-04-23", author: "fabiancanas@google.com", message: "Add --unused parameter to whichgit" },
  { hash: "8ec0862bdd", date: "2024-04-24", author: "spandandas@google.com", message: "Drop INDIVIDUALLY_TOGGLEABLE_PREBUILT_MODULES" },
  { hash: "c55d79b7c7", date: "2024-04-24", author: "michaelwr@google.com", message: "Make check-flagged-apis executable" },
  { hash: "171944d88a", date: "2024-04-23", author: "tedbauer@google.com", message: "Merge ＂Update aconfig storage deps for CPP codegen＂ into main" },
  { hash: "496a329bd0", date: "2024-04-23", author: "ioffe@google.com", message: "Merge ＂Add PRODUCT_AVF_MICRODROID_GUEST_GKI_VERSION to _product_single_value_vars＂ into main" },
  { hash: "e10c4f22b4", date: "2024-04-23", author: "spandandas@google.com", message: "Merge ＂Remove conditional for artifact list＂ into main" },
  { hash: "6974bbf7ee", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update sdk finalizer to change soong instead of bazel＂ into main" },
  { hash: "59274f816c", date: "2024-04-23", author: "dzshen@google.com", message: "Merge ＂aconfig: remove cache filtering by container＂ into main" },
  { hash: "c9d54b0877", date: "2024-04-23", author: "michaelmerg@google.com", message: "Merge ＂Set enforce SOONG_GEN_COMPDB=1 when running soong for ide_query＂ into main" },
  { hash: "b1654b9b56", date: "2024-04-23", author: "spandandas@google.com", message: "Remove conditional for artifact list" },
  { hash: "ed37595aaf", date: "2024-04-23", author: "jihoonkang@google.com", message: "Update sdk finalizer to change soong instead of bazel" },
  { hash: "ed8bd8aaf4", date: "2024-04-23", author: "ioffe@google.com", message: "Add PRODUCT_AVF_MICRODROID_GUEST_GKI_VERSION to _product_single_value_vars" },
  { hash: "67e44dd2c3", date: "2024-04-23", author: "dzshen@google.com", message: "Merge ＂aconfig: update flag info storage file＂ into main" },
  { hash: "8d20d51bf8", date: "2024-04-23", author: "tedbauer@google.com", message: "Update aconfig storage deps for CPP codegen" },
  { hash: "73e96880ae", date: "2024-04-23", author: "zhuoyao@google.com", message: "Merge ＂Support tool event logging for ADB invocations＂ into main" },
  { hash: "f6ad0ce1c5", date: "2024-04-23", author: "inseob@google.com", message: "Build audio_effects.xml with Soong" },
  { hash: "96407369b1", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add soong config variables for selinux＂ into main" },
  { hash: "7f2b0fe594", date: "2024-04-22", author: "weiwli@google.com", message: "Merge ＂Add license metadata declarations.＂ into main" },
  { hash: "adc3664dd2", date: "2024-04-22", author: "willmcvicker@google.com", message: "Merge ＂Add new product property to detect if PAGE_SIZE is defined＂ into main" },
  { hash: "65d5e13e11", date: "2024-04-22", author: "annabauza@google.com", message: "Adding avatar picker to install on all platform phones and tablets" },
  { hash: "980aded04f", date: "2024-04-19", author: "zhangkelvin@google.com", message: "Allow specifying load order for 16K kernel modules" },
  { hash: "1c4b50f8c4", date: "2024-04-19", author: "paulduffin@google.com", message: "Merge ＂Use new metalava jar-to-diff command＂ into main" },
  { hash: "fb19bf1b9f", date: "2024-04-19", author: "zhuoyao@google.com", message: "Merge ＂Add Trendy team for the run_tool_with_logging_test＂ into main" },
  { hash: "1ebcd017ae", date: "2024-04-19", author: "dzshen@google.com", message: "aconfig: remove cache filtering by container" },
  { hash: "eed5dcf31e", date: "2024-04-19", author: "ntmyren@google.com", message: "Add appcompat system properties flag to soong" },
  { hash: "eebb0edb27", date: "2024-04-19", author: "zhuoyao@google.com", message: "Add Trendy team for the run_tool_with_logging_test" },
  { hash: "60dd9ddce9", date: "2024-04-19", author: "zhuoyao@google.com", message: "Support tool event logging for ADB invocations" },
  { hash: "563a2f62c5", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fixup! Support generating partial OTAs from extracted target_files＂ into main" },
  { hash: "2d3e50527d", date: "2024-04-19", author: "michaelwr@google.com", message: "Merge changes I8b5e2642,I0520ab0f into main" },
  { hash: "56ac6da961", date: "2024-04-19", author: "paulduffin@google.com", message: "Use new metalava jar-to-diff command" },
  { hash: "f8e79f113b", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove android.hardware.wifi from generic_system.mk＂ into main" },
  { hash: "9328219ae3", date: "2024-04-19", author: "jihoonkang@google.com", message: "Merge ＂Remove non existent snapuserd.recovery package＂ into main" },
  { hash: "93e9197a66", date: "2024-04-19", author: "jihoonkang@google.com", message: "Merge ＂Remove WallpaperPicker from aosp_product.mk＂ into main" },
  { hash: "77d1b94b9f", date: "2024-04-19", author: "inseob@google.com", message: "Merge ＂Build etc/hosts with Soong＂ into main" },
  { hash: "ccd1f73c5f", date: "2024-04-19", author: "jimtang@google.com", message: "Merge ＂Deprecate USE_PREBUILT_SDK_TOOLS_IN_PLACE＂ into main" },
  { hash: "6f4c692948", date: "2024-04-18", author: "dzshen@google.com", message: "aconfig: update flag info storage file" },
  { hash: "c8edf8af33", date: "2024-04-19", author: "chirayudesai1@gmail.com", message: "fixup! Support generating partial OTAs from extracted target_files" },
  { hash: "b24b46d43f", date: "2024-04-18", author: "zhengdaniel@google.com", message: "Merge ＂add build property for compression_factor＂ into main" },
  { hash: "d0d74d2038", date: "2024-04-18", author: "ioffe@google.com", message: "Merge ＂Propagate PRODUCT_AVF_MICRODROID_GUEST_GKI_VERSION to soong＂ into main" },
  { hash: "ad64a4d296", date: "2024-04-18", author: "lucafarsi@google.com", message: "Merge ＂Stream build process output＂ into main" },
  { hash: "db136447a6", date: "2024-04-18", author: "lucafarsi@google.com", message: "Stream build process output" },
  { hash: "270130a025", date: "2024-04-18", author: "zhengdaniel@google.com", message: "add build property for compression_factor" },
  { hash: "ac407794b9", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂aflags: read protos from all containers＂ into main" },
  { hash: "78986f598f", date: "2024-04-18", author: "zhengdaniel@google.com", message: "Merge ＂Revert^2 ＂Turn on V3 cow＂＂ into main" },
  { hash: "206d44aff5", date: "2024-04-18", author: "tedbauer@google.com", message: "aflags: read protos from all containers" },
  { hash: "76460bd770", date: "2024-04-18", author: "amhk@google.com", message: "check-flagged-apis: add script to run tool on actual data" },
  { hash: "75d934f261", date: "2024-04-18", author: "michaelmerg@google.com", message: "Set enforce SOONG_GEN_COMPDB=1 when running soong for ide_query" },
  { hash: "7cc217459a", date: "2024-04-18", author: "amhk@google.com", message: "check-flagged-apis: simplify unit test dependencies" },
  { hash: "b9cc101bca", date: "2024-04-18", author: "jimtang@google.com", message: "Deprecate USE_PREBUILT_SDK_TOOLS_IN_PLACE" },
  { hash: "112961652b", date: "2024-04-18", author: "inseob@google.com", message: "Build etc/hosts with Soong" },
  { hash: "45c6fd0c17", date: "2024-04-18", author: "inseob@google.com", message: "Merge ＂Build dirty-image-objects in Soong＂ into main" },
  { hash: "4ab55dd760", date: "2024-04-18", author: "zhuoyao@google.com", message: "Merge ＂Add a facility to log tool invocations＂ into main" },
  { hash: "cc44d2e70e", date: "2024-04-17", author: "zhuoyao@google.com", message: "Add a facility to log tool invocations" },
  { hash: "185a3fc892", date: "2024-04-17", author: "vilasbhat@google.com", message: "Merge ＂16k: build: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂ into main" },
  { hash: "e6b424ad4a", date: "2024-04-17", author: "dzshen@google.com", message: "Merge ＂aconfig: add support for local override＂ into main" },
  { hash: "fde34c3b65", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂check-flagged-apis: create list of @FlaggedApi errors＂ into main" },
  { hash: "7978682841", date: "2024-04-17", author: "amhk@google.com", message: "Merge ＂check-flagged-apis: parse API versions XML＂ into main" },
  { hash: "9238a3ab76", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: create list of @FlaggedApi errors" },
  { hash: "e24a1e4ddc", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I397b32ae,Ic244b896,I5ccf2a64 into main" },
  { hash: "b673d3bb7d", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: parse API versions XML" },
  { hash: "387ff6cfe8", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: parse flag names and values" },
  { hash: "20de405dd5", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: parse API signature files" },
  { hash: "f242ec8989", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: add unit test infrastructure" },
  { hash: "9f236037a2", date: "2024-04-17", author: "dzshen@google.com", message: "aconfig: add support for local override" },
  { hash: "9194b690b1", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add dependencies for module which define LOCAL_SOONG_INSTALL_PAIRS＂ into main" },
  { hash: "7b986ab345", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂check-flagged-apis: add Flag value class＂ into main" },
  { hash: "1dbe48454d", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂check-flagged-apis: add Symbol value class＂ into main" },
  { hash: "dc3fc2e0bc", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: add Flag value class" },
  { hash: "e0179976cd", date: "2024-04-17", author: "amhk@google.com", message: "check-flagged-apis: add Symbol value class" },
  { hash: "c3531ebb4b", date: "2024-04-17", author: "inseob@google.com", message: "Build dirty-image-objects in Soong" },
  { hash: "804f4eecb5", date: "2024-04-17", author: "hsinyichen@google.com", message: "Merge changes I35b644fe,Iaec03bd3 into main" },
  { hash: "4feb33fefc", date: "2024-04-17", author: "amhk@google.com", message: "Merge ＂check-flagged-apis: add support for command line options＂ into main" },
  { hash: "e2ec38c51b", date: "2024-04-17", author: "amhk@google.com", message: "Merge ＂check-flagged-apis: add new CLI to verify @FlaggedApi APIs＂ into main" },
  { hash: "c851627d33", date: "2024-04-17", author: "hsinyichen@google.com", message: "Fix check-abi-dump-list" },
  { hash: "f46bc5add9", date: "2024-04-17", author: "hsinyichen@google.com", message: "Define a make target for all APEX dumps" },
  { hash: "fff0d2d02f", date: "2024-04-16", author: "ioffe@google.com", message: "Propagate PRODUCT_AVF_MICRODROID_GUEST_GKI_VERSION to soong" },
  { hash: "70533992f4", date: "2024-04-16", author: "tjmercier@google.com", message: "Merge ＂Add flags for cgroup v2 and memcg v2 features＂ into main" },
  { hash: "2fc519a568", date: "2024-04-16", author: "zhengdaniel@google.com", message: "Merge ＂ota_from_target_files: read correct api level＂ into main" },
  { hash: "dc411eda4c", date: "2024-04-16", author: "zhengdaniel@google.com", message: "ota_from_target_files: read correct api level" },
  { hash: "4023fdfc04", date: "2024-04-16", author: "zhengdaniel@google.com", message: "Revert^2 ＂Turn on V3 cow＂" },
  { hash: "65e34c1138", date: "2024-04-16", author: "minagranic@google.com", message: "Merge ＂Revert ＂Define a make target for all APEX dumps＂＂ into main" },
  { hash: "1a9023376c", date: "2024-04-16", author: "hsinyichen@google.com", message: "Revert ＂Define a make target for all APEX dumps＂" },
  { hash: "8fbc0cfa69", date: "2024-04-16", author: "lus@google.com", message: "Merge ＂Use flag for min supported target sdk＂ into main" },
  { hash: "eb74e25ccb", date: "2024-04-16", author: "hsinyichen@google.com", message: "Merge ＂Define a make target for all APEX dumps＂ into main" },
  { hash: "acfeb11d86", date: "2024-04-16", author: "amhk@google.com", message: "check-flagged-apis: add support for command line options" },
  { hash: "9008724b50", date: "2024-04-16", author: "amhk@google.com", message: "check-flagged-apis: add new CLI to verify @FlaggedApi APIs" },
  { hash: "984b069ce2", date: "2024-04-16", author: "lus@google.com", message: "Use flag for min supported target sdk" },
  { hash: "ea9f51d6f5", date: "2024-04-16", author: "hsinyichen@google.com", message: "Define a make target for all APEX dumps" },
  { hash: "c3f2c7038c", date: "2024-04-16", author: "yangbill@google.com", message: "Add dependencies for module which define LOCAL_SOONG_INSTALL_PAIRS" },
  { hash: "f2b6a44b06", date: "2024-04-16", author: "inseob@google.com", message: "Merge ＂Revert ＂Disable build-time debugfs restrictions on GSI builds＂＂ into main" },
  { hash: "6b5caf0f7f", date: "2024-04-15", author: "weiwli@google.com", message: "Add license metadata declarations." },
  { hash: "8b1e29ae7e", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make output of MakeVbmeta consistent＂ into main" },
  { hash: "f44951d3af", date: "2024-04-15", author: "vilasbhat@google.com", message: "16k: build: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets" },
  { hash: "8f9ca8075f", date: "2024-04-15", author: "tedbauer@google.com", message: "Merge ＂aconfig: switch read api lib to cc_library＂ into main" },
  { hash: "1d9b3daad2", date: "2024-04-15", author: "zhangkelvin@google.com", message: "Make output of MakeVbmeta consistent" },
  { hash: "a40c6380a1", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂＂ into main" },
  { hash: "7c30e914e0", date: "2024-04-15", author: "inseob@google.com", message: "Revert ＂Disable build-time debugfs restrictions on GSI builds＂" },
  { hash: "15783cdcff", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_x86_64＂＂ into main" },
  { hash: "4f9f7219b7", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_arm64＂＂ into main" },
  { hash: "5fcfa8a3c2", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^3 ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂＂ into main" },
  { hash: "28ca2fc0a0", date: "2024-04-13", author: "zhengdaniel@google.com", message: "Merge ＂Revert ＂Turn on V3 cow＂＂ into main" },
  { hash: "fa5bfb9d79", date: "2024-04-12", author: "zhengdaniel@google.com", message: "Revert ＂Turn on V3 cow＂" },
  { hash: "15e3467d6d", date: "2024-04-12", author: "vilasbhat@google.com", message: "Revert^3 ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂" },
  { hash: "25aa14531f", date: "2024-04-12", author: "vilasbhat@google.com", message: "Revert ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_x86_64＂" },
  { hash: "e0d18ffe70", date: "2024-04-12", author: "vilasbhat@google.com", message: "Revert ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_arm64＂" },
  { hash: "36661d4cd0", date: "2024-04-12", author: "dzshen@google.com", message: "aconfig: switch read api lib to cc_library" },
  { hash: "112a57658b", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_arm64＂ into main" },
  { hash: "ef19738567", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂16k: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO only on Android V targets＂ into main" },
  { hash: "7d642b10df", date: "2024-04-12", author: "dzshen@google.com", message: "Merge ＂aconfig: add write api cpp test to presubmit＂ into main" },
  { hash: "39dcf40403", date: "2024-04-12", author: "vilasbhat@google.com", message: "16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_arm64" },
  { hash: "65610a10d5", date: "2024-04-12", author: "dzshen@google.com", message: "Merge ＂aconfig: update flag info query api＂ into main" },
  { hash: "d3123d4f62", date: "2024-04-12", author: "vilasbhat@google.com", message: "16k: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO only on Android V targets" },
  { hash: "eaf40e1675", date: "2024-04-12", author: "vilasbhat@google.com", message: "Merge ＂Revert^2 ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂＂ into main" },
  { hash: "54b92dfe9d", date: "2024-04-12", author: "vilasbhat@google.com", message: "Merge ＂16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_x86_64＂ into main" },
  { hash: "e8fa42f45a", date: "2024-04-12", author: "dzshen@google.com", message: "aconfig: add write api cpp test to presubmit" },
  { hash: "f17dbcd8b7", date: "2024-04-12", author: "dzshen@google.com", message: "aconfig: update flag info query api" },
  { hash: "ab494001f3", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Ensure insertion order of Python dict＂ into main" },
  { hash: "84b485a456", date: "2024-04-12", author: "jeongik@google.com", message: "Revert^2 ＂Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂" },
  { hash: "5ffefcc642", date: "2024-04-12", author: "xiaokang.he@sony.com", message: "Ensure insertion order of Python dict" },
  { hash: "79acb6516c", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂＂ into main" },
  { hash: "5d09b51ba9", date: "2024-04-12", author: "juyuchen@google.com", message: "Revert ＂Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂" },
  { hash: "2d92565fe8", date: "2024-04-12", author: "inseob@google.com", message: "Add soong config variables for selinux" },
  { hash: "1c4c94d784", date: "2024-04-12", author: "vilasbhat@google.com", message: "16k: Enable `PRODUCT_NO_BIONIC_PAGE_SIZE_MACRO` on aosp_x86_64" },
  { hash: "67a789b7ee", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Configure AILabs team＂ into main" },
  { hash: "35839ec1a3", date: "2024-04-11", author: "vilasbhat@google.com", message: "Revert^2 ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂" },
  { hash: "82546539f1", date: "2024-04-11", author: "dzshen@google.com", message: "Merge changes from topic ＂flag_info_write＂ into main" },
  { hash: "d74941b42d", date: "2024-04-11", author: "dzshen@google.com", message: "aconfig: create flag info file write c api" },
  { hash: "4647c0e1f0", date: "2024-04-11", author: "dzshen@google.com", message: "aconfig: create flag info file write rust api" },
  { hash: "2b92885ea4", date: "2024-04-11", author: "yikezh@google.com", message: "Merge ＂Fix `is_unit_test` in module-info＂ into main" },
  { hash: "a279c80e8d", date: "2024-04-11", author: "waghpawan@google.com", message: "Merge ＂Propagate punch holes flag to soong＂ into main" },
  { hash: "e2b76e6db6", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂ into main" },
  { hash: "7cefe70a00", date: "2024-04-11", author: "jeongik@google.com", message: "Expose RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES" },
  { hash: "583dc7f761", date: "2024-04-11", author: "waghpawan@google.com", message: "Propagate punch holes flag to soong" },
  { hash: "ec975bbd68", date: "2024-04-11", author: "dupin@google.com", message: "Configure AILabs team" },
  { hash: "13045cd3cd", date: "2024-04-10", author: "spandandas@google.com", message: "Merge ＂Drop PRODUCT_PACKAGES special-case in source vs prebuilt mainline selection＂ into main" },
  { hash: "d22eee50fa", date: "2024-04-10", author: "dzshen@google.com", message: "Merge changes from topic ＂index_instead_of_offset＂ into main" },
  { hash: "e836a3a2e4", date: "2024-04-10", author: "zhengdaniel@google.com", message: "Merge ＂zstd negative compression support＂ into main" },
  { hash: "8f30661b2d", date: "2024-04-10", author: "spandandas@google.com", message: "Drop PRODUCT_PACKAGES special-case in source vs prebuilt mainline selection" },
  { hash: "d919100382", date: "2024-04-10", author: "zhengdaniel@google.com", message: "zstd negative compression support" },
  { hash: "0efe47967b", date: "2024-04-10", author: "dzshen@google.com", message: "aconfig: update storage write api" },
  { hash: "b18227e8d8", date: "2024-04-10", author: "dzshen@google.com", message: "aconfig: update storage read api" },
  { hash: "a8ba164422", date: "2024-04-10", author: "dzshen@google.com", message: "aconfig: update storage file creation to allow storage files to store flag index instead of byte offset" },
  { hash: "702408ecbb", date: "2024-04-10", author: "dzshen@google.com", message: "aconfig: update storage file to store flag index instead of file byte offset" },
  { hash: "ba67028405", date: "2024-04-10", author: "dzshen@google.com", message: "Merge ＂aconfig: return stored flag type enum as a part of flag offset info＂ into main" },
  { hash: "9fa78d373c", date: "2024-04-10", author: "dzshen@google.com", message: "aconfig: return stored flag type enum as a part of flag offset info" },
  { hash: "ccfb4c284f", date: "2024-04-10", author: "dzshen@google.com", message: "Merge changes from topic ＂flag_info_read_api＂ into main" },
  { hash: "f45c19001f", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop HOST_CROSS_ARCH special-case in source vs prebuilt mainline selection＂ into main" },
  { hash: "85c79a3a3a", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add an option to move 16K ota to vendor partition＂ into main" },
  { hash: "a43378be19", date: "2024-04-09", author: "spandandas@google.com", message: "Drop HOST_CROSS_ARCH special-case in source vs prebuilt mainline selection" },
  { hash: "19805cb372", date: "2024-04-09", author: "zhangkelvin@google.com", message: "Add an option to move 16K ota to vendor partition" },
  { hash: "f52543b2e1", date: "2024-04-09", author: "spandandas@google.com", message: "Merge ＂Drop HOST_CROSS_OS special-case in source vs prebuilt mainline selection＂ into main" },
  { hash: "cf7f5375be", date: "2024-04-09", author: "dzshen@google.com", message: "Merge ＂aconfig: add flag info field to proto＂ into main" },
  { hash: "665827ea7b", date: "2024-04-09", author: "kiyoungkim@google.com", message: "Merge ＂Remove BOARD_VNDK_VERSION usage from Kati＂ into main" },
  { hash: "66481ae8e1", date: "2024-04-09", author: "kiyoungkim@google.com", message: "Remove BOARD_VNDK_VERSION usage from Kati" },
  { hash: "1b58833906", date: "2024-04-09", author: "spandandas@google.com", message: "Drop HOST_CROSS_OS special-case in source vs prebuilt mainline selection" },
  { hash: "8f608682e4", date: "2024-04-08", author: "devinmoore@google.com", message: "Merge ＂Define PRODUCT_HIDL_ENABLED＂ into main" },
  { hash: "cfec7d0f7b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I1a5615e9,I01a673e7 into main" },
  { hash: "5f4028b318", date: "2024-04-08", author: "zhengdaniel@google.com", message: "Merge ＂Revert^2 ＂Turn on V3 cow＂＂ into main" },
  { hash: "bd7435ad88", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop some special casing of source vs prebuilt mainline selection＂ into main" },
  { hash: "5f0b1daebf", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove extra owners from the core build system＂ into main" },
  { hash: "5be7d6abaf", date: "2024-04-08", author: "joeo@google.com", message: "Remove extra owners from the core build system" },
  { hash: "a5a59126c8", date: "2024-04-08", author: "hugojacob@google.com", message: "Merge ＂Added automotive-sdv-tests＂ into main" },
  { hash: "7a17cfd81a", date: "2024-04-08", author: "zhangkelvin@google.com", message: "Remove dependency on non-AB modules" },
  { hash: "307224c7d4", date: "2024-04-08", author: "spandandas@google.com", message: "Drop some special casing of source vs prebuilt mainline selection" },
  { hash: "a69a26c5b3", date: "2024-04-08", author: "zhengdaniel@google.com", message: "Revert^2 ＂Turn on V3 cow＂" },
  { hash: "fdf6d4a744", date: "2024-04-08", author: "amanajas@google.com", message: "Merge ＂Added SDV OWNERS＂ into main" },
  { hash: "1fc56abf5e", date: "2024-04-08", author: "amanajas@google.com", message: "Added SDV OWNERS" },
  { hash: "7e8a80d857", date: "2024-04-08", author: "amanajas@google.com", message: "Added automotive-sdv-tests" },
  { hash: "3feb0dc532", date: "2024-04-08", author: "cliffwang@google.com", message: "Merge ＂＂ into main" },
  { hash: "0930977b55", date: "2024-04-08", author: "amirvosko@google.com", message: "Revert ＂libmdnssd is only used by adbd.＂" },
  { hash: "6cc2ee7a6d", date: "2024-04-08", author: "stephenhou@google.com", message: "Merge ＂Revert ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂＂ into main" },
  { hash: "58ada6f972", date: "2024-04-07", author: "dzshen@google.com", message: "aconfig: add flag info read c api" },
  { hash: "2ac7a4c2bd", date: "2024-04-07", author: "dzshen@google.com", message: "aconfig: add flag info read rust api" },
  { hash: "48a8f59607", date: "2024-04-07", author: "mkbestas@gmail.com", message: "Remove non existent snapuserd.recovery package" },
  { hash: "2354ce95d7", date: "2024-04-07", author: "mkbestas@lineageos.org", message: "Remove android.hardware.wifi from generic_system.mk" },
  { hash: "e4cff9c237", date: "2024-04-07", author: "mkbestas@lineageos.org", message: "Remove WallpaperPicker from aosp_product.mk" },
  { hash: "31971fb99e", date: "2024-04-05", author: "kennet@google.com", message: "Revert ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂" },
  { hash: "6c5aedfbef", date: "2024-04-05", author: "devinmoore@google.com", message: "Define PRODUCT_HIDL_ENABLED" },
  { hash: "667f4ac528", date: "2024-04-05", author: "vilasbhat@google.com", message: "Merge ＂16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets＂ into main" },
  { hash: "52e47884f9", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libmdnssd is only used by adbd.＂ into main" },
  { hash: "06c6eb7919", date: "2024-04-05", author: "spandandas@google.com", message: "Merge ＂Drop special-casing of tv in source/prebuilt selection＂ into main" },
  { hash: "9448b6fb73", date: "2024-04-05", author: "spandandas@google.com", message: "Drop special-casing of tv in source/prebuilt selection" },
  { hash: "eff5363e2d", date: "2024-04-05", author: "dzshen@google.com", message: "aconfig: add flag info field to proto" },
  { hash: "1ecbeae2dd", date: "2024-04-05", author: "enh@google.com", message: "libmdnssd is only used by adbd." },
  { hash: "acfb82cf73", date: "2024-04-05", author: "dzshen@google.com", message: "Merge ＂aconfig: move create flag info file api to aconfig_storage_write_api＂ into main" },
  { hash: "9ec7a00364", date: "2024-04-05", author: "yikezh@google.com", message: "Fix `is_unit_test` in module-info" },
  { hash: "542c741208", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop special-casing of atv in source/prebuilt selection＂ into main" },
  { hash: "e78d4ed255", date: "2024-04-05", author: "zhidou@google.com", message: "Merge ＂aconfig: remove @com.android.aconfig.annotations.AconfigFlagAccessor from the exported mode＂ into main" },
  { hash: "f01a7d82ee", date: "2024-04-04", author: "spandandas@google.com", message: "Drop special-casing of atv in source/prebuilt selection" },
  { hash: "455dc608f3", date: "2024-04-04", author: "dzshen@google.com", message: "aconfig: move create flag info file api to aconfig_storage_write_api" },
  { hash: "bc71cd03b9", date: "2024-04-04", author: "zhidou@google.com", message: "aconfig: remove @com.android.aconfig.annotations.AconfigFlagAccessor from the exported mode" },
  { hash: "83066f6dc0", date: "2024-04-04", author: "dzshen@google.com", message: "Merge ＂aconfig: add create_flag_info cc api＂ into main" },
  { hash: "8d8f816a0f", date: "2024-04-04", author: "spandandas@google.com", message: "Merge ＂Convert BuildIgnoreApexContritbutions variable to a boolean＂ into main" },
  { hash: "f764c46fd8", date: "2024-04-04", author: "devinmoore@google.com", message: "Merge ＂Stop adding HIDL support services in handheld_system_ext.mk＂ into main" },
  { hash: "b80e6a656e", date: "2024-04-03", author: "zhengdaniel@google.com", message: "Merge ＂Revert ＂Turn on V3 cow＂＂ into main" },
  { hash: "93937ac342", date: "2024-04-03", author: "zhidou@google.com", message: "Merge ＂aconfig: prototype AconfigFlagAccessor＂ into main" },
  { hash: "cf3042db77", date: "2024-04-03", author: "dzshen@google.com", message: "Merge ＂aconfig: add api to create flag info file based on package map and flag map file＂ into main" },
  { hash: "21a09420c7", date: "2024-04-03", author: "vilasbhat@google.com", message: "16k: core: Enable TARGET_NO_BIONIC_PAGE_SIZE_MACRO by default on Android V targets" },
  { hash: "2922ca9019", date: "2024-04-03", author: "dzshen@google.com", message: "aconfig: add create_flag_info cc api" },
  { hash: "e59e31cb9d", date: "2024-04-03", author: "zhengdaniel@google.com", message: "Revert ＂Turn on V3 cow＂" },
  { hash: "6b1292065f", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂aflags: add aflags.test to presubmit runs＂ into main" },
  { hash: "18bd5afc16", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Finalization: update OWNERS＂ into main" },
  { hash: "bf1b2ba6b2", date: "2024-04-03", author: "amhk@google.com", message: "Finalization: update OWNERS" },
  { hash: "fb358d6a89", date: "2024-04-03", author: "tedbauer@google.com", message: "aflags: add aflags.test to presubmit runs" },
  { hash: "ddfd2f4889", date: "2024-04-03", author: "zhidou@google.com", message: "aconfig: prototype AconfigFlagAccessor" },
  { hash: "b4231b3705", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Move berberis tests to build/core/tasks＂ into main" },
  { hash: "7f52f2a804", date: "2024-04-03", author: "spandandas@google.com", message: "Convert BuildIgnoreApexContritbutions variable to a boolean" },
  { hash: "1f05292075", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix the VSR_VENDOR_API_LEVEL calculation＂ into main" },
  { hash: "d756813799", date: "2024-04-02", author: "devinmoore@google.com", message: "Stop adding HIDL support services in handheld_system_ext.mk" },
  { hash: "bb9912e551", date: "2024-04-02", author: "dzshen@google.com", message: "aconfig: add api to create flag info file based on package map and flag map file" },
  { hash: "a77155cd70", date: "2024-04-02", author: "dzshen@google.com", message: "Merge ＂aconfig: add flag type information to list flag api＂ into main" },
  { hash: "261857faac", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add PRODUCT_MODULE_BUILD_FROM_SOURCE to sdk's product config＂ into main" },
  { hash: "e66f98fe7d", date: "2024-04-02", author: "spandandas@google.com", message: "Add PRODUCT_MODULE_BUILD_FROM_SOURCE to sdk's product config" },
  { hash: "7d12daf9b4", date: "2024-04-02", author: "dzshen@google.com", message: "aconfig: add flag type information to list flag api" },
  { hash: "9c7a000d6f", date: "2024-04-02", author: "dzshen@google.com", message: "Merge ＂aconfig: enable tests in presubmits＂ into main" },
  { hash: "d740c50331", date: "2024-04-02", author: "dzshen@google.com", message: "Merge ＂aconfig: test updates＂ into main" },
  { hash: "20e7d0fe3d", date: "2024-04-02", author: "weiwli@google.com", message: "Merge ＂Add some comments to the field ＂third_party.identifier.type＂ in METADATA files.＂ into main" },
  { hash: "4dc089971b", date: "2024-04-02", author: "zhangkelvin@google.com", message: "Make build_image output consistent for partitions w/o build.prop" },
  { hash: "467d22f2a8", date: "2024-04-02", author: "dzshen@google.com", message: "aconfig: enable tests in presubmits" },
  { hash: "3e4c33c1bc", date: "2024-04-02", author: "dzshen@google.com", message: "aconfig: test updates" },
  { hash: "85f5c34e0a", date: "2024-04-02", author: "nelsonli@google.com", message: "Move berberis tests to build/core/tasks" },
  { hash: "a9af5851ce", date: "2024-04-02", author: "justinyun@google.com", message: "Fix the VSR_VENDOR_API_LEVEL calculation" },
  { hash: "eb59dd9cbd", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Convert device/sample/Android.mk to Android.bp＂ into main" },
]});
repoLogs.push({ path: "build/pesto", logs: [
]});
repoLogs.push({ path: "build/release", logs: [
  { hash: "229c235", date: "2024-04-19", author: "ntmyren@google.com", message: "Add and enable flag for writing appcomppat system properties" },
  { hash: "77a2325", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable flag for punch holes in trunk＂ into main" },
  { hash: "07d2851", date: "2024-04-19", author: "waghpawan@google.com", message: "Enable flag for punch holes in trunk" },
  { hash: "9ff8e14", date: "2024-04-18", author: "shombert@google.com", message: "Advance sqlite 3.44.3 to next on aosp" },
  { hash: "6be9557", date: "2024-04-16", author: "lus@google.com", message: "Introduce flag for min supported target sdk" },
  { hash: "5dbf810", date: "2024-04-15", author: "lamontjones@google.com", message: "Drop ＂staging＂ release_config." },
  { hash: "f833d80", date: "2024-04-11", author: "waghpawan@google.com", message: "Enable flag for punch holes in trunk staging" },
  { hash: "742ca2b", date: "2024-04-11", author: "waghpawan@google.com", message: "Add a build flag for punching holes" },
  { hash: "0806cab", date: "2024-04-10", author: "ioffe@google.com", message: "Merge ＂Use android15-6.6 microdroid kernel in trunk＂ into main" },
  { hash: "162ddbb", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Advance sqlite 3.44.3 to trunk on aosp＂ into main" },
  { hash: "3605790", date: "2024-04-08", author: "shombert@google.com", message: "Advance sqlite 3.44.3 to trunk on aosp" },
  { hash: "e0503b7", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂ into main" },
  { hash: "21a66bd", date: "2024-04-05", author: "jeongik@google.com", message: "Merge ＂Define RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES＂ into main" },
  { hash: "d1d8c77", date: "2024-04-04", author: "emarteca@google.com", message: "Merge ＂Add a build flag for storage areas＂ into main" },
  { hash: "6039241", date: "2024-04-04", author: "emarteca@google.com", message: "Add a build flag for storage areas" },
  { hash: "40a35c8", date: "2024-04-04", author: "ioffe@google.com", message: "Use android15-6.6 microdroid kernel in trunk" },
  { hash: "ec9072c", date: "2024-04-04", author: "jeongik@google.com", message: "Enable RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES" },
  { hash: "4e46f42", date: "2024-04-04", author: "jeongik@google.com", message: "Define RELEASE_AVF_SUPPORT_CUSTOM_VM_WITH_PARAVIRTUALIZED_DEVICES" },
  { hash: "f5ae641", date: "2024-04-03", author: "jihoonkang@google.com", message: "Merge ＂Enable com.android.libcore.v_apis in all release configurations＂ into main" },
  { hash: "5c5156e", date: "2024-04-03", author: "jihoonkang@google.com", message: "Enable com.android.libcore.v_apis in all release configurations" },
]});
repoLogs.push({ path: "build/soong", logs: [
  { hash: "996c883b6", date: "2024-04-26", author: "jeffdq@google.com", message: "Merge ＂Ensure aconfig generated CustomFeatureFlags is renamed by JarJar＂ into main" },
  { hash: "8e4060abc", date: "2024-04-26", author: "tedbauer@google.com", message: "Merge ＂Switch to static deps＂ into main" },
  { hash: "1e96f8c62", date: "2024-04-26", author: "tedbauer@google.com", message: "Switch to static deps" },
  { hash: "24cd8c375", date: "2024-04-25", author: "yudiliu@google.com", message: "Merge ＂Only link the profile extras lib for device variant for rust.＂ into main" },
  { hash: "21ed4694c", date: "2024-04-25", author: "ccross@android.com", message: "Allow overriding android_library_import manifests" },
  { hash: "473b3557f", date: "2024-04-25", author: "hsinyichen@google.com", message: "Merge ＂Split APEX ABI dumps from implementation ABI dumps＂ into main" },
  { hash: "98da02128", date: "2024-04-25", author: "hsinyichen@google.com", message: "Split APEX ABI dumps from implementation ABI dumps" },
  { hash: "a559cab24", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂add flag_value.redacted＂ into main" },
  { hash: "c66702491", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Shard rust protobuf sources＂ into main" },
  { hash: "fa6dac201", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂crunch_flags: keep-sorted lines are not descriptions＂ into main" },
  { hash: "703248196", date: "2024-04-24", author: "colefaust@google.com", message: "Merge ＂Keep replace_instead_of_append in arch prop structs＂ into main" },
  { hash: "0c07d4658", date: "2024-04-24", author: "congxiliu@google.com", message: "Merge ＂Added Strict_mode logic catch direct usage of Robolectric reference＂ into main" },
  { hash: "ccb2207cf", date: "2024-04-24", author: "lamontjones@google.com", message: "add flag_value.redacted" },
  { hash: "11209e125", date: "2024-04-24", author: "lamontjones@google.com", message: "crunch_flags: keep-sorted lines are not descriptions" },
  { hash: "5fda87b82", date: "2024-04-24", author: "colefaust@google.com", message: "Keep replace_instead_of_append in arch prop structs" },
  { hash: "cab89b51c", date: "2024-04-24", author: "congxiliu@google.com", message: "Added Strict_mode logic catch direct usage of Robolectric reference" },
  { hash: "4fd15223f", date: "2024-04-24", author: "jeffdq@google.com", message: "Ensure aconfig generated CustomFeatureFlags is renamed by JarJar" },
  { hash: "79cd6899c", date: "2024-04-23", author: "spandandas@google.com", message: "Remove cc_api_library related code from sdkMutator" },
  { hash: "6d2656ef1", date: "2024-04-23", author: "spandandas@google.com", message: "Add .swp files to .gitignore" },
  { hash: "b39c877ae", date: "2024-04-23", author: "tedbauer@google.com", message: "Merge ＂Add aconfig storage API deps to codegened lib＂ into main" },
  { hash: "383592853", date: "2024-04-23", author: "hwj@google.com", message: "Merge ＂Generate test lists for Ravenwood and Robolectric tests＂ into main" },
  { hash: "5e94e60cb", date: "2024-04-23", author: "emarteca@google.com", message: "Merge ＂Adds support to bindgen to handle static inline fcts＂ into main" },
  { hash: "88b3e0c33", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Ignore the .vscode/ folder＂ into main" },
  { hash: "f0f18591a", date: "2024-04-23", author: "tedbauer@google.com", message: "Add aconfig storage API deps to codegened lib" },
  { hash: "f526863a4", date: "2024-04-23", author: "ccross@android.com", message: "Shard rust protobuf sources" },
  { hash: "243e704ed", date: "2024-04-23", author: "colefaust@google.com", message: "Ignore the .vscode/ folder" },
  { hash: "a4362b937", date: "2024-04-23", author: "paulduffin@google.com", message: "Merge ＂Use new --api-lint-previous-api＂ into main" },
  { hash: "8a2427cad", date: "2024-04-23", author: "ricow@google.com", message: "Merge ＂Enable non final ids for non BusyBox builds＂ into main" },
  { hash: "4eecd990d", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add more comments about soong config variables＂ into main" },
  { hash: "d47220d47", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add support to Soong config list variable＂ into main" },
  { hash: "810c37ec1", date: "2024-04-23", author: "emarteca@google.com", message: "Adds support to bindgen to handle static inline fcts" },
  { hash: "b0a4e48c1", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂PackageFile for permission/*.xml for sdk_library＂ into main" },
  { hash: "affbd19c6", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Include stubs type in metalava.rsp filename＂ into main" },
  { hash: "aff61bf52", date: "2024-04-22", author: "yikong@google.com", message: "Merge ＂Revert^3 ＂Upgrade to clang-r522817＂＂ into main" },
  { hash: "33fb50727", date: "2024-04-22", author: "yikong@google.com", message: "Revert^3 ＂Upgrade to clang-r522817＂" },
  { hash: "0a71d7329", date: "2024-04-22", author: "paulduffin@google.com", message: "Use new --api-lint-previous-api" },
  { hash: "421c1cd79", date: "2024-04-22", author: "jihoonkang@google.com", message: "Include stubs type in metalava.rsp filename" },
  { hash: "00e0991f7", date: "2024-04-23", author: "jeongik@google.com", message: "PackageFile for permission/*.xml for sdk_library" },
  { hash: "a17792e2e", date: "2024-04-22", author: "ccross@android.com", message: "Merge ＂Remove more unused code＂ into main" },
  { hash: "757e88a9d", date: "2024-04-22", author: "ccross@android.com", message: "Merge ＂Convert apex mutator to a TransitionMutator＂ into main" },
  { hash: "68305164c", date: "2024-04-22", author: "colefaust@google.com", message: "Merge ＂Revert^2 ＂Make embedded_launcher true by default＂＂ into main" },
  { hash: "7252e3289", date: "2024-04-22", author: "yikong@google.com", message: "Merge ＂Revert^2 ＂Upgrade to clang-r522817＂＂ into main" },
  { hash: "7152e82a4", date: "2024-04-22", author: "ricow@google.com", message: "Enable non final ids for non BusyBox builds" },
  { hash: "7a4012586", date: "2024-04-22", author: "yikong@google.com", message: "Revert^2 ＂Upgrade to clang-r522817＂" },
  { hash: "db70a80cc", date: "2024-04-22", author: "sorinbasca@google.com", message: "Merge ＂Add Java 21 as a known version＂ into main" },
  { hash: "aa1ce0385", date: "2024-04-22", author: "inseob@google.com", message: "Add more comments about soong config variables" },
  { hash: "02c8618e1", date: "2024-04-22", author: "inseob@google.com", message: "Add support to Soong config list variable" },
  { hash: "299d62dd5", date: "2024-04-19", author: "hwj@google.com", message: "Generate test lists for Ravenwood and Robolectric tests" },
  { hash: "d50832c12", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add TestOnlyProvider for test_module_config＂ into main" },
  { hash: "40639d7d7", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Support passing multiple last api files to metalava in droidstubs＂ into main" },
  { hash: "2182c08f3", date: "2024-04-19", author: "spandandas@google.com", message: "Merge ＂Drop use_source_config_var from prebuilt selection＂ into main" },
  { hash: "5623e5425", date: "2024-04-19", author: "jihoonkang@google.com", message: "Support passing multiple last api files to metalava in droidstubs" },
  { hash: "d3b020a8c", date: "2024-04-19", author: "paulduffin@google.com", message: "Enable system and module-lib APIs in TestSnapshotWithJavaSystemModules" },
  { hash: "1fe2cc883", date: "2024-04-19", author: "sorinbasca@google.com", message: "Add Java 21 as a known version" },
  { hash: "2ddb22ce9", date: "2024-04-19", author: "phenixchen@google.com", message: "Merge ＂Revert ＂Upgrade to clang-r522817＂＂ into main" },
  { hash: "321dd23b3", date: "2024-04-19", author: "phenixchen@google.com", message: "Revert ＂Upgrade to clang-r522817＂" },
  { hash: "d245346df", date: "2024-04-19", author: "rbraunstein@google.com", message: "Add TestOnlyProvider for test_module_config" },
  { hash: "1f0aeb064", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Prefer variants test-only:true attribute when grouping.＂ into main" },
  { hash: "d4ad78f44", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂lamont-build-tools-build-flag＂ into main" },
  { hash: "587c40f21", date: "2024-04-18", author: "rbraunstein@google.com", message: "Merge ＂Implement test-only for python_ rules＂ into main" },
  { hash: "c864b242d", date: "2024-04-18", author: "rbraunstein@google.com", message: "Prefer variants test-only:true attribute when grouping." },
  { hash: "7e674e69e", date: "2024-04-18", author: "spandandas@google.com", message: "Drop use_source_config_var from prebuilt selection" },
  { hash: "7694cdd6b", date: "2024-04-18", author: "yikong@google.com", message: "Merge ＂Upgrade to clang-r522817＂ into main" },
  { hash: "7c035064d", date: "2024-04-18", author: "ccross@android.com", message: "Convert apex mutator to a TransitionMutator" },
  { hash: "f0cf1cce9", date: "2024-04-18", author: "yudiliu@google.com", message: "Only link the profile extras lib for device variant for rust." },
  { hash: "f09101e78", date: "2024-04-18", author: "colefaust@google.com", message: "Revert^2 ＂Make embedded_launcher true by default＂" },
  { hash: "e292efada", date: "2024-04-18", author: "lamontjones@google.com", message: "Bootstrap out/release-config early" },
  { hash: "b9014c74f", date: "2024-04-18", author: "lamontjones@google.com", message: "Add crunch-flags and build-flag binaries" },
  { hash: "14e2ac68e", date: "2024-04-18", author: "lamontjones@google.com", message: "release_config: cleanup how we emit results" },
  { hash: "7ac07deb9", date: "2024-04-18", author: "lamontjones@google.com", message: "Print a warning on redundant overrides" },
  { hash: "f018d726c", date: "2024-04-18", author: "lamontjones@google.com", message: "Add description to release_config_map message" },
  { hash: "dccbef36a", date: "2024-04-18", author: "yikong@google.com", message: "Upgrade to clang-r522817" },
  { hash: "17b9a5b8b", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow dexpreopt of source sdklib in prebuilt apex builds＂ into main" },
  { hash: "5ae65ee6e", date: "2024-04-17", author: "spandandas@google.com", message: "Allow dexpreopt of source sdklib in prebuilt apex builds" },
  { hash: "e25cc5c90", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Use Module interface in addRequiredDeps＂＂ into main" },
  { hash: "7bfe1377a", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove extractEncodedDexJarsFromModules＂ into main" },
  { hash: "6d6d067c3", date: "2024-04-17", author: "jihoonkang@google.com", message: "Remove extractEncodedDexJarsFromModules" },
  { hash: "48a01ad14", date: "2024-04-17", author: "jihoonkang@google.com", message: "Merge ＂Unify the behaviors of Shard*(...) utility functions＂ into main" },
  { hash: "f21dd65c0", date: "2024-04-17", author: "jiyong@google.com", message: "Revert^2 ＂Use Module interface in addRequiredDeps＂" },
  { hash: "5ff02b500", date: "2024-04-17", author: "darenliao@google.com", message: "Merge ＂Revert ＂Use Module interface in addRequiredDeps＂＂ into main" },
  { hash: "bbcdaa0c3", date: "2024-04-17", author: "darenliao@google.com", message: "Revert ＂Use Module interface in addRequiredDeps＂" },
  { hash: "cd5bfe2bf", date: "2024-04-17", author: "jihoonkang@google.com", message: "Unify the behaviors of Shard*(...) utility functions" },
  { hash: "c4cd7a11a", date: "2024-04-16", author: "rbraunstein@google.com", message: "Implement test-only for python_ rules" },
  { hash: "4e1cf60c1", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Change the syntax for arch selecting and add os selecting＂ into main" },
  { hash: "8f8b695f6", date: "2024-04-16", author: "jiyong@google.com", message: "Merge ＂Use Module interface in addRequiredDeps＂ into main" },
  { hash: "2b11ced7c", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I4a044e86,Ibf8b0feb,I2e1d7ac7,Icc61f2c3 into main" },
  { hash: "9132ced40", date: "2024-04-16", author: "ccross@android.com", message: "Remove sort from mergeApexVariations" },
  { hash: "76e05c8ca", date: "2024-04-16", author: "lamontjones@google.com", message: "Merge changes If068597b,Icbadbe6d into main" },
  { hash: "1a8906d93", date: "2024-04-16", author: "colefaust@google.com", message: "Merge ＂Update the ConfigurableEvaluator for typed selects＂ into main" },
  { hash: "af333f5ae", date: "2024-04-16", author: "ccross@android.com", message: "Support reading Providers from TransitionMutator IncomingTransition and OutgoingTransition" },
  { hash: "d67425d76", date: "2024-04-16", author: "ccross@android.com", message: "Set DebugMutators and DebugVariations when creating Transition variations" },
  { hash: "7b0975d42", date: "2024-04-16", author: "ccross@android.com", message: "Fix more tests when ANDROID_BUILD_TOP is set" },
  { hash: "9a8255f48", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂cherrypicker-L27000030003160683:N90900030051335582＂ into main" },
  { hash: "ba270c503", date: "2024-04-16", author: "lus@google.com", message: "Update soong to use flag for min supported sdk" },
  { hash: "ac79679f7", date: "2024-04-15", author: "lamontjones@google.com", message: "release_config: make the code more sharable" },
  { hash: "6a08d4915", date: "2024-04-15", author: "rbraunstein@google.com", message: "Add test-only for test-per-src cc modules" },
  { hash: "e6f5468ef", date: "2024-04-15", author: "lamontjones@google.com", message: "release_config: add namespace to proto" },
  { hash: "935b4db4c", date: "2024-04-15", author: "ccross@android.com", message: "Merge ＂rust: Remove unnecessary escaping in grep call＂ into main" },
  { hash: "369370818", date: "2024-04-15", author: "jiakaiz@google.com", message: "Propagate transitive missing optional_uses_libs." },
  { hash: "f98da19a0", date: "2024-04-15", author: "jiakaiz@google.com", message: "Refactor the contruction of the manifest check inputs." },
  { hash: "c0df1afc0", date: "2024-04-15", author: "hsinyichen@google.com", message: "Merge ＂Pass system include dirs to header ABI checker＂ into main" },
  { hash: "de18a3d55", date: "2024-04-13", author: "jiyong@google.com", message: "Use Module interface in addRequiredDeps" },
  { hash: "06485000d", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Let `deps` property be conditional on debuggability＂ into main" },
  { hash: "9a7898d80", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow override of -Wno-error=format＂ into main" },
  { hash: "ef0cbf11a", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove duplicates in PathsAndMissingDepsRelativeToModuleSourceDir＂ into main" },
  { hash: "720146b2f", date: "2024-04-12", author: "rbraunstein@google.com", message: "Merge ＂Add ＂test-only＂ flag for java modules＂ into main" },
  { hash: "c5c54803e", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add support for transitive resources to android_library_import＂ into main" },
  { hash: "0e3a5352e", date: "2024-04-12", author: "jihoonkang@google.com", message: "Remove duplicates in PathsAndMissingDepsRelativeToModuleSourceDir" },
  { hash: "76d1b42c9", date: "2024-04-12", author: "ccross@android.com", message: "Remove more unused code" },
  { hash: "607bbd64d", date: "2024-04-12", author: "ccross@android.com", message: "Add support for transitive resources to android_library_import" },
  { hash: "cdc66f426", date: "2024-04-12", author: "rbraunstein@google.com", message: "Add ＂test-only＂ flag for java modules" },
  { hash: "91c74762f", date: "2024-04-12", author: "alex.corcoles@veecle.io", message: "rust: Remove unnecessary escaping in grep call" },
  { hash: "62532d7d6", date: "2024-04-12", author: "jiyong@google.com", message: "Let `deps` property be conditional on debuggability" },
  { hash: "fc5cdcbdf", date: "2024-04-12", author: "jyescas@google.com", message: "Include __BIONIC_NO_PAGE_SIZE_MACRO flag to avoid breaking libraries" },
  { hash: "a115e2615", date: "2024-04-12", author: "rbraunstein@google.com", message: "Add ＂test-only＂ flag for cc modules" },
  { hash: "80214e550", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Strip relative paths from java_import output files＂ into main" },
  { hash: "5e87f349b", date: "2024-04-11", author: "ccross@android.com", message: "Strip relative paths from java_import output files" },
  { hash: "0565fdc3c", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make app.go not executable＂ into main" },
  { hash: "7a51454f5", date: "2024-04-11", author: "colefaust@google.com", message: "Make app.go not executable" },
  { hash: "1065ed8fb", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂java_sdk_library: Use WriteFileRule for writing permissions.xml＂ into main" },
  { hash: "7965e1c9a", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove unused writeFile var＂ into main" },
  { hash: "fc57d40bf", date: "2024-04-11", author: "colefaust@google.com", message: "Change the syntax for arch selecting and add os selecting" },
  { hash: "fdbf5d476", date: "2024-04-11", author: "colefaust@google.com", message: "Update the ConfigurableEvaluator for typed selects" },
  { hash: "033ffb953", date: "2024-04-11", author: "jihoonkang@google.com", message: "Merge ＂Collect aconfig_declarations of the dependent java_aconfig_library modules＂ into main" },
  { hash: "291a4912d", date: "2024-04-11", author: "charliebout@google.com", message: "Merge ＂Revert ＂Make embedded_launcher true by default＂＂ into main" },
  { hash: "d5b05655b", date: "2024-04-11", author: "spandandas@google.com", message: "Merge ＂Revert ＂Add the implicit deps of javacRE＂＂ into main" },
  { hash: "578066be9", date: "2024-04-11", author: "charliebout@google.com", message: "Revert ＂Make embedded_launcher true by default＂" },
  { hash: "2aee601e9", date: "2024-04-11", author: "ivanlozano@google.com", message: "Merge ＂rust: Fix handling of bindgen header libs＂ into main" },
  { hash: "d0476e465", date: "2024-04-11", author: "annabauza@google.com", message: "Revert ＂Add the implicit deps of javacRE＂" },
  { hash: "d344c35e9", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂rustc-1.77.1 Build 11685613＂ into main" },
  { hash: "eefabc8a6", date: "2024-04-10", author: "licorne@google.com", message: "Allow override of -Wno-error=format" },
  { hash: "e35973bce", date: "2024-04-10", author: "colefaust@google.com", message: "Merge ＂Make embedded_launcher true by default＂ into main" },
  { hash: "8d1b2db53", date: "2024-04-10", author: "smoreland@google.com", message: "Merge ＂Use __BIONIC_DEPRECATED_PAGE_SIZE_MACRO.＂ into main" },
  { hash: "fc4d366e3", date: "2024-04-10", author: "spandandas@google.com", message: "Merge ＂Add the implicit deps of javacRE＂ into main" },
  { hash: "48d11dde9", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂release_config: Initial implementation＂ into main" },
  { hash: "1eccbf24c", date: "2024-04-10", author: "lamontjones@google.com", message: "release_config: Initial implementation" },
  { hash: "1816cde8c", date: "2024-04-10", author: "paulduffin@google.com", message: "java_sdk_library: Use WriteFileRule for writing permissions.xml" },
  { hash: "7f5073a94", date: "2024-04-10", author: "paulduffin@google.com", message: "Remove unused writeFile var" },
  { hash: "5f228b0c1", date: "2024-04-10", author: "hsinyichen@google.com", message: "Pass system include dirs to header ABI checker" },
  { hash: "1edffe1dc", date: "2024-04-10", author: "hsinyichen@google.com", message: "Merge ＂Filter ABI dumps by LLNDK headers and version scripts＂ into main" },
  { hash: "98d46751e", date: "2024-04-10", author: "rbraunstein@google.com", message: "Merge ＂Add test-only and test-target fields to all_teams proto.＂ into main" },
  { hash: "eaa475107", date: "2024-04-10", author: "spandandas@google.com", message: "Add the implicit deps of javacRE" },
  { hash: "c63c4306c", date: "2024-04-09", author: "appujee@google.com", message: "Merge ＂Add deps to blocklist path＂ into main" },
  { hash: "c560309e3", date: "2024-04-09", author: "rbraunstein@google.com", message: "Add test-only and test-target fields to all_teams proto." },
  { hash: "52a08486f", date: "2024-04-09", author: "jiyong@google.com", message: "Merge ＂android_filesystem_defaults and visibility rule＂ into main" },
  { hash: "92b7f386e", date: "2024-04-09", author: "chiw@google.com", message: "rustc-1.77.1 Build 11685613" },
  { hash: "8982b1c49", date: "2024-04-09", author: "colefaust@google.com", message: "Remove ＂exported＂ ninja variables" },
  { hash: "64b2d0389", date: "2024-04-09", author: "hsinyichen@google.com", message: "Filter ABI dumps by LLNDK headers and version scripts" },
  { hash: "ccd5b5545", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fix: required property doesn't track deps to java, apex, ...＂ into main" },
  { hash: "f46b1af96", date: "2024-04-09", author: "jiyong@google.com", message: "android_filesystem_defaults and visibility rule" },
  { hash: "f28b5697b", date: "2024-04-09", author: "nikolayelenkov@google.com", message: "Merge ＂Add secretkeeper-v1-java to platform APIs＂ into main" },
  { hash: "39011ef40", date: "2024-04-08", author: "jiyong@google.com", message: "Merge ＂APEX can depend on non-APEX module and vice versa＂ into main" },
  { hash: "42a8b256a", date: "2024-04-08", author: "colefaust@google.com", message: "Merge changes from topics ＂replace_instead_of_append＂, ＂selects_get_and_get_default＂ into main" },
  { hash: "ed2adb879", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove Device VNDK version usage from Soong＂ into main" },
  { hash: "2a481368b", date: "2024-04-08", author: "smoreland@google.com", message: "Use __BIONIC_DEPRECATED_PAGE_SIZE_MACRO." },
  { hash: "97d771adf", date: "2024-04-08", author: "ioffe@google.com", message: "Merge ＂Add support for rollback_index to android_filesystem module＂ into main" },
  { hash: "d22fcc425", date: "2024-04-08", author: "hsinyichen@google.com", message: "Merge ＂Let LLNDK implementation libraries depend on LLNDK headers＂ into main" },
  { hash: "afacc090e", date: "2024-04-05", author: "jihoonkang@google.com", message: "Merge ＂Revert^2 ＂Include all_aconfig_declarations in docs dist＂＂ into main" },
  { hash: "73e5babaf", date: "2024-04-05", author: "jiyong@google.com", message: "fix: required property doesn't track deps to java, apex, ..." },
  { hash: "fc095e679", date: "2024-04-05", author: "jiyong@google.com", message: "APEX can depend on non-APEX module and vice versa" },
  { hash: "fe66e1371", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Deprecate Snapshot build＂ into main" },
  { hash: "133a6d9e6", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Return the header jar of the implementation library in SdkHeaderJars()＂ into main" },
  { hash: "4e765b1bf", date: "2024-04-05", author: "kiyoungkim@google.com", message: "Remove Device VNDK version usage from Soong" },
  { hash: "37693d0a2", date: "2024-04-05", author: "kiyoungkim@google.com", message: "Deprecate Snapshot build" },
  { hash: "29cd82b71", date: "2024-04-05", author: "spandandas@google.com", message: "Merge ＂Reland ＂Use cp instead of install for ndk_headers＂＂ into main" },
  { hash: "8479dea80", date: "2024-04-05", author: "jihoonkang@google.com", message: "Return the header jar of the implementation library in SdkHeaderJars()" },
  { hash: "f280b23fe", date: "2024-04-04", author: "spandandas@google.com", message: "Reland ＂Use cp instead of install for ndk_headers＂" },
  { hash: "b78ce43ae", date: "2024-04-04", author: "colefaust@google.com", message: "Rename Evaluate() to Get() and add GetDefault()" },
  { hash: "02dd6e564", date: "2024-04-04", author: "colefaust@google.com", message: "Add tests for android:replace_instead_of_append" },
  { hash: "683316a2b", date: "2024-04-04", author: "colefaust@google.com", message: "Rename default select branch to 'default' keyword" },
  { hash: "767a1fe66", date: "2024-04-04", author: "colefaust@google.com", message: "Merge ＂Add tests for ＂unset＂ select statements＂ into main" },
  { hash: "b6107abe0", date: "2024-04-04", author: "vichang@google.com", message: "Merge ＂Add SPDX-license-identifier-Unicode-3.0＂ into main" },
  { hash: "b00d52d52", date: "2024-04-04", author: "spandandas@google.com", message: "Merge ＂Convert BuildIgnoreApexContritbutions variable to a boolean＂ into main" },
  { hash: "6f591bf8f", date: "2024-04-04", author: "spandandas@google.com", message: "Merge ＂Revert ＂Use cp instead of install for ndk_headers＂＂ into main" },
  { hash: "12c8ed460", date: "2024-04-04", author: "colefaust@google.com", message: "Add tests for ＂unset＂ select statements" },
  { hash: "b9ca4d3ff", date: "2024-04-04", author: "jihoonkang@google.com", message: "Revert^2 ＂Include all_aconfig_declarations in docs dist＂" },
  { hash: "c299c3f91", date: "2024-04-04", author: "spandandas@google.com", message: "Revert ＂Use cp instead of install for ndk_headers＂" },
  { hash: "e5e0fb0fe", date: "2024-04-04", author: "spandandas@google.com", message: "Merge ＂Use cp instead of install for ndk_headers＂ into main" },
  { hash: "2c8cdc616", date: "2024-04-04", author: "ioffe@google.com", message: "Add support for rollback_index to android_filesystem module" },
  { hash: "576b4f1a7", date: "2024-04-04", author: "hsinyichen@google.com", message: "Merge ＂Refactor header ABI checker code＂ into main" },
  { hash: "1202729cb", date: "2024-04-04", author: "spandandas@google.com", message: "Use cp instead of install for ndk_headers" },
  { hash: "4caca1d79", date: "2024-04-04", author: "inseob@google.com", message: "Merge ＂Add libs for BuildManifest.apk generation＂ into main" },
  { hash: "6e6f52281", date: "2024-04-03", author: "appujee@google.com", message: "Add deps to blocklist path" },
  { hash: "0c8ed5e58", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop host variant of lidbexfile in >=V snapshots＂ into main" },
  { hash: "cfff924ef", date: "2024-04-03", author: "spandandas@google.com", message: "Drop host variant of lidbexfile in >=V snapshots" },
  { hash: "7805edb94", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update Android.mk denylist to block `frameworks/`＂ into main" },
  { hash: "32e1b930e", date: "2024-04-03", author: "jihoonkang@google.com", message: "Merge ＂Add API compatilibility flags to the exportable stubs＂ into main" },
  { hash: "ad3dae878", date: "2024-04-03", author: "nelsonli@google.com", message: "Update Android.mk denylist to block `frameworks/`" },
  { hash: "1e6afedb9", date: "2024-04-03", author: "inseob@google.com", message: "Add libs for BuildManifest.apk generation" },
  { hash: "715142a20", date: "2024-04-03", author: "hsinyichen@google.com", message: "Let LLNDK implementation libraries depend on LLNDK headers" },
  { hash: "af369886e", date: "2024-04-03", author: "hsinyichen@google.com", message: "Refactor header ABI checker code" },
  { hash: "0d24adea7", date: "2024-04-03", author: "spandandas@google.com", message: "Convert BuildIgnoreApexContritbutions variable to a boolean" },
  { hash: "6954bd233", date: "2024-04-03", author: "kiyoungkim@google.com", message: "Merge ＂Remove PlatformVndkVersion property＂ into main" },
  { hash: "ff54ac08b", date: "2024-04-02", author: "useche@google.com", message: "Merge ＂Add global C flags to compile_commands＂ into main" },
  { hash: "eabd1ef48", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Strip relative paths from android_library_import output files＂ into main" },
  { hash: "342fa6b92", date: "2024-04-02", author: "useche@google.com", message: "Add global C flags to compile_commands" },
  { hash: "28ac2ffc8", date: "2024-04-02", author: "ccross@android.com", message: "Strip relative paths from android_library_import output files" },
  { hash: "ddb2ee512", date: "2024-04-02", author: "mrziwang@google.com", message: "Move jarjar repackage action before combine action" },
  { hash: "f16c5a0a7", date: "2024-04-02", author: "inseob@google.com", message: "Merge ＂Add support to generate fsverity metadata＂ into main" },
  { hash: "0553cf844", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Support `pyhon_rule_defaults` in Soong＂ into main" },
  { hash: "683d7316c", date: "2024-04-02", author: "kiyoungkim@google.com", message: "Merge ＂Remove VNDK information from Rust, etc, and sysprop tests＂ into main" },
  { hash: "e8abc2389", date: "2024-04-02", author: "spandandas@google.com", message: "Merge ＂Add a warning that Use_source_config_var is being deprecated.＂ into main" },
  { hash: "5339184e3", date: "2024-04-02", author: "inseob@google.com", message: "Add support to generate fsverity metadata" },
]});
repoLogs.push({ path: "cts", logs: [
  { hash: "e3e9d4644f2", date: "2024-04-26", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂CtsVerifier: consistent directory and archive name in report export.＂ into android13-tests-dev am: d47018601b＂ into android14-tests-dev am: 82f742e72d＂ into main" },
  { hash: "442cc4afb67", date: "2024-04-26", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂CtsVerifier: consistent directory and archive name in report export.＂ into android13-tests-dev am: d47018601b＂ into android14-tests-dev am: 82f742e72d" },
  { hash: "82f742e72d5", date: "2024-04-26", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂CtsVerifier: consistent directory and archive name in report export.＂ into android13-tests-dev am: d47018601b＂ into android14-tests-dev" },
  { hash: "149c26df602", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂CtsVerifier: consistent directory and archive name in report export.＂ into android13-tests-dev am: d47018601b" },
  { hash: "d47018601b9", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂CtsVerifier: consistent directory and archive name in report export.＂ into android13-tests-dev" },
  { hash: "ac5faf2b40d", date: "2024-04-26", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix that creating the screenshot directory may fail above SDK 29.＂ into android14-tests-dev am: 34c0069385＂ into main" },
  { hash: "0a36647bba0", date: "2024-04-26", author: "kgui@google.com", message: "Merge ＂Fix that creating the screenshot directory may fail above SDK 29.＂ into android14-tests-dev am: 34c0069385" },
  { hash: "4e32b47174f", date: "2024-04-26", author: "diegovela@google.com", message: "Merge ＂[conflict] Merge ＂Fix flaky fold test related to PiP.＂ into android14-tests-dev am: 9cc76f44ce＂ into main" },
  { hash: "527b98eb731", date: "2024-04-26", author: "kgui@google.com", message: "Merge ＂Fail an xTS-I step immediately if it fails to create the directory to save screenshot files.＂ into main" },
  { hash: "34c0069385c", date: "2024-04-26", author: "kgui@google.com", message: "Merge ＂Fix that creating the screenshot directory may fail above SDK 29.＂ into android14-tests-dev" },
  { hash: "2b35aa2165d", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[conflict] Merge ＂Fix flaky fold test related to PiP.＂ into android14-tests-dev am: 9cc76f44ce" },
  { hash: "00aaea0ffd5", date: "2024-04-25", author: "prohr@google.com", message: "Merge ＂Exclude ApfIntegrationTest on GSI＂ into main" },
  { hash: "9cc76f44ce4", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix flaky fold test related to PiP.＂ into android14-tests-dev" },
  { hash: "35a613b6a19", date: "2024-04-25", author: "kyslov@google.com", message: "Merge ＂Skip av1 film grain test before vndk V＂ into main" },
  { hash: "7c056c7d488", date: "2024-04-25", author: "prohr@google.com", message: "Exclude ApfIntegrationTest on GSI" },
  { hash: "b1cf55bfd54", date: "2024-04-25", author: "diegovela@google.com", message: "Fix flaky fold test related to PiP." },
  { hash: "879bb629963", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Rebooting device before running tests＂ into main" },
  { hash: "7db7a8b694f", date: "2024-04-25", author: "ancr@google.com", message: "Rebooting device before running tests" },
  { hash: "ee30d65c674", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Remove failing test on android 14 as the relevant code changes applied to android 15.＂ into android14-tests-dev am: 59f309a85c＂ into main" },
  { hash: "efe5b4e1469", date: "2024-04-25", author: "katemontgomery@google.com", message: "Merge ＂Remove failing test on android 14 as the relevant code changes applied to android 15.＂ into android14-tests-dev am: 59f309a85c" },
  { hash: "253387d0339", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-cd977e926d3449d6b7d6a6df1536492b＂ into main" },
  { hash: "8fd327dadf9", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fbc9cad6debf4996bbfe1e4c3e54f732＂ into android14-tests-dev am: 915b84cd61 -s ours" },
  { hash: "1886389d851", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-3165b44ef3524f6f90a07e77fbd7922e＂ into android13-tests-dev am: baa5975893 -s ours am: 0a352f7f44 -s ours" },
  { hash: "995435d8aa3", date: "2024-04-25", author: "vishnun@google.com", message: "Merge ＂[conflict] Merge ＂Fix testOnBufferTransformHintChangesFromLandToSea＂ into android14-tests-dev am: 519f5147c6＂ into main" },
  { hash: "f408aa71bab", date: "2024-04-25", author: "juan.xie@mediatek.com", message: "Skip av1 film grain test before vndk V" },
  { hash: "d1d1aa0a001", date: "2024-04-25", author: "eranm@google.com", message: "Merge ＂Updated KM-Version check against FEATURE_HARDWARE_KEYSTORE based on VSR API level.＂ into main" },
  { hash: "1e7196de827", date: "2024-04-25", author: "eranm@google.com", message: "Merge ＂Added cdd requirements annotations for key attestation CTS tests.＂ into main" },
  { hash: "0ffae4c206c", date: "2024-04-25", author: "kgui@google.com", message: "Fail an xTS-I step immediately if it fails to create the directory to save screenshot files." },
  { hash: "59f309a85c3", date: "2024-04-25", author: "katemontgomery@google.com", message: "Merge ＂Remove failing test on android 14 as the relevant code changes applied to android 15.＂ into android14-tests-dev" },
  { hash: "fad913dfd9e", date: "2024-04-25", author: "kgui@google.com", message: "Fix that creating the screenshot directory may fail above SDK 29." },
  { hash: "53ee186dd80", date: "2024-04-25", author: "kgui@google.com", message: "Merge ＂Fix that creating the screenshot directory may fail above SDK 29.＂ into main" },
  { hash: "54047a28102", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂VQFloor: Update tests to work on auto targets＂ into main" },
  { hash: "89a3e1fbda0", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂VEQ: Update tests to work on auto targets＂ into main" },
  { hash: "772c68ad3aa", date: "2024-04-25", author: "drysdale@google.com", message: "Merge ＂CtsVerifier: restore FingerprintBoundKeysTest leeway＂ into main" },
  { hash: "88aef19d43e", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update bluetooth owners＂ into main" },
  { hash: "77f66830079", date: "2024-04-24", author: "wescande@google.com", message: "Update bluetooth owners" },
  { hash: "2caeb2b3d12", date: "2024-04-25", author: "hmahendrakar@google.com", message: "VEQ: Update tests to work on auto targets" },
  { hash: "24c957e6514", date: "2024-04-24", author: "hmahendrakar@google.com", message: "VQFloor: Update tests to work on auto targets" },
  { hash: "cefe7b7ee24", date: "2024-04-25", author: "kinaba@google.com", message: "CtsVerifier: consistent directory and archive name in report export." },
  { hash: "7f69849f439", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[conflict] Merge ＂Fix testOnBufferTransformHintChangesFromLandToSea＂ into android14-tests-dev am: 519f5147c6" },
  { hash: "915b84cd617", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fbc9cad6debf4996bbfe1e4c3e54f732＂ into android14-tests-dev" },
  { hash: "0a352f7f448", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-3165b44ef3524f6f90a07e77fbd7922e＂ into android13-tests-dev am: baa5975893 -s ours" },
  { hash: "4bc30c44d3d", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-52f1d1b8f47e40799b0e4be58020dcd1＂ into android12L-tests-dev am: 9580ad61a7 -s ours am: 5f714c2a57 -s ours" },
  { hash: "baa5975893d", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-3165b44ef3524f6f90a07e77fbd7922e＂ into android13-tests-dev" },
  { hash: "5f714c2a571", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-52f1d1b8f47e40799b0e4be58020dcd1＂ into android12L-tests-dev am: 9580ad61a7 -s ours" },
  { hash: "89615c603e4", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-7446820b4d414975a1482ca096b435c1＂ into android12-tests-dev am: 490ff41a4e -s ours am: ecb75fc2a1 -s ours" },
  { hash: "9580ad61a7f", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-52f1d1b8f47e40799b0e4be58020dcd1＂ into android12L-tests-dev" },
  { hash: "ecb75fc2a19", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-7446820b4d414975a1482ca096b435c1＂ into android12-tests-dev am: 490ff41a4e -s ours" },
  { hash: "f494bee2a9a", date: "2024-04-25", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-465def469e1a47ab8189e86d0e48d898＂ into android11-tests-dev am: e4aa614630 -s ours am: e5fea0a8a0 -s ours" },
  { hash: "490ff41a4ed", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-7446820b4d414975a1482ca096b435c1＂ into android12-tests-dev" },
  { hash: "e5fea0a8a0a", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-465def469e1a47ab8189e86d0e48d898＂ into android11-tests-dev am: e4aa614630 -s ours" },
  { hash: "962faf49acd", date: "2024-04-24", author: "hyosunkim@google.com", message: "[automerger skipped] Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test Cases[ Week 06 and Week 07]＂ into android10-tests-dev am: 88ab2ca9f3 -s ours am: 8c0364214c -s ours" },
  { hash: "e4aa614630a", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-465def469e1a47ab8189e86d0e48d898＂ into android11-tests-dev" },
  { hash: "8c0364214ce", date: "2024-04-24", author: "hyosunkim@google.com", message: "[automerger skipped] Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test Cases[ Week 06 and Week 07]＂ into android10-tests-dev am: 88ab2ca9f3 -s ours" },
  { hash: "4c54dc77c11", date: "2024-04-24", author: "ukokkula@google.com", message: "[automerger skipped] Google RCS uses FTEU MO SMS for phone number verification Test Cases[ Week 06 and Week 07] am: 5d816c27c8 -s ours" },
  { hash: "88ab2ca9f30", date: "2024-04-24", author: "hyosunkim@google.com", message: "Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test Cases[ Week 06 and Week 07]＂ into android10-tests-dev" },
  { hash: "dc682009ff6", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add measurements for req [5.1/H-1-13]＂ into main" },
  { hash: "47662b565bf", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use generated class for req 5.1/H-1-8＂ into main" },
  { hash: "a88dcf1e8c4", date: "2024-04-24", author: "nchalko@google.com", message: "Add measurements for req [5.1/H-1-13]" },
  { hash: "2bcd36409ae", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Set test ownerships for ART and subteams.＂ into main" },
  { hash: "37449377667", date: "2024-04-24", author: "nchalko@google.com", message: "Use generated class for req 5.1/H-1-8" },
  { hash: "fcfa4a5d950", date: "2024-04-24", author: "katemontgomery@google.com", message: "Remove failing test on android 14 as the relevant code changes applied to android 15." },
  { hash: "bbbce5249dd", date: "2024-04-24", author: "mast@google.com", message: "Set test ownerships for ART and subteams." },
  { hash: "0aa525e1819", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Simplify OWNERS files in JVMTI and JDWP test directories.＂ into main" },
  { hash: "29621813f62", date: "2024-04-24", author: "nyamagoud@google.com", message: "Updated KM-Version check against FEATURE_HARDWARE_KEYSTORE based on VSR API level." },
  { hash: "519f5147c66", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix testOnBufferTransformHintChangesFromLandToSea＂ into android14-tests-dev" },
  { hash: "84bc76e5b25", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adjust the remote lock timing on FileChannelInterProcessLockTest＂ into main" },
  { hash: "5fb4ac171de", date: "2024-04-24", author: "sorinbasca@google.com", message: "Adjust the remote lock timing on FileChannelInterProcessLockTest" },
  { hash: "664ffb8bf7e", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-5ade27b484a243969924777cc3dd5f25＂ into main" },
  { hash: "c59cd4e2049", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-50d97cffccbf43cc89d4a1085dcc975c＂ into android14-tests-dev am: 2c3d4984a4 -s ours" },
  { hash: "8b872e87db9", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev am: 5a2c0eeb50＂ into android13-tests-dev am: 7a32bfde62 -s ours am: ebd3bf72f9 -s ours" },
  { hash: "2c3d4984a4c", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-50d97cffccbf43cc89d4a1085dcc975c＂ into android14-tests-dev" },
  { hash: "ebd3bf72f93", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev am: 5a2c0eeb50＂ into android13-tests-dev am: 7a32bfde62 -s ours" },
  { hash: "6c90edd41b7", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev am: 5a2c0eeb50 am: 49189a41a0 -s ours" },
  { hash: "7a32bfde62c", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev am: 5a2c0eeb50＂ into android13-tests-dev" },
  { hash: "49189a41a05", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev am: 5a2c0eeb50" },
  { hash: "5a2c0eeb509", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Return current user when main user is not defined＂ into android12L-tests-dev" },
  { hash: "0881824d045", date: "2024-04-24", author: "kgui@google.com", message: "Fix that creating the screenshot directory may fail above SDK 29." },
  { hash: "d5278871e41", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-b127027490104bb1ab88f5d1cd3738ee＂ into main" },
  { hash: "5d968f6a98b", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-98135c61d4f146148f46789341d9fd5c＂ into android14-tests-dev am: 34451e458e" },
  { hash: "1e09a90918e", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[RESTRICT AUTOMERGE] Camera ITS: Fix the NOT_YET_MANDATED test list＂ into android13-tests-dev am: 0dbff6b630 -s ours am: a529a896a9 -s ours" },
  { hash: "34451e458ed", date: "2024-04-24", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-98135c61d4f146148f46789341d9fd5c＂ into android14-tests-dev" },
  { hash: "a529a896a9b", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[RESTRICT AUTOMERGE] Camera ITS: Fix the NOT_YET_MANDATED test list＂ into android13-tests-dev am: 0dbff6b630 -s ours" },
  { hash: "9c98cf2d575", date: "2024-04-24", author: "kinaba@google.com", message: "[automerger skipped] [RESTRICT AUTOMERGE] Camera ITS: Fix the NOT_YET_MANDATED test list am: 585478a166 -s ours" },
  { hash: "0dbff6b630f", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[RESTRICT AUTOMERGE] Camera ITS: Fix the NOT_YET_MANDATED test list＂ into android13-tests-dev" },
  { hash: "7badaa8dd90", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂HDMI: Update active source lost standby CTS＂ into android14-tests-dev am: 9c6a66e5ef＂ into main" },
  { hash: "4c0dfaf3472", date: "2024-04-23", author: "donpaul@google.com", message: "Merge ＂HDMI: Update active source lost standby CTS＂ into android14-tests-dev am: 9c6a66e5ef" },
  { hash: "9c6a66e5efa", date: "2024-04-23", author: "donpaul@google.com", message: "Merge ＂HDMI: Update active source lost standby CTS＂ into android14-tests-dev" },
  { hash: "333d2857579", date: "2024-04-23", author: "kyslov@google.com", message: "Merge ＂vqf CTS: Add tolerance for vmaf comparison＂ into main" },
  { hash: "0ddca26d70a", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip EmergencyCallTests if there's no telephony＂ into main" },
  { hash: "aebf81d659b", date: "2024-04-23", author: "twasilczyk@google.com", message: "Skip EmergencyCallTests if there's no telephony" },
  { hash: "8776b463145", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RemoteSubmixTest: Modify the test to mute lock screen sound.＂ into main" },
  { hash: "b36ae8a3750", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I41585fc6,I37229c0a,Icfd5db4b into main" },
  { hash: "03698057ac2", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add CTS test for MPC 7.1.4.1/H-1-3＂ into main" },
  { hash: "dcf6cadc382", date: "2024-04-23", author: "nchalko@google.com", message: "Merge ＂Add comment on how to regnerate the bp.go files＂ into main" },
  { hash: "acedb9967df", date: "2024-04-23", author: "nchalko@google.com", message: "Add measurements for requirement 7.1.4.1/H-1-3" },
  { hash: "5c4039c9be6", date: "2024-04-23", author: "nchalko@google.com", message: "No public description" },
  { hash: "dd396d4a0c4", date: "2024-04-23", author: "nchalko@google.com", message: "No public description" },
  { hash: "ee4b3e49786", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix spelling of Requirement＂ into main" },
  { hash: "919b08ea54e", date: "2024-04-23", author: "nchalko@google.com", message: "Add CTS test for MPC 7.1.4.1/H-1-3" },
  { hash: "537a7e9fcac", date: "2024-04-23", author: "nchalko@google.com", message: "Fix spelling of Requirement" },
  { hash: "dbe12ef1593", date: "2024-04-23", author: "vdevmurari@google.com", message: "Merge ＂ViewTest: Wait for idle before asserting touch mode state＂ into main" },
  { hash: "86897ca22a2", date: "2024-04-23", author: "vdevmurari@google.com", message: "Merge ＂Increase timeout for input device removal＂ into main" },
  { hash: "7419dded6bf", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adjusting test sleeps.＂ into main" },
  { hash: "85d595198ab", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adjusting test sleeps.＂ into main" },
  { hash: "39d93339206", date: "2024-04-23", author: "prabirmsp@google.com", message: "ViewTest: Wait for idle before asserting touch mode state" },
  { hash: "efc350ac012", date: "2024-04-23", author: "joseprio@google.com", message: "Increase timeout for input device removal" },
  { hash: "673721d06b5", date: "2024-04-23", author: "sneha.patil@ittiam.com", message: "RemoteSubmixTest: Modify the test to mute lock screen sound." },
  { hash: "8aeffec4003", date: "2024-04-23", author: "ancr@google.com", message: "Adjusting test sleeps." },
  { hash: "b88e145e4e7", date: "2024-04-23", author: "ancr@google.com", message: "Adjusting test sleeps." },
  { hash: "e8005a31647", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad＂ into android13-tests-dev am: b70f8785b9＂ into android14-tests-dev am: 37b2687c4b＂ into main" },
  { hash: "d9e2a4fa887", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad＂ into android13-tests-dev am: b70f8785b9＂ into android14-tests-dev am: 37b2687c4b" },
  { hash: "37b2687c4b0", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad＂ into android13-tests-dev am: b70f8785b9＂ into android14-tests-dev" },
  { hash: "4112da55d2e", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad＂ into android13-tests-dev am: b70f8785b9" },
  { hash: "b70f8785b92", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad＂ into android13-tests-dev" },
  { hash: "ca5ba5ccb38", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev am: e148c42aad" },
  { hash: "e148c42aade", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9＂ into android12L-tests-dev" },
  { hash: "bf7735ab4e2", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev am: 02b952caa9" },
  { hash: "02b952caa99", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into android12-tests-dev" },
  { hash: "585478a1668", date: "2024-04-23", author: "kinaba@google.com", message: "[RESTRICT AUTOMERGE] Camera ITS: Fix the NOT_YET_MANDATED test list" },
  { hash: "6c27d9b8ead", date: "2024-04-23", author: "suyog.pawar@ittiam.com", message: "vqf CTS: Add tolerance for vmaf comparison" },
  { hash: "011ca74c2f7", date: "2024-04-23", author: "drysdale@google.com", message: "CtsVerifier: restore FingerprintBoundKeysTest leeway" },
  { hash: "dd76361e7d7", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂TV: Change keycode in unhandled event test＂ into android14-tests-dev am: 397af1be0d＂ into main" },
  { hash: "097a215ccf1", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂TV: Change keycode in unhandled event test＂ into android14-tests-dev am: 397af1be0d" },
  { hash: "397af1be0d8", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂TV: Change keycode in unhandled event test＂ into android14-tests-dev" },
  { hash: "69179032aee", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-c0fc138b299c49f5b1c79afec59f6bfc＂ into main" },
  { hash: "580792adab4", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Disable CtsUninstallPinned tests on automotive multi window devices.＂ into android14-tests-dev am: d89fc0b851 -s ours" },
  { hash: "e8b528e0158", date: "2024-04-23", author: "babakbo@google.com", message: "[automerger skipped] Disable CtsUninstallPinned tests on automotive multi window devices. am: 1781d60f92 -s ours" },
  { hash: "e24562359e0", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fb14a466949847e28c67dd7f770f40ed＂ into main" },
  { hash: "6206fac7217", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-645f3c3779364f598003542a36f6d008＂ into android14-tests-dev am: 66a6e82051 -s ours" },
  { hash: "9b95e616122", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE - Added test for Binder.handleShellCommand＂ into android13-tests-dev am: 40fb851d07 -s ours am: f8baccb968 -s ours" },
  { hash: "f5c424d8a12", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-aeeed84f637d41b799eb6b0e41fca4c8＂ into main" },
  { hash: "e0516bdbb79", date: "2024-04-23", author: "shuzhenwang@google.com", message: "Merge ＂DO NOT MERGE: Camera: ITS: Compare zoom_ratio with threshold＂ into android14-tests-dev am: b06bc6a928" },
  { hash: "525fdd90b15", date: "2024-04-23", author: "shuzhenwang@google.com", message: "DO NOT MERGE: Camera: ITS: Compare zoom_ratio with threshold am: 01c16fa3fb" },
  { hash: "8512264b21b", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-36b6aeda1e284ab59ba4d0704b0c4d80＂ into main" },
  { hash: "9ae480babc1", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Skip file casefold test for filesystem does not support casefold＂ into android14-tests-dev am: eceafa1b34 -s ours" },
  { hash: "262c4758bf6", date: "2024-04-23", author: "yidong.zhang@amlogic.com", message: "[automerger skipped] Skip file casefold test for filesystem does not support casefold am: 424132477a -s ours" },
  { hash: "3cb656e1d38", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-1093a14d67514c94aeeddffff3ffa482＂ into main" },
  { hash: "e46b97d789c", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f＂ into android13-tests-dev am: 5254f382a0＂ into android14-tests-dev am: 442662b12a -s ours" },
  { hash: "c374abf8584", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f＂ into android13-tests-dev am: 5254f382a0 am: 9a4bce9fba -s ours" },
  { hash: "7898cd8b701", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix MediaProjection GSI CTS＂ into android14-tests-dev am: 2cff83c0df＂ into main" },
  { hash: "b707f7af710", date: "2024-04-23", author: "dakinola@google.com", message: "Merge ＂Fix MediaProjection GSI CTS＂ into android14-tests-dev am: 2cff83c0df" },
  { hash: "0e2bcd5408e", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-5782d8101e5b4ae9b9f1a6e813ab98e1＂ into main" },
  { hash: "ba7330070ff", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-b31967cd02594fca96788480d219f6aa＂ into android14-tests-dev am: 033402f342 -s ours" },
  { hash: "d76c7842842", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-66fe832b5d864550887e3f60bed49a45＂ into android13-tests-dev am: cdd176c3a8 -s ours am: 21dc4acd9a -s ours" },
  { hash: "5db97cc07f2", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar＂ into android13-tests-dev am: 20b6910d24＂ into android14-tests-dev am: 562f9bfd56＂ into main" },
  { hash: "71b710b3c67", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar＂ into android13-tests-dev am: 20b6910d24＂ into android14-tests-dev am: 562f9bfd56" },
  { hash: "0a4f51cb647", date: "2024-04-23", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂Revert ＂[CTS] Restart wifi before disabling always-on scanning＂＂ into android14-tests-dev am: 4ac6ed8069 -s ours＂ into main" },
  { hash: "4ed669a1c4a", date: "2024-04-23", author: "qal@google.com", message: "[automerger skipped] Merge ＂Revert ＂[CTS] Restart wifi before disabling always-on scanning＂＂ into android14-tests-dev am: 4ac6ed8069 -s ours" },
  { hash: "28512a366c1", date: "2024-04-23", author: "eric_kuang.rs@realtek.com", message: "TV: Change keycode in unhandled event test" },
  { hash: "21dca24b74d", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂TV: Change keycode in unhandled event test＂ into main" },
  { hash: "bad3b9eb88b", date: "2024-04-23", author: "vishnun@google.com", message: "Fix testOnBufferTransformHintChangesFromLandToSea" },
  { hash: "b1b78cd3d8f", date: "2024-04-22", author: "nchalko@google.com", message: "Merge ＂RESTRICT AUTOMERGE Project import generated by Copybara.＂ into main" },
  { hash: "b9eb3cd6d6d", date: "2024-04-22", author: "no-reply@google.com", message: "RESTRICT AUTOMERGE Project import generated by Copybara." },
  { hash: "68d17b949da", date: "2024-04-22", author: "nchalko@google.com", message: "Add comment on how to regnerate the bp.go files" },
  { hash: "d89fc0b851a", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disable CtsUninstallPinned tests on automotive multi window devices.＂ into android14-tests-dev" },
  { hash: "89210515e95", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RESTRICT AUTOMERGE Add long value measurements to the proto＂ into main" },
  { hash: "66a6e820519", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-645f3c3779364f598003542a36f6d008＂ into android14-tests-dev" },
  { hash: "f8baccb968c", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE - Added test for Binder.handleShellCommand＂ into android13-tests-dev am: 40fb851d07 -s ours" },
  { hash: "25d8344019c", date: "2024-04-22", author: "felipeal@google.com", message: "[automerger skipped] DO NOT MERGE - Added test for Binder.handleShellCommand am: ceb1c06d33 -s ours" },
  { hash: "c49af8424d1", date: "2024-04-22", author: "donpaul@google.com", message: "HDMI: Update active source lost standby CTS" },
  { hash: "40fb851d07f", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE - Added test for Binder.handleShellCommand＂ into android13-tests-dev" },
  { hash: "5e8853c361b", date: "2024-04-22", author: "nchalko@google.com", message: "RESTRICT AUTOMERGE Add long value measurements to the proto" },
  { hash: "c693d745283", date: "2024-04-22", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "b06bc6a9288", date: "2024-04-22", author: "shuzhenwang@google.com", message: "Merge ＂DO NOT MERGE: Camera: ITS: Compare zoom_ratio with threshold＂ into android14-tests-dev" },
  { hash: "1781d60f927", date: "2024-04-22", author: "babakbo@google.com", message: "Disable CtsUninstallPinned tests on automotive multi window devices." },
  { hash: "80e2150ac67", date: "2024-04-22", author: "ancr@google.com", message: "Merge ＂Increasing test sleep margins.＂ into main" },
  { hash: "eceafa1b342", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip file casefold test for filesystem does not support casefold＂ into android14-tests-dev" },
  { hash: "49d46ccbae2", date: "2024-04-22", author: "ancr@google.com", message: "Increasing test sleep margins." },
  { hash: "cf8cdaabd2d", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂Remove testCreateUserCurAsType from CTS＂ into android14-tests-dev am: 5d1801765d -s ours＂ into main" },
  { hash: "3733ef2e9f1", date: "2024-04-22", author: "wloh@google.com", message: "[automerger skipped] Merge ＂Remove testCreateUserCurAsType from CTS＂ into android14-tests-dev am: 5d1801765d -s ours" },
  { hash: "06a5169af7c", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Suppport long values when generating Requirements.＂ into main" },
  { hash: "01c16fa3fb1", date: "2024-04-22", author: "shuzhenwang@google.com", message: "DO NOT MERGE: Camera: ITS: Compare zoom_ratio with threshold" },
  { hash: "bc7a5323898", date: "2024-04-22", author: "nchalko@google.com", message: "Suppport long values when generating Requirements." },
  { hash: "9112cf0399d", date: "2024-04-22", author: "caditya@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
  { hash: "3f280688529", date: "2024-04-22", author: "henneman@google.com", message: "Merge ＂TEST_MAPPING: re-enable VirtualTouchscreenTest#sendTouchEvent＂ into main" },
  { hash: "cc50bc5ca5c", date: "2024-04-22", author: "mast@google.com", message: "Simplify OWNERS files in JVMTI and JDWP test directories." },
  { hash: "442662b12a4", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f＂ into android13-tests-dev am: 5254f382a0＂ into android14-tests-dev" },
  { hash: "9a4bce9fba7", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f＂ into android13-tests-dev am: 5254f382a0" },
  { hash: "5254f382a06", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f＂ into android13-tests-dev" },
  { hash: "53d59eb6396", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev am: 31c19a600f" },
  { hash: "31c19a600fb", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5＂ into android12L-tests-dev" },
  { hash: "1fe9e4ab14e", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev am: 22b138dcb5" },
  { hash: "22b138dcb52", date: "2024-04-22", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01＂ into android12-tests-dev" },
  { hash: "d21e371c077", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev am: 1f9536ca01" },
  { hash: "1f9536ca010", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into android11-tests-dev" },
  { hash: "2cff83c0df9", date: "2024-04-22", author: "dakinola@google.com", message: "Merge ＂Fix MediaProjection GSI CTS＂ into android14-tests-dev" },
  { hash: "424132477a8", date: "2024-04-22", author: "yidong.zhang@amlogic.com", message: "Skip file casefold test for filesystem does not support casefold" },
  { hash: "bc86c38fd0e", date: "2024-04-22", author: "lijiawei@google.com", message: "Merge ＂Skip file casefold test for filesystem does not support casefold＂ into main" },
  { hash: "8235d2a135e", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂CodecEncoderSurfaceTest: Add a note for persistent surface issues in MTS＂ into main" },
  { hash: "c8af02dbe7a", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-9897f7844ddf4a1593ae173c5834c5d3＂ into main" },
  { hash: "13eb1789679", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-3262d5f678f84db59fbb7a185aeb54dd＂ into android14-tests-dev am: 47f6f67259 -s ours" },
  { hash: "5dfa4196bb3", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-baa487362b6249e99526fc5b279353b9＂ into android13-tests-dev am: 7734e275ce -s ours am: f9f4103b44 -s ours" },
  { hash: "ec0453a12fb", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-082a751b5b7f47c98161a24ba93c3e2e＂ into main" },
  { hash: "c0e7f4fc307", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android13-tests-dev am: 4f66802d7b＂ into android14-tests-dev am: a348dee308 -s ours" },
  { hash: "4c523d31464", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android13-tests-dev am: 4f66802d7b am: 3655920226 -s ours" },
  { hash: "426bf01e698", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-c6471722d45144efb3979b35fc6a8661＂ into main" },
  { hash: "b11560a9bae", date: "2024-04-20", author: "xwxw@google.com", message: "Merge ＂Fix the NativeThermalTest to skip overriding and checking current status＂ into android14-tests-dev am: 9e8042edee" },
  { hash: "6e6e8356298", date: "2024-04-20", author: "xwxw@google.com", message: "Merge ＂NativeThermalTest - fixing deadlock and improving validations＂ into android14-tests-dev am: c845fda59f" },
  { hash: "aff04da83de", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂[CTS] fix  MultiDisplaySystemDecorationTests＂ into android14-tests-dev am: 20f11982ac -s ours＂ into main" },
  { hash: "6b35a278f19", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[CTS] fix  MultiDisplaySystemDecorationTests＂ into android14-tests-dev am: 20f11982ac -s ours" },
  { hash: "033402f342b", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-b31967cd02594fca96788480d219f6aa＂ into android14-tests-dev" },
  { hash: "21dc4acd9a9", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-66fe832b5d864550887e3f60bed49a45＂ into android13-tests-dev am: cdd176c3a8 -s ours" },
  { hash: "feee07418d7", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Remove ActivityTransitionTests#testTaskTransitionOverride＂ into android12L-tests-dev am: ba9b124694 -s ours am: d3e4698f51 -s ours" },
  { hash: "cdd176c3a84", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-66fe832b5d864550887e3f60bed49a45＂ into android13-tests-dev" },
  { hash: "562f9bfd563", date: "2024-04-20", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar＂ into android13-tests-dev am: 20b6910d24＂ into android14-tests-dev" },
  { hash: "d3e4698f517", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Remove ActivityTransitionTests#testTaskTransitionOverride＂ into android12L-tests-dev am: ba9b124694 -s ours" },
  { hash: "d82423b4dec", date: "2024-04-20", author: "xutan@google.com", message: "[automerger skipped] Remove ActivityTransitionTests#testTaskTransitionOverride am: 6232000256 -s ours" },
  { hash: "8b7b9c0c77c", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar＂ into android13-tests-dev am: 20b6910d24" },
  { hash: "ba9b1246945", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove ActivityTransitionTests#testTaskTransitionOverride＂ into android12L-tests-dev" },
  { hash: "20b6910d24f", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar＂ into android13-tests-dev" },
  { hash: "2d654f4f674", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂[CTS] Restart wifi before disabling always-on scanning＂ into android14-tests-dev am: 0b46b8b3f6 -s ours＂ into main" },
  { hash: "01ec1f48054", date: "2024-04-19", author: "qal@google.com", message: "[automerger skipped] Merge ＂[CTS] Restart wifi before disabling always-on scanning＂ into android14-tests-dev am: 0b46b8b3f6 -s ours" },
  { hash: "1f45f61f063", date: "2024-04-19", author: "hmahendrakar@google.com", message: "CodecEncoderSurfaceTest: Add a note for persistent surface issues in MTS" },
  { hash: "2f3e6bc3330", date: "2024-04-19", author: "evitayan@google.com", message: "Merge ＂VCN CTS: Wait for an active sub ID before running tests＂ into main" },
  { hash: "f2ba354eae8", date: "2024-04-19", author: "nyamagoud@google.com", message: "Added cdd requirements annotations for key attestation CTS tests." },
  { hash: "d85eabb955e", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Keystore: Fix made to use the copy of the input parameter passed to checkEntropy helper method.＂ into main" },
  { hash: "d48a03b8c08", date: "2024-04-19", author: "henneman@google.com", message: "TEST_MAPPING: re-enable VirtualTouchscreenTest#sendTouchEvent" },
  { hash: "cf61178da34", date: "2024-04-19", author: "nyamagoud@google.com", message: "Keystore: Fix made to use the copy of the input parameter passed to checkEntropy helper method." },
  { hash: "289708b659b", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[CTS] fix  MultiDisplayImeTests＂ into main" },
  { hash: "67dca8daa89", date: "2024-04-19", author: "yidong.zhang@amlogic.com", message: "Skip file casefold test for filesystem does not support casefold" },
  { hash: "4ac6ed80696", date: "2024-04-19", author: "qal@google.com", message: "Merge ＂Revert ＂[CTS] Restart wifi before disabling always-on scanning＂＂ into android14-tests-dev" },
  { hash: "72f1e604fd3", date: "2024-04-19", author: "qal@google.com", message: "Revert ＂[CTS] Restart wifi before disabling always-on scanning＂" },
  { hash: "5d1801765d1", date: "2024-04-19", author: "wloh@google.com", message: "Merge ＂Remove testCreateUserCurAsType from CTS＂ into android14-tests-dev" },
  { hash: "7bcc054c206", date: "2024-04-19", author: "jooyung@google.com", message: "Merge ＂Install lib supports test-only app/apex＂ into main" },
  { hash: "47f6f67259d", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-3262d5f678f84db59fbb7a185aeb54dd＂ into android14-tests-dev" },
  { hash: "f9f4103b44f", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-baa487362b6249e99526fc5b279353b9＂ into android13-tests-dev am: 7734e275ce -s ours" },
  { hash: "47f5ab61eda", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev am: b30669b5f0＂ into android12L-tests-dev am: 8265efb091 -s ours am: 5ffdf0a3e0 -s ours" },
  { hash: "7734e275ce1", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-baa487362b6249e99526fc5b279353b9＂ into android13-tests-dev" },
  { hash: "5ffdf0a3e0f", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev am: b30669b5f0＂ into android12L-tests-dev am: 8265efb091 -s ours" },
  { hash: "b8e9c817d4f", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev am: b30669b5f0 am: 3b8cce46a4 -s ours" },
  { hash: "8265efb091f", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev am: b30669b5f0＂ into android12L-tests-dev" },
  { hash: "3b8cce46a46", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev am: b30669b5f0" },
  { hash: "b30669b5f0d", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c＂ into android12-tests-dev" },
  { hash: "a54cd34c986", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev am: 5a200ed69c" },
  { hash: "5a200ed69c2", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android11-tests-dev" },
  { hash: "a348dee308a", date: "2024-04-18", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android13-tests-dev am: 4f66802d7b＂ into android14-tests-dev" },
  { hash: "36559202269", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android13-tests-dev am: 4f66802d7b" },
  { hash: "4f66802d7bc", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into android13-tests-dev" },
  { hash: "c5cbb736e75", date: "2024-04-18", author: "wloh@google.com", message: "Remove testCreateUserCurAsType from CTS" },
  { hash: "562b865b190", date: "2024-04-18", author: "dakinola@google.com", message: "Fix MediaProjection GSI CTS" },
  { hash: "ea2cf3d4ee4", date: "2024-04-18", author: "lichen.yu@transsion.corp-partner.google.com", message: "[CTS] fix  MultiDisplayImeTests" },
  { hash: "8dba78fa756", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediacuj CTS: Add Split screen mode test for E2E CUJ＂ into main" },
  { hash: "9e8042edee0", date: "2024-04-18", author: "xwxw@google.com", message: "Merge ＂Fix the NativeThermalTest to skip overriding and checking current status＂ into android14-tests-dev" },
  { hash: "c845fda59f2", date: "2024-04-18", author: "xwxw@google.com", message: "Merge ＂NativeThermalTest - fixing deadlock and improving validations＂ into android14-tests-dev" },
  { hash: "20f11982ac0", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[CTS] fix  MultiDisplaySystemDecorationTests＂ into android14-tests-dev" },
  { hash: "e284f12e624", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update the timeout scale in MediaRecorderTest＂ into main" },
  { hash: "ce6ed826326", date: "2024-04-18", author: "jooyung@google.com", message: "Install lib supports test-only app/apex" },
  { hash: "b74f27f4f2e", date: "2024-04-18", author: "evitayan@google.com", message: "VCN CTS: Wait for an active sub ID before running tests" },
  { hash: "956fb23d265", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix testAssistantContentViewDimens cutout fail＂ into main" },
  { hash: "0b46b8b3f68", date: "2024-04-17", author: "qal@google.com", message: "Merge ＂[CTS] Restart wifi before disabling always-on scanning＂ into android14-tests-dev" },
  { hash: "ceb1c06d33b", date: "2024-04-17", author: "felipeal@google.com", message: "DO NOT MERGE - Added test for Binder.handleShellCommand" },
  { hash: "fabe530c1fc", date: "2024-04-17", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-be8f2ca9fbbe40a7a17fb5913fb2b22d＂ into main" },
  { hash: "811a41278d4", date: "2024-04-17", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fa0fd5c9ab4540268b29fc40ab297b95＂ into android14-tests-dev am: f373a0796b" },
  { hash: "4b0f69af0b5", date: "2024-04-17", author: "fstern@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Remove Immersive Mode Confirmation＂ into android13-tests-dev am: 54f0aae182 -s ours am: 607855c63f -s ours" },
  { hash: "043bfce1e90", date: "2024-04-17", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Add null check to avoid NPE in case of assumption failure＂ into android14-tests-dev am: 9fd576fb73＂ into main" },
  { hash: "f373a0796b0", date: "2024-04-17", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fa0fd5c9ab4540268b29fc40ab297b95＂ into android14-tests-dev" },
  { hash: "0b49da285b5", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add null check to avoid NPE in case of assumption failure＂ into android14-tests-dev am: 9fd576fb73" },
  { hash: "607855c63fa", date: "2024-04-17", author: "fstern@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Remove Immersive Mode Confirmation＂ into android13-tests-dev am: 54f0aae182 -s ours" },
  { hash: "3d2d5bdeabd", date: "2024-04-17", author: "ot_lin.wu@mediatek.com", message: "[automerger skipped] DO NOT MERGE Remove Immersive Mode Confirmation am: 0c55e5e18e -s ours" },
  { hash: "54f0aae182c", date: "2024-04-17", author: "fstern@google.com", message: "Merge ＂DO NOT MERGE Remove Immersive Mode Confirmation＂ into android13-tests-dev" },
  { hash: "9fd576fb735", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add null check to avoid NPE in case of assumption failure＂ into android14-tests-dev" },
  { hash: "57edfcf2995", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove duplicate dir name in requirements_go_proto＂ into main" },
  { hash: "fb98a79b36a", date: "2024-04-17", author: "ancr@google.com", message: "Merge ＂Update owners＂ into main" },
  { hash: "3c8ff502d70", date: "2024-04-17", author: "ancr@google.com", message: "Update owners" },
  { hash: "0bfd7e7e71d", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂MediaPlayerTest: Ensure device is not muted in testPlayAudioTwice()＂ into main" },
  { hash: "cdf62a2a7d6", date: "2024-04-17", author: "mohammad.alsukhni@gm.com", message: "Fix testAssistantContentViewDimens cutout fail" },
  { hash: "2d6a6dfe5cb", date: "2024-04-17", author: "kanant@google.com", message: "Return current user when main user is not defined" },
  { hash: "59ea03d088d", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Keystore: Add CryptoObject.getKeyAgreement() API coverage.＂ into main" },
  { hash: "2551d6b9f4d", date: "2024-04-17", author: "lichen.yu@transsion.corp-partner.google.com", message: "[CTS] fix  MultiDisplaySystemDecorationTests" },
  { hash: "f61cadc92cf", date: "2024-04-17", author: "ibaker@google.com", message: "Merge ＂Enable VP9 profile tests＂ into main" },
  { hash: "d7ecdf0cfd5", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[CTS] fix  MultiDisplaySystemDecorationTests＂ into main" },
  { hash: "0dc2f93f0b8", date: "2024-04-16", author: "nchalko@google.com", message: "Remove duplicate dir name in requirements_go_proto" },
  { hash: "140577dbaa2", date: "2024-04-17", author: "darenliao@google.com", message: "Merge ＂Revert ＂Moving TEST_MAPPING options -> Android.bp＂＂ into main" },
  { hash: "c5565468dbf", date: "2024-04-17", author: "darenliao@google.com", message: "Revert ＂Moving TEST_MAPPING options -> Android.bp＂" },
  { hash: "1d9d7572b35", date: "2024-04-17", author: "rbraunstein@google.com", message: "Merge ＂Moving TEST_MAPPING options -> Android.bp＂ into main" },
  { hash: "a4e27efa4ab", date: "2024-04-17", author: "evitayan@google.com", message: "Merge ＂VCN CTS: Deflake tests by improving onLost verifications＂ into main" },
  { hash: "86599903297", date: "2024-04-17", author: "inseob@google.com", message: "Merge ＂Implement vendor neverallow tests＂ into main" },
  { hash: "09c014e1864", date: "2024-04-17", author: "nyamagoud@google.com", message: "Keystore: Add CryptoObject.getKeyAgreement() API coverage." },
  { hash: "b9a34e2b0a5", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Mark flaky tests＂ into main" },
  { hash: "2f51c6b5c4c", date: "2024-04-16", author: "hmahendrakar@google.com", message: "AdaptivePlaybackTest: Do not combine CSD with first frame for VP9" },
  { hash: "727e165e2fc", date: "2024-04-16", author: "evitayan@google.com", message: "VCN CTS: Deflake tests by improving onLost verifications" },
  { hash: "437426163b9", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-77d834a08ba34a668e7830ab70b0cf68＂ into main" },
  { hash: "aa9d696a90c", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Restrict Automerge] Disable failing test＂ into android14-tests-dev am: 37d307e5ba" },
  { hash: "829dc2bbcf2", date: "2024-04-16", author: "pinyaoting@google.com", message: "[Restrict Automerge] Disable failing test am: 5be3a0406c" },
  { hash: "37d307e5bab", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Restrict Automerge] Disable failing test＂ into android14-tests-dev" },
  { hash: "51212957605", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fixes CTS failure in ExtensionRearDisplayTest＂ into android14-tests-dev am: 9274936204＂ into main" },
  { hash: "d0c5513aa9d", date: "2024-04-16", author: "kennethford@google.com", message: "Merge ＂Fixes CTS failure in ExtensionRearDisplayTest＂ into android14-tests-dev am: 9274936204" },
  { hash: "9274936204f", date: "2024-04-16", author: "kennethford@google.com", message: "Merge ＂Fixes CTS failure in ExtensionRearDisplayTest＂ into android14-tests-dev" },
  { hash: "d15aa8028fe", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes Ie36116a1,I8678eb9c into main" },
  { hash: "62659f604b0", date: "2024-04-16", author: "nchalko@google.com", message: "Use generated Requirements for 7.1.1.3/H-3-1." },
  { hash: "0c9ccdb10dd", date: "2024-04-16", author: "nchalko@google.com", message: "Generate req code for 8.2/H-1-1 and 7.1.1.3/H-3-1" },
  { hash: "ee1d4c4b2df", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Camera: Fix flakey LogicalCameraDeviceTest＂ into android14-tests-dev am: 332e96c388＂ into main" },
  { hash: "5207b36240b", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Camera: Fix flakey LogicalCameraDeviceTest＂ into android14-tests-dev am: 332e96c388" },
  { hash: "332e96c388f", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Camera: Fix flakey LogicalCameraDeviceTest＂ into android14-tests-dev" },
  { hash: "5be3a0406c8", date: "2024-04-16", author: "pinyaoting@google.com", message: "[Restrict Automerge] Disable failing test" },
  { hash: "47b74f3759f", date: "2024-04-16", author: "hmahendrakar@google.com", message: "MediaPlayerTest: Ensure device is not muted in testPlayAudioTwice()" },
  { hash: "5b20a0eec46", date: "2024-04-16", author: "kennethford@google.com", message: "Fixes CTS failure in ExtensionRearDisplayTest" },
  { hash: "45b0deaaa58", date: "2024-04-16", author: "cferris@google.com", message: "Merge ＂Update for libnl 3.9.0.＂ into main" },
  { hash: "5d9360c3184", date: "2024-04-16", author: "shuzhenwang@google.com", message: "Camera: Fix flakey LogicalCameraDeviceTest" },
  { hash: "1fabbedd49f", date: "2024-04-16", author: "aquilescanta@google.com", message: "Merge ＂Clean-up multi-user management＂ into main" },
  { hash: "93d8fecb19f", date: "2024-04-16", author: "dipankarb@google.com", message: "Add null check to avoid NPE in case of assumption failure" },
  { hash: "e7d769ec276", date: "2024-04-16", author: "sohailnagaraj@google.com", message: "Update the timeout scale in MediaRecorderTest" },
  { hash: "0c55e5e18e6", date: "2024-04-16", author: "ot_lin.wu@mediatek.com", message: "DO NOT MERGE Remove Immersive Mode Confirmation" },
  { hash: "8a9f35fe2da", date: "2024-04-16", author: "inseob@google.com", message: "Implement vendor neverallow tests" },
  { hash: "12b7d183b03", date: "2024-04-16", author: "tweek@google.com", message: "Merge ＂Improve error messages for getVendorSepolicyVersion＂ into main" },
  { hash: "e94b67ba094", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add bug template URL to AppStartInfo test file＂ into main" },
  { hash: "1534fa9ec7f", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂vqf CTS: Use phone model for vmaf computation＂ into main" },
  { hash: "ef3e4fd57f8", date: "2024-04-16", author: "tweek@google.com", message: "Improve error messages for getVendorSepolicyVersion" },
  { hash: "98aa27ae777", date: "2024-04-16", author: "nona@google.com", message: "Mark flaky tests" },
  { hash: "42ed792f9ba", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix Wear Compose View Search Behavior＂ into android14-tests-dev am: 01d525e75a＂ into main" },
  { hash: "7a651e30e36", date: "2024-04-16", author: "yeabkal@google.com", message: "Merge ＂Fix Wear Compose View Search Behavior＂ into android14-tests-dev am: 01d525e75a" },
  { hash: "1ac5a8e895e", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Skip setDefaultAccount CTS test on AAOS(Automotive)＂ into android14-tests-dev am: fb1f807f4a＂ into main" },
  { hash: "8594736f36e", date: "2024-04-16", author: "sihusong@google.com", message: "Merge ＂Skip setDefaultAccount CTS test on AAOS(Automotive)＂ into android14-tests-dev am: fb1f807f4a" },
  { hash: "01d525e75a0", date: "2024-04-16", author: "yeabkal@google.com", message: "Merge ＂Fix Wear Compose View Search Behavior＂ into android14-tests-dev" },
  { hash: "fb1f807f4a7", date: "2024-04-16", author: "sihusong@google.com", message: "Merge ＂Skip setDefaultAccount CTS test on AAOS(Automotive)＂ into android14-tests-dev" },
  { hash: "6ecab9ed5ea", date: "2024-04-16", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Revert ＂Opt-out of foldable configuration runs.＂＂ into android14-tests-dev am: 8222e2db7a＂ into main" },
  { hash: "42a4600bbe1", date: "2024-04-16", author: "kennethford@google.com", message: "Merge ＂Revert ＂Opt-out of foldable configuration runs.＂＂ into android14-tests-dev am: 8222e2db7a" },
  { hash: "8222e2db7ab", date: "2024-04-16", author: "kennethford@google.com", message: "Merge ＂Revert ＂Opt-out of foldable configuration runs.＂＂ into android14-tests-dev" },
  { hash: "ad6889c51dc", date: "2024-04-15", author: "carmenjackson@google.com", message: "Add bug template URL to AppStartInfo test file" },
  { hash: "04bb9d74b41", date: "2024-04-15", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-599c885c84b24d559cb0e3884260b50a＂ into main" },
  { hash: "5158c8139f6", date: "2024-04-15", author: "slotus@google.com", message: "Merge ＂[DO NOT MERGE] Whitelist intent in android.intent.action.MAIN_USER_LOCKSCREEN_KNOWLEDGE_FACTOR_CHANGED＂ into android14-tests-dev am: 4ea2fe74fc" },
  { hash: "a66278be9e5", date: "2024-04-15", author: "slotus@google.com", message: "[DO NOT MERGE] Whitelist intent in android.intent.action.MAIN_USER_LOCKSCREEN_KNOWLEDGE_FACTOR_CHANGED am: d9899f9a5e" },
  { hash: "aa884cf2345", date: "2024-04-15", author: "hmahendrakar@google.com", message: "AdaptivePlaybackTest: Do not combine CSD with first frame for VP9" },
  { hash: "20e7caffd15", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AdaptivePlaybackTest: Do not combine CSD with first frame for VP9＂ into main" },
  { hash: "4ea2fe74fc6", date: "2024-04-15", author: "slotus@google.com", message: "Merge ＂[DO NOT MERGE] Whitelist intent in android.intent.action.MAIN_USER_LOCKSCREEN_KNOWLEDGE_FACTOR_CHANGED＂ into android14-tests-dev" },
  { hash: "e6358e9dc1f", date: "2024-04-15", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Remove unnecesary test repetition across foldable states.＂ into android14-tests-dev am: 70dfcf1089＂ into main" },
  { hash: "633e18e1f63", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove unnecesary test repetition across foldable states.＂ into android14-tests-dev am: 70dfcf1089" },
  { hash: "70dfcf1089b", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove unnecesary test repetition across foldable states.＂ into android14-tests-dev" },
  { hash: "7e892214082", date: "2024-04-15", author: "rbraunstein@google.com", message: "Moving TEST_MAPPING options -> Android.bp" },
  { hash: "24b91e37208", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediacuj CTS: Added check for IgnoreOrientationRequest＂ into main" },
  { hash: "e8fc1a3b3d0", date: "2024-04-15", author: "pinyaoting@google.com", message: "Remove unnecesary test repetition across foldable states." },
  { hash: "bede2a0759c", date: "2024-04-15", author: "kennethford@google.com", message: "Revert ＂Opt-out of foldable configuration runs.＂" },
  { hash: "767c9045cf5", date: "2024-04-15", author: "aquilescanta@google.com", message: "Clean-up multi-user management" },
  { hash: "1aae706ed44", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Improve --suspend coverage (use allThreads)＂ into main" },
  { hash: "a492ba65448", date: "2024-04-15", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂CTS: Fix media projection tests where ＂Entire screen＂ is not found＂ into android14-tests-dev am: ba0ba45ffd＂ into main" },
  { hash: "973ab295b27", date: "2024-04-15", author: "chrisgollner@google.com", message: "Merge ＂CTS: Fix media projection tests where ＂Entire screen＂ is not found＂ into android14-tests-dev am: ba0ba45ffd" },
  { hash: "ba0ba45ffd7", date: "2024-04-15", author: "chrisgollner@google.com", message: "Merge ＂CTS: Fix media projection tests where ＂Entire screen＂ is not found＂ into android14-tests-dev" },
  { hash: "1723fb9bd47", date: "2024-04-15", author: "jsebechlebsky@google.com", message: "Merge ＂Fix audioInjection_appShouldRecordInjectedFrequency flakiness.＂ into main" },
  { hash: "77348972c72", date: "2024-04-15", author: "jsebechlebsky@google.com", message: "Fix audioInjection_appShouldRecordInjectedFrequency flakiness." },
  { hash: "b88298fd414", date: "2024-04-15", author: "yeabkal@google.com", message: "Fix Wear Compose View Search Behavior" },
  { hash: "d9899f9a5e1", date: "2024-04-15", author: "slotus@google.com", message: "[DO NOT MERGE] Whitelist intent in android.intent.action.MAIN_USER_LOCKSCREEN_KNOWLEDGE_FACTOR_CHANGED" },
  { hash: "e7e58728a1e", date: "2024-04-13", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂Update EmergencyCallDomainSelectionTestOnMockModem＂ into android14-tests-dev am: a9b457626d -s ours＂ into main" },
  { hash: "9eca5e2551a", date: "2024-04-13", author: "forestchoi@google.com", message: "[automerger skipped] Merge ＂Update EmergencyCallDomainSelectionTestOnMockModem＂ into android14-tests-dev am: a9b457626d -s ours" },
  { hash: "a9b457626df", date: "2024-04-13", author: "forestchoi@google.com", message: "Merge ＂Update EmergencyCallDomainSelectionTestOnMockModem＂ into android14-tests-dev" },
  { hash: "3aa2562fd77", date: "2024-04-13", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fa0e7a20959d4a65aa14097f91fa5710＂ into main" },
  { hash: "db844f3bdba", date: "2024-04-13", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-47c549cb94d84c01a9f7afb73adac5ed＂ into android14-tests-dev am: 4778d5707b -s ours" },
  { hash: "4d4175f3b59", date: "2024-04-13", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-8d8bc4214f98416e85eb7217a200233f＂ into android13-tests-dev am: b63c72bd7a -s ours am: ce207c4f80 -s ours" },
  { hash: "4778d5707b1", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-47c549cb94d84c01a9f7afb73adac5ed＂ into android14-tests-dev" },
  { hash: "ce207c4f808", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-8d8bc4214f98416e85eb7217a200233f＂ into android13-tests-dev am: b63c72bd7a -s ours" },
  { hash: "eabe97c21bf", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-595396aa2931400c993a5066450b8375＂ into android12L-tests-dev am: 6cba2ded73 -s ours am: d6a23ed686 -s ours" },
  { hash: "b63c72bd7ab", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-8d8bc4214f98416e85eb7217a200233f＂ into android13-tests-dev" },
  { hash: "d6a23ed6865", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-595396aa2931400c993a5066450b8375＂ into android12L-tests-dev am: 6cba2ded73 -s ours" },
  { hash: "b2a6a1b55cb", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-23ead5488c2149f189b717a301b4e608＂ into android12-tests-dev am: 08ffc77b13 am: b7a2c7986c -s ours" },
  { hash: "6cba2ded73c", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-595396aa2931400c993a5066450b8375＂ into android12L-tests-dev" },
  { hash: "b7a2c7986cd", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-23ead5488c2149f189b717a301b4e608＂ into android12-tests-dev am: 08ffc77b13" },
  { hash: "4137371f8ba", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev am: 65780d354c -s ours am: e78207d366 -s ours am: 8f5fd95539 -s ours" },
  { hash: "08ffc77b13c", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-23ead5488c2149f189b717a301b4e608＂ into android12-tests-dev" },
  { hash: "f77d4bcfe7d", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev am: 65780d354c -s ours＂ into android11-tests-dev am: 8820b1c3f4" },
  { hash: "8f5fd955394", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev am: 65780d354c -s ours am: e78207d366 -s ours" },
  { hash: "8820b1c3f48", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev am: 65780d354c -s ours＂ into android11-tests-dev" },
  { hash: "e78207d3664", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev am: 65780d354c -s ours" },
  { hash: "da6b84b54a6", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-848c095a289b47e4bd39f00bd16e5e86＂ into main" },
  { hash: "76ee93811f6", date: "2024-04-12", author: "yeabkal@google.com", message: "[automerger skipped] Merge ＂Exclude CTS telecom carMode tests for Wear OS＂ into android14-tests-dev am: f47ab8307e -s ours" },
  { hash: "32027e47eda", date: "2024-04-12", author: "panigrahip@google.com", message: "[automerger skipped] Exclude CTS telecom carMode tests for Wear OS am: 5acc7f6e0c -s ours" },
  { hash: "f0b13298aac", date: "2024-04-12", author: "xwxw@google.com", message: "Fix the NativeThermalTest to skip overriding and checking current status" },
  { hash: "1032d271c17", date: "2024-04-12", author: "petsjonkin@google.com", message: "NativeThermalTest - fixing deadlock and improving validations" },
  { hash: "f47ab8307e2", date: "2024-04-12", author: "yeabkal@google.com", message: "Merge ＂Exclude CTS telecom carMode tests for Wear OS＂ into android14-tests-dev" },
  { hash: "35b673f7f08", date: "2024-04-12", author: "sanglardf@google.com", message: "Improve --suspend coverage (use allThreads)" },
  { hash: "65780d354ce", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RingtoneManagerTest change to setActualDefaultRingtoneUri＂ into android10-tests-dev" },
  { hash: "6a6b9f28bcc", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case.＂ into main" },
  { hash: "5acc7f6e0ce", date: "2024-04-12", author: "panigrahip@google.com", message: "Exclude CTS telecom carMode tests for Wear OS" },
  { hash: "e61a2093b71", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-767928e0511040109335ef1098bafcc3＂ into main" },
  { hash: "733c65bb92d", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[DO NOT MERGE] Disable CTS failure＂ into android14-tests-dev am: 3e9c940a3c" },
  { hash: "80c04c7ffd1", date: "2024-04-12", author: "ktjen@google.com", message: "[DO NOT MERGE] Disable CTS failure am: 9e9b402005" },
  { hash: "3e9c940a3ce", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[DO NOT MERGE] Disable CTS failure＂ into android14-tests-dev" },
  { hash: "6732f21dcef", date: "2024-04-12", author: "calvin.wu@realtek.com", message: "Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case." },
  { hash: "0c9255e6ebe", date: "2024-04-12", author: "calvin.wu@realtek.com", message: "Add a delay before the first drawEdgeEffect() for cts EdgeEffectTests#testOnRelease case." },
  { hash: "812b96f424f", date: "2024-04-12", author: "hmahendrakar@google.com", message: "AdaptivePlaybackTest: Do not combine CSD with first frame for VP9" },
  { hash: "b86b93cffb6", date: "2024-04-12", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bb68c6d8cc844760a6558d0dd87d12ea＂ into main" },
  { hash: "e8f321cdb51", date: "2024-04-12", author: "evanseverson@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE ANYWHERE Try checking against expected permissions for multiple releases＂ into android14-tests-dev am: 236187c894 -s ours" },
  { hash: "7f1007c3b0f", date: "2024-04-12", author: "evanseverson@google.com", message: "[automerger skipped] DO NOT MERGE ANYWHERE Try checking against expected permissions for multiple releases am: 57f67772ba -s ours" },
  { hash: "236187c8946", date: "2024-04-12", author: "evanseverson@google.com", message: "Merge ＂DO NOT MERGE ANYWHERE Try checking against expected permissions for multiple releases＂ into android14-tests-dev" },
  { hash: "85127b69ce8", date: "2024-04-12", author: "lesl@google.com", message: "Merge ＂wifi: Requires location mode support for pno scan testing＂ into main" },
  { hash: "134eb7e98fd", date: "2024-04-12", author: "lesl@google.com", message: "wifi: Requires location mode support for pno scan testing" },
  { hash: "1b390f3f09a", date: "2024-04-12", author: "jgaillard@google.com", message: "Merge ＂Revert ＂Add DebugInputRule to HoverTest for debugging＂＂ into main" },
  { hash: "268d6b8e8c8", date: "2024-04-12", author: "jgaillard@google.com", message: "Revert ＂Add DebugInputRule to HoverTest for debugging＂" },
  { hash: "b2e4d3c38f8", date: "2024-04-12", author: "pittamalla@google.com", message: "Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]" },
  { hash: "7330dc2ec5a", date: "2024-04-12", author: "chrisgollner@google.com", message: "CTS: Fix media projection tests where ＂Entire screen＂ is not found" },
  { hash: "df7b87b9c4f", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix flakiness in FakeAssociationRule＂ into main" },
  { hash: "e3665f7e8f9", date: "2024-04-12", author: "vladokom@google.com", message: "Fix flakiness in FakeAssociationRule" },
  { hash: "57f67772ba5", date: "2024-04-11", author: "evanseverson@google.com", message: "DO NOT MERGE ANYWHERE Try checking against expected permissions for multiple releases" },
  { hash: "f005cf1d16c", date: "2024-04-12", author: "suyog.pawar@ittiam.com", message: "vqf CTS: Use phone model for vmaf computation" },
  { hash: "4253377c441", date: "2024-04-12", author: "lichen.yu@transsion.corp-partner.google.com", message: "[CTS] fix  MultiDisplaySystemDecorationTests" },
  { hash: "19f348f3b11", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add DebugInputRule to HoverTest for debugging＂ into main" },
  { hash: "f72e4ebb9db", date: "2024-04-12", author: "xshu@google.com", message: "[CTS] Restart wifi before disabling always-on scanning" },
  { hash: "9dbdc4d2679", date: "2024-04-12", author: "prabirmsp@google.com", message: "Add DebugInputRule to HoverTest for debugging" },
  { hash: "33595b62789", date: "2024-04-11", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure＂ into android14-tests-dev am: f6faa42718＂ into main" },
  { hash: "f4f524cd068", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure＂ into android14-tests-dev am: f6faa42718" },
  { hash: "ce26e58bfd9", date: "2024-04-11", author: "vishnun@google.com", message: "Merge ＂[conflict] DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure am: 177912d278＂ into main" },
  { hash: "9c3b2f6ec6b", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂CTS for starting app in --suspend mode＂ into main" },
  { hash: "009ddc1c318", date: "2024-04-11", author: "sanglardf@google.com", message: "CTS for starting app in --suspend mode" },
  { hash: "9f455051f30", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediav2: Use ro.vendor.api_level for BOARD_FIRST_SDK_IS_AT_LEAST_202404＂ into main" },
  { hash: "a9e253c84e2", date: "2024-04-11", author: "parsasirat@google.com", message: "[conflict] DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure am: 177912d278" },
  { hash: "36274b46e09", date: "2024-04-11", author: "rnlee@google.com", message: "Merge ＂Add attempts to DeadlineInFuture ChoreographerTest＂ into main" },
  { hash: "9e9b4020051", date: "2024-04-11", author: "ktjen@google.com", message: "[DO NOT MERGE] Disable CTS failure" },
  { hash: "140e4793fa0", date: "2024-04-11", author: "henneman@google.com", message: "Merge ＂TEST_MAPPING: remove exclude filter for android.graphics.cts.SetFrameRateTest＂ into main" },
  { hash: "69027d930dd", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediav2 CTS: Enable output validation for encoder surface tests＂ into main" },
  { hash: "321fa1fef06", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂media CTS: Update MediaCodecCapabilitiesTest basing on CDD requirements＂ into main" },
  { hash: "f6faa42718e", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure＂ into android14-tests-dev" },
  { hash: "d361adf0f6a", date: "2024-04-11", author: "ram.mohan@ittiam.com", message: "mediav2 CTS: Enable output validation for encoder surface tests" },
  { hash: "18b7106e41e", date: "2024-04-11", author: "ram.mohan@ittiam.com", message: "media CTS: Update MediaCodecCapabilitiesTest basing on CDD requirements" },
  { hash: "eb159613ed0", date: "2024-04-11", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Changing on-screen instructions for Audio Frequency Microphone Test.＂ into android14-tests-dev am: 7faf74429f＂ into main" },
  { hash: "2f5ff607478", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Changing on-screen instructions for Audio Frequency Microphone Test.＂ into android14-tests-dev am: 7faf74429f" },
  { hash: "7faf74429f2", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Changing on-screen instructions for Audio Frequency Microphone Test.＂ into android14-tests-dev" },
  { hash: "11523957a37", date: "2024-04-11", author: "forestchoi@google.com", message: "Update EmergencyCallDomainSelectionTestOnMockModem" },
  { hash: "9528dbcbf81", date: "2024-04-10", author: "rnlee@google.com", message: "Add attempts to DeadlineInFuture ChoreographerTest" },
  { hash: "1ccee7047dc", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Generatate constants＂ into main" },
  { hash: "4c44d0be81a", date: "2024-04-10", author: "pmclean@google.com", message: "Changing on-screen instructions for Audio Frequency Microphone Test." },
  { hash: "682c898a2fe", date: "2024-04-10", author: "cferris@google.com", message: "Update for libnl 3.9.0." },
  { hash: "a8093d705b8", date: "2024-04-10", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Stabilize ASurfaceControlTest on device with animation＂ into android14-tests-dev am: a5a355215f＂ into main" },
  { hash: "b866a172b07", date: "2024-04-10", author: "calhuang@google.com", message: "Merge ＂Stabilize ASurfaceControlTest on device with animation＂ into android14-tests-dev am: a5a355215f" },
  { hash: "ad8aa0a52fd", date: "2024-04-10", author: "rakesh.kumar@ittiam.com", message: "mediacuj CTS: Added check for IgnoreOrientationRequest" },
  { hash: "a5a355215fc", date: "2024-04-10", author: "calhuang@google.com", message: "Merge ＂Stabilize ASurfaceControlTest on device with animation＂ into android14-tests-dev" },
  { hash: "924a42afbc0", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add delay in SonyDualshock4UsbTest CTS＂ into main" },
  { hash: "0f81fd31c26", date: "2024-04-10", author: "rbraunstein@google.com", message: "Merge ＂Remove 5 sec wait in tests that adds up to minutes.＂ into main" },
  { hash: "037a864ce16", date: "2024-04-10", author: "nchalko@google.com", message: "Generatate constants" },
  { hash: "77c74458c8a", date: "2024-04-10", author: "paulduffin@google.com", message: "Merge ＂Remove hsnali@google.com from tests/signature/api-check/scripts/OWNERS＂ into main" },
  { hash: "ceb2dbbdaa4", date: "2024-04-10", author: "paulduffin@google.com", message: "Merge ＂Remove hsnali@google.com from tests/tests/deviceconfig/OWNERS＂ into main" },
  { hash: "628aba30ee9", date: "2024-04-10", author: "mitchp@google.com", message: "Merge ＂[GWP-ASan] [CTS] Update test to use non-recoverable mode explicitly＂ into main" },
  { hash: "447229f1d69", date: "2024-04-10", author: "arpitks@google.com", message: "Add delay in SonyDualshock4UsbTest CTS" },
  { hash: "a06df6bcc13", date: "2024-04-10", author: "eric_kuang.rs@realtek.com", message: "TV: Change keycode in unhandled event test" },
  { hash: "5d5dbf4cfa1", date: "2024-04-10", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Skip the check for the legacy vendor＂ into android14-tests-dev am: 1e109a0331＂ into main" },
  { hash: "ac472b10891", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip the check for the legacy vendor＂ into android14-tests-dev am: 1e109a0331" },
  { hash: "1e109a0331a", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip the check for the legacy vendor＂ into android14-tests-dev" },
  { hash: "aa3445e51fa", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediapc: update pce to ignore concurrent codec req framedrops before V＂ into main" },
  { hash: "c26a4f88da2", date: "2024-04-09", author: "evitayan@google.com", message: "Merge ＂VCN CTS to verify feature requirements and service dependencies＂ into main" },
  { hash: "21d5f95a977", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Create a utility to generate source from requirements data.＂ into main" },
  { hash: "57296899b0f", date: "2024-04-09", author: "nchalko@google.com", message: "Create a utility to generate source from requirements data." },
  { hash: "1149ef593fb", date: "2024-04-09", author: "hmahendrakar@google.com", message: "mediav2: Use ro.vendor.api_level for BOARD_FIRST_SDK_IS_AT_LEAST_202404" },
  { hash: "0edb8a75470", date: "2024-04-09", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hsnali@google.com from tests/tests/deviceconfig/OWNERS" },
  { hash: "639956d05ec", date: "2024-04-09", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hsnali@google.com from tests/signature/api-check/scripts/OWNERS" },
  { hash: "2365c09808a", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bb61214d286d4ad3bd092787f06c3c6c＂ into main" },
  { hash: "3b125789b46", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-6036c5d8e78743daad3dbf8c4ec930f1＂ into android14-tests-dev am: c00088aa5c" },
  { hash: "8613ba12005", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 13_R9＂ into android13-tests-dev am: d8fafc6ae8 -s ours am: 192a59f3f5 -s ours" },
  { hash: "c00088aa5c4", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-6036c5d8e78743daad3dbf8c4ec930f1＂ into android14-tests-dev" },
  { hash: "192a59f3f5f", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 13_R9＂ into android13-tests-dev am: d8fafc6ae8 -s ours" },
  { hash: "2d42e179b53", date: "2024-04-09", author: "agowdra@google.com", message: "[automerger skipped] DO NOT MERGE: Bump CTS and CTS Verifier version to 13_R9 am: 13dd0efde6 -s ours" },
  { hash: "d8fafc6ae84", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 13_R9＂ into android13-tests-dev" },
  { hash: "98cd35bbad6", date: "2024-04-09", author: "amallampati@google.com", message: "Merge ＂Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]＂ into main" },
  { hash: "953063bed96", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add owners for AppStartTest＂ into main" },
  { hash: "30dd992106d", date: "2024-04-09", author: "yforta@google.com", message: "Add owners for AppStartTest" },
  { hash: "72fd6a9c51d", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Modify displayPoint calculation to adapt displays with widgets cutout＂ into main" },
  { hash: "b4c3d0397bc", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Update testSurroundSoundCapabilities to check on a more commonly supported codec＂ into android14-tests-dev am: 1f50505a81＂ into main" },
  { hash: "2437a9c4d3a", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update testSurroundSoundCapabilities to check on a more commonly supported codec＂ into android14-tests-dev am: 1f50505a81" },
  { hash: "1f50505a817", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update testSurroundSoundCapabilities to check on a more commonly supported codec＂ into android14-tests-dev" },
  { hash: "2bafc6e4728", date: "2024-04-09", author: "mitchp@google.com", message: "[GWP-ASan] [CTS] Update test to use non-recoverable mode explicitly" },
  { hash: "177912d278a", date: "2024-04-09", author: "parsasirat@google.com", message: "DO NOT MERGE Fix AnrTests#slowOnKeyEventHandleTriggersAnr failure" },
  { hash: "f0e2bca5813", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-037ae71d319743c59feabc9bd74f840d＂ into main" },
  { hash: "8801fa559a5", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-61bff0a9aa7047fd92ebf7b6898e46a8＂ into android14-tests-dev am: 97cea0e392" },
  { hash: "1919d08fd8b", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[RESTRICT AUTOMERGE] Skip a verification of privacy indicators if they are not implemented＂ into android12L-tests-dev am: 8d102a7b3b -s ours am: 4bcee69b1b -s ours am: 012e651074 -s ours" },
  { hash: "97cea0e3929", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-61bff0a9aa7047fd92ebf7b6898e46a8＂ into android14-tests-dev" },
  { hash: "b6c8a2350a5", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-44abf7a84f6f4fde9ab35c2354fcc9fa＂ into android13-tests-dev am: 3c017217e7" },
  { hash: "012e6510749", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[RESTRICT AUTOMERGE] Skip a verification of privacy indicators if they are not implemented＂ into android12L-tests-dev am: 8d102a7b3b -s ours am: 4bcee69b1b -s ours" },
  { hash: "3c017217e7b", date: "2024-04-09", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-44abf7a84f6f4fde9ab35c2354fcc9fa＂ into android13-tests-dev" },
  { hash: "4bcee69b1be", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[RESTRICT AUTOMERGE] Skip a verification of privacy indicators if they are not implemented＂ into android12L-tests-dev am: 8d102a7b3b -s ours" },
  { hash: "564f00bfde5", date: "2024-04-09", author: "changyeon@google.com", message: "[automerger skipped] [RESTRICT AUTOMERGE] Skip a verification of privacy indicators if they are not implemented am: 4ab03a354e -s ours" },
  { hash: "8d102a7b3b5", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[RESTRICT AUTOMERGE] Skip a verification of privacy indicators if they are not implemented＂ into android12L-tests-dev" },
  { hash: "fa2e022df9d", date: "2024-04-09", author: "rongxuan@google.com", message: "Merge ＂Test fix: fix CTS test for new metadata API to use new faked device＂ into main" },
  { hash: "f237779bd39", date: "2024-04-09", author: "venkataramaa@google.com", message: "Enable VP9 profile tests" },
  { hash: "7024261cf07", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add MPC requirements as a proto.＂ into main" },
  { hash: "7f76d7482c1", date: "2024-04-09", author: "sihusong@google.com", message: "Skip setDefaultAccount CTS test on AAOS(Automotive)" },
  { hash: "c18722beb8b", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-7852a626d45d49e294eed076c4afdcc1＂ into main" },
  { hash: "ec159d65a29", date: "2024-04-08", author: "ktjen@google.com", message: "Merge ＂[DO NOT MERGE] Disable PreviewApi CTS＂ into android14-tests-dev am: f9a956b809" },
  { hash: "887d47b6bf9", date: "2024-04-08", author: "ktjen@google.com", message: "[DO NOT MERGE] Disable PreviewApi CTS am: c8a3da145f" },
  { hash: "f9a956b8099", date: "2024-04-08", author: "ktjen@google.com", message: "Merge ＂[DO NOT MERGE] Disable PreviewApi CTS＂ into android14-tests-dev" },
  { hash: "48807250069", date: "2024-04-08", author: "nchalko@google.com", message: "Add MPC requirements as a proto." },
  { hash: "43c4853cd0f", date: "2024-04-08", author: "evitayan@google.com", message: "VCN CTS to verify feature requirements and service dependencies" },
  { hash: "c8a3da145fe", date: "2024-04-08", author: "ktjen@google.com", message: "[DO NOT MERGE] Disable PreviewApi CTS" },
  { hash: "4cf5269caeb", date: "2024-04-08", author: "kelzhan@google.com", message: "Skip the check for the legacy vendor" },
  { hash: "e971f5f4863", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-08b78568bf444c739214cb4ec3fd126d＂ into main" },
  { hash: "a70a233c85e", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-56021d265d3a4b78afd19510d64089fb＂ into android14-tests-dev am: 5fd31e38ff -s ours" },
  { hash: "c996f3e6a70", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-d71c4b9e11ef40cb9391dc33f843f511＂ into android13-tests-dev am: d51bb50914 -s ours am: aadc4464e4 -s ours" },
  { hash: "5fd31e38ff4", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-56021d265d3a4b78afd19510d64089fb＂ into android14-tests-dev" },
  { hash: "aadc4464e40", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-d71c4b9e11ef40cb9391dc33f843f511＂ into android13-tests-dev am: d51bb50914 -s ours" },
  { hash: "a2de9ce566c", date: "2024-04-08", author: "jerry.wong@broadcom.com", message: "Update testSurroundSoundCapabilities to check on a more commonly supported codec" },
  { hash: "7901502d30f", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Update CA certs to NSS_3_91_RTM.＂ into android12L-tests-dev am: d4d44a1c6b -s ours am: 9f07c52719 -s ours" },
  { hash: "d51bb509146", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-d71c4b9e11ef40cb9391dc33f843f511＂ into android13-tests-dev" },
  { hash: "9f07c527198", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Update CA certs to NSS_3_91_RTM.＂ into android12L-tests-dev am: d4d44a1c6b -s ours" },
  { hash: "65343f1fdf1", date: "2024-04-08", author: "miguelaranda@google.com", message: "[automerger skipped] DO NOT MERGE: Update CA certs to NSS_3_91_RTM. am: 8e0b6f2cf4 -s ours" },
  { hash: "d4d44a1c6ba", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Update CA certs to NSS_3_91_RTM.＂ into android12L-tests-dev" },
  { hash: "3f5283c7617", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I23ad3534,Iaade3577,I654344c0,I4b5d5f21 into main" },
  { hash: "6dcbdc810d8", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix tuner test filter start too late issue＂ into android14-tests-dev am: 8125f6fe52＂ into main" },
  { hash: "1a5250dbd17", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix tuner test filter start too late issue＂ into android14-tests-dev am: 8125f6fe52" },
  { hash: "e52d33029e2", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-4df8546184a74b6eb7918f88862ba0c0＂ into main" },
  { hash: "0b77ac1869d", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-9710e704b889418998702c9ed8e3162d＂ into android14-tests-dev am: 755e1134e2" },
  { hash: "dfa1e5b506d", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13＂ into android12-tests-dev am: c84c0a9c1b -s ours am: 36bc9f4978 -s ours am: ac757ac4cb -s ours am: 7cc05a2490 -s ours" },
  { hash: "a6df885aca6", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-60de3bbedb2c45d6b8443733de61bc5b＂ into main" },
  { hash: "a72aa676fa6", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-e0ed15cf9700491f8eadb4298fe48e4a＂ into android14-tests-dev am: f0e845f3ea" },
  { hash: "2bbe7cb5a40", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11＂ into android12L-tests-dev am: c481280ac6 -s ours am: ea718e099c -s ours am: f49e1226f7 -s ours" },
  { hash: "dc9e3a05597", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-a271cb61ae32410b89b0144c3f2fef51＂ into main" },
  { hash: "7c17b192f32", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 14_R5＂ into android14-tests-dev am: e9ac7dfdc4" },
  { hash: "306593f36d4", date: "2024-04-08", author: "agowdra@google.com", message: "[automerger skipped] DO NOT MERGE: Bump CTS and CTS Verifier version to 14_R5 am: 4c632edd9d -s ours" },
  { hash: "4b0cd539067", date: "2024-04-08", author: "rbraunstein@google.com", message: "Merge ＂Moving TEST_MAPPING options -> Android.bp＂ into main" },
  { hash: "8125f6fe528", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix tuner test filter start too late issue＂ into android14-tests-dev" },
  { hash: "755e1134e20", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-9710e704b889418998702c9ed8e3162d＂ into android14-tests-dev" },
  { hash: "9c699235a43", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-5d9136d6cae442f4a970dda17a08e843＂ into android13-tests-dev am: 0b821b82ee" },
  { hash: "7cc05a2490a", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13＂ into android12-tests-dev am: c84c0a9c1b -s ours am: 36bc9f4978 -s ours am: ac757ac4cb -s ours" },
  { hash: "f0e845f3ea1", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-e0ed15cf9700491f8eadb4298fe48e4a＂ into android14-tests-dev" },
  { hash: "6bb3a2e834e", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-2f849f6ad15946ac99f304504cc446eb＂ into android13-tests-dev am: fb735cf14b" },
  { hash: "f49e1226f7a", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11＂ into android12L-tests-dev am: c481280ac6 -s ours am: ea718e099c -s ours" },
  { hash: "0b821b82eea", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-5d9136d6cae442f4a970dda17a08e843＂ into android13-tests-dev" },
  { hash: "ecb216339bc", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-88a2f5e688d1476d9f55f17b364bdc6e＂ into android12L-tests-dev am: e5af4917d7" },
  { hash: "ac757ac4cba", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13＂ into android12-tests-dev am: c84c0a9c1b -s ours am: 36bc9f4978 -s ours" },
  { hash: "1a6efd4fdf8", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂Modify the status bar calculation logic to comply with more device features＂ into android13-tests-dev am: cda3045009＂ into android14-tests-dev am: 42e901bce2＂ into main" },
  { hash: "e5af4917d75", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-88a2f5e688d1476d9f55f17b364bdc6e＂ into android12L-tests-dev" },
  { hash: "fb735cf14bf", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-2f849f6ad15946ac99f304504cc446eb＂ into android13-tests-dev" },
  { hash: "a0c934d0d41", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Modify the status bar calculation logic to comply with more device features＂ into android13-tests-dev am: cda3045009＂ into android14-tests-dev am: 42e901bce2" },
  { hash: "36bc9f49782", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13＂ into android12-tests-dev am: c84c0a9c1b -s ours" },
  { hash: "0dc20ea747a", date: "2024-04-08", author: "agowdra@google.com", message: "[automerger skipped] DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13 am: cc73838bcb -s ours" },
  { hash: "ea718e099cd", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11＂ into android12L-tests-dev am: c481280ac6 -s ours" },
  { hash: "7b46aeda515", date: "2024-04-08", author: "agowdra@google.com", message: "[automerger skipped] DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11 am: fcc528b5c5 -s ours" },
  { hash: "e9ac7dfdc4e", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 14_R5＂ into android14-tests-dev" },
  { hash: "42e901bce28", date: "2024-04-08", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Modify the status bar calculation logic to comply with more device features＂ into android13-tests-dev am: cda3045009＂ into android14-tests-dev" },
  { hash: "ac0681bd548", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Modify the status bar calculation logic to comply with more device features＂ into android13-tests-dev am: cda3045009" },
  { hash: "c481280ac61", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11＂ into android12L-tests-dev" },
  { hash: "c84c0a9c1bf", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13＂ into android12-tests-dev" },
  { hash: "cda3045009d", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Modify the status bar calculation logic to comply with more device features＂ into android13-tests-dev" },
  { hash: "0c1a47c2065", date: "2024-04-08", author: "raychin@google.com", message: "Fix tuner test filter start too late issue" },
  { hash: "f2f50c8e3de", date: "2024-04-08", author: "tatsuya_maruyama@jp.honda", message: "Corrected code to take into account cases other than TOP:statusbar, BOTTOM:navigationbar" },
  { hash: "4441e618762", date: "2024-04-08", author: "rbraunstein@google.com", message: "Moving TEST_MAPPING options -> Android.bp" },
  { hash: "ff8b87d6416", date: "2024-04-07", author: "tigerhuang@google.com", message: "Merge ＂Add setSystemBarsAppearanceFromResource to InterfaceChecker＂ into main" },
  { hash: "8b38f020218", date: "2024-04-06", author: "wescande@google.com", message: "SystemBluetoothTest: Fix generateLocalOobData test" },
  { hash: "cda3cabfcb0", date: "2024-04-06", author: "wescande@google.com", message: "SystemBluetoothTest: Move to truth" },
  { hash: "c2ab700491c", date: "2024-04-06", author: "wescande@google.com", message: "SystemBluetoothTest: Improve speed and reliability" },
  { hash: "e398b91e47b", date: "2024-04-06", author: "wescande@google.com", message: "SystemBluetoothTest: Apply formatting" },
  { hash: "6dc77222966", date: "2024-04-07", author: "srujan.vandrangi@ittiam.com", message: "mediapc: update pce to ignore concurrent codec req framedrops before V" },
  { hash: "07912ad793c", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediav2: add support for signalling EOS separately in block model tests＂ into main" },
  { hash: "a6622d03b09", date: "2024-04-06", author: "lesl@google.com", message: "Merge ＂wifi: fix flaky mock wifi test case＂ into main" },
  { hash: "4d193075e80", date: "2024-04-06", author: "huangduo@xiaomi.corp-partner.google.com", message: "Modify displayPoint calculation to adapt displays with widgets cutout" },
  { hash: "41e2a2ce749", date: "2024-04-06", author: "lesl@google.com", message: "wifi: fix flaky mock wifi test case" },
  { hash: "cf3962b39fd", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f15a636e6086418d96643b85ebcad65f＂ into main" },
  { hash: "e249d870d4c", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-aa204855e0344ac0995287d4e7257528＂ into android14-tests-dev am: 05cb05c10f" },
  { hash: "8418b8e1a21", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev am: bd75ba1250 -s ours am: 2a8fddeddb -s ours am: 3ca62c9975 -s ours am: cdbc7476df -s ours am: 7b2aede38e -s ours" },
  { hash: "05cb05c10f3", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-aa204855e0344ac0995287d4e7257528＂ into android14-tests-dev" },
  { hash: "8aeefacaca7", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-efd471c296324df1a34aad9bc065d69d＂ into android13-tests-dev am: 9148fd5807" },
  { hash: "7b2aede38ec", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev am: bd75ba1250 -s ours am: 2a8fddeddb -s ours am: 3ca62c9975 -s ours am: cdbc7476df -s ours" },
  { hash: "9148fd5807a", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-efd471c296324df1a34aad9bc065d69d＂ into android13-tests-dev" },
  { hash: "60bd4a853f3", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-68dbcbe8d6e748e395fc9a612abfd8f7＂ into android12L-tests-dev am: 9a916858f3" },
  { hash: "cdbc7476df9", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev am: bd75ba1250 -s ours am: 2a8fddeddb -s ours am: 3ca62c9975 -s ours" },
  { hash: "9a916858f30", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-68dbcbe8d6e748e395fc9a612abfd8f7＂ into android12L-tests-dev" },
  { hash: "f7e21f3079f", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-62bd645637a54d128b45b500723f0cf0＂ into android12-tests-dev am: 80618747c6" },
  { hash: "3ca62c99756", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev am: bd75ba1250 -s ours am: 2a8fddeddb -s ours" },
  { hash: "80618747c61", date: "2024-04-06", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-62bd645637a54d128b45b500723f0cf0＂ into android12-tests-dev" },
  { hash: "2a8fddeddb3", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev am: bd75ba1250 -s ours" },
  { hash: "5fa0b521800", date: "2024-04-06", author: "agowdra@google.com", message: "[automerger skipped] DO NOT MERGE: Bump CTS Verifier Version to 11_R17 am: 0b5046e87d -s ours" },
  { hash: "bd75ba1250b", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Bump CTS Verifier Version to 11_R17＂ into android11-tests-dev" },
  { hash: "8e0b6f2cf46", date: "2024-04-05", author: "miguelaranda@google.com", message: "DO NOT MERGE: Update CA certs to NSS_3_91_RTM." },
  { hash: "0b5046e87d7", date: "2024-04-05", author: "agowdra@google.com", message: "DO NOT MERGE: Bump CTS Verifier Version to 11_R17" },
  { hash: "cc73838bcbe", date: "2024-04-05", author: "agowdra@google.com", message: "DO NOT MERGE: Bump CTS and CTS Verifier version to 12_R13" },
  { hash: "fcc528b5c56", date: "2024-04-05", author: "agowdra@google.com", message: "DO NOT MERGE: Bump CTS and CTS Verifier version to 12.1_R11" },
  { hash: "13dd0efde68", date: "2024-04-05", author: "agowdra@google.com", message: "DO NOT MERGE: Bump CTS and CTS Verifier version to 13_R9" },
  { hash: "4c632edd9da", date: "2024-04-05", author: "agowdra@google.com", message: "DO NOT MERGE: Bump CTS and CTS Verifier version to 14_R5" },
  { hash: "742a4a3091d", date: "2024-04-05", author: "calhuang@google.com", message: "Stabilize ASurfaceControlTest on device with animation" },
  { hash: "96547a7e7bd", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-29ab8fad581a451d8764f99cc5d0ac60＂ into main" },
  { hash: "cc44e39067e", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-dd8a1ab627b340e1a56be81e12b03b18＂ into android14-tests-dev am: 89da9532e3 -s ours" },
  { hash: "e20b3c384e2", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-f5cbfabf39484ac1ae9b90b202e442d1＂ into android13-tests-dev am: 97ffd2c4e1 -s ours am: d635aeea5b -s ours" },
  { hash: "89da9532e39", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-dd8a1ab627b340e1a56be81e12b03b18＂ into android14-tests-dev" },
  { hash: "d635aeea5b1", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f5cbfabf39484ac1ae9b90b202e442d1＂ into android13-tests-dev am: 97ffd2c4e1 -s ours" },
  { hash: "08e3ded8089", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev am: e600432926＂ into android12L-tests-dev am: cfa482d9de -s ours am: bf5557f4b9 -s ours" },
  { hash: "97ffd2c4e19", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f5cbfabf39484ac1ae9b90b202e442d1＂ into android13-tests-dev" },
  { hash: "bf5557f4b9f", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev am: e600432926＂ into android12L-tests-dev am: cfa482d9de -s ours" },
  { hash: "900efba1e74", date: "2024-04-05", author: "evitayan@google.com", message: "[automerger skipped] Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev am: e600432926 am: 540e76c31c -s ours" },
  { hash: "cfa482d9de6", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev am: e600432926＂ into android12L-tests-dev" },
  { hash: "540e76c31c0", date: "2024-04-05", author: "evitayan@google.com", message: "Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev am: e600432926" },
  { hash: "e6004329262", date: "2024-04-05", author: "evitayan@google.com", message: "Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android12-tests-dev" },
  { hash: "7fc0486d8e0", date: "2024-04-05", author: "rbraunstein@google.com", message: "Remove 5 sec wait in tests that adds up to minutes." },
  { hash: "7d3ee93512a", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediadrm: Disable CodecDecoderDrmTest in instant mode＂ into main" },
  { hash: "2344cf060ce", date: "2024-04-05", author: "rongxuan@google.com", message: "Test fix: fix CTS test for new metadata API to use new faked device" },
  { hash: "79c6b096af5", date: "2024-04-05", author: "hmahendrakar@google.com", message: "mediadrm: Disable CodecDecoderDrmTest in instant mode" },
  { hash: "6232000256c", date: "2024-04-05", author: "xutan@google.com", message: "Remove ActivityTransitionTests#testTaskTransitionOverride" },
  { hash: "3a7b9795259", date: "2024-04-05", author: "eranm@google.com", message: "Merge ＂Attestation attribute MEID added for CDMA only＂ into main" },
  { hash: "22e763597aa", date: "2024-04-05", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂CP MediaProjection Security CTS to Android U GSI＂ into android14-tests-dev am: 0d775be0a9＂ into main" },
  { hash: "4c404ab3dea", date: "2024-04-05", author: "nmusgrave@google.com", message: "Merge ＂CP MediaProjection Security CTS to Android U GSI＂ into android14-tests-dev am: 0d775be0a9" },
  { hash: "0d775be0a9f", date: "2024-04-05", author: "nmusgrave@google.com", message: "Merge ＂CP MediaProjection Security CTS to Android U GSI＂ into android14-tests-dev" },
  { hash: "333b71eec39", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-eea96b086d44455593aa84f37dfc2c86＂ into main" },
  { hash: "baf2a7d81ba", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-811cae433b50433388df8a0b4cf15ed9＂ into android14-tests-dev am: 5c8c771544 -s ours" },
  { hash: "ab524e9c6c8", date: "2024-04-04", author: "evitayan@google.com", message: "[automerger skipped] Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android13-tests-dev am: 23f25fd7b3 -s ours am: 8ad5bb080f -s ours" },
  { hash: "5c8c771544b", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-811cae433b50433388df8a0b4cf15ed9＂ into android14-tests-dev" },
  { hash: "8ad5bb080f9", date: "2024-04-04", author: "evitayan@google.com", message: "[automerger skipped] Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android13-tests-dev am: 23f25fd7b3 -s ours" },
  { hash: "79d8a5b3174", date: "2024-04-04", author: "evitayan@google.com", message: "[automerger skipped] Ensure Internet probing won't be skipped on VCN Tests am: edc7331850 -s ours" },
  { hash: "23f25fd7b38", date: "2024-04-04", author: "evitayan@google.com", message: "Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android13-tests-dev" },
  { hash: "51df2e7f49d", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix reporting for concurrent codec reqs＂ into main" },
  { hash: "5656e14d03f", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-0c73bc89a2e442aabd56c866ebb48a5b＂ into main" },
  { hash: "7aed93c3565", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂Update CA certs to NSS_3_91_RTM.＂ into android13-tests-dev am: 3a63535cf8 -s ours＂ into android14-tests-dev am: fb34161483 -s ours" },
  { hash: "7ebce5b5a80", date: "2024-04-04", author: "miguelaranda@google.com", message: "[automerger skipped] Merge ＂Update CA certs to NSS_3_91_RTM.＂ into android13-tests-dev am: 3a63535cf8 -s ours am: 1c83b9488c -s ours" },
  { hash: "fb341614832", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂[automerger skipped] Merge ＂Update CA certs to NSS_3_91_RTM.＂ into android13-tests-dev am: 3a63535cf8 -s ours＂ into android14-tests-dev" },
  { hash: "1c83b9488c4", date: "2024-04-04", author: "miguelaranda@google.com", message: "[automerger skipped] Merge ＂Update CA certs to NSS_3_91_RTM.＂ into android13-tests-dev am: 3a63535cf8 -s ours" },
  { hash: "3a63535cf81", date: "2024-04-04", author: "miguelaranda@google.com", message: "Merge ＂Update CA certs to NSS_3_91_RTM.＂ into android13-tests-dev" },
  { hash: "c4cdb069886", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix testUpdateDragShadow_detachedView for car multi-tasking devices＂ into android14-tests-dev am: a01caea8c6＂ into main" },
  { hash: "aa7ec38b80b", date: "2024-04-04", author: "calhuang@google.com", message: "Merge ＂Fix testUpdateDragShadow_detachedView for car multi-tasking devices＂ into android14-tests-dev am: a01caea8c6" },
  { hash: "a01caea8c69", date: "2024-04-04", author: "calhuang@google.com", message: "Merge ＂Fix testUpdateDragShadow_detachedView for car multi-tasking devices＂ into android14-tests-dev" },
  { hash: "55278b05d1e", date: "2024-04-04", author: "corosenberger@google.com", message: "Fix reporting for concurrent codec reqs" },
  { hash: "0ee33be0b97", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add owners for StartInfoApp＂ into main" },
  { hash: "a3790c117eb", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Gated Ed25519 tests based on Android V＂ into main" },
  { hash: "3b6a42da15a", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Including numeric=yes in requirement id ordering＂ into main" },
  { hash: "f82c17c3cf9", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from apps/CtsVerifier/src/com/android/cts/verifier/battery/OWNERS＂ into main" },
  { hash: "632a488609f", date: "2024-04-04", author: "yforta@google.com", message: "Add owners for StartInfoApp" },
  { hash: "1fa4b17279a", date: "2024-04-04", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-cc90f48acbf341d3bc289a10b16c7981＂ into main" },
  { hash: "57a6c0b1682", date: "2024-04-04", author: "eranm@google.com", message: "[automerger skipped] Merge changes from topic ＂cherrypicker-L26400030000811907:N56400030013825562＂ into android14-tests-dev am: d467f7930b -s ours" },
  { hash: "e5c8c5a4446", date: "2024-04-04", author: "subrahmanyaman@google.com", message: "[automerger skipped] Strongbox KeyMint v2 may not support second imei am: adc7ec09c8 -s ours" },
  { hash: "d467f7930b5", date: "2024-04-04", author: "eranm@google.com", message: "Merge changes from topic ＂cherrypicker-L26400030000811907:N56400030013825562＂ into android14-tests-dev" },
  { hash: "5198c9e8df3", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from apps/CtsVerifier/src/com/android/cts/verifier/battery/OWNERS" },
  { hash: "199d6098a47", date: "2024-04-04", author: "tigerhuang@google.com", message: "Add setSystemBarsAppearanceFromResource to InterfaceChecker" },
  { hash: "27b4c29854c", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Stop having an opinion about enum types.＂ into main" },
  { hash: "6b9ac8ffb4a", date: "2024-04-04", author: "patilprashant@google.com", message: "Gated Ed25519 tests based on Android V" },
  { hash: "ef847a75078", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^3 ＂Enable VP9 profile tests＂＂ into main" },
  { hash: "4d81d0d4e5a", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Updated mediaediting tests to androidx.media3 version 1.3.0＂ into main" },
  { hash: "b5dbc772964", date: "2024-04-04", author: "rsavitski@google.com", message: "Revert^3 ＂Enable VP9 profile tests＂" },
  { hash: "b12c2dd6ca8", date: "2024-04-04", author: "miguelaranda@google.com", message: "Update CA certs to NSS_3_91_RTM." },
  { hash: "bd88199d947", date: "2024-04-04", author: "corosenberger@google.com", message: "Including numeric=yes in requirement id ordering" },
  { hash: "ad11db2f290", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-41dab8fae30e4af99aea69e0d4efa799＂ into main" },
  { hash: "e3169571db2", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-a93a450426ec43b59e6dbd49aa23d944＂ into android14-tests-dev am: e98a87c7c6" },
  { hash: "447e7dd2b62", date: "2024-04-03", author: "kensukenakai@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate＂ into android12L-tests-dev am: 31d465b323 -s ours am: 1d54756f75 -s ours am: fa50ba8c6a -s ours" },
  { hash: "1d9c2239174", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-383e2742047249ba8cba53acdf8ce093＂ into main" },
  { hash: "320ceffe373", date: "2024-04-03", author: "evitayan@google.com", message: "[automerger skipped] Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android14-tests-dev am: 90d929e9ff -s ours" },
  { hash: "b6280e43b59", date: "2024-04-03", author: "evitayan@google.com", message: "[automerger skipped] Ensure Internet probing won't be skipped on VCN Tests am: ec60a9dceb -s ours" },
  { hash: "f9239bf3c8d", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-98ea3269ce64417b8525b236358ddb34＂ into main" },
  { hash: "28266133661", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂mediapc: shutdown executor service at the end of the test＂ into android14-tests-dev am: 8b0119443b -s ours" },
  { hash: "febc579fd0b", date: "2024-04-03", author: "chenweidong@xiaomi.com", message: "[automerger skipped] mediapc: shutdown executor service at the end of the test am: 8f858dd661 -s ours" },
  { hash: "4e5145e2b13", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-82aecd2e57af4c78a06d027f15cd7d3f＂ into main" },
  { hash: "fc92b24ed99", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bf37070601df4d9d84206ffbd9291d76＂ into android14-tests-dev am: 527105b3e7" },
  { hash: "aa9230d978d", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[DO NOT MERGE] Adjust Toast test for Automotive＂ into android12L-tests-dev am: 4e03702468 -s ours am: 94cecfd9ef -s ours am: b5203ad5f8 -s ours" },
  { hash: "5d908b4bcfb", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-057e61cb11e143d2b0bc9750ee9b97d8＂ into main" },
  { hash: "a1b6746952b", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-54ca0f2be4f04d578cb61a07d0277287＂ into android14-tests-dev am: 9e0594239e -s ours" },
  { hash: "0b2acac3dd5", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-6efc3b95e2724077baf0c28c6699fc4f＂ into android13-tests-dev am: 7fca2f498b -s ours am: 14f91de7f6 -s ours" },
  { hash: "6b75c2778f6", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Skip CannotSetTest for DISALLOW_CONFIG_DEFAULT_APPS while unenforceable＂ into android14-tests-dev am: 13e4c5c667＂ into main" },
  { hash: "6c17975613e", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip CannotSetTest for DISALLOW_CONFIG_DEFAULT_APPS while unenforceable＂ into android14-tests-dev am: 13e4c5c667" },
  { hash: "8eaa7e898f5", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-47c3f011b0ac4782a75d6eececa9d612＂ into main" },
  { hash: "0828447643b", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bc1cebff96444d23b2f2bbfcef76fc97＂ into android14-tests-dev am: 6074dc84a6 -s ours" },
  { hash: "b71292605ad", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android13-tests-dev am: e3b56af82b -s ours am: d6174cdf48 -s ours" },
  { hash: "ab7d46cced3", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-4e332d7ec6d14f4c96771fc9d4fbce19＂ into main" },
  { hash: "9be1ce6168d", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-0a3ccb73887844eca3d166706458b928＂ into android14-tests-dev am: bc58d785f0" },
  { hash: "79d9448becd", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev am: c0d25bfd91 -s ours am: 67df28684d -s ours am: 4bf64a5386 -s ours am: 1b5ab453a8 -s ours am: 72f8820cc6 -s ours" },
  { hash: "add18b43019", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces＂ into android13-tests-dev am: 717c09b519＂ into android14-tests-dev am: 9b7e838754＂ into main" },
  { hash: "0d59ac98154", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces＂ into android13-tests-dev am: 717c09b519＂ into android14-tests-dev am: 9b7e838754" },
  { hash: "7e343f13114", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive＂ into android14-tests-dev am: be9b099abc＂ into main" },
  { hash: "891861951a9", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive＂ into android14-tests-dev am: be9b099abc" },
  { hash: "66282845d13", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[conflict] DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive am: ffcf1e50b2＂ into main" },
  { hash: "8d8f9e2e52b", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Keep constants sorted.＂ into main" },
  { hash: "e98a87c7c6a", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-a93a450426ec43b59e6dbd49aa23d944＂ into android14-tests-dev" },
  { hash: "8489e0b1c65", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f16a597738534d1294d7f8cead9019d9＂ into android13-tests-dev am: c07d1cf35b" },
  { hash: "fa50ba8c6af", date: "2024-04-03", author: "kensukenakai@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate＂ into android12L-tests-dev am: 31d465b323 -s ours am: 1d54756f75 -s ours" },
  { hash: "c07d1cf35bc", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f16a597738534d1294d7f8cead9019d9＂ into android13-tests-dev" },
  { hash: "1d54756f759", date: "2024-04-03", author: "kensukenakai@google.com", message: "[automerger skipped] Merge ＂DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate＂ into android12L-tests-dev am: 31d465b323 -s ours" },
  { hash: "8cb2fe537f2", date: "2024-04-03", author: "tetsuya_shimodaira@jp.honda", message: "[automerger skipped] DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate am: 02664119fe -s ours" },
  { hash: "31d465b3239", date: "2024-04-03", author: "kensukenakai@google.com", message: "Merge ＂DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate＂ into android12L-tests-dev" },
  { hash: "98d77c944f8", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix license header＂ into main" },
  { hash: "90d929e9ffc", date: "2024-04-03", author: "evitayan@google.com", message: "Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into android14-tests-dev" },
  { hash: "7fd73b2106b", date: "2024-04-03", author: "nchalko@google.com", message: "Fix license header" },
  { hash: "90545e0f493", date: "2024-04-03", author: "nchalko@google.com", message: "Keep constants sorted." },
  { hash: "87a654a3630", date: "2024-04-03", author: "danalbert@google.com", message: "Stop having an opinion about enum types." },
  { hash: "8b0119443b6", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediapc: shutdown executor service at the end of the test＂ into android14-tests-dev" },
  { hash: "68eb03f4e1e", date: "2024-04-03", author: "juliepan@google.com", message: "Merge ＂Remove alexbuy@google.com from hostsidetests/incrementalinstall/OWNERS＂ into main" },
  { hash: "01c66a68a37", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediav2: Limit checks based on flags to Android V and above＂ into main" },
  { hash: "7503210513b", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediav2: Limit Rect.isValid() to Android T and above＂ into main" },
  { hash: "2ec5da3ede8", date: "2024-04-03", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alexbuy@google.com from hostsidetests/incrementalinstall/OWNERS" },
  { hash: "ad5ef0c6731", date: "2024-04-03", author: "yabinh@google.com", message: "[conflict] DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive am: ffcf1e50b2" },
  { hash: "527105b3e73", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bf37070601df4d9d84206ffbd9291d76＂ into android14-tests-dev" },
  { hash: "3aa1f4dfe44", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-dc75dc1510f9408db818b650ed1cda5f＂ into android13-tests-dev am: ec2d33d0b1" },
  { hash: "b5203ad5f81", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[DO NOT MERGE] Adjust Toast test for Automotive＂ into android12L-tests-dev am: 4e03702468 -s ours am: 94cecfd9ef -s ours" },
  { hash: "9e0594239ef", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-54ca0f2be4f04d578cb61a07d0277287＂ into android14-tests-dev" },
  { hash: "14f91de7f64", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-6efc3b95e2724077baf0c28c6699fc4f＂ into android13-tests-dev am: 7fca2f498b -s ours" },
  { hash: "ce3ed8ad111", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android12L-tests-dev am: fb6c1695f2 -s ours am: ee604b90c9 -s ours" },
  { hash: "ec2d33d0b16", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-dc75dc1510f9408db818b650ed1cda5f＂ into android13-tests-dev" },
  { hash: "94cecfd9efc", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂[DO NOT MERGE] Adjust Toast test for Automotive＂ into android12L-tests-dev am: 4e03702468 -s ours" },
  { hash: "e227f742724", date: "2024-04-03", author: "mattias.brodda@volvocars.com", message: "[automerger skipped] [DO NOT MERGE] Adjust Toast test for Automotive am: 64b0f569ea -s ours" },
  { hash: "7fca2f498b2", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-6efc3b95e2724077baf0c28c6699fc4f＂ into android13-tests-dev" },
  { hash: "ee604b90c93", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android12L-tests-dev am: fb6c1695f2 -s ours" },
  { hash: "8a751f9dde3", date: "2024-04-03", author: "calhuang@google.com", message: "[automerger skipped] Fix AssistantStackTests for device with created-by-organizer root tasks am: 4f29ae609c -s ours" },
  { hash: "8f858dd6616", date: "2024-04-03", author: "chenweidong@xiaomi.com", message: "mediapc: shutdown executor service at the end of the test" },
  { hash: "4e037024687", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[DO NOT MERGE] Adjust Toast test for Automotive＂ into android12L-tests-dev" },
  { hash: "fb6c1695f2e", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android12L-tests-dev" },
  { hash: "0625d578bbd", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Enable VP9 profile tests＂＂ into main" },
  { hash: "d6260403c6a", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add tests for disabling embedded profile through a dm file.＂ into main" },
  { hash: "13e4c5c6674", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip CannotSetTest for DISALLOW_CONFIG_DEFAULT_APPS while unenforceable＂ into android14-tests-dev" },
  { hash: "19f419959c7", date: "2024-04-03", author: "jiakaiz@google.com", message: "Add tests for disabling embedded profile through a dm file." },
  { hash: "11ed3a24b4a", date: "2024-04-03", author: "srujan.vandrangi@ittiam.com", message: "mediav2: add support for signalling EOS separately in block model tests" },
  { hash: "89a468edd86", date: "2024-04-03", author: "nmusgrave@google.com", message: "CP MediaProjection Security CTS to Android U GSI" },
  { hash: "3767b228774", date: "2024-04-03", author: "aloro@google.com", message: "Merge ＂Avoid creating and deleting files with the same name in the same test as this might be the root cause of test flakiness due to MediaProvider optimizations.＂ into main" },
  { hash: "6074dc84a60", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-bc1cebff96444d23b2f2bbfcef76fc97＂ into android14-tests-dev" },
  { hash: "d6174cdf481", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android13-tests-dev am: e3b56af82b -s ours" },
  { hash: "bf6438f499b", date: "2024-04-03", author: "calhuang@google.com", message: "[automerger skipped] Fix AssistantStackTests for device with created-by-organizer root tasks am: 5613815c5a -s ours" },
  { hash: "e3b56af82b1", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix AssistantStackTests for device with created-by-organizer root tasks＂ into android13-tests-dev" },
  { hash: "edd76548f1e", date: "2024-04-03", author: "kyslov@google.com", message: "Merge ＂veq CTS: Skip test if device test assumption fails.＂ into main" },
  { hash: "96fc24aef14", date: "2024-04-03", author: "kyslov@google.com", message: "Merge ＂vqf CTS : Skip test if device test assumption fails.＂ into main" },
  { hash: "f863e3da14d", date: "2024-04-03", author: "pittamalla@google.com", message: "Google RCS uses FTEU MO SMS for phone number verification Test [ Week 08, 09 & 10]" },
  { hash: "b263639f19d", date: "2024-04-03", author: "hmahendrakar@google.com", message: "mediav2: Limit checks based on flags to Android V and above" },
  { hash: "bc58d785f01", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-0a3ccb73887844eca3d166706458b928＂ into android14-tests-dev" },
  { hash: "ca987bc3a72", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-e087390d1319459e95b04191b4e98c68＂ into android13-tests-dev am: af98db8f3b" },
  { hash: "72f8820cc68", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev am: c0d25bfd91 -s ours am: 67df28684d -s ours am: 4bf64a5386 -s ours am: 1b5ab453a8 -s ours" },
  { hash: "37e2a6b4be2", date: "2024-04-02", author: "evitayan@google.com", message: "Ensure Internet probing won't be skipped on VCN Tests" },
  { hash: "208b0afe201", date: "2024-04-03", author: "hmahendrakar@google.com", message: "mediav2: Limit Rect.isValid() to Android T and above" },
  { hash: "edc7331850c", date: "2024-04-02", author: "evitayan@google.com", message: "Ensure Internet probing won't be skipped on VCN Tests" },
  { hash: "af98db8f3b9", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-e087390d1319459e95b04191b4e98c68＂ into android13-tests-dev" },
  { hash: "3abe5319f79", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fb7170575cd5419f92932538d2aaada3＂ into android12L-tests-dev am: e10ca79291" },
  { hash: "1b5ab453a83", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev am: c0d25bfd91 -s ours am: 67df28684d -s ours am: 4bf64a5386 -s ours" },
  { hash: "ec60a9dceb4", date: "2024-04-02", author: "evitayan@google.com", message: "Ensure Internet probing won't be skipped on VCN Tests" },
  { hash: "e10ca79291b", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fb7170575cd5419f92932538d2aaada3＂ into android12L-tests-dev" },
  { hash: "ec498e02e42", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f74a362ee96b4b63b5a670a94e521a33＂ into android12-tests-dev am: b252456a5f" },
  { hash: "4bf64a53868", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev am: c0d25bfd91 -s ours am: 67df28684d -s ours" },
  { hash: "02664119fe2", date: "2024-04-03", author: "tetsuya_shimodaira@jp.honda", message: "DO NOT MERGE: Set setDecorFitsSystemWindows to true onCreate" },
  { hash: "b252456a5fc", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-f74a362ee96b4b63b5a670a94e521a33＂ into android12-tests-dev" },
  { hash: "67df28684d4", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev am: c0d25bfd91 -s ours" },
  { hash: "928e50a3c13", date: "2024-04-03", author: "chuljin@google.com", message: "[automerger skipped] DO NOT MERGE Add a condition for devices with FEATURE_WATCH am: d9bac7ef4a -s ours" },
  { hash: "c0d25bfd919", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Add a condition for devices with FEATURE_WATCH＂ into android11-tests-dev" },
  { hash: "9b7e8387549", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces＂ into android13-tests-dev am: 717c09b519＂ into android14-tests-dev" },
  { hash: "eda7db8bef4", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces＂ into android13-tests-dev am: 717c09b519" },
  { hash: "be9b099abc9", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive＂ into android14-tests-dev" },
  { hash: "717c09b5192", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces＂ into android13-tests-dev" },
  { hash: "87ecd221625", date: "2024-04-03", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Opt-out of foldable configuration runs.＂ into android14-tests-dev am: a8456e8ab1＂ into main" },
  { hash: "cc2794e0518", date: "2024-04-03", author: "brycelee@google.com", message: "Merge ＂Opt-out of foldable configuration runs.＂ into android14-tests-dev am: a8456e8ab1" },
  { hash: "a8456e8ab1e", date: "2024-04-03", author: "brycelee@google.com", message: "Merge ＂Opt-out of foldable configuration runs.＂ into android14-tests-dev" },
  { hash: "52fce286007", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Increase testMultiAtlasGlyphsWithColorSpace (CTS) timeout to 60s＂ into main" },
  { hash: "09d964ca2b5", date: "2024-04-02", author: "calhuang@google.com", message: "Fix testUpdateDragShadow_detachedView for car multi-tasking devices" },
  { hash: "df807577290", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-a867d6465b81421c86b8c5ae9124540e＂ into main" },
  { hash: "4a1de0be1a1", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-63dd1986cb144a5facb2b772e8ee5c08＂ into android14-tests-dev am: 7765d4fc02 -s ours" },
  { hash: "84dba021099", date: "2024-04-02", author: "qiangjiang@google.com", message: "[automerger skipped] Merge ＂disables Activity recreation for some config change＂ into android13-tests-dev am: f615036637 -s ours am: 599bcd6107 -s ours" },
  { hash: "7765d4fc025", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-63dd1986cb144a5facb2b772e8ee5c08＂ into android14-tests-dev" },
  { hash: "599bcd61072", date: "2024-04-02", author: "qiangjiang@google.com", message: "[automerger skipped] Merge ＂disables Activity recreation for some config change＂ into android13-tests-dev am: f615036637 -s ours" },
  { hash: "f2748f95f9c", date: "2024-04-02", author: "qiangjiang@google.com", message: "[automerger skipped] disables Activity recreation for some config change am: 6850d8376b -s ours" },
  { hash: "f6150366378", date: "2024-04-02", author: "qiangjiang@google.com", message: "Merge ＂disables Activity recreation for some config change＂ into android13-tests-dev" },
  { hash: "3e0ef952616", date: "2024-04-02", author: "evitayan@google.com", message: "Merge ＂Ensure Internet probing won't be skipped on VCN Tests＂ into main" },
  { hash: "4960dff5780", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Disable some tests from CtsBiometricTestCases＂ into android14-tests-dev am: bf54991ed0＂ into main" },
  { hash: "7e728ce0014", date: "2024-04-02", author: "hatrang@google.com", message: "Merge ＂Disable some tests from CtsBiometricTestCases＂ into android14-tests-dev am: bf54991ed0" },
  { hash: "bf54991ed0c", date: "2024-04-02", author: "hatrang@google.com", message: "Merge ＂Disable some tests from CtsBiometricTestCases＂ into android14-tests-dev" },
  { hash: "7675a535bae", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂disables Activity recreation for some config change＂ into android14-tests-dev am: 962a3aaded＂ into main" },
  { hash: "9ff86be87e7", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂disables Activity recreation for some config change＂ into android14-tests-dev am: 962a3aaded" },
  { hash: "962a3aaded8", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂disables Activity recreation for some config change＂ into android14-tests-dev" },
  { hash: "6fef8c32205", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-fff60d5b703c411e92072619d6ccc574＂ into main" },
  { hash: "c73d8febfad", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-991c9a0c8c1846f481be15de7d1ef32b＂ into android14-tests-dev am: dc6ced5e1e -s ours" },
  { hash: "16708f27441", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂am-2db2cbfb9722437481ebf8f79f518ce5＂ into android13-tests-dev am: 94cceecd88 -s ours am: dcaa67acab -s ours" },
  { hash: "a46e1c61706", date: "2024-04-02", author: "evitayan@google.com", message: "Ensure Internet probing won't be skipped on VCN Tests" },
  { hash: "dc6ced5e1e1", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-991c9a0c8c1846f481be15de7d1ef32b＂ into android14-tests-dev" },
  { hash: "dcaa67acabe", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-2db2cbfb9722437481ebf8f79f518ce5＂ into android13-tests-dev am: 94cceecd88 -s ours" },
  { hash: "54151dab9c6", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev am: 3c9e39bf97＂ into android12L-tests-dev am: 87668dcb77 -s ours am: 0711be1aef -s ours" },
  { hash: "f83c09edf34", date: "2024-04-02", author: "nscobie@google.com", message: "Increase testMultiAtlasGlyphsWithColorSpace (CTS) timeout to 60s" },
  { hash: "94cceecd887", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-2db2cbfb9722437481ebf8f79f518ce5＂ into android13-tests-dev" },
  { hash: "0711be1aefc", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev am: 3c9e39bf97＂ into android12L-tests-dev am: 87668dcb77 -s ours" },
  { hash: "ab178e02337", date: "2024-04-02", author: "miguelaranda@google.com", message: "[automerger skipped] Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev am: 3c9e39bf97 am: 930a289a51 -s ours" },
  { hash: "4efa054b6dc", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂cts(nfc): CTS tests for OEM extension＂ into main" },
  { hash: "87668dcb776", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev am: 3c9e39bf97＂ into android12L-tests-dev" },
  { hash: "930a289a511", date: "2024-04-02", author: "miguelaranda@google.com", message: "Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev am: 3c9e39bf97" },
  { hash: "4d0b475c14e", date: "2024-04-02", author: "devinmoore@google.com", message: "Merge ＂Update CTS for optional hwservicemanager installation＂ into main" },
  { hash: "3c9e39bf974", date: "2024-04-02", author: "miguelaranda@google.com", message: "Merge ＂[conflict] Merge ＂Add certs from RTM_96 to historical branches.＂ into android11-tests-dev am: 2df82abfbc＂ into android12-tests-dev" },
  { hash: "0bf67bf88d6", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Fix testNdkFormatsHardware for A8 support＂ into android14-tests-dev am: 59400bc511＂ into main" },
  { hash: "3e2b7941a03", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix testNdkFormatsHardware for A8 support＂ into android14-tests-dev am: 59400bc511" },
  { hash: "59400bc511e", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix testNdkFormatsHardware for A8 support＂ into android14-tests-dev" },
  { hash: "454adcb0cca", date: "2024-04-02", author: "devinmoore@google.com", message: "Update CTS for optional hwservicemanager installation" },
  { hash: "7dd0fc7037b", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂HDMI: Fix CTS for KEYCODE_SETTINGS press＂ into android14-tests-dev am: 1aec303ee8＂ into main" },
  { hash: "51e84503afd", date: "2024-04-02", author: "donpaul@google.com", message: "Merge ＂HDMI: Fix CTS for KEYCODE_SETTINGS press＂ into android14-tests-dev am: 1aec303ee8" },
  { hash: "1aec303ee80", date: "2024-04-02", author: "donpaul@google.com", message: "Merge ＂HDMI: Fix CTS for KEYCODE_SETTINGS press＂ into android14-tests-dev" },
  { hash: "6850d8376b0", date: "2024-04-02", author: "qiangjiang@google.com", message: "disables Activity recreation for some config change" },
  { hash: "dd0c87e4dbf", date: "2024-04-02", author: "qiangjiang@google.com", message: "disables Activity recreation for some config change" },
  { hash: "fd6f17afee5", date: "2024-04-02", author: "venkataramaa@google.com", message: "Revert^2 ＂Enable VP9 profile tests＂" },
  { hash: "ffcf1e50b25", date: "2024-04-02", author: "yabinh@google.com", message: "DO NOT MERGE Introduce two annotations to allow a test to skip or only run on Automotive" },
  { hash: "428ed91a90f", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adding test for performance class req: [7.1.1.3/H-3-1] MUST have a HDR display supporting at least 1000 nits average.＂ into main" },
  { hash: "d2d5254206c", date: "2024-04-02", author: "rpius@google.com", message: "cts(nfc): CTS tests for OEM extension" },
  { hash: "2cc6300ce52", date: "2024-04-02", author: "corosenberger@google.com", message: "Adding test for performance class req: [7.1.1.3/H-3-1] MUST have a HDR display supporting at least 1000 nits average." },
  { hash: "0530fae0635", date: "2024-04-02", author: "nmusgrave@google.com", message: "Merge ＂[MediaProjection] Update OWNERS for CTS＂ into main" },
  { hash: "76e301aa7aa", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Ignore tests on automotive devices＂ into android14-tests-dev am: 5d363fcfe3＂ into main" },
  { hash: "7f70569ac41", date: "2024-04-02", author: "alukin@google.com", message: "Merge ＂Ignore tests on automotive devices＂ into android14-tests-dev am: 5d363fcfe3" },
  { hash: "5d363fcfe3b", date: "2024-04-02", author: "alukin@google.com", message: "Merge ＂Ignore tests on automotive devices＂ into android14-tests-dev" },
  { hash: "f4ce59579ae", date: "2024-04-02", author: "brufino@google.com", message: "Merge ＂Remove brufino@ from WM CTS owners＂ into main" },
  { hash: "55fdfc5d783", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-379b63f49fb54376abbf81116eea890e＂ into main" },
  { hash: "16456ae89f5", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RESTRICT AUTOMERGE Skip flaky HealthConnect tests from CTS＂ into android14-tests-dev am: 0edf291616" },
  { hash: "789c1a68009", date: "2024-04-02", author: "pratyushmore@google.com", message: "RESTRICT AUTOMERGE Skip flaky HealthConnect tests from CTS am: ecb243c4a9" },
  { hash: "0edf2916165", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RESTRICT AUTOMERGE Skip flaky HealthConnect tests from CTS＂ into android14-tests-dev" },
  { hash: "9ee5679617f", date: "2024-04-02", author: "tejas.lipare@ittiam.com", message: "mediacuj CTS: Add Split screen mode test for E2E CUJ" },
  { hash: "81c446ea331", date: "2024-04-02", author: "nmusgrave@google.com", message: "[MediaProjection] Update OWNERS for CTS" },
  { hash: "60c733f8df3", date: "2024-04-02", author: "suyog.pawar@ittiam.com", message: "veq CTS: Skip test if device test assumption fails." },
  { hash: "2f0da986c37", date: "2024-04-02", author: "suyog.pawar@ittiam.com", message: "vqf CTS : Skip test if device test assumption fails." },
  { hash: "4256aeea68d", date: "2024-04-02", author: "xinggu@google.com", message: "cts: Select 2 different available preview sizes in MultiViewTest#testSharedSurfaces" },
  { hash: "62c9dd31dcb", date: "2024-04-02", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Bypass frontend specific tests for frontend-less device＂ into android14-tests-dev am: 4463b6cb12＂ into main" },
  { hash: "5c8366b0a13", date: "2024-04-02", author: "hgchen@google.com", message: "Merge ＂Bypass frontend specific tests for frontend-less device＂ into android14-tests-dev am: 4463b6cb12" },
  { hash: "4463b6cb124", date: "2024-04-02", author: "hgchen@google.com", message: "Merge ＂Bypass frontend specific tests for frontend-less device＂ into android14-tests-dev" },
  { hash: "4db55c991d4", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Test system_ext and product sepolicy too＂ into main" },
  { hash: "d710951c2e3", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediapc: add support for size argument in MediaUtils.supports＂ into main" },
]});
repoLogs.push({ path: "dalvik", logs: [
]});
repoLogs.push({ path: "developers/build", logs: [
]});
repoLogs.push({ path: "developers/demos", logs: [
]});
repoLogs.push({ path: "developers/samples/android", logs: [
]});
repoLogs.push({ path: "development", logs: [
  { hash: "32e66fcce", date: "2024-04-23", author: "nputikhin@google.com", message: "Merge ＂Add --cwd parameter to set debuggee working directory in lldbclient＂ into main" },
  { hash: "5c05085a5", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove vendor snapshot tools＂ into main" },
  { hash: "6fcb65f31", date: "2024-04-23", author: "inseob@google.com", message: "Remove vendor snapshot tools" },
  { hash: "42d7e790c", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "cfff4e343", date: "2024-04-22", author: "nputikhin@google.com", message: "Add --cwd parameter to set debuggee working directory in lldbclient" },
  { hash: "9d542ec7d", date: "2024-04-19", author: "hsinyichen@google.com", message: "Merge ＂Add header-abi-linker -symbol-tag-policy＂ into main" },
  { hash: "cd74b2f83", date: "2024-04-18", author: "hsinyichen@google.com", message: "Add header-abi-linker -symbol-tag-policy" },
  { hash: "2d340ba5b", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I6e2dcaef,Ie653d82b,I3d8e80b6 into main" },
  { hash: "c7d610df5", date: "2024-04-17", author: "qwandor@google.com", message: "Allow crates with multiple target kinds." },
  { hash: "4ceb4aacf", date: "2024-04-17", author: "qwandor@google.com", message: "Allow externs without a hash." },
  { hash: "911a78176", date: "2024-04-17", author: "qwandor@google.com", message: "Ignore more rustc arguments." },
  { hash: "fbb70489f", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix extraction of package dir from package ID＂ into main" },
  { hash: "4aece510f", date: "2024-04-16", author: "mgeisler@google.com", message: "Fix extraction of package dir from package ID" },
  { hash: "d05e0962c", date: "2024-04-16", author: "hsinyichen@google.com", message: "Merge ＂Create reference dumps from .so.apex.lsdump＂ into main" },
  { hash: "957b2b691", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I4fa301cf,I70ff9f6c into main" },
  { hash: "b05d4a2f3", date: "2024-04-15", author: "cranes@google.com", message: "cargo_embargo: Implement rules.mk generation" },
  { hash: "af4bdc3b8", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove api-versions.xml＂ into main" },
  { hash: "75fa01f52", date: "2024-04-15", author: "hsinyichen@google.com", message: "Create reference dumps from .so.apex.lsdump" },
  { hash: "dc9bbed27", date: "2024-04-15", author: "hsinyichen@google.com", message: "Merge ＂Parse mode tags in version scripts＂ into main" },
  { hash: "ce1e865e0", date: "2024-04-15", author: "hsinyichen@google.com", message: "Parse mode tags in version scripts" },
  { hash: "06afe25b6", date: "2024-04-12", author: "cranes@google.com", message: "cargo_embargo: Add rules.mk generation" },
  { hash: "f024b4685", date: "2024-04-12", author: "zhidou@google.com", message: "Merge ＂create a flag to test flag migation＂ into main" },
  { hash: "991d803da", date: "2024-04-12", author: "zhidou@google.com", message: "create a flag to test flag migation" },
  { hash: "a75af8881", date: "2024-04-12", author: "colefaust@google.com", message: "Remove api-versions.xml" },
  { hash: "7ccad5041", date: "2024-04-12", author: "hsinyichen@google.com", message: "Merge ＂Simplify the constructor of HeaderAbiLinker＂ into main" },
  { hash: "330f2f716", date: "2024-04-11", author: "rprichard@google.com", message: "Merge ＂Factor libc++_host use into llvm_host_defaults＂ into main" },
  { hash: "67cb0ae09", date: "2024-04-11", author: "fmayle@google.com", message: "Merge ＂Upgrade nix to 0.28.0＂ into main" },
  { hash: "b35ab566d", date: "2024-04-11", author: "hsinyichen@google.com", message: "Simplify the constructor of HeaderAbiLinker" },
  { hash: "bb3a05970", date: "2024-04-10", author: "rprichard@google.com", message: "Factor libc++_host use into llvm_host_defaults" },
  { hash: "ca0547675", date: "2024-04-11", author: "rprichard@google.com", message: "Merge ＂Stop building/updating Darwin clang-tools prebuilt＂ into main" },
  { hash: "8471b7185", date: "2024-04-10", author: "hsinyichen@google.com", message: "Merge ＂Create reference dumps from .so.llndk.lsdump＂ into main" },
  { hash: "9730181b6", date: "2024-04-09", author: "fmayle@google.com", message: "Upgrade nix to 0.28.0" },
  { hash: "16cc7a9f2", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Be even more explicit about changing generated Android.bp files＂ into main" },
  { hash: "0ed762076", date: "2024-04-09", author: "devinmoore@google.com", message: "Be even more explicit about changing generated Android.bp files" },
  { hash: "344b52058", date: "2024-04-09", author: "priyankaspatel@google.com", message: "Merge ＂Allow SurfaceFlinger_CRITICAL.proto from bugreports＂ into main" },
  { hash: "d59d9931b", date: "2024-04-09", author: "priyankaspatel@google.com", message: "Allow SurfaceFlinger_CRITICAL.proto from bugreports" },
  { hash: "7f36c3219", date: "2024-04-08", author: "rprichard@google.com", message: "Stop building/updating Darwin clang-tools prebuilt" },
  { hash: "1bcd0008b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂cargo2rulesmk.py: Build with cap-lints allow＂ into main" },
]});
repoLogs.push({ path: "device/amlogic/yukawa", logs: [
]});
repoLogs.push({ path: "device/amlogic/yukawa-kernel", logs: [
]});
repoLogs.push({ path: "device/common", logs: [
]});
repoLogs.push({ path: "device/generic/arm64", logs: [
]});
repoLogs.push({ path: "device/generic/armv7-a-neon", logs: [
  { hash: "2fc8ec8", date: "2024-04-26", author: "inseob@google.com", message: "Merge ＂Build audio_effects.xml with Soong＂ into main" },
]});
repoLogs.push({ path: "device/generic/art", logs: [
]});
repoLogs.push({ path: "device/generic/car", logs: [
  { hash: "6a0cacb", date: "2024-04-15", author: "weiwli@google.com", message: "Remove file Android.mk." },
]});
repoLogs.push({ path: "device/generic/common", logs: [
]});
repoLogs.push({ path: "device/generic/goldfish", logs: [
  { hash: "3672b358", date: "2024-04-25", author: "rkir@google.com", message: "Merge ＂Retire 64bitonly/product/vendor.mk＂ into main" },
  { hash: "d2ffe42b", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Create a common overlay for all goldfish devices＂ into main" },
  { hash: "e7769add", date: "2024-04-25", author: "rkir@google.com", message: "Retire 64bitonly/product/vendor.mk" },
  { hash: "a3bbc4a8", date: "2024-04-25", author: "rkir@google.com", message: "Create a common overlay for all goldfish devices" },
  { hash: "6164a56b", date: "2024-04-25", author: "rkir@google.com", message: "Merge ＂Retire the SettingsProvider overlay＂ into main" },
  { hash: "f1e65147", date: "2024-04-24", author: "rkir@google.com", message: "Retire the SettingsProvider overlay" },
  { hash: "13a4c86d", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update emulator to EMU7.240418.003＂ into main" },
  { hash: "621a4976", date: "2024-04-24", author: "jansene@google.com", message: "Update emulator to EMU7.240418.003" },
  { hash: "0075642a", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Explicitly set RenderEngine backend to GL (skiaglthreaded) on Goldfish＂ into main" },
  { hash: "7820d6cd", date: "2024-04-22", author: "nscobie@google.com", message: "Explicitly set RenderEngine backend to GL (skiaglthreaded) on Goldfish" },
  { hash: "bf3473a9", date: "2024-04-19", author: "yikong@google.com", message: "Merge ＂Fix build for clang-r522817＂ into main" },
  { hash: "d51b87ea", date: "2024-04-19", author: "yikong@google.com", message: "Fix build for clang-r522817" },
  { hash: "38c79e7d", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Retire x86_64 16k boards＂＂ into main" },
  { hash: "52579d1a", date: "2024-04-16", author: "rkir@google.com", message: "Revert ＂Retire x86_64 16k boards＂" },
  { hash: "c40951be", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Set vendor SPL to match platform.＂ into main" },
  { hash: "4534de1b", date: "2024-04-11", author: "vikramgaur@google.com", message: "Set vendor SPL to match platform." },
  { hash: "440ebfae", date: "2024-04-11", author: "jschung@google.com", message: "Merge ＂Use additional ro property to determine provisioning condition＂ into main" },
  { hash: "71ef61dd", date: "2024-04-09", author: "wdu@google.com", message: "Merge ＂Add android.hardware.telephony.messaging feature＂ into main" },
  { hash: "f55ce42c", date: "2024-04-09", author: "jschung@google.com", message: "Use additional ro property to determine provisioning condition" },
  { hash: "e7612db4", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disable adb over USB＂ into main" },
  { hash: "b7d2e479", date: "2024-04-03", author: "gbiren@google.com", message: "Merge ＂Update legacy header file dependency in the Goldfish Wifi HAL.＂ into main" },
  { hash: "992cdb48", date: "2024-04-03", author: "rkir@google.com", message: "Disable adb over USB" },
]});
repoLogs.push({ path: "device/generic/goldfish-opengl", logs: [
  { hash: "f275c5b4", date: "2024-04-22", author: "sallyqi@google.com", message: "Use composer3-ndk wrappers to avoid manual revup." },
]});
repoLogs.push({ path: "device/generic/mini-emulator-arm64", logs: [
]});
repoLogs.push({ path: "device/generic/mini-emulator-armv7-a-neon", logs: [
]});
repoLogs.push({ path: "device/generic/mini-emulator-x86", logs: [
]});
repoLogs.push({ path: "device/generic/mini-emulator-x86_64", logs: [
]});
repoLogs.push({ path: "device/generic/opengl-transport", logs: [
]});
repoLogs.push({ path: "device/generic/trusty", logs: [
  { hash: "765c892", date: "2024-04-25", author: "ahomescu@google.com", message: "Build etc/hosts using Soong" },
]});
repoLogs.push({ path: "device/generic/uml", logs: [
]});
repoLogs.push({ path: "device/generic/vulkan-cereal", logs: [
]});
repoLogs.push({ path: "device/generic/x86", logs: [
]});
repoLogs.push({ path: "device/generic/x86_64", logs: [
]});
repoLogs.push({ path: "device/google/atv", logs: [
  { hash: "3386d16", date: "2024-04-23", author: "inseob@google.com", message: "Build audio_effects.xml with Soong" },
]});
repoLogs.push({ path: "device/google/barbet", logs: [
  { hash: "87a0da2", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "5b34da4", date: "2024-04-22", author: "caditya@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
]});
repoLogs.push({ path: "device/google/barbet-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/bluejay", logs: [
]});
repoLogs.push({ path: "device/google/bluejay-kernel", logs: [
]});
repoLogs.push({ path: "device/google/bluejay-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/bramble", logs: [
  { hash: "df7e0c7", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "device/google/bramble-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/contexthub", logs: [
]});
repoLogs.push({ path: "device/google/coral", logs: [
  { hash: "23e09588", date: "2024-04-23", author: "weiwli@google.com", message: "Move license metadata declarations to meta-lic.mk and remove the Android.mk file." },
]});
repoLogs.push({ path: "device/google/coral-kernel", logs: [
]});
repoLogs.push({ path: "device/google/coral-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/cuttlefish", logs: [
  { hash: "c70ced19e", date: "2024-04-26", author: "inseob@google.com", message: "Merge ＂Build audio_effects.xml with Soong＂ into main" },
  { hash: "718fb6c12", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂use `crosvm resume` to detect RESTORE_COMPLETE＂ into main" },
  { hash: "bf30cfd6a", date: "2024-04-25", author: "henrichataing@google.com", message: "Merge ＂Update casimir ports to avoid collisions＂ into main" },
  { hash: "b601a7aea", date: "2024-04-25", author: "fmayle@google.com", message: "use `crosvm resume` to detect RESTORE_COMPLETE" },
  { hash: "fb9cf41d8", date: "2024-04-25", author: "henrichataing@google.com", message: "Update casimir ports to avoid collisions" },
  { hash: "5f933bd71", date: "2024-04-25", author: "dshi@google.com", message: "Merge changes from topic ＂revert-3040304-IYDQWEWFVW＂ into main" },
  { hash: "91a29713d", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow EVS HAL implementations to use mediametrics＂ into main" },
  { hash: "fd40ce7b7", date: "2024-04-25", author: "dshi@google.com", message: "Revert ＂Dynamically combine dynamic partitions and groups＂" },
  { hash: "f9b473c60", date: "2024-04-25", author: "dshi@google.com", message: "Revert ＂Extend misc_info.txt merging logic＂" },
  { hash: "eef6290c3", date: "2024-04-25", author: "inseob@google.com", message: "Merge ＂Add media_profiles_V1_0.dtd to system image＂ into main" },
  { hash: "c7da6cfb1", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I224d22ab,Idc0148ba into main" },
  { hash: "1f4c0594d", date: "2024-04-24", author: "chadreynolds@google.com", message: "Extend misc_info.txt merging logic" },
  { hash: "6f4f77ff6", date: "2024-04-24", author: "chadreynolds@google.com", message: "Dynamically combine dynamic partitions and groups" },
  { hash: "53d315479", date: "2024-04-24", author: "natsu@google.com", message: "Merge ＂Make main crosvm wait for vhost user gpu device socket available＂ into main" },
  { hash: "1294bb53b", date: "2024-04-24", author: "chadreynolds@google.com", message: "Merge changes Ie5738db2,I528e72c2 into main" },
  { hash: "022bb1732", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add support to launch aarch64 QEMU image＂ into main" },
  { hash: "2d2dec4db", date: "2024-04-23", author: "changyeon@google.com", message: "Allow EVS HAL implementations to use mediametrics" },
  { hash: "9e07c82fe", date: "2024-04-23", author: "gurchetansingh@google.com", message: "cuttlefish: allow setting real Wayland socket path" },
  { hash: "f62f638fd", date: "2024-04-23", author: "gurchetansingh@google.com", message: "cuttlefish: allow specifying context-types + vulkan driver on command line" },
  { hash: "6a4f625e1", date: "2024-04-23", author: "jeongik@google.com", message: "Merge ＂Include more modules which was blocked with visibility＂ into main" },
  { hash: "66df2737b", date: "2024-04-23", author: "khei@google.com", message: "Merge ＂add flag to enable usb passthrough＂ into main" },
  { hash: "781b8ce70", date: "2024-04-23", author: "jeongik@google.com", message: "Include more modules which was blocked with visibility" },
  { hash: "c857f2442", date: "2024-04-23", author: "inseob@google.com", message: "Build audio_effects.xml with Soong" },
  { hash: "edf8fbdf6", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use a phony module for system sepolicy＂ into main" },
  { hash: "6526a9968", date: "2024-04-22", author: "chadreynolds@google.com", message: "Continue CombineTargetFiles refactor" },
  { hash: "1b67def1a", date: "2024-04-22", author: "chadreynolds@google.com", message: "Clean up super_image_mixer" },
  { hash: "aee415de2", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Call the correct setter＂ into main" },
  { hash: "1438c6dde", date: "2024-04-22", author: "adelva@google.com", message: "Merge ＂Revert ＂Use the in-guest secure hals by default.＂＂ into main" },
  { hash: "7e8532711", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Deduplicate `KillSubprocess` fallback calls＂ into main" },
  { hash: "f243e6b48", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add init rc files to system image＂ into main" },
  { hash: "85841353f", date: "2024-04-22", author: "natsu@google.com", message: "Make main crosvm wait for vhost user gpu device socket available" },
  { hash: "e9feea943", date: "2024-04-22", author: "dshi@google.com", message: "Revert ＂Use the in-guest secure hals by default.＂" },
  { hash: "a15b68a0c", date: "2024-04-22", author: "inseob@google.com", message: "Merge ＂Add preinstalled-packages-strict-signature.xml to system image＂ into main" },
  { hash: "32e01973e", date: "2024-04-21", author: "khei@google.com", message: "add flag to enable usb passthrough" },
  { hash: "1f809ef3b", date: "2024-04-19", author: "prashanthsw@google.com", message: "Add support to launch aarch64 QEMU image" },
  { hash: "dee53716b", date: "2024-04-19", author: "chadreynolds@google.com", message: "Call the correct setter" },
  { hash: "d72ec7dda", date: "2024-04-19", author: "schuffelen@google.com", message: "Deduplicate `KillSubprocess` fallback calls" },
  { hash: "ff01864a1", date: "2024-04-19", author: "chadreynolds@google.com", message: "Merge changes I0287744f,Ifc2883fe,Id505402d into main" },
  { hash: "ddab63b25", date: "2024-04-19", author: "chadreynolds@google.com", message: "Merge ＂Move `info_image` logic into `Avb`＂ into main" },
  { hash: "8a7c61d5e", date: "2024-04-19", author: "jaeman@google.com", message: "Merge ＂Enable adb by defauly for user build of CHD＂ into main" },
  { hash: "a014f09d0", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use the in-guest secure hals by default.＂ into main" },
  { hash: "f7c6c135c", date: "2024-04-19", author: "jdesprez@google.com", message: "Merge ＂Explicitly add the libprotobuf-java-util-full to CuttlefishWmediumdControlTest＂ into main" },
  { hash: "240e2cfbc", date: "2024-04-19", author: "jaeman@google.com", message: "Enable adb by defauly for user build of CHD" },
  { hash: "2aed7ffa8", date: "2024-04-19", author: "phenixchen@google.com", message: "Merge ＂Revert ＂[cf] Add an overlay to indicate whether multicast ntf v2...＂＂ into main" },
  { hash: "ec1856a7d", date: "2024-04-19", author: "inseob@google.com", message: "Add init rc files to system image" },
  { hash: "fb6d52425", date: "2024-04-19", author: "phenixchen@google.com", message: "Revert ＂[cf] Add an overlay to indicate whether multicast ntf v2...＂" },
  { hash: "c4df49212", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Utilize `Avb` everywhere* we call add_hash_footer＂ into main" },
  { hash: "30c67ab47", date: "2024-04-19", author: "inseob@google.com", message: "Merge ＂Add etc/hosts to system image＂ into main" },
  { hash: "74304d79e", date: "2024-04-18", author: "chadreynolds@google.com", message: "Expand the list of vendor images" },
  { hash: "910e4c88b", date: "2024-04-18", author: "chadreynolds@google.com", message: "Move `info_image` logic into `Avb`" },
  { hash: "4e685778e", date: "2024-04-18", author: "chadreynolds@google.com", message: "Add a new_vbmeta_image path for regeneration" },
  { hash: "e610b6286", date: "2024-04-18", author: "chadreynolds@google.com", message: "Add `make_vbmeta_image` to `Avb`" },
  { hash: "ea1e5de55", date: "2024-04-19", author: "jaeman@google.com", message: "Merge ＂Extract cvd-host_package.tar.gz with /:extract API if the API exists＂ into main" },
  { hash: "222e31676", date: "2024-04-18", author: "chadreynolds@google.com", message: "Utilize `Avb` everywhere* we call add_hash_footer" },
  { hash: "f02f5e0af", date: "2024-04-18", author: "fmayle@google.com", message: "Merge ＂SnapshotTest: increase default test-count to 10＂ into main" },
  { hash: "a235ff018", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂add OWNERS for snapshot tests＂ into main" },
  { hash: "e15c43f05", date: "2024-04-18", author: "fmayle@google.com", message: "add OWNERS for snapshot tests" },
  { hash: "a7abdb1a9", date: "2024-04-18", author: "ziyiw@google.com", message: "Merge ＂[cf] Add an overlay to indicate whether multicast ntf v2 is supported.＂ into main" },
  { hash: "82a98da8a", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fix documentation typo for DaemonizeLauncher＂ into main" },
  { hash: "638a1b953", date: "2024-04-18", author: "inseob@google.com", message: "Add preinstalled-packages-strict-signature.xml to system image" },
  { hash: "5f9355208", date: "2024-04-18", author: "inseob@google.com", message: "Add media_profiles_V1_0.dtd to system image" },
  { hash: "5da27cc58", date: "2024-04-18", author: "jaeman@google.com", message: "Extract cvd-host_package.tar.gz with /:extract API if the API exists" },
  { hash: "cd0e736aa", date: "2024-04-18", author: "inseob@google.com", message: "Add etc/hosts to system image" },
  { hash: "c045d27e5", date: "2024-04-18", author: "inseob@google.com", message: "Merge ＂Add dirty-image-objects to system image＂ into main" },
  { hash: "90ad98094", date: "2024-04-18", author: "ziyiw@google.com", message: "[cf] Add an overlay to indicate whether multicast ntf v2 is supported." },
  { hash: "5cce40192", date: "2024-04-17", author: "fmayle@google.com", message: "SnapshotTest: increase default test-count to 10" },
  { hash: "1d40bb66c", date: "2024-04-17", author: "fmayle@google.com", message: "fix documentation typo for DaemonizeLauncher" },
  { hash: "08754957b", date: "2024-04-17", author: "fmayle@google.com", message: "Merge ＂Revert ＂enable SnapshotTest in postsubmit TEST_MAPPING＂＂ into main" },
  { hash: "c2276d35f", date: "2024-04-17", author: "fmayle@google.com", message: "Revert ＂enable SnapshotTest in postsubmit TEST_MAPPING＂" },
  { hash: "490664fbb", date: "2024-04-17", author: "jdesprez@google.com", message: "Explicitly add the libprotobuf-java-util-full to CuttlefishWmediumdControlTest" },
  { hash: "4f541655c", date: "2024-04-17", author: "schuffelen@google.com", message: "Use the in-guest secure hals by default." },
  { hash: "e5433d41e", date: "2024-04-17", author: "inseob@google.com", message: "Add dirty-image-objects to system image" },
  { hash: "6ec513b15", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Preserve legacy logs on restore＂ into main" },
  { hash: "9e50fa0fb", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add powerwash/snapshot test combinations＂ into main" },
  { hash: "a522bcb3f", date: "2024-04-16", author: "khei@google.com", message: "Preserve legacy logs on restore" },
  { hash: "091d2edd7", date: "2024-04-16", author: "fmayle@google.com", message: "Merge ＂fix adb proxy when powerwash is used on a restored device＂ into main" },
  { hash: "ff0c4114c", date: "2024-04-16", author: "khei@google.com", message: "Add powerwash/snapshot test combinations" },
  { hash: "d18880bae", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^3 ＂Enable SnapshotTest in presubmit TEST_MAPPING＂＂ into main" },
  { hash: "d4e115533", date: "2024-04-16", author: "linaaron@google.com", message: "Revert^3 ＂Enable SnapshotTest in presubmit TEST_MAPPING＂" },
  { hash: "2d738def6", date: "2024-04-15", author: "fmayle@google.com", message: "fix adb proxy when powerwash is used on a restored device" },
  { hash: "2352e5e7f", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove static initializers in cvd_internal_display＂ into main" },
  { hash: "e17192e41", date: "2024-04-15", author: "khei@google.com", message: "Revert^2 ＂Enable SnapshotTest in presubmit TEST_MAPPING＂" },
  { hash: "a5785dcb1", date: "2024-04-15", author: "natsu@google.com", message: "Merge ＂Wrap vhost user gpu crosvm with a process restarter＂ into main" },
  { hash: "98e516292", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Reland ＂Set netsim as default UWB connector for CF＂＂ into main" },
  { hash: "63b903e43", date: "2024-04-15", author: "schuffelen@google.com", message: "Remove static initializers in cvd_internal_display" },
  { hash: "c2916f047", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Install nonsecure gatekeeper apex＂ into main" },
  { hash: "40fd0065d", date: "2024-04-14", author: "schuffelen@google.com", message: "Merge ＂Support a guest gatekeeper+sharedsecret impl＂ into main" },
  { hash: "878d98de3", date: "2024-04-12", author: "natsu@google.com", message: "Wrap vhost user gpu crosvm with a process restarter" },
  { hash: "2776ccfa6", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂enable SnapshotTest in postsubmit TEST_MAPPING＂ into main" },
  { hash: "a53237679", date: "2024-04-12", author: "fmayle@google.com", message: "enable SnapshotTest in postsubmit TEST_MAPPING" },
  { hash: "948d83a0f", date: "2024-04-12", author: "drysdale@google.com", message: "Merge ＂Reapply ＂KeyMint: behave as an RKP-only device＂＂ into main" },
  { hash: "419306f89", date: "2024-04-12", author: "inseob@google.com", message: "Use a phony module for system sepolicy" },
  { hash: "c0f622303", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I8a5a27ad,Iecdad23d,I0b6f2c59 into main" },
  { hash: "0be6d650f", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update help text for `cvd display`＂ into main" },
  { hash: "80205a877", date: "2024-04-11", author: "schuffelen@google.com", message: "Remove Android Build API / Credential code" },
  { hash: "0fc6a23f0", date: "2024-04-11", author: "schuffelen@google.com", message: "Remove SsoClient and tests" },
  { hash: "0feb94c4f", date: "2024-04-11", author: "schuffelen@google.com", message: "Remove test_gce_driver" },
  { hash: "a02f59e57", date: "2024-04-11", author: "chadreynolds@google.com", message: "Merge ＂Update key names to for clarity, add RSA2048 key＂ into main" },
  { hash: "7c2925b6c", date: "2024-04-11", author: "natsu@google.com", message: "Update help text for `cvd display`" },
  { hash: "b24416460", date: "2024-04-11", author: "natsu@google.com", message: "Merge ＂Add flag for setting Gfxstream features at command line＂ into main" },
  { hash: "0dff58f3e", date: "2024-04-11", author: "schuffelen@google.com", message: "Install nonsecure gatekeeper apex" },
  { hash: "d2fd29947", date: "2024-04-11", author: "schuffelen@google.com", message: "Support a guest gatekeeper+sharedsecret impl" },
  { hash: "dee10ecf6", date: "2024-04-11", author: "natsu@google.com", message: "Add flag for setting Gfxstream features at command line" },
  { hash: "7b5468bed", date: "2024-04-11", author: "hyunjaemoon@google.com", message: "Reland ＂Set netsim as default UWB connector for CF＂" },
  { hash: "6fbe994c3", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fix SnapshotTest.testSnapshotReboot＂ into main" },
  { hash: "e302db872", date: "2024-04-11", author: "fmayle@google.com", message: "fix SnapshotTest.testSnapshotReboot" },
  { hash: "e621368b9", date: "2024-04-11", author: "adelva@google.com", message: "Merge changes Ic9388660,Ifdfce121 into main" },
  { hash: "c6d3425ba", date: "2024-04-11", author: "fmayle@google.com", message: "Merge ＂Upgrade nix to 0.28.0＂ into main" },
  { hash: "51ae8271a", date: "2024-04-11", author: "drysdale@google.com", message: "Reapply ＂KeyMint: behave as an RKP-only device＂" },
  { hash: "482f06bc4", date: "2024-04-11", author: "drysdale@google.com", message: "Merge ＂Indicate that CF KeyMint support device IDs＂ into main" },
  { hash: "f033c78ff", date: "2024-04-10", author: "chadreynolds@google.com", message: "Update key names to for clarity, add RSA2048 key" },
  { hash: "ca57dc520", date: "2024-04-10", author: "adelva@google.com", message: "Remove unused composer@2.4 xml fragment" },
  { hash: "0ee9bbcca", date: "2024-04-10", author: "adelva@google.com", message: "Remove unused omx xml fragment" },
  { hash: "86b5c5820", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Correct acloud setup message＂ into main" },
  { hash: "9b227bd71", date: "2024-04-10", author: "jemoreira@google.com", message: "Correct acloud setup message" },
  { hash: "ae12e2851", date: "2024-04-10", author: "drysdale@google.com", message: "Indicate that CF KeyMint support device IDs" },
  { hash: "0fd8bed2c", date: "2024-04-10", author: "acjohnston@google.com", message: "Merge ＂Revert ＂KeyMint: behave as an RKP-only device＂＂ into main" },
  { hash: "d17da13a3", date: "2024-04-10", author: "acjohnston@google.com", message: "Revert ＂KeyMint: behave as an RKP-only device＂" },
  { hash: "4f6de2ca6", date: "2024-04-10", author: "drysdale@google.com", message: "Merge ＂KeyMint: behave as an RKP-only device＂ into main" },
  { hash: "c4bdaf8e0", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use AutoSetup for InitializeMiscImage＂ into main" },
  { hash: "7545ff743", date: "2024-04-09", author: "drysdale@google.com", message: "Merge ＂Make batch attestation keys/certs optional＂ into main" },
  { hash: "aad47f628", date: "2024-04-08", author: "fmayle@google.com", message: "Upgrade nix to 0.28.0" },
  { hash: "5d0eea23b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Hardcode crosvm network PCI devices adresses＂＂ into main" },
  { hash: "5b80d94fc", date: "2024-04-08", author: "zhengdaniel@google.com", message: "Merge ＂Revert^2 ＂Cuttlefish: inherit from vabc_features＂＂ into main" },
  { hash: "9d4125acc", date: "2024-04-08", author: "dimorinny@google.com", message: "Revert ＂Hardcode crosvm network PCI devices adresses＂" },
  { hash: "cddd50a29", date: "2024-04-08", author: "zhengdaniel@google.com", message: "Revert^2 ＂Cuttlefish: inherit from vabc_features＂" },
  { hash: "3f3f2796a", date: "2024-04-08", author: "drysdale@google.com", message: "KeyMint: behave as an RKP-only device" },
  { hash: "fcb0d41fe", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Set netsim as default UWB connector for CF＂＂ into main" },
  { hash: "c83fe307c", date: "2024-04-05", author: "dshi@google.com", message: "Revert ＂Set netsim as default UWB connector for CF＂" },
  { hash: "c08e510ff", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Hardcode crosvm network PCI devices adresses＂ into main" },
  { hash: "fd96a8edb", date: "2024-04-05", author: "dimorinny@google.com", message: "Hardcode crosvm network PCI devices adresses" },
  { hash: "3ac78bff2", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use AutoSetup for InitializDataImage＂ into main" },
  { hash: "c00f64660", date: "2024-04-05", author: "drysdale@google.com", message: "Make batch attestation keys/certs optional" },
  { hash: "9c6537411", date: "2024-04-04", author: "natsu@google.com", message: "Merge ＂Enabled VulkanUseDedicatedAhbMemoryType w/ Gfxstream on SwiftShader＂ into main" },
  { hash: "9b8ef3945", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Hide crosvm output for disk partition lists from stderr＂ into main" },
  { hash: "5c5eaec9d", date: "2024-04-04", author: "schuffelen@google.com", message: "Use AutoSetup for InitializeMiscImage" },
  { hash: "41eadbf37", date: "2024-04-04", author: "schuffelen@google.com", message: "Use AutoSetup for InitializDataImage" },
  { hash: "7ccee1be4", date: "2024-04-04", author: "fmayle@google.com", message: "Merge ＂propagate errors from nested syscalls in RecursivelyRemoveDirectory＂ into main" },
  { hash: "8c3649f8c", date: "2024-04-04", author: "fmayle@google.com", message: "Merge ＂return Result<void> from RecursivelyRemoveDirectory＂ into main" },
  { hash: "27ed6ccf0", date: "2024-04-04", author: "fmayle@google.com", message: "Merge ＂add test to ensure reboot works after a snapshot restore＂ into main" },
  { hash: "f61cde387", date: "2024-04-04", author: "jaeman@google.com", message: "Merge ＂Use adb port with dynamic allocated docker port＂ into main" },
  { hash: "659481b1a", date: "2024-04-04", author: "inseob@google.com", message: "Merge ＂Add framework-res to libs＂ into main" },
  { hash: "553a76c00", date: "2024-04-03", author: "fmayle@google.com", message: "propagate errors from nested syscalls in RecursivelyRemoveDirectory" },
  { hash: "6b957943a", date: "2024-04-03", author: "fmayle@google.com", message: "return Result<void> from RecursivelyRemoveDirectory" },
  { hash: "050862832", date: "2024-04-03", author: "fmayle@google.com", message: "add test to ensure reboot works after a snapshot restore" },
  { hash: "c5f0557a6", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fix `snapshot_util_cvd --force` error when snapshot path doesn't exist＂ into main" },
  { hash: "995c2b68c", date: "2024-04-03", author: "zhengdaniel@google.com", message: "Merge ＂Revert ＂Cuttlefish: inherit from vabc_features＂＂ into main" },
  { hash: "4b0592e42", date: "2024-04-03", author: "fmayle@google.com", message: "fix `snapshot_util_cvd --force` error when snapshot path doesn't exist" },
  { hash: "44e44b0e7", date: "2024-04-03", author: "natsu@google.com", message: "Enabled VulkanUseDedicatedAhbMemoryType w/ Gfxstream on SwiftShader" },
  { hash: "c84ba759d", date: "2024-04-03", author: "fmayle@google.com", message: "Merge ＂make SnapshotTake::snapshot_path a non-repeated field＂ into main" },
  { hash: "ba42f1601", date: "2024-04-03", author: "fmayle@google.com", message: "Merge ＂simplify snapshot_util_cvd＂ into main" },
  { hash: "3028ceaed", date: "2024-04-03", author: "zhengdaniel@google.com", message: "Revert ＂Cuttlefish: inherit from vabc_features＂" },
  { hash: "b11891a11", date: "2024-04-03", author: "inseob@google.com", message: "Add framework-res to libs" },
  { hash: "3b1104426", date: "2024-04-03", author: "jaeman@google.com", message: "Use adb port with dynamic allocated docker port" },
  { hash: "fcf8aba13", date: "2024-04-02", author: "jemoreira@google.com", message: "Merge changes Ic3f51485,Ib72b8007 into main" },
  { hash: "1e92254bd", date: "2024-04-02", author: "jemoreira@google.com", message: "Delete [set_]enable_wifi from cuttlefish config" },
  { hash: "e3d0f5e9d", date: "2024-04-02", author: "jemoreira@google.com", message: "Call enable_wifi from the environment config" },
  { hash: "b3d7a1cc3", date: "2024-04-02", author: "fmayle@google.com", message: "make SnapshotTake::snapshot_path a non-repeated field" },
  { hash: "7f49b2b6f", date: "2024-04-02", author: "fmayle@google.com", message: "simplify snapshot_util_cvd" },
  { hash: "c21977526", date: "2024-04-02", author: "hyunjaemoon@google.com", message: "Merge ＂Set netsim as default UWB connector for CF＂ into main" },
  { hash: "7084da1d2", date: "2024-04-02", author: "fmayle@google.com", message: "Merge ＂fix `adb reboot` after snapshot restore＂ into main" },
  { hash: "d86e5de83", date: "2024-04-02", author: "fmayle@google.com", message: "fix `adb reboot` after snapshot restore" },
]});
repoLogs.push({ path: "device/google/cuttlefish_prebuilts", logs: [
]});
repoLogs.push({ path: "device/google/cuttlefish_vmm", logs: [
]});
repoLogs.push({ path: "device/google/felix", logs: [
]});
repoLogs.push({ path: "device/google/felix-kernel", logs: [
]});
repoLogs.push({ path: "device/google/felix-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/gs-common", logs: [
]});
repoLogs.push({ path: "device/google/gs101", logs: [
]});
repoLogs.push({ path: "device/google/gs101-sepolicy", logs: [
  { hash: "5e8b518", date: "2024-04-24", author: "wilsonsung@google.com", message: "Update SELinux error" },
]});
repoLogs.push({ path: "device/google/gs201", logs: [
]});
repoLogs.push({ path: "device/google/gs201-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/lynx", logs: [
]});
repoLogs.push({ path: "device/google/lynx-kernel", logs: [
]});
repoLogs.push({ path: "device/google/lynx-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/pantah", logs: [
]});
repoLogs.push({ path: "device/google/pantah-kernel", logs: [
]});
repoLogs.push({ path: "device/google/pantah-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/raviole", logs: [
]});
repoLogs.push({ path: "device/google/raviole-kernel", logs: [
]});
repoLogs.push({ path: "device/google/redbull", logs: [
]});
repoLogs.push({ path: "device/google/redbull-kernel", logs: [
]});
repoLogs.push({ path: "device/google/redbull-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/redfin", logs: [
]});
repoLogs.push({ path: "device/google/redfin-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/shusky", logs: [
]});
repoLogs.push({ path: "device/google/shusky-kernel", logs: [
]});
repoLogs.push({ path: "device/google/shusky-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/sunfish", logs: [
]});
repoLogs.push({ path: "device/google/sunfish-kernel", logs: [
]});
repoLogs.push({ path: "device/google/sunfish-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/tangorpro", logs: [
]});
repoLogs.push({ path: "device/google/tangorpro-kernel", logs: [
]});
repoLogs.push({ path: "device/google/tangorpro-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google/trout", logs: [
  { hash: "f7a6cf7", date: "2024-04-16", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove chenhaosjtuacm@google.com from rro_overlays/EvsOverlay/OWNERS" },
  { hash: "cafde1b", date: "2024-04-15", author: "briandaniels@google.com", message: "Merge ＂Prerequisite changes to switch to 6.1 kernel＂ into main" },
  { hash: "c0a48ea", date: "2024-04-15", author: "egranata@google.com", message: "Update OWNERS file for trout" },
]});
repoLogs.push({ path: "device/google/vrservices", logs: [
]});
repoLogs.push({ path: "device/google/zuma", logs: [
]});
repoLogs.push({ path: "device/google/zuma-sepolicy", logs: [
]});
repoLogs.push({ path: "device/google_car", logs: [
]});
repoLogs.push({ path: "device/linaro/dragonboard", logs: [
  { hash: "94ccdd9", date: "2024-04-18", author: "amit.pundir@linaro.org", message: "db845c|rb5: Add support for parallel kernel moduel loading" },
  { hash: "e4d2a61", date: "2024-04-05", author: "amit.pundir@linaro.org", message: "sm8x50: Add Mesa (zink+turnip) support" },
  { hash: "6fd947e", date: "2024-04-05", author: "amit.pundir@linaro.org", message: "dragonboards: Update vendor-package to 20240405 release" },
  { hash: "bd765d6", date: "2024-04-04", author: "amit.pundir@linaro.org", message: "sm8x50-userdebug: Add a generic build target for Qcom ARMv9 devboards" },
]});
repoLogs.push({ path: "device/linaro/dragonboard-kernel", logs: [
]});
repoLogs.push({ path: "device/linaro/hikey", logs: [
]});
repoLogs.push({ path: "device/linaro/hikey-kernel", logs: [
]});
repoLogs.push({ path: "device/linaro/poplar", logs: [
]});
repoLogs.push({ path: "device/linaro/poplar-kernel", logs: [
]});
repoLogs.push({ path: "device/sample", logs: [
  { hash: "d6df250", date: "2024-04-24", author: "sangyun@google.com", message: "Merge ＂Modify APNs for Swisscom with carrier_id 16 and 2366＂ into main" },
  { hash: "4cc3c3a", date: "2024-04-19", author: "sangyun@google.com", message: "Modify APNs for Swisscom with carrier_id 16 and 2366" },
  { hash: "4e0eb7d", date: "2024-04-15", author: "amallampati@google.com", message: "Merge ＂Remove outdated TMO APN entry＂ into main" },
  { hash: "2542fa6", date: "2024-04-15", author: "amallampati@google.com", message: "Remove outdated TMO APN entry" },
  { hash: "5e160a3", date: "2024-04-09", author: "sangyun@google.com", message: "Merge ＂Remove apn carrier=＂Swisscom MMS＂ carrier_id 2366＂ into main" },
  { hash: "853e3a9", date: "2024-04-09", author: "sangyun@google.com", message: "Remove apn carrier=＂Swisscom MMS＂ carrier_id 2366" },
]});
repoLogs.push({ path: "external/AFLplusplus", logs: [
]});
repoLogs.push({ path: "external/ComputeLibrary", logs: [
]});
repoLogs.push({ path: "external/FP16", logs: [
]});
repoLogs.push({ path: "external/FXdiv", logs: [
]});
repoLogs.push({ path: "external/ImageMagick", logs: [
]});
repoLogs.push({ path: "external/MPAndroidChart", logs: [
]});
repoLogs.push({ path: "external/OpenCL-CTS", logs: [
]});
repoLogs.push({ path: "external/OpenCSD", logs: [
]});
repoLogs.push({ path: "external/TestParameterInjector", logs: [
  { hash: "fd68ba1", date: "2024-04-11", author: "licorne@google.com", message: "Restrict visibility to current users" },
  { hash: "76072ce", date: "2024-04-05", author: "licorne@google.com", message: "Document the update procedure" },
  { hash: "273cae1", date: "2024-04-05", author: "licorne@google.com", message: "Merge remote-tracking branch 'aosp/upstream-main' into main" },
]});
repoLogs.push({ path: "external/XNNPACK", logs: [
]});
repoLogs.push({ path: "external/aac", logs: [
]});
repoLogs.push({ path: "external/abseil-cpp", logs: [
]});
repoLogs.push({ path: "external/android-key-attestation", logs: [
]});
repoLogs.push({ path: "external/android-nn-driver", logs: [
]});
repoLogs.push({ path: "external/android_onboarding", logs: [
]});
repoLogs.push({ path: "external/androidplot", logs: [
]});
repoLogs.push({ path: "external/angle", logs: [
  { hash: "9a2d298903", date: "2024-04-25", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from ab0140b0cb9c to 37d2277bddcc (1 revision)" },
  { hash: "8eaa8655ee", date: "2024-04-25", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from d0a2525da71f to ab0140b0cb9c (1 revision)" },
  { hash: "37d2277bdd", date: "2024-04-25", author: "cnorthrop@google.com", message: "Vulkan: Disable dynamic state on JM based Mali" },
  { hash: "ab0140b0cb", date: "2024-04-25", author: "geofflang@chromium.org", message: "Update CLA contact information in the documentation." },
  { hash: "beaf5f521d", date: "2024-04-25", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 75c14ed6d709 to d0a2525da71f (1 revision)" },
  { hash: "d0a2525da7", date: "2024-04-25", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 8ff7d8bf1899 to a4bf9c4e9ffd (5 revisions)" },
  { hash: "5cd115fbc6", date: "2024-04-25", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from d2e5eeefbd67 to 75c14ed6d709 (4 revisions)" },
  { hash: "75c14ed6d7", date: "2024-04-25", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 3bff690c506f to 0543b5c427ca (360 revisions)" },
  { hash: "47fc356b23", date: "2024-04-25", author: "jdapena@igalia.com", message: "GCC: move warm up tasks out of anonymous namespace" },
  { hash: "9c2632b3df", date: "2024-04-24", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Manual roll Chromium from 4433c533fffb to 3bff690c506f (214 revisions)" },
  { hash: "a443959993", date: "2024-04-24", author: "ynovikov@chromium.org", message: "End Win Intel experiment." },
  { hash: "9806bd3b3c", date: "2024-04-24", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 0e7d735b144d to d2e5eeefbd67 (1 revision)" },
  { hash: "d2e5eeefbd", date: "2024-04-24", author: "cclao@google.com", message: "Vulkan: UNASSIGNED-CoreValidation-DrawState-InvalidImageLayout" },
  { hash: "042d8289b5", date: "2024-04-24", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from d4519fdce606 to 0e7d735b144d (2 revisions)" },
  { hash: "795c004bb3", date: "2024-04-24", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 94179bed1c11 to d4519fdce606 (2 revisions)" },
  { hash: "0e7d735b14", date: "2024-04-24", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from 9aec4b969291 to 76f7f8cfea80 (1 revision)" },
  { hash: "b8e7860fe1", date: "2024-04-24", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from b00758dcbb7a to 4433c533fffb (891 revisions)" },
  { hash: "d4519fdce6", date: "2024-04-24", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 91b20c9cf5fd to 8ff7d8bf1899 (8 revisions)" },
  { hash: "c74d2634e6", date: "2024-04-24", author: "cclao@google.com", message: "Vulkan: Update mSurfaceCaps with per-present mode caps." },
  { hash: "910b1c6d9a", date: "2024-04-23", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 0d1dab2cf11b to 94179bed1c11 (1 revision)" },
  { hash: "94179bed1c", date: "2024-04-23", author: "ynovikov@chromium.org", message: "Roll chromium_revision 39c16b7a37..b00758dcbb (1290535:1290830)" },
  { hash: "e3932e4318", date: "2024-04-23", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 64e979400646 to 0d1dab2cf11b (3 revisions)" },
  { hash: "0d1dab2cf1", date: "2024-04-23", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 36da75a01950 to 91b20c9cf5fd (10 revisions)" },
  { hash: "6fe8a399dd", date: "2024-04-23", author: "kkinnunen@apple.com", message: "Metal: Fix rewritten out variables with underscores" },
  { hash: "2905a6a6e2", date: "2024-04-22", author: "cclao@google.com", message: "Vulkan: Fix read pixel to cached non-coherent memory" },
  { hash: "6a4705386a", date: "2024-04-22", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 219f7762e54b to 64e979400646 (1 revision)" },
  { hash: "64e9794006", date: "2024-04-22", author: "romanl@google.com", message: "Presubmit: improve bug tag check message" },
  { hash: "e2e38a4d82", date: "2024-04-22", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 40c6ba522234 to 219f7762e54b (1 revision)" },
  { hash: "219f7762e5", date: "2024-04-22", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 4737535cad1a to 36da75a01950 (8 revisions)" },
  { hash: "b70bccdfe9", date: "2024-04-22", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 23b8a833f3da to 40c6ba522234 (3 revisions)" },
  { hash: "40c6ba5222", date: "2024-04-22", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll VK-GL-CTS from 669273b1098a to 17c6e3c4dfad (3 revisions)" },
  { hash: "f2901ba7c2", date: "2024-04-22", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from e191335efc2d to 39c16b7a3740 (747 revisions)" },
  { hash: "36ae455328", date: "2024-04-21", author: "m.maiya@samsung.com", message: "Vulkan: Remove unnecessary member from ProgramExecutableVk" },
  { hash: "c9a2b9ab1e", date: "2024-04-19", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 84b8737394d5 to 23b8a833f3da (1 revision)" },
  { hash: "23b8a833f3", date: "2024-04-19", author: "ynovikov@chromium.org", message: "Suppress VUID-VkSwapchainCreateInfoKHR-presentMode-02839" },
  { hash: "6650bbcda7", date: "2024-04-19", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 602a6a9a532f to 84b8737394d5 (2 revisions)" },
  { hash: "84b8737394", date: "2024-04-19", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from aa20d192b8c4 to 4737535cad1a (9 revisions)" },
  { hash: "f0f4edfc4e", date: "2024-04-19", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from 764410d4d655 to 9aec4b969291 (2 revisions)" },
  { hash: "c4db00fa37", date: "2024-04-19", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 51c580031adc to 602a6a9a532f (12 revisions)" },
  { hash: "602a6a9a53", date: "2024-04-19", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from b07526b70da5 to e191335efc2d (579 revisions)" },
  { hash: "cc770518b0", date: "2024-04-18", author: "a.annestrand@samsung.com", message: "CL/VK: Implement flush & finish" },
  { hash: "c75b03ad1c", date: "2024-04-18", author: "syoussefi@chromium.org", message: "Vulkan: Remove duplicated fallback entry in vk_format_map.json" },
  { hash: "d4abe62268", date: "2024-04-18", author: "a.annestrand@samsung.com", message: "CL/VK: Implement enqueue NDRangeKernel & Task" },
  { hash: "4813295059", date: "2024-04-18", author: "m.maiya@samsung.com", message: "Vulkan: Optimize DescriptorSetLayoutDesc layout" },
  { hash: "80c8b6f050", date: "2024-04-18", author: "syoussefi@chromium.org", message: "Revert ＂Vulkan: Only enable DS dynamic state if there is DS attachment.＂" },
  { hash: "d0b01c813d", date: "2024-04-18", author: "yuxinhu@google.com", message: "Remove duplicated fallback entry in vk_format_table_autogen" },
  { hash: "4109a90ee3", date: "2024-04-18", author: "romanl@google.com", message: "LinkedUniform: avoid frequent GLenum -> index conversion" },
  { hash: "00fa9af9e6", date: "2024-04-18", author: "syoussefi@chromium.org", message: "Disable the BasicNoOpMutex test" },
  { hash: "7523c5dfd8", date: "2024-04-18", author: "ambroisie@google.com", message: "Make 'ANGLE_CAPTURE_OUT_DIR' doc clearer" },
  { hash: "5f532b75c2", date: "2024-04-18", author: "ynovikov@chromium.org", message: "Roll chromium_revision 0abb3a90f2..b07526b70d (1287851:1289209)" },
  { hash: "36b725a37b", date: "2024-04-18", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 6861da63bb01 to 51c580031adc (1 revision)" },
  { hash: "f696652fc1", date: "2024-04-18", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from bb53ad5f34d9 to aa20d192b8c4 (5 revisions)" },
  { hash: "51c580031a", date: "2024-04-18", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from 1eaac56def92 to 764410d4d655 (2 revisions)" },
  { hash: "bca15a3a9f", date: "2024-04-18", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 313c73c3f6a0 to 6861da63bb01 (3 revisions)" },
  { hash: "6861da63bb", date: "2024-04-18", author: "cnorthrop@google.com", message: "Vulkan: Don't cache staging buffers on PowerVR" },
  { hash: "b2aad1bbb7", date: "2024-04-17", author: "m.maiya@samsung.com", message: "Vulkan: Track valid descriptor set layouts" },
  { hash: "d71b8ee0f0", date: "2024-04-17", author: "syoussefi@chromium.org", message: "Vulkan: Fix dynamic depth/stencil in UtilsVk when unused" },
  { hash: "5b8d9fb4e6", date: "2024-04-17", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from e92b8e8d97d8 to 313c73c3f6a0 (3 revisions)" },
  { hash: "313c73c3f6", date: "2024-04-17", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 8dc5cb57074c to bb53ad5f34d9 (5 revisions)" },
  { hash: "03c88d33ec", date: "2024-04-17", author: "syoussefi@chromium.org", message: "Revert ＂Vulkan: Suppress VUID-VkSwapchainCreateInfoKHR-pNext-07781＂" },
  { hash: "c48808658d", date: "2024-04-17", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Manual roll VK-GL-CTS from b529676d0523 to 669273b1098a (11 revisions)" },
  { hash: "59d508c3e5", date: "2024-04-17", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 97cb3eb8a79d to e92b8e8d97d8 (3 revisions)" },
  { hash: "e92b8e8d97", date: "2024-04-16", author: "syoussefi@chromium.org", message: "Manual roll VK-GL-CTS from 491cfc2dbec9 to b529676d0523 (1 revisions)" },
  { hash: "04f3a56ed0", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Roll ANGLE from 1153a17e92df to d9d583bfdc05 (20 revisions)＂ into main" },
  { hash: "e344c4bc4e", date: "2024-04-16", author: "syoussefi@chromium.org", message: "Manual roll VK-GL-CTS from 393ca590ec21 to 491cfc2dbec9 (8 revisions)" },
  { hash: "1264c9cc75", date: "2024-04-16", author: "syoussefi@chromium.org", message: "Manual roll VK-GL-CTS from caf989d22e07 to 393ca590ec21 (5 revisions)" },
  { hash: "441fa550fa", date: "2024-04-16", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 1153a17e92df to 97cb3eb8a79d (21 revisions)" },
  { hash: "32d654704b", date: "2024-04-16", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 1153a17e92df to d9d583bfdc05 (20 revisions)" },
  { hash: "97cb3eb8a7", date: "2024-04-16", author: "syoussefi@chromium.org", message: "Split ASSERT and logs into separate header" },
  { hash: "d9d583bfdc", date: "2024-04-16", author: "syoussefi@chromium.org", message: "Implement a lock/unlock-only mutex based on futex" },
  { hash: "0c5f973d31", date: "2024-04-16", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from ec0c320a8ca1 to 8dc5cb57074c (10 revisions)" },
  { hash: "cfcfc9ea21", date: "2024-04-16", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from 62c59c41e194 to 1eaac56def92 (1 revision)" },
  { hash: "2a29410364", date: "2024-04-16", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 3405d3e2c23c to 0abb3a90f21c (691 revisions)" },
  { hash: "6557da03c8", date: "2024-04-15", author: "mpdenton@chromium.org", message: "Implement TextureWgpu::getAttachmentRenderTarget()" },
  { hash: "50d95bfea3", date: "2024-04-15", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Manual roll vulkan-deps from 3ba43743089e to ec0c320a8ca1 (34 revisions)" },
  { hash: "041b0a4d54", date: "2024-04-15", author: "liza@chromium.org", message: "Begin initializing caps for webgpu" },
  { hash: "2218db2b3b", date: "2024-04-15", author: "liza@chromium.org", message: "Add error callback for webgpu device" },
  { hash: "f4d3041a57", date: "2024-04-15", author: "syoussefi@chromium.org", message: "Remove double-serialization for glGetProgramBinary" },
  { hash: "24ba48eb21", date: "2024-04-15", author: "syoussefi@chromium.org", message: "Do not cache program binary in blob cache redundantly with app" },
  { hash: "99ac37cf7b", date: "2024-04-15", author: "syoussefi@chromium.org", message: "Vulkan: Suppress VUID-VkSwapchainCreateInfoKHR-pNext-07781" },
  { hash: "49e434dba2", date: "2024-04-15", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from f4477677b54e to 3405d3e2c23c (816 revisions)" },
  { hash: "e229afada1", date: "2024-04-13", author: "cclao@google.com", message: "Vulkan: Disable setting_sync_queue_submit" },
  { hash: "08d9d5cc1c", date: "2024-04-13", author: "cclao@google.com", message: "Vulkan: VK_EXT_validation_features was deprecated" },
  { hash: "67fc293ab0", date: "2024-04-12", author: "geofflang@chromium.org", message: "WebGPU: Add shader translation and program linking stubs." },
  { hash: "5e790bfb16", date: "2024-04-12", author: "kintel@google.com", message: "Remove unnecessary D3D include" },
  { hash: "f4485224fe", date: "2024-04-12", author: "geofflang@chromium.org", message: "WebGPU: Implement glBufferData and glBufferSubData" },
  { hash: "e088af30ff", date: "2024-04-12", author: "mscott@apple.com", message: "Parsing very long array declarations crash" },
  { hash: "34bb0ebf6e", date: "2024-04-12", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 625a985b39f7 to f4477677b54e (679 revisions)" },
  { hash: "1152f9d172", date: "2024-04-12", author: "syoussefi@chromium.org", message: "Remove PPO as observer of its own executable" },
  { hash: "657469d86b", date: "2024-04-11", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 4af8dafb9fd5 to 1153a17e92df (6 revisions)" },
  { hash: "1153a17e92", date: "2024-04-11", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 3e1171173a70 to 625a985b39f7 (729 revisions)" },
  { hash: "e41286e109", date: "2024-04-11", author: "syoussefi@chromium.org", message: "Vulkan: Fix internal caching missing" },
  { hash: "bc53f36023", date: "2024-04-11", author: "syoussefi@chromium.org", message: "Vulkan: Improve pipeline warmup hit rate without GPL" },
  { hash: "d9943e447f", date: "2024-04-10", author: "syoussefi@chromium.org", message: "Remove Program::syncState" },
  { hash: "c139751042", date: "2024-04-10", author: "m.maiya@samsung.com", message: "Vulkan: Fix data race in WarmUpGraphicsTask" },
  { hash: "392eca6048", date: "2024-04-10", author: "geofflang@chromium.org", message: "Revert ＂GL: Support KHR_blend_equation_advanced＂" },
  { hash: "8792ef6a2b", date: "2024-04-10", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 84613b972d5d to 4af8dafb9fd5 (6 revisions)" },
  { hash: "4af8dafb9f", date: "2024-04-10", author: "syoussefi@chromium.org", message: "Vulkan: Enable MSRTT emulation tests on swiftshader" },
  { hash: "bedc75d908", date: "2024-04-10", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 8853d900c3dd to 3e1171173a70 (343 revisions)" },
  { hash: "d1bffdb657", date: "2024-04-09", author: "m.maiya@samsung.com", message: "Vulkan: Bugfix in WarmUpComputeTask" },
  { hash: "226448197f", date: "2024-04-09", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Manual roll Chromium from a20bd3962f16 to 8853d900c3dd (278 revisions)" },
  { hash: "646f5d1935", date: "2024-04-09", author: "a.annestrand@samsung.com", message: "CL/VK: Implement eventVk routines" },
  { hash: "0a67bbaf83", date: "2024-04-09", author: "syoussefi@chromium.org", message: "SPIR-V: Fix const constructors with single scalar" },
  { hash: "201d3ee5bd", date: "2024-04-09", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from fda475e53e55 to 84613b972d5d (5 revisions)" },
  { hash: "84613b972d", date: "2024-04-09", author: "syoussefi@chromium.org", message: "Vulkan: Suppress Undefined-Value-ShaderInputNotProduced" },
  { hash: "0e19adb294", date: "2024-04-09", author: "geofflang@chromium.org", message: "Validate non-negative vertex attribute offsets." },
  { hash: "d3aaf79525", date: "2024-04-09", author: "cclao@google.com", message: "Vulkan: Early out ImageHelper::updateLayoutAndBarrier when possible" },
  { hash: "e73c0c6d04", date: "2024-04-09", author: "romanl@google.com", message: "EGLProtectedContentTest: move sleep behind compile-time var" },
  { hash: "126f826917", date: "2024-04-09", author: "syoussefi@chromium.org", message: "Additional fix for link task worker pool race" },
  { hash: "c3efe0c80b", date: "2024-04-09", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from ba208b45ad1c to fda475e53e55 (2 revisions)" },
  { hash: "fda475e53e", date: "2024-04-09", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 4c9bdb52e642 to 3ba43743089e (3 revisions)" },
  { hash: "dd81a3df6b", date: "2024-04-09", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 0f9a02e29ab9 to a20bd3962f16 (586 revisions)" },
  { hash: "fe678f3ba8", date: "2024-04-08", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from bd822f29d54a to ba208b45ad1c (3 revisions)" },
  { hash: "ba208b45ad", date: "2024-04-08", author: "m.maiya@samsung.com", message: "Vulkan: wait for post-link tasks in resetLayout" },
  { hash: "c632fae01c", date: "2024-04-08", author: "geofflang@chromium.org", message: "GL: Support KHR_blend_equation_advanced" },
  { hash: "926334570f", date: "2024-04-08", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 4f8c21f6ae9d to 4c9bdb52e642 (6 revisions)" },
  { hash: "6d5b5fdee1", date: "2024-04-08", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 2dc9d0cdcdb2 to bd822f29d54a (9 revisions)" },
  { hash: "bd822f29d5", date: "2024-04-08", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 87ec061ede78 to 0f9a02e29ab9 (736 revisions)" },
  { hash: "d55464fff7", date: "2024-04-07", author: "syoussefi@chromium.org", message: "Vulkan: Remove the supportsDepthClipEnable feature" },
  { hash: "49e63e0751", date: "2024-04-06", author: "m.maiya@samsung.com", message: "Vulkan: Selectively wait for WarmUp tasks" },
  { hash: "ad13fec33d", date: "2024-04-06", author: "m.maiya@samsung.com", message: "Vulkan: warmUpGraphicsPipelineCache(...) shouldn't set state" },
  { hash: "13829f2032", date: "2024-04-06", author: "syoussefi@chromium.org", message: "Vulkan: Optimize depth/stencil resolve with glBlitFramebuffer" },
  { hash: "924b40dc2d", date: "2024-04-06", author: "m.maiya@samsung.com", message: "Selectively wait for post-link tasks in the frontend" },
  { hash: "06472a7e41", date: "2024-04-06", author: "m.maiya@samsung.com", message: "Extend ProgramExecutableImpl API" },
  { hash: "76636ddb45", date: "2024-04-05", author: "a.annestrand@samsung.com", message: "CL/VK: Update missing reflection ops & DS creation" },
  { hash: "7a78c2c907", date: "2024-04-05", author: "a.annestrand@samsung.com", message: "CL/VK: Add helper to select LWS" },
  { hash: "f31b9a14df", date: "2024-04-05", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from cdbc58f176b4 to 2dc9d0cdcdb2 (8 revisions)" },
  { hash: "2dc9d0cdcd", date: "2024-04-05", author: "a.annestrand@samsung.com", message: "CL/VK: Add workgroup size/count types" },
  { hash: "ac654931c2", date: "2024-04-05", author: "m.maiya@samsung.com", message: "ProgramExecutable manages post-link tasks" },
  { hash: "c0386ad4e3", date: "2024-04-05", author: "romanl@google.com", message: "AsyncWorkerPool releases shared_ptr<Closure> before notifying" },
  { hash: "be42f20b70", date: "2024-04-05", author: "mpdenton@chromium.org", message: "Start implementing glClear" },
  { hash: "4a5d47df78", date: "2024-04-05", author: "syoussefi@chromium.org", message: "Test that binary is not saved after being loaded" },
  { hash: "ccadcef9ed", date: "2024-04-05", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 8d0dac85e662 to 4f8c21f6ae9d (3 revisions)" },
  { hash: "38b1cd81e8", date: "2024-04-05", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 1adf104afb7c to 87ec061ede78 (654 revisions)" },
  { hash: "35c7e1860d", date: "2024-04-05", author: "a.annestrand@samsung.com", message: "CL: Introduce NDRange object/ops abstraction" },
  { hash: "66595588d3", date: "2024-04-04", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from be79ae93752c to cdbc58f176b4 (6 revisions)" },
  { hash: "cdbc58f176", date: "2024-04-04", author: "lexa.knyazev@gmail.com", message: "Metal: Align texture view constructors with the API" },
  { hash: "f8bcfc3f2a", date: "2024-04-04", author: "romanl@google.com", message: "Tests: avoid double logging to stderr from WARN()" },
  { hash: "3b650ffa39", date: "2024-04-04", author: "lerica@apple.com", message: "Metal: Assert while using gl_VertexID as ivec" },
  { hash: "5c6a531eca", date: "2024-04-04", author: "mpdenton@chromium.org", message: "Add ContextWgpu methods for managing current render pass" },
  { hash: "103c1b53bb", date: "2024-04-04", author: "syoussefi@chromium.org", message: "Vulkan: Drop MSRTT emulation dependency on independentResolveNone" },
  { hash: "57eded364d", date: "2024-04-04", author: "syoussefi@chromium.org", message: "Vulkan: Fix off-by-one error in compute-based stencil blit" },
  { hash: "c889b3ade2", date: "2024-04-04", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from dc643d9bec38 to be79ae93752c (5 revisions)" },
  { hash: "be79ae9375", date: "2024-04-04", author: "romanl@google.com", message: "Codegen: work around unicode in vk.xml causing hash diffs" },
  { hash: "58ecad7a2f", date: "2024-04-04", author: "syoussefi@chromium.org", message: "Remove assertion that program is not linking when bound/unbound" },
  { hash: "fdade3693e", date: "2024-04-04", author: "ynovikov@chromium.org", message: "Ignore DisplayGLX_api.h in export_targets.py" },
  { hash: "879e8aa549", date: "2024-04-04", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 43f849a0e433 to 8d0dac85e662 (1 revision)" },
  { hash: "58fc2f23cc", date: "2024-04-04", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 15bf920f7a6d to 1adf104afb7c (652 revisions)" },
  { hash: "eb5f64ee6d", date: "2024-04-03", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from ceb3c0e1df8d to dc643d9bec38 (1 revision)" },
  { hash: "dc643d9bec", date: "2024-04-03", author: "hailinzhang@google.com", message: "Vulkan: add feature control for client buffer merge" },
  { hash: "56688aec09", date: "2024-04-03", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from e4fe461ff1aa to ceb3c0e1df8d (8 revisions)" },
  { hash: "ceb3c0e1df", date: "2024-04-03", author: "lexa.knyazev@gmail.com", message: "Remove redundant AND from ValidateClear" },
  { hash: "ab6dd5b223", date: "2024-04-03", author: "nisha_jain@apple.com", message: "Avoid asserts when const folding binary ops on void variables" },
  { hash: "e0709fef87", date: "2024-04-03", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 3b1638b6e598 to 43f849a0e433 (2 revisions)" },
  { hash: "304ea14a65", date: "2024-04-03", author: "bsheedy@chromium.org", message: "Start Mac Intel experiment" },
  { hash: "72c88301f0", date: "2024-04-03", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from ff61926fcedb to 62c59c41e194 (1 revision)" },
  { hash: "cac60938c5", date: "2024-04-03", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from cf84d04c222b to 15bf920f7a6d (642 revisions)" },
  { hash: "ff03a7b193", date: "2024-04-02", author: "a.annestrand@samsung.com", message: "CL/VK: Program build_status & mCallback fixes" },
  { hash: "bb70f5d117", date: "2024-04-02", author: "g.tammana@samsung.com", message: "CL/VK: Setup platform as provider of vk::Context" },
  { hash: "5ca92c7715", date: "2024-04-02", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 2de6ed73d27e to e4fe461ff1aa (6 revisions)" },
  { hash: "e4fe461ff1", date: "2024-04-02", author: "m.maiya@samsung.com", message: "Vulkan: Apply mask during transition search" },
  { hash: "64cfbb68ce", date: "2024-04-02", author: "geofflang@chromium.org", message: "GL: Fix MultisampledRenderToTexture tests and expectations" },
  { hash: "abf7b612bf", date: "2024-04-02", author: "lexa.knyazev@gmail.com", message: "Optimize WebGL clear type validation" },
  { hash: "a8e9aa261d", date: "2024-04-02", author: "g.tammana@samsung.com", message: "CL/VK: Setup GlobalOps for the platform" },
  { hash: "85b3e967c2", date: "2024-04-02", author: "m.maiya@samsung.com", message: "Fail link and validation of invalid tessellation program" },
  { hash: "47ca75521a", date: "2024-04-02", author: "g.tammana@samsung.com", message: "CL/VK: Select Vulkan Angle as platform" },
  { hash: "54e832dcce", date: "2024-04-02", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 42262e83628d to 2de6ed73d27e (2 revisions)" },
  { hash: "2de6ed73d2", date: "2024-04-02", author: "ynovikov@chromium.org", message: "Roll third_party/dawn/ 1a9f89047..66f38fda8 (569 commits; 11 trivial rolls)" },
  { hash: "0cb309436d", date: "2024-04-02", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll vulkan-deps from 778a83fe011e to 3b1638b6e598 (4 revisions)" },
  { hash: "a06966dddc", date: "2024-04-02", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll ANGLE from 2b66694d37de to 42262e83628d (20 revisions)" },
  { hash: "42262e8362", date: "2024-04-02", author: "angle-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll Chromium from 35e9d0924a4c to cf84d04c222b (372 revisions)" },
]});
repoLogs.push({ path: "external/anonymous-counting-tokens", logs: [
]});
repoLogs.push({ path: "external/ant-glob", logs: [
]});
repoLogs.push({ path: "external/antlr", logs: [
]});
repoLogs.push({ path: "external/apache-commons-bcel", logs: [
]});
repoLogs.push({ path: "external/apache-commons-compress", logs: [
]});
repoLogs.push({ path: "external/apache-commons-io", logs: [
]});
repoLogs.push({ path: "external/apache-commons-lang", logs: [
]});
repoLogs.push({ path: "external/apache-commons-math", logs: [
]});
repoLogs.push({ path: "external/apache-harmony", logs: [
]});
repoLogs.push({ path: "external/apache-http", logs: [
]});
repoLogs.push({ path: "external/apache-velocity-engine", logs: [
]});
repoLogs.push({ path: "external/apache-xml", logs: [
]});
repoLogs.push({ path: "external/arm-neon-tests", logs: [
  { hash: "43998fc", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂`arm` has implied `neon` in .bp files for years.＂ into main" },
  { hash: "745d0ea", date: "2024-04-05", author: "enh@google.com", message: "Remove obsolete entry from OWNERS." },
]});
repoLogs.push({ path: "external/arm-optimized-routines", logs: [
]});
repoLogs.push({ path: "external/arm-trusted-firmware", logs: [
]});
repoLogs.push({ path: "external/armnn", logs: [
]});
repoLogs.push({ path: "external/auto", logs: [
]});
repoLogs.push({ path: "external/autotest", logs: [
]});
repoLogs.push({ path: "external/avb", logs: [
  { hash: "26eaa0a", date: "2024-04-26", author: "dpursell@google.com", message: "libavb_rs: unlock challenge generation" },
  { hash: "e57ea84", date: "2024-04-24", author: "dpursell@google.com", message: "libavb_rs: avb_cert key validation" },
  { hash: "87b7364", date: "2024-04-24", author: "dpursell@google.com", message: "libavb_rs: refactor test utils" },
  { hash: "ea6cfa7", date: "2024-04-23", author: "dpursell@google.com", message: "libavb_rs: split Ops/CertOps into separate traits" },
  { hash: "1f25d8a", date: "2024-04-16", author: "dpursell@google.com", message: "libavb_rs: move tests to presubmit" },
  { hash: "3a87e91", date: "2024-04-16", author: "dpursell@google.com", message: "libavb: refactor cert usage strings" },
  { hash: "e4cdfd5", date: "2024-04-15", author: "dpursell@google.com", message: "libavb: expose a few more test files" },
  { hash: "1bbcd66", date: "2024-04-12", author: "dpursell@google.com", message: "libavb: rename ＂ATX＂ to ＂cert＂" },
  { hash: "2eafbc6", date: "2024-04-05", author: "dpursell@google.com", message: "libavb: expose ATX test key build targets" },
  { hash: "172666e", date: "2024-04-03", author: "dpursell@google.com", message: "Merge ＂libavb_rs: ATX documentation and trait＂ into main" },
]});
repoLogs.push({ path: "external/bazel-skylib", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-kotlin-rules", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-platforms", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-remote-apis", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_android", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_cc", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_go", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_java", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_license", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_python", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_rust", logs: [
]});
repoLogs.push({ path: "external/bazelbuild-rules_testing", logs: [
]});
repoLogs.push({ path: "external/bc", logs: [
]});
repoLogs.push({ path: "external/bcc", logs: [
]});
repoLogs.push({ path: "external/blktrace", logs: [
]});
repoLogs.push({ path: "external/boringssl", logs: [
  { hash: "41be05a7", date: "2024-04-11", author: "mast@google.com", message: "Allow linking libcrypto_static from standalone dex2oat tests." },
  { hash: "c96e8a23", date: "2024-04-09", author: "jeongik@google.com", message: "Merge ＂Add //visibility:any_system_partition＂ into main" },
]});
repoLogs.push({ path: "external/bouncycastle", logs: [
]});
repoLogs.push({ path: "external/bpftool", logs: [
]});
repoLogs.push({ path: "external/brotli", logs: [
]});
repoLogs.push({ path: "external/bsdiff", logs: [
  { hash: "c532cd4", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow bootable/deprecated-ota to use bsdiff＂ into main" },
]});
repoLogs.push({ path: "external/bzip2", logs: [
  { hash: "4811a5b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow bootable/deprecated-ota to use bzip2＂ into main" },
]});
repoLogs.push({ path: "external/caliper", logs: [
]});
repoLogs.push({ path: "external/capstone", logs: [
]});
repoLogs.push({ path: "external/cblas", logs: [
]});
repoLogs.push({ path: "external/cbor-java", logs: [
]});
repoLogs.push({ path: "external/chromium-trace", logs: [
]});
repoLogs.push({ path: "external/chromium-webview", logs: [
]});
repoLogs.push({ path: "external/clang", logs: [
]});
repoLogs.push({ path: "external/cldr", logs: [
  { hash: "fbf470e3", date: "2024-04-22", author: "vichang@google.com", message: "Merge ＂Updaet version code in the METADATA＂ into main" },
  { hash: "b3e82225", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Merge CLDR 45 in upstream-release-cldr into aosp/main＂ into main" },
  { hash: "6c7ef78e", date: "2024-04-19", author: "vichang@google.com", message: "Updaet version code in the METADATA" },
  { hash: "c191153e", date: "2024-04-18", author: "vichang@google.com", message: "Merge CLDR 45 in upstream-release-cldr into aosp/main" },
  { hash: "1f8aacbc", date: "2024-04-18", author: "vichang@google.com", message: "Copy upstream release-45" },
  { hash: "0d935124", date: "2024-04-10", author: "vichang@google.com", message: "Cherry-pick: CLDR-17470 Fix day period order in Tamil time format patterns (#3577)" },
]});
repoLogs.push({ path: "external/cn-cbor", logs: [
]});
repoLogs.push({ path: "external/compiler-rt", logs: [
]});
repoLogs.push({ path: "external/connectedappssdk", logs: [
]});
repoLogs.push({ path: "external/conscrypt", logs: [
  { hash: "7064bcaf", date: "2024-04-17", author: "miguelaranda@google.com", message: "Remove tls 1.0 and 1.1 from supportedProtocols" },
  { hash: "50d7f731", date: "2024-04-17", author: "miguelaranda@google.com", message: "Merge ＂Filter protocols when creating SSLParameterImpl＂ into main" },
  { hash: "139b907d", date: "2024-04-17", author: "jeongik@google.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "724185f1", date: "2024-04-16", author: "miguelaranda@google.com", message: "Filter protocols when creating SSLParameterImpl" },
  { hash: "83f9e27d", date: "2024-04-11", author: "44170157+prbprbprb@users.noreply.github.com", message: "Minor Scrypt tidy-ups." },
  { hash: "9a059178", date: "2024-04-11", author: "agl@google.com", message: "Add scrypt support." },
  { hash: "54e1a8ba", date: "2024-04-11", author: "davidben@google.com", message: "Merge Conscrypt Upstream." },
  { hash: "d0aa57fc", date: "2024-04-10", author: "miguelaranda@google.com", message: "Fix for test error for tls 1.0 adn 1.1 removal" },
  { hash: "7a0edf31", date: "2024-04-10", author: "44170157+prbprbprb@users.noreply.github.com", message: "Fix NativeCrypto.X509_verify() exceptions." },
  { hash: "c15276c4", date: "2024-04-10", author: "prb@google.com", message: "Update repackaged source." },
  { hash: "957f6e7a", date: "2024-04-10", author: "miguelaranda@google.com", message: "Merge ＂Remove TLS 1.0 and 1.1 from the list of supported protocols.＂ into main" },
  { hash: "71f4930a", date: "2024-04-10", author: "miguelaranda@google.com", message: "Remove TLS 1.0 and 1.1 from the list of supported protocols." },
  { hash: "2229cbe3", date: "2024-04-09", author: "miguelaranda@google.com", message: "Merge ＂Change TLS metric Protocol/CipherSuite enums to use ints.＂ into main" },
]});
repoLogs.push({ path: "external/cpu_features", logs: [
]});
repoLogs.push({ path: "external/cpuinfo", logs: [
]});
repoLogs.push({ path: "external/crcalc", logs: [
]});
repoLogs.push({ path: "external/cronet", logs: [
  { hash: "7a9874936", date: "2024-04-24", author: "colibie@google.com", message: "Sort action_modules items before iterating" },
  { hash: "ca44fa461", date: "2024-04-23", author: "aymanm@google.com", message: "Don't use androidx nodeps modules" },
  { hash: "534b824ef", date: "2024-04-17", author: "aymanm@google.com", message: "Automatically update timestamp for BUILD_DATE" },
  { hash: "ec5fd4038", date: "2024-04-15", author: "colibie@google.com", message: "Merge changes from topic ＂revert-3031237-revert_v3-XCAXFZGHEH＂ into main" },
  { hash: "ff30acec3", date: "2024-04-15", author: "colibie@google.com", message: "Revert ＂Revert ＂[Cronet] Exclude spaceship operator<=> from cove...＂" },
  { hash: "8c25999a4", date: "2024-04-15", author: "colibie@google.com", message: "Reland Cronet 121_0_6167_71: Merge remote-tracking branch 'aosp/upstream-staging' into main" },
  { hash: "4c041d715", date: "2024-04-12", author: "stefanoduo@google.com", message: "Update UrlRequest and BidirectionalStream documentation" },
  { hash: "44e8bfa2b", date: "2024-04-09", author: "aymanm@google.com", message: "Revert ＂Revert ＂Revert ＂Revert ＂Revert ＂Cronet 121_0_6167_71: Merge remo...＂＂" },
  { hash: "00571583f", date: "2024-04-09", author: "aymanm@google.com", message: "Revert ＂[Cronet] Exclude spaceship operator<=> from coverage profiliing＂" },
  { hash: "c9f7393df", date: "2024-04-09", author: "aymanm@google.com", message: "Revert ＂Sort action_modules items before iterating＂" },
  { hash: "91b1d7642", date: "2024-04-09", author: "aymanm@google.com", message: "Revert ＂Auto regenerate buildtime in gen_android_bp＂" },
  { hash: "8da3704b1", date: "2024-04-08", author: "colibie@google.com", message: "Auto regenerate buildtime in gen_android_bp" },
  { hash: "753766268", date: "2024-04-08", author: "colibie@google.com", message: "Sort action_modules items before iterating" },
  { hash: "b814a150e", date: "2024-04-02", author: "colibie@google.com", message: "[Cronet] Exclude spaceship operator<=> from coverage profiliing" },
]});
repoLogs.push({ path: "external/crosvm", logs: [
  { hash: "b644b7e58", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂UPSTREAM: aarch64: fdt: Fix CPU compatible to ＂arm,armv8＂＂ into main" },
  { hash: "637ca5991", date: "2024-04-18", author: "ptosi@google.com", message: "UPSTREAM: aarch64: fdt: Fix CPU compatible to ＂arm,armv8＂" },
  { hash: "61c9a8487", date: "2024-04-16", author: "fmayle@google.com", message: "Merge changes from topic ＂fmayle-crosvm-merge-04122024＂ into main" },
  { hash: "efb7605ac", date: "2024-04-16", author: "jiyong@google.com", message: "Merge ＂stop building platform variant＂ into main" },
  { hash: "2a9a34073", date: "2024-04-15", author: "fmayle@google.com", message: "UPSTREAM: base: fix musl build" },
  { hash: "c223989d8", date: "2024-04-15", author: "fmayle@google.com", message: "Merge remote-tracking branch 'aosp/upstream-main'" },
  { hash: "b0967c6b2", date: "2024-04-12", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "1781417fd", date: "2024-04-12", author: "fmayle@google.com", message: "devices: vhost-user: fix test flake" },
  { hash: "34b5bd222", date: "2024-04-12", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "2f5e0c0e9", date: "2024-04-12", author: "dverkamp@chromium.org", message: "Cargo.lock: switch to tokio 1.29.1" },
  { hash: "a60cf2281", date: "2024-04-12", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "d23b84881", date: "2024-04-12", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "2bb70ce17", date: "2024-04-12", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "b548048c5", date: "2024-04-12", author: "schuffelen@google.com", message: "cros_async: Tokio IoSource for windows" },
  { hash: "f59edf616", date: "2024-04-12", author: "schuffelen@google.com", message: "cros_async: Add AsyncFd to Tokio linux implementation" },
  { hash: "8407e8429", date: "2024-04-12", author: "schuffelen@google.com", message: "cros_async: Blocking tokio executor for linux" },
  { hash: "7208fd084", date: "2024-04-12", author: "schuffelen@google.com", message: "devices: Fix nested executor invocation in async virtio-console" },
  { hash: "3eba86619", date: "2024-04-11", author: "jiyong@google.com", message: "Merge ＂Refactor android display backend＂ into main" },
  { hash: "874aa5d2b", date: "2024-04-11", author: "schuffelen@google.com", message: "cros_async: Move `concurrency` to Overlapped enum" },
  { hash: "71a458e58", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "603dd4210", date: "2024-04-11", author: "judsonp@google.com", message: "Create a minimal virtualization and hypervisor integration test." },
  { hash: "c06f757ae", date: "2024-04-11", author: "lunpujun@google.com", message: "gpu_display: add max_num_displays to GpuParameters." },
  { hash: "52ff3922f", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "1b6315f1f", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "ae0737f67", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "b64bf7843", date: "2024-04-11", author: "jiyong@google.com", message: "Refactor android display backend" },
  { hash: "c64b320d3", date: "2024-04-11", author: "fmayle@google.com", message: "e2e_tests: wait for restore to complete before sending commands" },
  { hash: "a1bb4d9fe", date: "2024-04-11", author: "fmayle@google.com", message: "Merge ＂UPSTREAM: rutabaga_gfx: upgrade to nix 0.28＂ into main" },
  { hash: "5efff8bcd", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "2eb927638", date: "2024-04-11", author: "jiyong@google.com", message: "Refactor android display backend" },
  { hash: "4d53ad05c", date: "2024-04-11", author: "stevensd@chromium.org", message: "swap: Actually wait for all tasks in a process" },
  { hash: "e8c41f750", date: "2024-04-11", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "f79c1092e", date: "2024-04-10", author: "dverkamp@chromium.org", message: "hypervisor: aarch64: set/get vector APIs" },
  { hash: "d37c7df5b", date: "2024-04-10", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "a48708dfa", date: "2024-04-10", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "3222fd8ea", date: "2024-04-10", author: "smoreland@google.com", message: "stop building platform variant" },
  { hash: "f77d8cbbb", date: "2024-04-10", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "20d3d0080", date: "2024-04-10", author: "dverkamp@chromium.org", message: "disk: replace div_round_up with .div_ceil()" },
  { hash: "69723b60b", date: "2024-04-10", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "e4e32d1b7", date: "2024-04-09", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "7ca673457", date: "2024-04-09", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "b23620ec8", date: "2024-04-09", author: "zihanchen@google.com", message: "tools/merge_bot: Don't initiate merge just for recipe roller" },
  { hash: "f49e76b38", date: "2024-04-09", author: "dverkamp@chromium.org", message: "hypervisor: x86_64: represent XCRs as a map" },
  { hash: "309accd0e", date: "2024-04-09", author: "dverkamp@chromium.org", message: "hypervisor: x86_64: represent collection of MSRs as a map" },
  { hash: "c3ecf1a77", date: "2024-04-09", author: "dverkamp@chromium.org", message: "hypervisor: x86_64: move MSR-based TSC functions into Vcpu" },
  { hash: "f9486dabd", date: "2024-04-09", author: "dverkamp@chromium.org", message: "hypervisor: x86_64: provide single-MSR get/set APIs" },
  { hash: "1c453b356", date: "2024-04-09", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "d4d9fad2e", date: "2024-04-09", author: "stevensd@chromium.org", message: "base: Round up when calculating cache flush count" },
  { hash: "e81dfd274", date: "2024-04-09", author: "kawasin@google.com", message: "swap: Check new process during freezing" },
  { hash: "aa49f2918", date: "2024-04-09", author: "stevensd@chromium.org", message: "swap: Wait for all tasks in a process" },
  { hash: "0951eb870", date: "2024-04-09", author: "stevensd@chromium.org", message: "devices: Add metrics for virtio and RTC wakeup" },
  { hash: "d05f9e326", date: "2024-04-09", author: "stevensd@chromium.org", message: "linux: Add support for metrics" },
  { hash: "c55225462", date: "2024-04-09", author: "stevensd@chromium.org", message: "metrics: Remove MetricsRequest from vendor API" },
  { hash: "a21444be9", date: "2024-04-09", author: "stevensd@chromium.org", message: "metrics: Switch metrics from Tube to SendTube" },
  { hash: "1dd411950", date: "2024-04-09", author: "stevensd@chromium.org", message: "metrics: Remove downstream metrics dependencies" },
  { hash: "db8d4b1ff", date: "2024-04-09", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "37cba2a3e", date: "2024-04-08", author: "dverkamp@chromium.org", message: "UPSTREAM: rutabaga_gfx: upgrade to nix 0.28" },
  { hash: "f654115f8", date: "2024-04-08", author: "denniskempin@google.com", message: "infra: Allow luci admins to manage buildbuckets" },
  { hash: "88e897c47", date: "2024-04-08", author: "fmayle@google.com", message: "base: don't use dyn in clone_descriptor argument" },
  { hash: "26e82cbb2", date: "2024-04-08", author: "fmayle@google.com", message: "base: return SafeDescriptor from clone_descriptor" },
  { hash: "b04e8b8f0", date: "2024-04-08", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "97b47a30b", date: "2024-04-08", author: "ryanneph@google.com", message: "devices: virtio: wl: force cacheline flushes for uncached dmabufs" },
  { hash: "60f4fbf95", date: "2024-04-08", author: "ryanneph@google.com", message: "base: mmap: add MemoryMapping::flush_region() and flush_all()" },
  { hash: "4b96cd3f0", date: "2024-04-08", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "864e42b28", date: "2024-04-08", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "69c09c9e9", date: "2024-04-08", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "607490e7d", date: "2024-04-08", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "6d31dab80", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "3b9fd74aa", date: "2024-04-05", author: "denniskempin@google.com", message: "cros_container: Fix crosvm ebuild name" },
  { hash: "0a8b25759", date: "2024-04-05", author: "denniskempin@google.com", message: "Disable flaky test: host_to_guest_snapshot_restore" },
  { hash: "6faa87728", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "f0fca21ff", date: "2024-04-05", author: "denniskempin@google.com", message: "Disable flaky tests" },
  { hash: "f3bbaa28f", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "e14c030f6", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "e517502cc", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "fbf230b6f", date: "2024-04-05", author: "jiyong@google.com", message: "link gfxstream_backend and virglrender statically" },
  { hash: "6426e022d", date: "2024-04-05", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "3dc6ac388", date: "2024-04-05", author: "jiyong@google.com", message: "Merge changes from topics ＂crosvm-display-1＂, ＂crosvm_android_disp_backend＂ into main" },
  { hash: "db5be456b", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "6383b4837", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "6e10656df", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "509fd7bab", date: "2024-04-04", author: "lunpujun@google.com", message: "gpu_display: add DisplayParameters to create_surface() interface." },
  { hash: "b53412670", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "8471450e9", date: "2024-04-04", author: "fmayle@google.com", message: "Merge ＂add target.tmp/ into .gitignore＂ into main" },
  { hash: "d5ba2b990", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "e57d6240c", date: "2024-04-04", author: "jeongik@google.com", message: "Use shared libc++" },
  { hash: "8a650eab4", date: "2024-04-04", author: "jeongik@google.com", message: "add target.tmp/ into .gitignore" },
  { hash: "09dd91de8", date: "2024-04-04", author: "jiyong@google.com", message: "Disable android_display_stub and replace it with a real backend" },
  { hash: "b299f4ad0", date: "2024-04-04", author: "jiyong@google.com", message: "Update Android.bp using cargo_embargo" },
  { hash: "733d5189d", date: "2024-04-04", author: "dverkamp@chromium.org", message: "vendor: generic: remove unused metrics link-search" },
  { hash: "94e79f654", date: "2024-04-04", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "f2317cb30", date: "2024-04-03", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "3ff29cf42", date: "2024-04-03", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "e9e7d0c1f", date: "2024-04-03", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "efa14ed6d", date: "2024-04-03", author: "rizhang@google.com", message: "base: Create PeriodicLogger" },
  { hash: "5ae8dd281", date: "2024-04-03", author: "dverkamp@chromium.org", message: "rutabaga_gfx: upgrade to nix 0.28" },
  { hash: "3040467c2", date: "2024-04-03", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "44e8b88fd", date: "2024-04-03", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "86c17d87f", date: "2024-04-02", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "2098ee511", date: "2024-04-02", author: "dverkamp@chromium.org", message: "UPSTREAM: riscv64: fix get_serial_cmdline() parameter type" },
  { hash: "5b1089f65", date: "2024-04-02", author: "dverkamp@chromium.org", message: "riscv64: fix get_serial_cmdline() parameter type" },
  { hash: "df761ce32", date: "2024-04-02", author: "smoreland@google.com", message: "Merge ＂Merge remote-tracking branch 'aosp/upstream-main' into merge＂ into main" },
  { hash: "c62199624", date: "2024-04-02", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "907537576", date: "2024-04-02", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "d94893621", date: "2024-04-02", author: "recipe-mega-autoroller@chops-service-accounts.iam.gserviceaccount.com", message: "Roll recipe dependencies (trivial)." },
  { hash: "c6c2e378a", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂ANDROID: disable readonly memslot usage on aarch64 (for pKVM)＂＂ into main" },
  { hash: "36ba9741e", date: "2024-04-02", author: "qperret@google.com", message: "Revert^2 ＂ANDROID: disable readonly memslot usage on aarch64 (for pKVM)＂" },
  { hash: "953f94d84", date: "2024-04-02", author: "hikalium@chromium.org", message: "Use wrapping_sub to calculate TSC diff to handle TSC rewinding" },
  { hash: "c67ea421e", date: "2024-04-02", author: "smoreland@google.com", message: "Merge remote-tracking branch 'aosp/upstream-main' into merge" },
]});
repoLogs.push({ path: "external/curl", logs: [
  { hash: "c0d632722", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
]});
repoLogs.push({ path: "external/dagger2", logs: [
]});
repoLogs.push({ path: "external/deqp", logs: [
  { hash: "74a8e2937", date: "2024-04-02", author: "yuxinhu@google.com", message: "[automerger skipped] Merge changes Ic80f2904,I5aeb09d0 into android13-tests-dev am: db1970ddbd -s ours am: 7ed7acf7da -s ours" },
  { hash: "a21d2503a", date: "2024-04-02", author: "syoussefi@google.com", message: "[automerger skipped] Prepare for automated clean up am: fc6fd1cbe8 -s ours am: 78832d129e -s ours" },
  { hash: "7ed7acf7d", date: "2024-04-02", author: "yuxinhu@google.com", message: "[automerger skipped] Merge changes Ic80f2904,I5aeb09d0 into android13-tests-dev am: db1970ddbd -s ours" },
  { hash: "78832d129", date: "2024-04-02", author: "syoussefi@google.com", message: "[automerger skipped] Prepare for automated clean up am: fc6fd1cbe8 -s ours" },
]});
repoLogs.push({ path: "external/deqp-deps/SPIRV-Headers", logs: [
]});
repoLogs.push({ path: "external/deqp-deps/SPIRV-Tools", logs: [
]});
repoLogs.push({ path: "external/deqp-deps/amber", logs: [
]});
repoLogs.push({ path: "external/deqp-deps/glslang", logs: [
]});
repoLogs.push({ path: "external/desugar", logs: [
]});
repoLogs.push({ path: "external/dexmaker", logs: [
]});
repoLogs.push({ path: "external/dlmalloc", logs: [
]});
repoLogs.push({ path: "external/dng_sdk", logs: [
]});
repoLogs.push({ path: "external/dnsmasq", logs: [
]});
repoLogs.push({ path: "external/doclava", logs: [
]});
repoLogs.push({ path: "external/dokka", logs: [
]});
repoLogs.push({ path: "external/double-conversion", logs: [
]});
repoLogs.push({ path: "external/downloader", logs: [
]});
repoLogs.push({ path: "external/drm_hwcomposer", logs: [
]});
repoLogs.push({ path: "external/dtc", logs: [
]});
repoLogs.push({ path: "external/dynamic_depth", logs: [
]});
repoLogs.push({ path: "external/e2fsprogs", logs: [
  { hash: "886fdbbf", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂e2fsdroid: disable asan leak detection＂ into main" },
]});
repoLogs.push({ path: "external/easymock", logs: [
]});
repoLogs.push({ path: "external/eigen", logs: [
]});
repoLogs.push({ path: "external/elfutils", logs: [
  { hash: "caba0695", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add visibility to /art for use in tests.＂ into main" },
]});
repoLogs.push({ path: "external/emma", logs: [
]});
repoLogs.push({ path: "external/erofs-utils", logs: [
]});
repoLogs.push({ path: "external/error_prone", logs: [
  { hash: "603cd04", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add colefaust@ to OWNERS＂ into main" },
  { hash: "27a698f", date: "2024-04-19", author: "colefaust@google.com", message: "Add colefaust@ to OWNERS" },
]});
repoLogs.push({ path: "external/escapevelocity", logs: [
]});
repoLogs.push({ path: "external/ethtool", logs: [
]});
repoLogs.push({ path: "external/exfatprogs", logs: [
]});
repoLogs.push({ path: "external/exoplayer", logs: [
]});
repoLogs.push({ path: "external/expat", logs: [
  { hash: "9ad535cb", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove LICENSE and NOTICE symlinks.＂ into main" },
]});
repoLogs.push({ path: "external/f2fs-tools", logs: [
  { hash: "1548553", date: "2024-04-09", author: "jaegeuk@google.com", message: "Upgrade f2fs-tools to 5da4e5241503b385e4a7e75b1b2bb3367b38be96" },
]});
repoLogs.push({ path: "external/fastrpc", logs: [
]});
repoLogs.push({ path: "external/fdlibm", logs: [
]});
repoLogs.push({ path: "external/fec", logs: [
]});
repoLogs.push({ path: "external/federated-compute", logs: [
]});
repoLogs.push({ path: "external/fft2d", logs: [
]});
repoLogs.push({ path: "external/firebase-messaging", logs: [
]});
repoLogs.push({ path: "external/flac", logs: [
]});
repoLogs.push({ path: "external/flatbuffers", logs: [
]});
repoLogs.push({ path: "external/fmtlib", logs: [
]});
repoLogs.push({ path: "external/fonttools", logs: [
]});
repoLogs.push({ path: "external/freetype", logs: [
]});
repoLogs.push({ path: "external/fsck_msdos", logs: [
]});
repoLogs.push({ path: "external/fsverity-utils", logs: [
]});
repoLogs.push({ path: "external/gemmlowp", logs: [
]});
repoLogs.push({ path: "external/geojson-jackson", logs: [
]});
repoLogs.push({ path: "external/geonames", logs: [
]});
repoLogs.push({ path: "external/gflags", logs: [
]});
repoLogs.push({ path: "external/giflib", logs: [
]});
repoLogs.push({ path: "external/glide", logs: [
]});
repoLogs.push({ path: "external/go-cmp", logs: [
]});
repoLogs.push({ path: "external/golang-protobuf", logs: [
]});
repoLogs.push({ path: "external/google-benchmark", logs: [
]});
repoLogs.push({ path: "external/google-breakpad", logs: [
]});
repoLogs.push({ path: "external/google-fonts/arbutus-slab", logs: [
]});
repoLogs.push({ path: "external/google-fonts/arvo", logs: [
]});
repoLogs.push({ path: "external/google-fonts/barlow", logs: [
]});
repoLogs.push({ path: "external/google-fonts/big-shoulders-text", logs: [
]});
repoLogs.push({ path: "external/google-fonts/carrois-gothic-sc", logs: [
]});
repoLogs.push({ path: "external/google-fonts/coming-soon", logs: [
]});
repoLogs.push({ path: "external/google-fonts/cutive-mono", logs: [
]});
repoLogs.push({ path: "external/google-fonts/dancing-script", logs: [
]});
repoLogs.push({ path: "external/google-fonts/fraunces", logs: [
]});
repoLogs.push({ path: "external/google-fonts/karla", logs: [
]});
repoLogs.push({ path: "external/google-fonts/lato", logs: [
]});
repoLogs.push({ path: "external/google-fonts/lustria", logs: [
]});
repoLogs.push({ path: "external/google-fonts/rubik", logs: [
]});
repoLogs.push({ path: "external/google-fonts/source-sans-pro", logs: [
]});
repoLogs.push({ path: "external/google-fonts/zilla-slab", logs: [
]});
repoLogs.push({ path: "external/google-fruit", logs: [
]});
repoLogs.push({ path: "external/google-java-format", logs: [
]});
repoLogs.push({ path: "external/google-smali", logs: [
]});
repoLogs.push({ path: "external/google-styleguide", logs: [
]});
repoLogs.push({ path: "external/googleapis", logs: [
  { hash: "23c813e42", date: "2024-04-25", author: "yikezh@google.com", message: "Add Android.bp for bytestream" },
  { hash: "ab21f6313", date: "2024-04-24", author: "yikezh@google.com", message: "Upgrade googleapis to eb1a043852e0894c135201a4917b8210ad7bb4fc" },
  { hash: "eb1a04385", date: "2024-04-24", author: "noreply@google.com", message: "feat: Updated protos and build files for Google Ads API v16" },
  { hash: "7415b23d3", date: "2024-04-24", author: "runner@fv-az1206-787.0vxl32vwipkujoye4f0dw5oaka.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "dc9e1d1ae", date: "2024-04-24", author: "noreply@google.com", message: "fix: Defined class prefix of GMON for Objective C" },
  { hash: "bf3ee9307", date: "2024-04-24", author: "noreply@google.com", message: "chore(ruby): Add shopping type dependency to google-shopping-merchant gems" },
  { hash: "0179dcc4d", date: "2024-04-23", author: "noreply@google.com", message: "feat:Add Fraud Prevention settings field" },
  { hash: "087cb30ad", date: "2024-04-23", author: "noreply@google.com", message: "chore(ruby): configure clients for google-shopping-merchant-notifications" },
  { hash: "988827ee9", date: "2024-04-23", author: "noreply@google.com", message: "chore(ruby): configure clients for google-shopping-merchant-lfp" },
  { hash: "fad53ab05", date: "2024-04-23", author: "noreply@google.com", message: "chore(ruby): configure clients for google-shopping-merchant-conversions" },
  { hash: "0f16abbe5", date: "2024-04-23", author: "noreply@google.com", message: "feat:Add Fraud Prevention settings field" },
  { hash: "a5526a090", date: "2024-04-23", author: "noreply@google.com", message: "docs: fix required permissions for resources.searchAll and iamPolicies.searchAll" },
  { hash: "90c7c044c", date: "2024-04-23", author: "dwillemsen@google.com", message: "Add OWNERS" },
  { hash: "64be76add", date: "2024-04-23", author: "noreply@google.com", message: "feat: Infrastructure manager supports 1.2.3, 1.3.10, 1.4.7, 1.5.7 versions of Terraform when creating a preview of a deployment feat: Annotations are now supported to help client tools identify deployments during automation" },
  { hash: "980fda4bd", date: "2024-04-22", author: "noreply@google.com", message: "chore: use latest GAPIC generator for C#" },
  { hash: "e173e21a4", date: "2024-04-22", author: "noreply@google.com", message: "fix: Marking longrunning operations and iam APIs as audit-exempted from Cloud-Audit-Logging" },
  { hash: "03dd9e402", date: "2024-04-22", author: "noreply@google.com", message: "feat:Begin publishing the Solar API's client libraries" },
  { hash: "caad330c6", date: "2024-04-22", author: "noreply@google.com", message: "feat: Support Chunk header and footer in Doc AI external proto docs: Keep the API doc up-to-date with recent changes" },
  { hash: "5fa62a929", date: "2024-04-22", author: "noreply@google.com", message: "fix!: delete the deprecated field for model monitor" },
  { hash: "b0a5b9d2b", date: "2024-04-22", author: "noreply@google.com", message: "chore: Update gapic-generator-python to v1.17.0" },
  { hash: "e495ff587", date: "2024-04-22", author: "noreply@google.com", message: "chore: Update gapic-generator-python to v1.17.0" },
  { hash: "b6f5ce95c", date: "2024-04-21", author: "runner@fv-az1536-693.clt0scp5daoehk2t4xy1kvnmsg.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "034570432", date: "2024-04-21", author: "noreply@google.com", message: "feat: Add Secret Version Delayed Destroy changes for client libraries" },
  { hash: "c1624aee4", date: "2024-04-19", author: "noreply@google.com", message: "build: update publish name to shopping namespace for @google-shopping/quota for Nodejs" },
  { hash: "54929cf50", date: "2024-04-19", author: "noreply@google.com", message: "docs: slightly improved documentation for EVOptions in SearchTextRequest" },
  { hash: "835b84ebf", date: "2024-04-19", author: "noreply@google.com", message: "fix(deps): Update the Java code generator (gapic-generator-java) to 2.39.0" },
  { hash: "d7715bc73", date: "2024-04-19", author: "noreply@google.com", message: "build: remove backend settings from the public service config" },
  { hash: "e3f9a72d7", date: "2024-04-19", author: "runner@fv-az1148-932.o3ts4yn1huletmfehy03vvfvxg.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "e9672e7d3", date: "2024-04-19", author: "noreply@google.com", message: "feat: Add Chat read state APIs" },
  { hash: "357c057a1", date: "2024-04-19", author: "noreply@google.com", message: "feat: add Skaffold remote config support for GCB repos docs: clarified related comments" },
  { hash: "53636148e", date: "2024-04-18", author: "noreply@google.com", message: "chore(ruby): Configure clients for google-cloud-storage-control" },
  { hash: "b4bbd07ec", date: "2024-04-18", author: "runner@fv-az849-69.z25y5blrky1utgmobekovqxe1c.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "112506940", date: "2024-04-18", author: "noreply@google.com", message: "docs: update storage control documentation and add PHP for publishing" },
  { hash: "fde351dd3", date: "2024-04-18", author: "noreply@google.com", message: "feat: Adds accessible_bidding_strategy feat: Adds error messages feat: A new value `DISCOVERY_CAROUSEL_CARD` is added to enum `AssetFieldType` feat: A new value `LIFE_EVENT` is added to enum `CriterionType` docs: A comment for field `absolute_top_impression_percentage` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `search_budget_lost_absolute_top_impression_share` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `search_budget_lost_top_impression_share` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `search_rank_lost_absolute_top_impression_share` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `search_rank_lost_top_impression_share` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `search_top_impression_share` in message `.google.ads.searchads360.v0.common.Metrics` is changed docs: A comment for field `top_impression_percentage` in message `.google.ads.searchads360.v0.common.Metrics` is changed" },
  { hash: "c3ab37d0e", date: "2024-04-18", author: "noreply@google.com", message: "chore(ruby): fix namespace override for google-cloud-backupdr" },
  { hash: "a072a5f49", date: "2024-04-18", author: "noreply@google.com", message: "build: correct yaml file name to be picked by GCP developer experience team for client library generation" },
  { hash: "2a24540ee", date: "2024-04-18", author: "noreply@google.com", message: "chore(ruby): configure clients for google-cloud-backupdr" },
  { hash: "e09657e96", date: "2024-04-18", author: "noreply@google.com", message: "docs: Update contact_email doc to not check permission of the email account" },
  { hash: "a2deb7505", date: "2024-04-18", author: "noreply@google.com", message: "docs: Add log entry messages documentation" },
  { hash: "6d0e31703", date: "2024-04-18", author: "noreply@google.com", message: "feat: StreamActivityLogEntry is now support StreamStateChange log type" },
  { hash: "cab99b213", date: "2024-04-17", author: "noreply@google.com", message: "chore: uncomment PHP bazel rules" },
  { hash: "6f5ccdfd2", date: "2024-04-17", author: "runner@fv-az564-723.umv0eqcl5qku3cwf2dcfspuvdc.ex.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "c106d2f8c", date: "2024-04-17", author: "noreply@google.com", message: "feat: add UpdateMembership API" },
  { hash: "215191d22", date: "2024-04-17", author: "noreply@google.com", message: "chore(python): Update namespace for google/shopping/merchant/conversions/v1beta to prepare for release" },
  { hash: "ec123eb79", date: "2024-04-17", author: "noreply@google.com", message: "chore(videointelligence/v1): migrate onto non-legacy config" },
  { hash: "7fbfb4012", date: "2024-04-17", author: "noreply@google.com", message: "chore: delete obsolete files" },
  { hash: "75cc4cd0c", date: "2024-04-17", author: "runner@fv-az532-998.yhfsaq54z0vebhuvdla3z0z0vh.cx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "2d015bf50", date: "2024-04-17", author: "noreply@google.com", message: "chore: remove unused file" },
  { hash: "42c6f0016", date: "2024-04-16", author: "noreply@google.com", message: "feat: Add cloud_armor field to finding's list of attributes" },
  { hash: "0dd9f5e67", date: "2024-04-16", author: "noreply@google.com", message: "chore(ruby): configure clients for google-cloud-app_hub" },
  { hash: "caa099d27", date: "2024-04-16", author: "noreply@google.com", message: "feat: A new message `FoundationModelTuningOptions` is added feat: A new field `foundation_model_tuning_options` is added to message `.google.cloud.documentai.v1.TrainProcessorVersionRequest` docs: updated comments" },
  { hash: "1c2d0272e", date: "2024-04-16", author: "noreply@google.com", message: "docs: in google.cloud.kms.v1.PublicKey, pem field is always populated" },
  { hash: "cfd95f949", date: "2024-04-16", author: "noreply@google.com", message: "build: update publishing name for storage-control for Nodejs" },
  { hash: "79687e280", date: "2024-04-16", author: "noreply@google.com", message: "feat: Added CloudRun, GkeNamespace, GkeWorkload, GkeService, and BasicService service types docs: Updated comments accordingly" },
  { hash: "7b3886a42", date: "2024-04-16", author: "noreply@google.com", message: "chore(python): Update namespace for google/shopping/merchant/notifications/v1beta to prepare for release chore(python): Update namespace for google/shopping/merchant/lfp/v1beta to prepare for release" },
  { hash: "f1c5362b9", date: "2024-04-16", author: "runner@fv-az665-93.fog2pefswkletp0y445k1dqqob.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "e3c1dafe1", date: "2024-04-16", author: "noreply@google.com", message: "chore: move service config files into versioned directories" },
  { hash: "15c7279b8", date: "2024-04-16", author: "noreply@google.com", message: "docs: fixed the description of ListFirewallPoliciesResponse" },
  { hash: "8b5517c42", date: "2024-04-16", author: "noreply@google.com", message: "chore: remove incorrectly-published example API" },
  { hash: "a46fba79a", date: "2024-04-16", author: "noreply@google.com", message: "chore: delete unused service config file" },
  { hash: "288d20d85", date: "2024-04-16", author: "noreply@google.com", message: "chore: remove obsolete service config file" },
  { hash: "90db3b07a", date: "2024-04-15", author: "noreply@google.com", message: "feat: Added Synthetic Monitor targets to Uptime data model feat: Added ServiceAgentAuthentication auth method for Uptime docs: Updated comments accordingly" },
  { hash: "dc9e4467d", date: "2024-04-15", author: "noreply@google.com", message: "chore(bazel): update rules_go, gazelle, and Go GAPIC generator" },
  { hash: "81c27a6ca", date: "2024-04-15", author: "noreply@google.com", message: "docs:Chat API documentation update" },
  { hash: "d0205ed35", date: "2024-04-15", author: "noreply@google.com", message: "chore: fix breaking method signature for BigQueryDataTransfer PHP" },
  { hash: "caf600aba", date: "2024-04-15", author: "noreply@google.com", message: "build: Update protobuf to 25.3 in WORKSPACE" },
  { hash: "436a34a5d", date: "2024-04-15", author: "noreply@google.com", message: "docs:card proto update feat: material icon in card" },
  { hash: "113a378d5", date: "2024-04-12", author: "runner@fv-az887-658.elnf45sohryeljqptybdtvknwa.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "b5d0197dc", date: "2024-04-12", author: "noreply@google.com", message: "feat: add model_monitor resource and APIs to public v1beta1 client library" },
  { hash: "2d881be8c", date: "2024-04-12", author: "noreply@google.com", message: "fix!: mark parent/name fields with the REQUIRED field_behavior annotation docs: updated comments" },
  { hash: "72bfeaddd", date: "2024-04-12", author: "noreply@google.com", message: "chore: add license and generated code headers to generated resource files" },
  { hash: "84d7f78a4", date: "2024-04-12", author: "noreply@google.com", message: "feat: add PHP geo common protos and new surfaces for Maps Fleetengine PHP" },
  { hash: "b9352ebb4", date: "2024-04-12", author: "runner@fv-az1490-898.fv54ws4un3tuxk2tgyakhz5fka.ex.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "1413b13ee", date: "2024-04-12", author: "noreply@google.com", message: "docs: Various updates" },
  { hash: "1cbeafa15", date: "2024-04-12", author: "noreply@google.com", message: "chore: enable new client surfaces for PHP" },
  { hash: "39b5b33be", date: "2024-04-12", author: "runner@fv-az1269-222.fxpsww3xma3elm0kakxm5dxyzh.phxx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "509f0024f", date: "2024-04-12", author: "noreply@google.com", message: "feat: add answer generation APIs feat: add standalone grounding API feat: add project provision and terms APIs fix!: remove some unused LRO metadata/response docs: keep the API doc up-to-date with recent changes" },
  { hash: "7715536b9", date: "2024-04-12", author: "runner@fv-az883-999.sk5y2rh0qbtexpi1qont3x1wzb.ex.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "f758dd6fa", date: "2024-04-12", author: "noreply@google.com", message: "feat: Add rest binding for tuned models feat: Add question_answering and fact_verification task types for AQA feat: Add output dimensionality for embeddings docs: Lots of small fixed" },
  { hash: "13edbc1d2", date: "2024-04-11", author: "noreply@google.com", message: "chore: update copyright year for Secret Manager" },
  { hash: "36a3012c2", date: "2024-04-11", author: "runner@fv-az1393-121.1evhaya2a4vu1idbbq22av5vmh.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "83d7bf4b9", date: "2024-04-11", author: "noreply@google.com", message: "feat: promote recommendation service to v1 feat: promote blending search to v1 feat: promote healthcare search to v1 feat: promote online chunking search to v1 feat: support import data from Cloud Spanner, BigTable, SQL and Firestore feat: support boost/bury on multi-turn search docs: keep the API doc up-to-date with recent changes" },
  { hash: "da9958096", date: "2024-04-11", author: "runner@fv-az566-948.ut545be5203uvep113pmbghppc.ex.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "ff01ec335", date: "2024-04-11", author: "noreply@google.com", message: "feat: Initial notifications sub-API publication" },
  { hash: "4b3affb22", date: "2024-04-11", author: "runner@fv-az1424-316.ccvmnb1tuu4elce0z2wlmhbl4h.ex.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "03e16263c", date: "2024-04-11", author: "noreply@google.com", message: "feat: Initial LFP sub-API publication" },
  { hash: "5e42183e6", date: "2024-04-11", author: "noreply@google.com", message: "feat: fix inventories sub-API publication by adding correct child_type in the API proto" },
  { hash: "8b928bab7", date: "2024-04-10", author: "noreply@google.com", message: "build: change meet publishing PA to apps" },
  { hash: "33ae36216", date: "2024-04-10", author: "noreply@google.com", message: "feat: Add question_answering and fact_verification task types for AQA feat: Add output dimensionality for embeddings feat: Add response_mime_type to GenerationConfig docs: A bunch of small fixes" },
  { hash: "f46478b16", date: "2024-04-10", author: "runner@fv-az1022-575.qszcca3gaylehey5nrg125joga.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "5fadb6340", date: "2024-04-10", author: "noreply@google.com", message: "feat: support import data from Cloud Spanner, BigTable, SQL and Firestore feat: add answer generation APIs feat: add standalone grounding API feat: add standalone ranking API feat: support advanced search boosting feat: add advanced engine model APIs docs: keep the API doc up-to-date with recent changes" },
  { hash: "fc8905581", date: "2024-04-10", author: "noreply@google.com", message: "docs: various formatting and grammar fixes for proto documentation feat: adds support for new toll passes feat: adds support for specifying units in the ComputeRouteMatrix request" },
  { hash: "92b45644f", date: "2024-04-09", author: "noreply@google.com", message: "feat: expand ProcessingFailureReason options and add details for NoOverlapGpsFailure docs: Update client libraries for Street View Publish API" },
  { hash: "bbcce1d48", date: "2024-04-09", author: "noreply@google.com", message: "docs: update comments on ServiceAccount email and scopes fields" },
  { hash: "f9d39f996", date: "2024-04-09", author: "noreply@google.com", message: "fix!: Added optional flag of an existing field `limit`, `consumed`, `carryover` in ResourceAllowance" },
  { hash: "66ae983af", date: "2024-04-09", author: "noreply@google.com", message: "feat: add click potential to Reports sub-API publication" },
  { hash: "5db2bbe91", date: "2024-04-08", author: "noreply@google.com", message: "docs: Fix designation of Text Search docs: Update field mask guidance" },
  { hash: "ecc23bad6", date: "2024-04-08", author: "noreply@google.com", message: "chore(bazel): update Go generator to fix dep res issue" },
  { hash: "e0677a395", date: "2024-04-04", author: "runner@fv-az1426-982.rca3p110zaveja4ulz44at14fe.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "624b052e0", date: "2024-04-04", author: "noreply@google.com", message: "feat: support import data from Cloud Spanner, BigTable, SQL and Firestore feat: support standalone ranking API feat: support layout detection and more chunking features feat: support advanced search boosting docs: keep the API doc up-to-date with recent changes" },
  { hash: "f0ad2158a", date: "2024-04-04", author: "runner@fv-az1206-723.0vxl32vwipkujoye4f0dw5oaka.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "8b36c865f", date: "2024-04-04", author: "noreply@google.com", message: "feat: Management Server APIs" },
  { hash: "9deb78bb2", date: "2024-04-04", author: "noreply@google.com", message: "feat: add `translation_config` in `RecognitionConfig` message" },
  { hash: "d6e96e2b2", date: "2024-04-03", author: "runner@fv-az695-353.gmayhch2cacunn5b1cp1zlasod.dx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "3a43ba72f", date: "2024-04-03", author: "noreply@google.com", message: "docs: Fixed backtick and double quotes mismatch in security_marks.proto" },
  { hash: "39692d046", date: "2024-04-03", author: "noreply@google.com", message: "feat: add GetSettings and UpdateSettings methods at the Project-level to advisorynotifications.googleapis.com" },
  { hash: "d6037e5c6", date: "2024-04-03", author: "runner@fv-az1272-57.grsihaubamwerhiryzjrxtypna.phxx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "e48fc7930", date: "2024-04-03", author: "noreply@google.com", message: "docs: state one Resource Allowance per region per project limitation on v1alpha docs: A comment for field `max_run_duration` in message `.google.cloud.batch.v1alpha.TaskSpec` and `.google.cloud.batch.v1.TaskSpec` is changed docs: add non-negative restriction comment for usage_resource_allowance.spec.limit.limit exposed on v1alpha" },
  { hash: "3b81ceb90", date: "2024-04-03", author: "runner@fv-az849-307.z25y5blrky1utgmobekovqxe1c.bx.internal.cloudapp.net", message: "chore: regenerate API index" },
  { hash: "69d940f8f", date: "2024-04-03", author: "noreply@google.com", message: "feat: Initial conversions sub-API publication" },
  { hash: "0aa0992a5", date: "2024-04-03", author: "noreply@google.com", message: "feat(spanner): adding `EXPECTED_FULFILLMENT_PERIOD` to the indicate instance creation times (with `FULFILLMENT_PERIOD_NORMAL` or `FULFILLMENT_PERIOD_EXTENDED` ENUM) with the extended instance creation time triggered by On-Demand Capacity Feature" },
  { hash: "1406704ce", date: "2024-04-02", author: "noreply@google.com", message: "feat(longrunning): enable PHP GAPIC v2 surface generation" },
  { hash: "d0ed6724c", date: "2024-04-02", author: "noreply@google.com", message: "docs: Allow 14 week backup retention for Firestore daily backups" },
  { hash: "fed9845c5", date: "2024-04-02", author: "noreply@google.com", message: "feat: Add SessionPoolOptions, SpannerOptions protos in executor protos" },
  { hash: "a74854dfc", date: "2024-04-02", author: "noreply@google.com", message: "feat: Add `rollout_info` field to `QuotaDetails` message" },
  { hash: "d5020fff4", date: "2024-04-02", author: "noreply@google.com", message: "feat: Support a new Layout Processor in Document AI docs: keep the API doc up-to-date with recent changes" },
]});
repoLogs.push({ path: "external/googletest", logs: [
]});
repoLogs.push({ path: "external/gptfdisk", logs: [
]});
repoLogs.push({ path: "external/grpc-grpc", logs: [
]});
repoLogs.push({ path: "external/grpc-grpc-java", logs: [
]});
repoLogs.push({ path: "external/gson", logs: [
]});
repoLogs.push({ path: "external/guava", logs: [
]});
repoLogs.push({ path: "external/guice", logs: [
]});
repoLogs.push({ path: "external/gwp_asan", logs: [
]});
repoLogs.push({ path: "external/hamcrest", logs: [
]});
repoLogs.push({ path: "external/harfbuzz_ng", logs: [
]});
repoLogs.push({ path: "external/horologist", logs: [
]});
repoLogs.push({ path: "external/hyphenation-patterns", logs: [
]});
repoLogs.push({ path: "external/icing", logs: [
]});
repoLogs.push({ path: "external/icu", logs: [
  { hash: "5752fa286", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Android patch: Disable experimental MF2 in icu4c＂ into main" },
  { hash: "690a1de1d", date: "2024-04-24", author: "vichang@google.com", message: "Android patch: Disable experimental MF2 in icu4c" },
  { hash: "74c855c7a", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Disable NumberFormatTest#testMonetarySeparator partially＂＂ into main" },
  { hash: "f0808dcaf", date: "2024-04-22", author: "vichang@google.com", message: "Revert ＂Disable NumberFormatTest#testMonetarySeparator partially＂" },
  { hash: "f4c93d101", date: "2024-04-19", author: "vichang@google.com", message: "Merge branch icu75 into aosp/main" },
  { hash: "d78591ea9", date: "2024-04-19", author: "vichang@google.com", message: "Update README.version" },
  { hash: "982cc01d3", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Patch addLikelySubtags(＂sh＂) tests" },
  { hash: "8cbce3901", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Fix message2 test setup issue on Android" },
  { hash: "c6b25a05c", date: "2024-04-19", author: "vichang@google.com", message: "Update test .bp files" },
  { hash: "c3d88a939", date: "2024-04-19", author: "vichang@google.com", message: "Keep an copy CalendarAstronomer of in android_icu4j/src/icu74" },
  { hash: "3a89ee6ee", date: "2024-04-19", author: "vichang@google.com", message: "Hide new ICU4J 75 APIs" },
  { hash: "05740521c", date: "2024-04-19", author: "vichang@google.com", message: "Regenerate libicu.so and ICU4C CTS headers" },
  { hash: "26580c558", date: "2024-04-19", author: "vichang@google.com", message: "Regenerate libandroidicu" },
  { hash: "e97a471f8", date: "2024-04-19", author: "vichang@google.com", message: "Regenerate android_icu4j/ from icu4j/" },
  { hash: "19fcbe408", date: "2024-04-19", author: "vichang@google.com", message: "Remove Android.bp for non-existing breakiterator sample code" },
  { hash: "8bc7a699a", date: "2024-04-19", author: "vichang@google.com", message: "Regenerated binary data files with Android CLDR patches" },
  { hash: "28d2edf50", date: "2024-04-19", author: "vichang@google.com", message: "Regenerated source data files with Android CLDR patches" },
  { hash: "a8bcda37c", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Keep icu4j/main/shared/data/*jar files for host" },
  { hash: "fbe89edd2", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Optimize LSR loaded from langinfo.txt" },
  { hash: "0c76e2f6f", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Lazily load ICU transliteration rules" },
  { hash: "b8dde871a", date: "2024-04-19", author: "allenwtsu@google.com", message: "Android patch: Enable ML phrase breaking" },
  { hash: "b01cd3882", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Soft removal of Calendar.BASE_FIELD_COUNT" },
  { hash: "7fcb14e00", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: madvise when mapping icu (time zone) data files" },
  { hash: "1215de969", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Skip cintltst.tsutil.cloctst.TestISOFunction" },
  { hash: "47b15a8d6", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Allow more than a min number of languages provided in AOSP" },
  { hash: "2696ddff9", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Fix TestCharset#TestSurrogateBehavior" },
  { hash: "d72fea208", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Keep UnicodeSetIterator non-final" },
  { hash: "67b2241e6", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Keep the char version of 5 UCharacter methods" },
  { hash: "39190851f", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add options argument to CorePlatformApi DateTimePatternGenerator#getBestPattern" },
  { hash: "1e32876e6", date: "2024-04-19", author: "vichang@google.com", message: "Android Patch: Fix the docs in icu4c" },
  { hash: "d84a390a9", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Display names for countries/regions and currency symbol" },
  { hash: "8c161094f", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Allow duplicated fields in DateTimePatternGenerator" },
  { hash: "abd82b16c", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add @IntraCoreApi in DateFormatSymbols required by libcore.icu.LocaleData" },
  { hash: "2bf458692", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: ICU4J loads ICU data without using the android.icu.impl.ICUBinary.dataPath property" },
  { hash: "7201de40c", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: libicuuc loads data files without an explicit call" },
  { hash: "9f58e2491", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Fix localized quarters used in java.time" },
  { hash: "298b8d7df", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add DecimalFormatSymbols#getLocalizedPatternSeparator for libcore bridge" },
  { hash: "c12deabf8", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Android support for ICU4C tests (Part 3)" },
  { hash: "4fd3df792", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Android support for ICU4C tests (Part 2)" },
  { hash: "f6aa99101", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Android support for ICU4C tests." },
  { hash: "d87652942", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Allow absolute paths for ctest's -x." },
  { hash: "56fb2b7b4", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Deduplicate data finding code in tests." },
  { hash: "debb80bd8", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Fix production data path in icu4c/source/data/build.xml" },
  { hash: "b59269ec3", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: JapaneseCalendar.CURRENT_ERA should not depend on system time" },
  { hash: "aa5562c20", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: ICU-13295: Apostrophe in pattern bug" },
  { hash: "ca2a71740", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: CLDR data: Force default Gregorian calendar." },
  { hash: "88cb961cd", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Include uconfig_local.h" },
  { hash: "f6265fc49", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add '--small' option to makeconv call during .ucm to .cnv conversion" },
  { hash: "deea03bec", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: CLDR data: Skip tests for the XA/XB pseudo locales." },
  { hash: "2b9f4fde6", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: CLDR data: Replace nb with no." },
  { hash: "1a7415520", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Skip charset tests that fail with customized data." },
  { hash: "bf476764e", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: convrtrs.txt: JavaUnicode customizations." },
  { hash: "6e1b79000", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: convrtrs.txt: Thai customizations." },
  { hash: "fada612e7", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: convrtrs.txt: CJK customizations." },
  { hash: "567e75327", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add noop-*.ucm to prevent 2022 security attack." },
  { hash: "5c919a84e", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add --omitCollationRules to genrb." },
  { hash: "efd9a61d8", date: "2024-04-19", author: "vichang@google.com", message: "Android patch: Add Calendar.getDateTimeFormatString used by java.time via libcore bridge" },
  { hash: "ae6c41140", date: "2024-04-19", author: "vichang@google.com", message: "Copy ICU release-75-1 into aosp/icu-staging" },
  { hash: "415b7b1e8", date: "2024-04-18", author: "vichang@google.com", message: "Merge remote-tracking branch 'aosp/main' into icu-staging" },
  { hash: "db58d0f70", date: "2024-04-17", author: "vichang@google.com", message: "Android patch: Optimize LSR loaded from langinfo.txt" },
  { hash: "c60345665", date: "2024-04-15", author: "mingaleev@google.com", message: "Android patch: Cache toLanguage/toScript/toRegion calculations." },
  { hash: "3a2fafa4b", date: "2024-04-10", author: "vichang@google.com", message: "Re-generate ICU data from CLDR cherry-picks" },
  { hash: "2f1f35b7a", date: "2024-04-10", author: "vichang@google.com", message: "Cherry-pick: ICU-22582 Avoid synchronizing in RuleBasedBreakIterator and ULocale unless strictly necessary" },
  { hash: "e4e0d6107", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂updatecldrdata.py should update localefallback_data.h and LocaleFallbackData.java＂ into main" },
  { hash: "9c393534d", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make icu-data_host_i18n_apex be visible to libicuuc＂ into main" },
  { hash: "03a29c2f2", date: "2024-04-05", author: "vichang@google.com", message: "updatecldrdata.py should update localefallback_data.h and LocaleFallbackData.java" },
  { hash: "4d61ed0d3", date: "2024-04-05", author: "jiyong@google.com", message: "Make icu-data_host_i18n_apex be visible to libicuuc" },
  { hash: "56ba396ab", date: "2024-04-04", author: "vichang@google.com", message: "Merge ＂Update LICENSE file from ICU 74.2＂ into main" },
  { hash: "b71b0d2e6", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Android patch: Lazily load ICU transliteration rules＂ into main" },
  { hash: "76aad8258", date: "2024-04-04", author: "vichang@google.com", message: "Android patch: Lazily load ICU transliteration rules" },
  { hash: "a9faf7de5", date: "2024-04-04", author: "vichang@google.com", message: "Android patch: intern() LSR loaded from langinfo.txt" },
  { hash: "55ebcc01a", date: "2024-04-03", author: "vichang@google.com", message: "Update LICENSE file from ICU 74.2" },
]});
repoLogs.push({ path: "external/igt-gpu-tools", logs: [
]});
repoLogs.push({ path: "external/image_io", logs: [
]});
repoLogs.push({ path: "external/ims", logs: [
]});
repoLogs.push({ path: "external/iperf3", logs: [
]});
repoLogs.push({ path: "external/iproute2", logs: [
  { hash: "455dcbf5", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update for kernel 6.8 headers.＂ into main" },
]});
repoLogs.push({ path: "external/ipsec-tools", logs: [
]});
repoLogs.push({ path: "external/iptables", logs: [
  { hash: "85e290f9", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
]});
repoLogs.push({ path: "external/iputils", logs: [
]});
repoLogs.push({ path: "external/iw", logs: [
]});
repoLogs.push({ path: "external/jackson-annotations", logs: [
]});
repoLogs.push({ path: "external/jackson-core", logs: [
]});
repoLogs.push({ path: "external/jackson-databind", logs: [
]});
repoLogs.push({ path: "external/jacoco", logs: [
]});
repoLogs.push({ path: "external/jarjar", logs: [
]});
repoLogs.push({ path: "external/javaparser", logs: [
]});
repoLogs.push({ path: "external/javapoet", logs: [
]});
repoLogs.push({ path: "external/javasqlite", logs: [
]});
repoLogs.push({ path: "external/javassist", logs: [
]});
repoLogs.push({ path: "external/jazzer-api", logs: [
]});
repoLogs.push({ path: "external/jcommander", logs: [
]});
repoLogs.push({ path: "external/jemalloc_new", logs: [
]});
repoLogs.push({ path: "external/jetpack-camera-app", logs: [
  { hash: "c003924", date: "2024-04-11", author: "davidjia@google.com", message: "Fix wrong test module name in TEST_MAPPING" },
]});
repoLogs.push({ path: "external/jimfs", logs: [
]});
repoLogs.push({ path: "external/jline", logs: [
]});
repoLogs.push({ path: "external/jsilver", logs: [
]});
repoLogs.push({ path: "external/jsmn", logs: [
]});
repoLogs.push({ path: "external/jsoncpp", logs: [
]});
repoLogs.push({ path: "external/jsr305", logs: [
]});
repoLogs.push({ path: "external/jsr330", logs: [
]});
repoLogs.push({ path: "external/junit", logs: [
]});
repoLogs.push({ path: "external/junit-params", logs: [
]});
repoLogs.push({ path: "external/kernel-headers", logs: [
]});
repoLogs.push({ path: "external/kmod", logs: [
]});
repoLogs.push({ path: "external/kotlinc", logs: [
]});
repoLogs.push({ path: "external/kotlinpoet", logs: [
]});
repoLogs.push({ path: "external/kotlinx.atomicfu", logs: [
]});
repoLogs.push({ path: "external/kotlinx.coroutines", logs: [
]});
repoLogs.push({ path: "external/kotlinx.metadata", logs: [
]});
repoLogs.push({ path: "external/kotlinx.serialization", logs: [
  { hash: "3eabe70b", date: "2024-04-23", author: "clarafok@google.com", message: "Upgrade kotlinx.serialization to v1.6.3" },
  { hash: "45d6ad77", date: "2024-04-23", author: "clarafok@google.com", message: "Update Android.bp" },
]});
repoLogs.push({ path: "external/ksoap2", logs: [
]});
repoLogs.push({ path: "external/ksp", logs: [
]});
repoLogs.push({ path: "external/ktfmt", logs: [
]});
repoLogs.push({ path: "external/leveldb", logs: [
]});
repoLogs.push({ path: "external/libaom", logs: [
]});
repoLogs.push({ path: "external/libavc", logs: [
]});
repoLogs.push({ path: "external/libbackup", logs: [
]});
repoLogs.push({ path: "external/libbpf", logs: [
]});
repoLogs.push({ path: "external/libbrillo", logs: [
]});
repoLogs.push({ path: "external/libcap", logs: [
]});
repoLogs.push({ path: "external/libcap-ng", logs: [
]});
repoLogs.push({ path: "external/libchrome", logs: [
]});
repoLogs.push({ path: "external/libchrome-gestures", logs: [
]});
repoLogs.push({ path: "external/libconfig", logs: [
]});
repoLogs.push({ path: "external/libcups", logs: [
]});
repoLogs.push({ path: "external/libcxx", logs: [
  { hash: "45e6c488a", date: "2024-04-26", author: "rprichard@google.com", message: "Revert ＂Remove external/libcxx in favor of prebuilt＂" },
  { hash: "3f93ecd0e", date: "2024-04-16", author: "rprichard@google.com", message: "Remove external/libcxx in favor of prebuilt" },
  { hash: "aae205944", date: "2024-04-17", author: "pirama@google.com", message: "Add pirama to OWNERS" },
  { hash: "9c41e894f", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
  { hash: "fdace49fc", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
  { hash: "4cef22575", date: "2024-04-16", author: "danalbert@google.com", message: "Replace me as an owner here." },
]});
repoLogs.push({ path: "external/libcxxabi", logs: [
  { hash: "ab85fcc", date: "2024-04-26", author: "rprichard@google.com", message: "Merge ＂Revert ＂Remove external/libcxxabi in favor of prebuilt＂＂ into main" },
  { hash: "25a6a9b", date: "2024-04-26", author: "rprichard@google.com", message: "Revert ＂Remove external/libcxxabi in favor of prebuilt＂" },
  { hash: "f204468", date: "2024-04-25", author: "rprichard@google.com", message: "Merge ＂Remove external/libcxxabi in favor of prebuilt＂ into main" },
  { hash: "789b823", date: "2024-04-16", author: "danalbert@google.com", message: "Replace me as an OWNER." },
]});
repoLogs.push({ path: "external/libdav1d", logs: [
]});
repoLogs.push({ path: "external/libdivsufsort", logs: [
]});
repoLogs.push({ path: "external/libdrm", logs: [
]});
repoLogs.push({ path: "external/libepoxy", logs: [
]});
repoLogs.push({ path: "external/libese", logs: [
]});
repoLogs.push({ path: "external/libevent", logs: [
]});
repoLogs.push({ path: "external/libexif", logs: [
]});
repoLogs.push({ path: "external/libffi", logs: [
]});
repoLogs.push({ path: "external/libfuse", logs: [
  { hash: "1594ee8", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
]});
repoLogs.push({ path: "external/libgav1", logs: [
]});
repoLogs.push({ path: "external/libgsm", logs: [
  { hash: "a83e696", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
]});
repoLogs.push({ path: "external/libhevc", logs: [
  { hash: "c94478b", date: "2024-04-24", author: "srujan.vandrangi@ittiam.com", message: "Upgrade libhevc to v1.4.0" },
]});
repoLogs.push({ path: "external/libiio", logs: [
]});
repoLogs.push({ path: "external/libjpeg-turbo", logs: [
]});
repoLogs.push({ path: "external/libkmsxx", logs: [
]});
repoLogs.push({ path: "external/liblc3", logs: [
  { hash: "14b520b", date: "2024-04-19", author: "asoulier@google.com", message: "Merge remote-tracking branch 'aosp/upstream-main' into liblc3" },
  { hash: "73bbc00", date: "2024-04-19", author: "asoulier@google.com", message: "conformance: Update version to 1.0.7 and add HFP SWB use-case" },
  { hash: "8523516", date: "2024-04-10", author: "asoulier@google.com", message: "test: Fix typo in decoder.py call to ltpf" },
  { hash: "5f5251a", date: "2024-04-05", author: "rui@chenrui.dev", message: "ci: add build-macos-meson job" },
]});
repoLogs.push({ path: "external/libldac", logs: [
]});
repoLogs.push({ path: "external/libmonet", logs: [
]});
repoLogs.push({ path: "external/libmpeg2", logs: [
]});
repoLogs.push({ path: "external/libnetfilter_conntrack", logs: [
]});
repoLogs.push({ path: "external/libnfnetlink", logs: [
]});
repoLogs.push({ path: "external/libnl", logs: [
  { hash: "f07ef773", date: "2024-04-04", author: "cferris@google.com", message: "Update for new version of libnl." },
]});
repoLogs.push({ path: "external/libogg", logs: [
]});
repoLogs.push({ path: "external/libopus", logs: [
]});
repoLogs.push({ path: "external/libpalmrejection", logs: [
]});
repoLogs.push({ path: "external/libpcap", logs: [
]});
repoLogs.push({ path: "external/libphonenumber", logs: [
  { hash: "673d9a87", date: "2024-04-11", author: "tjstuart@google.com", message: "Merge ＂update libphonenumber lib to 8.13.34＂ into main" },
]});
repoLogs.push({ path: "external/libpng", logs: [
]});
repoLogs.push({ path: "external/libprotobuf-mutator", logs: [
]});
repoLogs.push({ path: "external/libsrtp2", logs: [
]});
repoLogs.push({ path: "external/libtextclassifier", logs: [
]});
repoLogs.push({ path: "external/libtraceevent", logs: [
]});
repoLogs.push({ path: "external/libtracefs", logs: [
]});
repoLogs.push({ path: "external/libultrahdr", logs: [
  { hash: "1fe9afc", date: "2024-04-11", author: "hmahendrakar@google.com", message: "Upgrade libultrahdr to 668eea659028a395906611ac1e05bdf88c6f6559" },
  { hash: "668eea6", date: "2024-04-10", author: "hmahendrakar@google.com", message: "Update Android.bp for recent changes" },
  { hash: "70b11a2", date: "2024-04-09", author: "ram.mohan@ittiam.com", message: "Enable wasm build" },
  { hash: "74993de", date: "2024-04-05", author: "ram.mohan@ittiam.com", message: "improve ce9d00b" },
  { hash: "1cdc2a9", date: "2024-04-05", author: "vivek.jadhav@ittiam.com", message: "Update easy editing methods for all supported color formats" },
  { hash: "bd8f3c8", date: "2024-04-05", author: "harish.mahendrakar@ittiam.com", message: "Add more targets to cmake.yml" },
]});
repoLogs.push({ path: "external/liburing", logs: [
]});
repoLogs.push({ path: "external/libusb", logs: [
]});
repoLogs.push({ path: "external/libutf", logs: [
]});
repoLogs.push({ path: "external/libvpx", logs: [
]});
repoLogs.push({ path: "external/libwebm", logs: [
]});
repoLogs.push({ path: "external/libwebsockets", logs: [
]});
repoLogs.push({ path: "external/libxaac", logs: [
]});
repoLogs.push({ path: "external/libxkbcommon", logs: [
]});
repoLogs.push({ path: "external/libxml2", logs: [
  { hash: "ad02985b", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
]});
repoLogs.push({ path: "external/libyuv", logs: [
]});
repoLogs.push({ path: "external/licenseclassifier", logs: [
]});
repoLogs.push({ path: "external/linux-kselftest", logs: [
]});
repoLogs.push({ path: "external/llvm", logs: [
  { hash: "49f337160b07", date: "2024-04-11", author: "rprichard@google.com", message: "Merge ＂Build LLVM with -Wno-deprecated-declarations＂ into main" },
]});
repoLogs.push({ path: "external/llvm-libc", logs: [
  { hash: "75a947884d47", date: "2024-04-20", author: "llvm-libc@google.com", message: "Project import generated by Copybara." },
  { hash: "33e5bf0487e3", date: "2024-04-12", author: "llvm-libc@google.com", message: "Project import generated by Copybara." },
  { hash: "3476d15c2573", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂external: libc: remove copybara config copy＂ into main" },
  { hash: "5bafe439f867", date: "2024-04-05", author: "ndesaulniers@google.com", message: "external: libc: remove copybara config copy" },
]});
repoLogs.push({ path: "external/lmfit", logs: [
]});
repoLogs.push({ path: "external/lottie", logs: [
]});
repoLogs.push({ path: "external/ltp", logs: [
  { hash: "46658b466", date: "2024-04-26", author: "edliaw@google.com", message: "Android.bp: fix build complaint of missing lapi/syscalls/order" },
  { hash: "9b0e42199", date: "2024-04-22", author: "ltp@lists.linux.it", message: "controllers: remove use of LINE_MAX" },
  { hash: "7c1ee6336", date: "2024-04-22", author: "edliaw@google.com", message: "Merge ＂bionic-compat.h: no need to define LINE_MAX any more.＂ into main" },
  { hash: "f07e07e62", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove joefradley@google.com from OWNERS" },
  { hash: "c31fe69a6", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Convert ltp from Android.mk to Android.bp＂ into main" },
  { hash: "cac8f321f", date: "2024-04-17", author: "enh@google.com", message: "bionic-compat.h: no need to define LINE_MAX any more." },
  { hash: "30ba27524", date: "2024-04-16", author: "yangbill@google.com", message: "Convert ltp from Android.mk to Android.bp" },
  { hash: "63be16591", date: "2024-04-15", author: "enh@google.com", message: "bionic-compat.h: remove more unused definitions." },
  { hash: "7f743b249", date: "2024-04-09", author: "enh@google.com", message: "bionic-compat.h: more cleanup." },
  { hash: "ada535d29", date: "2024-04-09", author: "enh@google.com", message: "bionic-compat.h: remove obsolete cruft." },
  { hash: "81102a25f", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂ltp-20230929-android14-tests＂ into android14-tests-dev am: cdb9cd95d8 -s ours" },
  { hash: "c2494db53", date: "2024-04-02", author: "rpalethorpe@suse.com", message: "[automerger skipped] cgroup: Fix scanning V1 mount options am: 74f79dc224 -s ours" },
]});
repoLogs.push({ path: "external/lua", logs: [
]});
repoLogs.push({ path: "external/lz4", logs: [
]});
repoLogs.push({ path: "external/lzma", logs: [
  { hash: "ff37d15", date: "2024-04-22", author: "enh@google.com", message: "Merge ＂Upgrade lzma to 23.01＂ into main" },
]});
repoLogs.push({ path: "external/marisa-trie", logs: [
]});
repoLogs.push({ path: "external/mbedtls", logs: [
]});
repoLogs.push({ path: "external/mdnsresponder", logs: [
  { hash: "5ead251", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove dnssd module.＂ into main" },
]});
repoLogs.push({ path: "external/mesa3d", logs: [
  { hash: "5ad47d4cb96", date: "2024-04-10", author: "enh@google.com", message: "Merge ＂Android.bp: neon has been always-on for years now.＂ into main" },
]});
repoLogs.push({ path: "external/mime-support", logs: [
]});
repoLogs.push({ path: "external/minigbm", logs: [
]});
repoLogs.push({ path: "external/minijail", logs: [
]});
repoLogs.push({ path: "external/mksh", logs: [
]});
repoLogs.push({ path: "external/mobile-data-download", logs: [
]});
repoLogs.push({ path: "external/mobly-bundled-snippets", logs: [
]});
repoLogs.push({ path: "external/mobly-snippet-lib", logs: [
]});
repoLogs.push({ path: "external/mockftpserver", logs: [
]});
repoLogs.push({ path: "external/mockito", logs: [
  { hash: "d0c9098", date: "2024-04-04", author: "liranb@google.com", message: "Merge changes from topic ＂mockito-upgrade-2-23-0＂ into main" },
  { hash: "db4edcf", date: "2024-04-03", author: "liranb@google.com", message: "Reapply ＂Fixed DefaultMockitoSession constructor＂" },
  { hash: "e4a0cdd", date: "2024-04-03", author: "liranb@google.com", message: "Reapply ＂New API to clean up all inline mocks after test＂" },
]});
repoLogs.push({ path: "external/mockito-kotlin", logs: [
]});
repoLogs.push({ path: "external/mockwebserver", logs: [
]});
repoLogs.push({ path: "external/modp_b64", logs: [
]});
repoLogs.push({ path: "external/mp4parser", logs: [
]});
repoLogs.push({ path: "external/ms-tpm-20-ref", logs: [
]});
repoLogs.push({ path: "external/mtools", logs: [
]});
repoLogs.push({ path: "external/mtpd", logs: [
]});
repoLogs.push({ path: "external/musl", logs: [
]});
repoLogs.push({ path: "external/nanohttpd", logs: [
]});
repoLogs.push({ path: "external/nanopb-c", logs: [
]});
repoLogs.push({ path: "external/naver-fonts", logs: [
]});
repoLogs.push({ path: "external/neon_2_sse", logs: [
]});
repoLogs.push({ path: "external/neven", logs: [
]});
repoLogs.push({ path: "external/newfs_msdos", logs: [
]});
repoLogs.push({ path: "external/nist-pkits", logs: [
]});
repoLogs.push({ path: "external/nist-sip", logs: [
]});
repoLogs.push({ path: "external/nos/host/generic", logs: [
]});
repoLogs.push({ path: "external/noto-fonts", logs: [
]});
repoLogs.push({ path: "external/nullaway", logs: [
]});
repoLogs.push({ path: "external/oauth", logs: [
]});
repoLogs.push({ path: "external/obex", logs: [
]});
repoLogs.push({ path: "external/objenesis", logs: [
]});
repoLogs.push({ path: "external/oboe", logs: [
]});
repoLogs.push({ path: "external/obstack", logs: [
]});
repoLogs.push({ path: "external/oj-libjdwp", logs: [
]});
repoLogs.push({ path: "external/okhttp", logs: [
  { hash: "ca77194", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disable flakey okhttp tests pending investigation.＂ into main" },
]});
repoLogs.push({ path: "external/okio", logs: [
]});
repoLogs.push({ path: "external/one-true-awk", logs: [
]});
repoLogs.push({ path: "external/open-dice", logs: [
]});
repoLogs.push({ path: "external/opencensus-java", logs: [
]});
repoLogs.push({ path: "external/openscreen", logs: [
]});
repoLogs.push({ path: "external/openthread", logs: [
  { hash: "94da396cd", date: "2024-04-08", author: "handaw@google.com", message: "[Thread] fix build" },
  { hash: "7d6458212", date: "2024-04-08", author: "handaw@google.com", message: "[Github Sync] Merge github/main to aosp/main" },
  { hash: "a5c17b776", date: "2024-04-05", author: "36926543+DaveLacerte@users.noreply.github.com", message: "[mle] MTD to handle udp time sync message (#9978)" },
  { hash: "b146766e3", date: "2024-04-05", author: "abtink@google.com", message: "[plat-utils] enhance `otMacFrameDoesAddrMatch()` (#9997)" },
  { hash: "e3f97e236", date: "2024-04-05", author: "abtink@google.com", message: "[netdata-publisher] distinguish SRP/DNS unicast entries (#9937)" },
  { hash: "223935bf0", date: "2024-04-05", author: "abtink@google.com", message: "[logging] introduce `LogWarnOnError()` for standardized error logging (#9996)" },
  { hash: "65bc830ed", date: "2024-04-04", author: "abtink@google.com", message: "[test] add tests for multi-BR network resilience during BR removal (#9990)" },
  { hash: "244c223ff", date: "2024-04-04", author: "abtink@google.com", message: "[srp-sever] add `LogError()` (#9992)" },
  { hash: "875e71e56", date: "2024-04-04", author: "abtink@google.com", message: "[dataset] define `Dataset::Tlvs` type (#9991)" },
  { hash: "38418aebe", date: "2024-04-03", author: "xyk@google.com", message: "[ip6] allow delivering RLOC/ALOC traffic to host (#9987)" },
  { hash: "a3e804101", date: "2024-04-03", author: "abtink@google.com", message: "[mle] simplify `CheckReachablity()` (#9989)" },
  { hash: "843db1e82", date: "2024-04-03", author: "7058128+superwhd@users.noreply.github.com", message: "[srp-server] retry other ports when failing to `prepareSocket` (#9981)" },
  { hash: "0e3679911", date: "2024-04-02", author: "irvingcl@google.com", message: "[link-metrics] fix race condition (#9986)" },
]});
repoLogs.push({ path: "external/openwrt-prebuilts", logs: [
]});
repoLogs.push({ path: "external/oss-fuzz", logs: [
]});
repoLogs.push({ path: "external/ot-br-posix", logs: [
  { hash: "baedc187", date: "2024-04-19", author: "sunytt@google.com", message: "Update logging of multicast listener events to info level." },
  { hash: "7588011e", date: "2024-04-10", author: "sunytt@google.com", message: "Merge ＂Send list of unicast & multicast addresses in address callback.＂ into main" },
  { hash: "304a371d", date: "2024-04-09", author: "sunytt@google.com", message: "Send list of unicast & multicast addresses in address callback." },
  { hash: "a7f6b239", date: "2024-04-08", author: "handaw@google.com", message: "[Github Sync] Merge github/main to aosp/main" },
  { hash: "cec64774", date: "2024-04-05", author: "49699333+dependabot[bot]@users.noreply.github.com", message: "submodule: bump third_party/openthread/repo from `38418ae` to `65bc830` (#2240)" },
  { hash: "71e7e1a7", date: "2024-04-04", author: "49699333+dependabot[bot]@users.noreply.github.com", message: "submodule: bump third_party/openthread/repo from `0e36799` to `38418ae` (#2239)" },
  { hash: "d48fc4f7", date: "2024-04-03", author: "7058128+superwhd@users.noreply.github.com", message: "[continuous-integration] install `socat` for docker-based BR tests (#2236)" },
  { hash: "3524afda", date: "2024-04-03", author: "49699333+dependabot[bot]@users.noreply.github.com", message: "submodule: bump third_party/openthread/repo from `d099d78` to `0e36799` (#2238)" },
  { hash: "5c906bb8", date: "2024-04-02", author: "49699333+dependabot[bot]@users.noreply.github.com", message: "submodule: bump third_party/openthread/repo from `37144f0` to `d099d78` (#2237)" },
]});
repoLogs.push({ path: "external/ow2-asm", logs: [
]});
repoLogs.push({ path: "external/owasp/java-encoder", logs: [
]});
repoLogs.push({ path: "external/owasp/sanitizer", logs: [
]});
repoLogs.push({ path: "external/pandora/avatar", logs: [
]});
repoLogs.push({ path: "external/pandora/bt-test-interfaces", logs: [
]});
repoLogs.push({ path: "external/pandora/mmi2grpc", logs: [
]});
repoLogs.push({ path: "external/parameter-framework", logs: [
]});
repoLogs.push({ path: "external/pcre", logs: [
]});
repoLogs.push({ path: "external/pdfium", logs: [
]});
repoLogs.push({ path: "external/perfetto", logs: [
  { hash: "74d734dd0", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add test for dropped messages＂ into main" },
  { hash: "1eae2b182", date: "2024-04-26", author: "lalitm@google.com", message: "ui: utilise segment forest to improve slice tracks on large traces" },
  { hash: "6e0ff97cf", date: "2024-04-26", author: "lalitm@google.com", message: "ui: add tracks to list of searchable items" },
  { hash: "34582f5b8", date: "2024-04-26", author: "lalitm@google.com", message: "Merge ＂ui: fix thread based process scheduling tracks＂ into main" },
  { hash: "99a464add", date: "2024-04-26", author: "lalitm@google.com", message: "ui: fix thread based process scheduling tracks" },
  { hash: "176b9487c", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ui: make naming of commands more consistent＂ into main" },
  { hash: "43851e716", date: "2024-04-26", author: "pablogamito@google.com", message: "Add test for dropped messages" },
  { hash: "9b70cbf6a", date: "2024-04-26", author: "parthsane@google.com", message: "Merge ＂Add metrics for OOM adjuster＂ into main" },
  { hash: "504568798", date: "2024-04-26", author: "lalitm@google.com", message: "ui: utilise segment forest to improve counter tracks on large traces" },
  { hash: "5d2854256", date: "2024-04-26", author: "lalitm@google.com", message: "ui: make naming of commands more consistent" },
  { hash: "167a19d84", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tp: fix a bunch of bugs in ProtoLogParser＂ into main" },
  { hash: "f0c2e60fd", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix code formatting issue＂ into main" },
  { hash: "d7b320535", date: "2024-04-25", author: "lalitm@google.com", message: "tp: fix a bunch of bugs in ProtoLogParser" },
  { hash: "7d800c618", date: "2024-04-25", author: "bql@google.com", message: "Merge ＂ui: check cache first before loading dominator tree table＂ into main" },
  { hash: "9a8fff06a", date: "2024-04-25", author: "bql@google.com", message: "ui: check cache first before loading dominator tree table" },
  { hash: "60222f5bb", date: "2024-04-25", author: "parthsane@google.com", message: "Add metrics for OOM adjuster" },
  { hash: "43195237c", date: "2024-04-25", author: "hbolaria@google.com", message: "Merge ＂[Scroll Jank Plugin] Fix mismatch between integer and number in scroll offset graph.＂ into main" },
  { hash: "05fae3f5a", date: "2024-04-25", author: "hbolaria@google.com", message: "[Scroll Jank Plugin] Fix mismatch between integer and number in scroll offset graph." },
  { hash: "0136ed57b", date: "2024-04-25", author: "aattar@google.com", message: "Merge ＂Assigning the 'FtraceModule' to the 'ftrace_module' variable right after module creation sequence.＂ into main" },
  { hash: "183d3f7e5", date: "2024-04-25", author: "stevegolton@google.com", message: "Merge ＂ui: Added counter track hue comment＂ into main" },
  { hash: "68473acd9", date: "2024-04-25", author: "stevegolton@google.com", message: "Merge ＂ui: Make track error button compact＂ into main" },
  { hash: "a40905e05", date: "2024-04-25", author: "aattar@google.com", message: "Assigning the 'FtraceModule' to the 'ftrace_module' variable right after module creation sequence." },
  { hash: "c3d348248", date: "2024-04-25", author: "stevegolton@google.com", message: "Merge changes If686cbd7,Ic34cc7a0 into main" },
  { hash: "bf6762ffe", date: "2024-04-25", author: "stevegolton@google.com", message: "ui: Added counter track hue comment" },
  { hash: "124063873", date: "2024-04-25", author: "stevegolton@google.com", message: "ui: Make track error button compact" },
  { hash: "7ebcdb387", date: "2024-04-25", author: "hbolaria@google.com", message: "Merge ＂[Scroll Jank Plugin] Update graph query to use new column name.＂ into main" },
  { hash: "c4185b001", date: "2024-04-25", author: "hbolaria@google.com", message: "Merge ＂COPYBARA_IMPORT=Project import generated by Copybara.＂ into main" },
  { hash: "107be3387", date: "2024-04-25", author: "mayzner@google.com", message: "Merge ＂tp: Cleanup of UpdateConstraintsAndOrderByFromIndex＂ into main" },
  { hash: "7d62cabfa", date: "2024-04-25", author: "mayzner@google.com", message: "Merge ＂tp: Add Query struct＂ into main" },
  { hash: "b8fe9cc82", date: "2024-04-25", author: "mayzner@google.com", message: "Merge ＂tp: Add android.startup time to full and initial display＂ into main" },
  { hash: "724a89b18", date: "2024-04-25", author: "perfetto-dev@google.com", message: "COPYBARA_IMPORT=Project import generated by Copybara." },
  { hash: "763aab383", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tp: fix subtle issue with process <-> package matching for isolated apps＂ into main" },
  { hash: "b29b7969a", date: "2024-04-24", author: "lalitm@google.com", message: "tp: fix subtle issue with process <-> package matching for isolated apps" },
  { hash: "196f4d514", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix `uint` -> `uint32_t`＂ into main" },
  { hash: "33f17d2be", date: "2024-04-24", author: "pablogamito@google.com", message: "Fix code formatting issue" },
  { hash: "01ffdeb9a", date: "2024-04-24", author: "mayzner@google.com", message: "tp: Add android.startup time to full and initial display" },
  { hash: "5177bd7bf", date: "2024-04-24", author: "oksamyt@google.com", message: "Merge ＂Update chrome_scroll_inputs_per_frame.sql to use EventLatency＂ into main" },
  { hash: "e1330ade6", date: "2024-04-24", author: "ddiproietto@google.com", message: "Fix `uint` -> `uint32_t`" },
  { hash: "165106635", date: "2024-04-24", author: "ddiproietto@google.com", message: "Merge ＂Use `am get-current-user` instead of `cmd user get-main-user`＂ into main" },
  { hash: "f32e7ffc4", date: "2024-04-24", author: "mayzner@google.com", message: "tp: Cleanup of UpdateConstraintsAndOrderByFromIndex" },
  { hash: "d02ce1bb2", date: "2024-04-24", author: "mayzner@google.com", message: "tp: Add Query struct" },
  { hash: "3133d8d7e", date: "2024-04-24", author: "oksamyt@google.com", message: "Update chrome_scroll_inputs_per_frame.sql to use EventLatency" },
  { hash: "59a0a7b11", date: "2024-04-24", author: "stevegolton@google.com", message: "ui: Tidy up commands" },
  { hash: "5d6319a8c", date: "2024-04-24", author: "stevegolton@google.com", message: "Merge ＂ui: Fix double scrollbar sometimes seen in Ftrace/Android logs tabs＂ into main" },
  { hash: "76a5d6690", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Improve dominator tree view performance＂ into main" },
  { hash: "dd89b4465", date: "2024-04-24", author: "keanmariotti@google.com", message: "Merge ＂protozero: allow top-level extension blocks＂ into main" },
  { hash: "83e019e1b", date: "2024-04-24", author: "vilasbhat@google.com", message: "Merge ＂perfetto: Fix issues with proto update tools on tip-of-tree＂ into main" },
  { hash: "6eef2e6ca", date: "2024-04-23", author: "vilasbhat@google.com", message: "perfetto: Fix issues with proto update tools on tip-of-tree" },
  { hash: "be7688142", date: "2024-04-23", author: "lalitm@google.com", message: "Merge ＂ui: overhaul track decider queries to make things faster＂ into main" },
  { hash: "d467b06f2", date: "2024-04-23", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Frame Timeline＂ into main" },
  { hash: "3a6361650", date: "2024-04-23", author: "lalitm@google.com", message: "ui: overhaul track decider queries to make things faster" },
  { hash: "6110643a2", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂protozero_plugin: print extensions＂ into main" },
  { hash: "8ae4c8664", date: "2024-04-23", author: "lalitm@google.com", message: "tp: implement an implicit segment-tree like data structure" },
  { hash: "e2dfc3df6", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂protozero_plugin: print extensions＂＂ into main" },
  { hash: "423556ebe", date: "2024-04-23", author: "ddiproietto@google.com", message: "Use `am get-current-user` instead of `cmd user get-main-user`" },
  { hash: "e03ca506f", date: "2024-04-23", author: "ilkos@google.com", message: "Improve dominator tree view performance" },
  { hash: "da5ae1124", date: "2024-04-23", author: "vaage@google.com", message: "Trace Redaction - Frame Timeline" },
  { hash: "12359679d", date: "2024-04-23", author: "keanmariotti@google.com", message: "protozero_plugin: print extensions" },
  { hash: "98fb7faa6", date: "2024-04-23", author: "keanmariotti@google.com", message: "protozero: allow top-level extension blocks" },
  { hash: "a4b6bc3ec", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix segfault in trace processor＂ into main" },
  { hash: "f45cb26c9", date: "2024-04-23", author: "ddiproietto@google.com", message: "Revert ＂protozero_plugin: print extensions＂" },
  { hash: "4b2b825af", date: "2024-04-23", author: "lalitm@google.com", message: "tp: fix multiple minor bugs with cengine" },
  { hash: "d2234d4f8", date: "2024-04-23", author: "lalitm@google.com", message: "ui: remove arg autocompletition in pivot table" },
  { hash: "9d5cef8ed", date: "2024-04-23", author: "pablogamito@google.com", message: "Fix segfault in trace processor" },
  { hash: "72d015eec", date: "2024-04-23", author: "rsavitski@google.com", message: "Merge ＂ui: change ＂dead＂ task color to gray and render dead tasks from old kernels (<4.14)＂ into main" },
  { hash: "6104c6b70", date: "2024-04-23", author: "etiennep@google.com", message: "Merge ＂[chrome] Register MetadataModule for kChromeTriggerFieldNumber＂ into main" },
  { hash: "3c2697c17", date: "2024-04-23", author: "rsavitski@google.com", message: "ui: change ＂dead＂ task color to gray and render dead tasks from old kernels (<4.14)" },
  { hash: "97793c617", date: "2024-04-23", author: "oksamyt@google.com", message: "Merge ＂COPYBARA_IMPORT=Project import generated by Copybara.＂ into main" },
  { hash: "6ac903f60", date: "2024-04-23", author: "stevegolton@google.com", message: "ui: Fix double scrollbar sometimes seen in Ftrace/Android logs tabs" },
  { hash: "55abe0ba6", date: "2024-04-23", author: "bql@google.com", message: "Merge ＂Revert ＂ui: show heap graph dominator tree default to true＂＂ into main" },
  { hash: "bf77a6516", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂proto_gen.bzl: emit --proto_path for dependencies＂ into main" },
  { hash: "21f49dd9f", date: "2024-04-23", author: "rasikan@google.com", message: "Merge ＂[chrome-stdlib] Fix OWNERS file for Chrome Stdlib＂ into main" },
  { hash: "efb6e67e0", date: "2024-04-23", author: "rasikan@google.com", message: "[chrome-stdlib] Fix OWNERS file for Chrome Stdlib" },
  { hash: "ddfac4315", date: "2024-04-23", author: "bql@google.com", message: "Revert ＂ui: show heap graph dominator tree default to true＂" },
  { hash: "abdc9bf21", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂improve typescript docs＂ into main" },
  { hash: "6124fb2a9", date: "2024-04-23", author: "primiano@google.com", message: "improve typescript docs" },
  { hash: "24e890618", date: "2024-04-23", author: "keanmariotti@google.com", message: "proto_gen.bzl: emit --proto_path for dependencies" },
  { hash: "b541f362c", date: "2024-04-23", author: "ddiproietto@google.com", message: "protozero_plugin: print extensions" },
  { hash: "2dd7beb97", date: "2024-04-23", author: "keanmariotti@google.com", message: "Merge ＂Build perfetto_trace_javastream_protos from list of files＂ into main" },
  { hash: "f6f80e875", date: "2024-04-23", author: "etiennep@google.com", message: "[chrome] Register MetadataModule for kChromeTriggerFieldNumber" },
  { hash: "43c1ccace", date: "2024-04-22", author: "perfetto-dev@google.com", message: "COPYBARA_IMPORT=Project import generated by Copybara." },
  { hash: "aaef2e6a9", date: "2024-04-22", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Drops fields, not packets＂ into main" },
  { hash: "75d9e9fe2", date: "2024-04-22", author: "rsavitski@google.com", message: "ui: promote Steve to owner of chaos" },
  { hash: "8d0e5d946", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from src/traced/probes/ftrace/OWNERS＂ into main" },
  { hash: "71f4d6750", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from ui/src/plugins/dev.perfetto.BookmarkletApi/OWNERS＂ into main" },
  { hash: "f53663d09", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from ui/release/OWNERS＂ into main" },
  { hash: "78caba258", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from ui/OWNERS＂ into main" },
  { hash: "fd49886db", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from OWNERS＂ into main" },
  { hash: "bcd06d403", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from test/vts/OWNERS＂ into main" },
  { hash: "60adb1a51", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from test/cts/OWNERS＂ into main" },
  { hash: "033580a82", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from src/trace_processor/perfetto_sql/stdlib/common/OWNERS＂ into main" },
  { hash: "51b81e39b", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from protos/perfetto/ipc/OWNERS＂ into main" },
  { hash: "70d95754b", date: "2024-04-22", author: "rsavitski@google.com", message: "Merge ＂Remove hjd@google.com from infra/OWNERS＂ into main" },
  { hash: "be927611e", date: "2024-04-22", author: "vaage@google.com", message: "Trace Redaction - Drops fields, not packets" },
  { hash: "c916a7002", date: "2024-04-22", author: "aattar@google.com", message: "Merge ＂[ETW] Fixes two main UI issues with ETW＂ into main" },
  { hash: "0bb554540", date: "2024-04-22", author: "stevegolton@google.com", message: "Merge ＂ui: Fix buggy counter duration calculation＂ into main" },
  { hash: "6ea518851", date: "2024-04-22", author: "rasikan@google.com", message: "[chrome-stdlib] Add Chromium owners to subdirectories of Chrome Stdlib" },
  { hash: "ddb0b6b61", date: "2024-04-22", author: "stevegolton@google.com", message: "ui: Fix buggy counter duration calculation" },
  { hash: "487a53932", date: "2024-04-22", author: "keanmariotti@google.com", message: "Build perfetto_trace_javastream_protos from list of files" },
  { hash: "d3f7a9f5d", date: "2024-04-22", author: "hbolaria@google.com", message: "[Scroll Jank Plugin] Update graph query to use new column name." },
  { hash: "da5e014d7", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from src/traced/probes/ftrace/OWNERS" },
  { hash: "59706a91c", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from ui/src/plugins/dev.perfetto.BookmarkletApi/OWNERS" },
  { hash: "329d46e11", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from ui/release/OWNERS" },
  { hash: "1658a2fa8", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from ui/OWNERS" },
  { hash: "d70d48660", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from OWNERS" },
  { hash: "fd7373baa", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from test/vts/OWNERS" },
  { hash: "132fbfe88", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from test/cts/OWNERS" },
  { hash: "4b5ffacc3", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from src/trace_processor/perfetto_sql/stdlib/common/OWNERS" },
  { hash: "dc784f650", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from protos/perfetto/ipc/OWNERS" },
  { hash: "5890d39c6", date: "2024-04-21", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hjd@google.com from infra/OWNERS" },
  { hash: "33ca81a46", date: "2024-04-19", author: "cphlipot@meta.com", message: "Optimize general purpose counter aggregation view query" },
  { hash: "9d7ab6975", date: "2024-04-19", author: "cphlipot@meta.com", message: "Add optimized single-track counter aggregation query" },
  { hash: "87057a388", date: "2024-04-19", author: "aattar@google.com", message: "[ETW] Fixes two main UI issues with ETW" },
  { hash: "04fa81245", date: "2024-04-19", author: "stevegolton@google.com", message: "ui: Roll canary" },
  { hash: "b8c4c98bc", date: "2024-04-19", author: "simonmacm@google.com", message: "Merge ＂Proto definitions for modem custom data source. Bug: 335603768＂ into main" },
  { hash: "121932b40", date: "2024-04-18", author: "stevegolton@google.com", message: "Merge ＂ui: Fix broken table header CSS＂ into main" },
  { hash: "1071596d2", date: "2024-04-18", author: "simonmacm@google.com", message: "Proto definitions for modem custom data source. Bug: 335603768" },
  { hash: "982f2f5f6", date: "2024-04-18", author: "bql@google.com", message: "Merge ＂ui: show heap graph dominator tree default to true＂ into main" },
  { hash: "55751a118", date: "2024-04-18", author: "amanvr@google.com", message: "Merge ＂COPYBARA_IMPORT=Project import generated by Copybara.＂ into main" },
  { hash: "03193a44a", date: "2024-04-17", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Fix indirect include＂ into main" },
  { hash: "d45277471", date: "2024-04-17", author: "vaage@google.com", message: "Trace Redaction - Fix indirect include" },
  { hash: "672c6bdd0", date: "2024-04-17", author: "stevegolton@google.com", message: "ui: Fix broken table header CSS" },
  { hash: "1680cc2d5", date: "2024-04-17", author: "simonmacm@google.com", message: "Don't show '?' for unknown units." },
  { hash: "930c7cc9c", date: "2024-04-17", author: "bql@google.com", message: "ui: show heap graph dominator tree default to true" },
  { hash: "f52192200", date: "2024-04-17", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Filter suspend resume events＂ into main" },
  { hash: "93d8809e9", date: "2024-04-17", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Update filter ftrace events to use common fixture＂ into main" },
  { hash: "de4f329a0", date: "2024-04-17", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Update scrubs ftrace events to use common fixture＂ into main" },
  { hash: "3df860960", date: "2024-04-17", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Extract prune package list tests＂ into main" },
  { hash: "6579c4e89", date: "2024-04-17", author: "stevegolton@google.com", message: "Merge ＂ui: Defer invoking `Track.onCreate()` until the track is in view＂ into main" },
  { hash: "9918c9d40", date: "2024-04-17", author: "perfetto-dev@google.com", message: "COPYBARA_IMPORT=Project import generated by Copybara." },
  { hash: "f6656e982", date: "2024-04-17", author: "aattar@google.com", message: "Merge ＂[ETW] Adds EtwParser and EtwShedEventTracker to trace processor.＂ into main" },
  { hash: "234fd0271", date: "2024-04-17", author: "rsavitski@google.com", message: "docs: heap-graphs: fix table markdown" },
  { hash: "4b17da4b1", date: "2024-04-17", author: "stevegolton@google.com", message: "ui: Defer invoking `Track.onCreate()` until the track is in view" },
  { hash: "df18d0579", date: "2024-04-17", author: "stevegolton@google.com", message: "Merge ＂ui: Remove button backgrounds by default, use intent to add color＂ into main" },
  { hash: "89a007110", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂misc fixups: bugprone-inaccurate-erase + comments + includes＂ into main" },
  { hash: "447f88dd1", date: "2024-04-17", author: "mayzner@google.com", message: "Merge ＂add support for multiple constraints in trace URI resolver＂ into main" },
  { hash: "e05133c50", date: "2024-04-17", author: "rsavitski@google.com", message: "misc fixups: bugprone-inaccurate-erase + comments + includes" },
  { hash: "c7b04fcf2", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Extract prune package list tests" },
  { hash: "7c863764b", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Update filter ftrace events to use common fixture" },
  { hash: "8fe47f290", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Update scrubs ftrace events to use common fixture" },
  { hash: "300953f95", date: "2024-04-16", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Use RETURN_IF_ERROR in trace redactor＂ into main" },
  { hash: "546a3f567", date: "2024-04-16", author: "stevegolton@google.com", message: "Merge ＂ui: Don't blur search bar when hitting backspace＂ into main" },
  { hash: "3d0aae716", date: "2024-04-16", author: "aattar@google.com", message: "[ETW] Adds EtwParser and EtwShedEventTracker to trace processor." },
  { hash: "5d734eb03", date: "2024-04-16", author: "stevegolton@google.com", message: "Merge ＂ui: Fix group header z-index＂ into main" },
  { hash: "0ed920495", date: "2024-04-16", author: "stevegolton@google.com", message: "ui: Fix group header z-index" },
  { hash: "db2d533fb", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Filter suspend resume events" },
  { hash: "4c3fa46ff", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Use RETURN_IF_ERROR in trace redactor" },
  { hash: "62e7ef0b5", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Use Begin/End with CollectTimelineEvents" },
  { hash: "2f29738e2", date: "2024-04-16", author: "vaage@google.com", message: "Trace Redaction - Rename ＂BuildTimeline＂ to ＂CollectTimelineEvents＂" },
  { hash: "83d325009", date: "2024-04-16", author: "vaage@google.com", message: "Merge changes Icbf2f808,I973cd662 into main" },
  { hash: "37124b482", date: "2024-04-16", author: "stevegolton@google.com", message: "Merge ＂[ui] Extend trusted origin to support *.c.googlers.com hostnames＂ into main" },
  { hash: "229d54bc9", date: "2024-04-16", author: "ilkos@google.com", message: "Merge ＂Add process uptime to java_heap_stats metric＂ into main" },
  { hash: "b13519124", date: "2024-04-16", author: "ilkos@google.com", message: "Add process uptime to java_heap_stats metric" },
  { hash: "bf388285f", date: "2024-04-16", author: "carlscab@google.com", message: "Merge ＂Rename Reader to PerfDataReader＂ into main" },
  { hash: "4a7dde609", date: "2024-04-16", author: "lalitm@google.com", message: "Merge ＂tp: ensure that we disable memstatus on sqlite init＂ into main" },
  { hash: "d51a89d07", date: "2024-04-16", author: "lalitm@google.com", message: "tp: ensure that we disable memstatus on sqlite init" },
  { hash: "041823427", date: "2024-04-16", author: "stevegolton@google.com", message: "Merge ＂ui: Fix counter event selection off-by-one error＂ into main" },
  { hash: "779dbd095", date: "2024-04-16", author: "ddiproietto@google.com", message: "Merge ＂traced_probes: Rename AtraceWrapper::IsOld to SupportsUserspaceOnly＂ into main" },
  { hash: "4babfa6db", date: "2024-04-16", author: "stevegolton@google.com", message: "Merge ＂ui: Fix formatting / run `ui/prettier-all`＂ into main" },
  { hash: "625972029", date: "2024-04-16", author: "stevegolton@google.com", message: "ui: Fix formatting / run `ui/prettier-all`" },
  { hash: "df6c7f8a1", date: "2024-04-16", author: "stevegolton@google.com", message: "ui: Don't blur search bar when hitting backspace" },
  { hash: "6191dd39e", date: "2024-04-16", author: "lalitm@google.com", message: "Merge ＂tp: Add support for pre 29 SDK startups.＂ into main" },
  { hash: "80d457156", date: "2024-04-16", author: "chinglinyu@google.com", message: "Merge changes Id1815512,I71f00284 into main" },
  { hash: "a437ab4aa", date: "2024-04-15", author: "carlscab@google.com", message: "Rename Reader to PerfDataReader" },
  { hash: "b64683e68", date: "2024-04-15", author: "vaage@google.com", message: "Trace Redaction - Use Three Stage Pattern In Collect Primitive" },
  { hash: "eac75b2fe", date: "2024-04-15", author: "vaage@google.com", message: "Trace Redaction - Clean up ＂find package uid＂ primitive" },
  { hash: "3f2b2b638", date: "2024-04-15", author: "stevegolton@google.com", message: "ui: Fix double query bug in BaseCounterTrack" },
  { hash: "24f6b1f8b", date: "2024-04-15", author: "yunq@fb.com", message: "add support for multiple constraints in trace URI resolver" },
  { hash: "0e424063d", date: "2024-04-15", author: "etiennep@google.com", message: "Merge ＂[tracing007] Tweak ChromeTrigger packet＂ into main" },
  { hash: "5f1fc9493", date: "2024-04-15", author: "stevegolton@google.com", message: "Merge ＂ui: Remove out-of-date comment & superfluous Math.max()＂ into main" },
  { hash: "9df584bee", date: "2024-04-15", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Clean-up inlcudes＂ into main" },
  { hash: "76e7f8dd6", date: "2024-04-15", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Standardize error messages＂ into main" },
  { hash: "616ac219c", date: "2024-04-15", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Fix base error messages＂ into main" },
  { hash: "f6b0fec10", date: "2024-04-15", author: "mayzner@google.com", message: "tp: Add support for pre 29 SDK startups." },
  { hash: "38510da97", date: "2024-04-15", author: "ddiproietto@google.com", message: "Merge ＂track_event: Refuse to compile with possibly dynamic strings＂ into main" },
  { hash: "10e7662e7", date: "2024-04-15", author: "ddiproietto@google.com", message: "traced_probes: Rename AtraceWrapper::IsOld to SupportsUserspaceOnly" },
  { hash: "41c07bb34", date: "2024-04-15", author: "stevegolton@google.com", message: "ui: Remove out-of-date comment & superfluous Math.max()" },
  { hash: "39c2eb398", date: "2024-04-15", author: "ddiproietto@google.com", message: "tracing: Only compare timestamps from the same sequence" },
  { hash: "2f9eef1f6", date: "2024-04-15", author: "chinglinyu@google.com", message: "tp: multi-machine: diff_tests for multi-machine tracing" },
  { hash: "1651c9bb9", date: "2024-04-15", author: "chinglinyu@google.com", message: "diff_test: support modifying the input trace data" },
  { hash: "79a40b91c", date: "2024-04-15", author: "chinglinyu@google.com", message: "tp: minor comment fix of the process tracker" },
  { hash: "5606b6faf", date: "2024-04-13", author: "lalitm@google.com", message: "Merge ＂tp: Add ts, dur, ui_thread_utid and render_thread_utid info to android_frames＂ into main" },
  { hash: "4351eb96a", date: "2024-04-12", author: "vaage@google.com", message: "Trace Redaction - Standardize error messages" },
  { hash: "e8c08ba45", date: "2024-04-12", author: "vaage@google.com", message: "Trace Redaction - Clean-up inlcudes" },
  { hash: "5aaf48777", date: "2024-04-12", author: "vaage@google.com", message: "Trace Redaction - Fix base error messages" },
  { hash: "d16989259", date: "2024-04-12", author: "etiennep@google.com", message: "[tracing007] Tweak ChromeTrigger packet" },
  { hash: "139266472", date: "2024-04-12", author: "vaage@google.com", message: "Trace Redaction - Remove comm values from all process free events" },
  { hash: "f669b7209", date: "2024-04-12", author: "hjd@google.com", message: "Fix Ftrace explorer, python -> python3" },
  { hash: "e82d05bf7", date: "2024-04-12", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Remove comm value from new task events＂ into main" },
  { hash: "699b9461e", date: "2024-04-12", author: "mayzner@google.com", message: "tp: Add ts, dur, ui_thread_utid and render_thread_utid info to android_frames" },
  { hash: "89bf18633", date: "2024-04-12", author: "ddiproietto@google.com", message: "tracing: Improve error message for clock snapshot test" },
  { hash: "bcb9d223a", date: "2024-04-12", author: "ddiproietto@google.com", message: "track_event: Refuse to compile with possibly dynamic strings" },
  { hash: "bae0257cc", date: "2024-04-12", author: "ddiproietto@google.com", message: "Merge ＂Improve ftrace_config_muxer_unittest＂ into main" },
  { hash: "95189b38a", date: "2024-04-12", author: "stevegolton@google.com", message: "ui: Remove button backgrounds by default, use intent to add color" },
  { hash: "4874b257a", date: "2024-04-12", author: "stevegolton@google.com", message: "Merge ＂ui: Improve track button accessibility in tall tracks＂ into main" },
  { hash: "3f5c4b292", date: "2024-04-12", author: "ddiproietto@google.com", message: "Merge ＂Roll prebuilts for v44.0＂ into main" },
  { hash: "d44fb0e5f", date: "2024-04-12", author: "stevegolton@google.com", message: "Merge ＂ui: Make Plugin.onActivate() method optional＂ into main" },
  { hash: "714e1c727", date: "2024-04-12", author: "stevegolton@google.com", message: "Merge ＂ui: Add viewport control to the plugin API＂ into main" },
  { hash: "3a2873aa0", date: "2024-04-12", author: "stevegolton@google.com", message: "Merge ＂ui: Move everything relating to android logs into the plugin＂ into main" },
  { hash: "d8446e528", date: "2024-04-12", author: "stevegolton@google.com", message: "ui: Add viewport control to the plugin API" },
  { hash: "79f018d21", date: "2024-04-12", author: "stevegolton@google.com", message: "ui: Improve track button accessibility in tall tracks" },
  { hash: "d4846cd7a", date: "2024-04-12", author: "stevegolton@google.com", message: "ui: Move everything relating to android logs into the plugin" },
  { hash: "5bc4775d1", date: "2024-04-12", author: "stevegolton@google.com", message: "Merge ＂ui: Use anchor element for 'Report a bug' link in sidebar＂ into main" },
  { hash: "342762e4a", date: "2024-04-12", author: "chinglinyu@google.com", message: "Merge changes I4950c1d6,I3fa2af31,I85f3488e,I68e0989d,Ic982e14d into main" },
  { hash: "c8091fd99", date: "2024-04-12", author: "lalitm@google.com", message: "Merge ＂add fastrpc dma ftrace events＂ into main" },
  { hash: "4fc3fdf4e", date: "2024-04-11", author: "vaage@google.com", message: "Trace Redaction - Remove comm value from new task events" },
  { hash: "89f111052", date: "2024-04-11", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Common Redact FTrace Event Modifications＂ into main" },
  { hash: "f58503506", date: "2024-04-11", author: "etiennep@google.com", message: "Merge ＂[tracing007] Add chrome trigger packet＂ into main" },
  { hash: "d28f2a1e1", date: "2024-04-11", author: "ddiproietto@google.com", message: "Improve ftrace_config_muxer_unittest" },
  { hash: "3dca0754a", date: "2024-04-11", author: "stevegolton@google.com", message: "ui: Make Plugin.onActivate() method optional" },
  { hash: "1df669be0", date: "2024-04-11", author: "stevegolton@google.com", message: "Merge ＂ui: Fix unit tests＂ into main" },
  { hash: "717ad031c", date: "2024-04-11", author: "vaage@google.com", message: "Trace Redaction - Common Redact FTrace Event Modifications" },
  { hash: "79c31713c", date: "2024-04-11", author: "stevegolton@google.com", message: "ui: Fix unit tests" },
  { hash: "897986127", date: "2024-04-11", author: "chinglinyu@google.com", message: "tp: multi-machine: sorter unit test" },
  { hash: "549aafaad", date: "2024-04-11", author: "chinglinyu@google.com", message: "tp: multi-machine: enable multi-machine tracing" },
  { hash: "73f10c581", date: "2024-04-11", author: "chinglinyu@google.com", message: "tp: multi-machine: support multi-machine trace sorting" },
  { hash: "267ba23a4", date: "2024-04-11", author: "chinglinyu@google.com", message: "tp: multi-machine: insert machine ID to storage tables" },
  { hash: "7c2650cb5", date: "2024-04-11", author: "chinglinyu@google.com", message: "Merge ＂ftrace: don't set buffer_size_kb on 'preserve_ftrace_buffer'＂ into main" },
  { hash: "06a728ee4", date: "2024-04-11", author: "stevegolton@google.com", message: "Merge ＂ui: Remove the ＂null track＂ plugin＂ into main" },
  { hash: "404e180f5", date: "2024-04-11", author: "lalitm@google.com", message: "Merge ＂Print address when failing to listen on socket＂ into main" },
  { hash: "a48186dce", date: "2024-04-11", author: "stevegolton@google.com", message: "ui: Remove the ＂null track＂ plugin" },
  { hash: "e6c10fa3a", date: "2024-04-11", author: "primiano@google.com", message: "Merge ＂Upstreamed BUILTIN_CLOCK_TSC clocksource＂ into main" },
  { hash: "870c94bbb", date: "2024-04-11", author: "chinglinyu@google.com", message: "ftrace: don't set buffer_size_kb on 'preserve_ftrace_buffer'" },
  { hash: "a9d33e7bb", date: "2024-04-10", author: "cphlipot@meta.com", message: "Print address when failing to listen on socket" },
  { hash: "b1676f92d", date: "2024-04-10", author: "vaage@google.com", message: "Trace Redaction - Create share-able packet filter" },
  { hash: "ef83b63b0", date: "2024-04-10", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Convert task rename from primitive to filter＂ into main" },
  { hash: "ffad8c926", date: "2024-04-10", author: "jdduke@google.com", message: "Merge ＂docs: Update script links to reference main repo＂ into main" },
  { hash: "34407263d", date: "2024-04-10", author: "etiennep@google.com", message: "[tracing007] Add chrome trigger packet" },
  { hash: "b65ac88b5", date: "2024-04-10", author: "aattar@google.com", message: "Merge ＂[ETW] Recording UI for ETW props to Perfetto＂ into main" },
  { hash: "5ce3ecd01", date: "2024-04-10", author: "lalitm@google.com", message: "Merge ＂tp: rewrite DbSqliteTable -> DbSqliteModule and remove SqliteTable＂ into main" },
  { hash: "03fd1c21c", date: "2024-04-10", author: "lalitm@google.com", message: "Merge ＂tp: fix O(n) dcheck in a O(logn) function＂ into main" },
  { hash: "e41196dec", date: "2024-04-10", author: "ddiproietto@google.com", message: "Roll prebuilts for v44.0" },
  { hash: "94bdc3da5", date: "2024-04-10", author: "ddiproietto@google.com", message: "Merge ＂docs: Add CHANGELOG for v44＂ into main" },
  { hash: "f7ab2799a", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂render function_graph tracks for swapper threads＂ into main" },
  { hash: "9d44ce8b2", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂move_wattson_system_state_to_stdlib＂ into main" },
  { hash: "6b6e6fa05", date: "2024-04-10", author: "lalitm@google.com", message: "tp: rewrite DbSqliteTable -> DbSqliteModule and remove SqliteTable" },
  { hash: "cf4df524b", date: "2024-04-10", author: "lalitm@google.com", message: "tp: fix O(n) dcheck in a O(logn) function" },
  { hash: "0b7a36337", date: "2024-04-10", author: "vaage@google.com", message: "Trace Redaction - Convert task rename from primitive to filter" },
  { hash: "1b213d91f", date: "2024-04-09", author: "vaage@google.com", message: "Trace Redaction - Fix inverted print type check" },
  { hash: "5465e56b1", date: "2024-04-09", author: "xiwenli@meta.com", message: "add fastrpc dma ftrace events" },
  { hash: "0783a8ffe", date: "2024-04-09", author: "oysteine@google.com", message: "Fixed gen_bazel running on Windows * Ensure Unix-style line endings in generated files * Use os.replace instead of os.rename (the latter will fail on Windows if the destination already exists) * Replace Windows-style path separators with Unix-style" },
  { hash: "f0feebbe6", date: "2024-04-09", author: "oysteine@google.com", message: "Upstreamed BUILTIN_CLOCK_TSC clocksource" },
  { hash: "721ba54c8", date: "2024-04-09", author: "jdduke@google.com", message: "docs: Update script links to reference main repo" },
  { hash: "ed5678942", date: "2024-04-09", author: "wusamuel@google.com", message: "stdlib: Add system_state library for Wattson" },
  { hash: "1dbc93aa7", date: "2024-04-09", author: "aattar@google.com", message: "[ETW] Recording UI for ETW props to Perfetto" },
  { hash: "a9377b6cb", date: "2024-04-09", author: "rsavitski@google.com", message: "render function_graph tracks for swapper threads" },
  { hash: "54aec2827", date: "2024-04-09", author: "ddiproietto@google.com", message: "docs: Add CHANGELOG for v44" },
  { hash: "f2511be5e", date: "2024-04-09", author: "benhamilton@google.com", message: "[ui] Extend trusted origin to support *.c.googlers.com hostnames" },
  { hash: "17624a369", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tp: fix invalid use and memory leak＂ into main" },
  { hash: "ff3263218", date: "2024-04-09", author: "lalitm@google.com", message: "Merge ＂tp: migrate RuntimeTableFunction away from SqliteTable＂ into main" },
  { hash: "64b0f318a", date: "2024-04-09", author: "bql@google.com", message: "Merge ＂ui: add loading to flamegraph panel＂ into main" },
  { hash: "5b3cddf26", date: "2024-04-09", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Drop process stats＂ into main" },
  { hash: "a0faaca09", date: "2024-04-09", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Filter print ftrace events＂ into main" },
  { hash: "8f315dbcc", date: "2024-04-09", author: "stevegolton@google.com", message: "ui: Fix counter event selection off-by-one error" },
  { hash: "1cfae236e", date: "2024-04-09", author: "lalitm@google.com", message: "tp: migrate RuntimeTableFunction away from SqliteTable" },
  { hash: "84065a134", date: "2024-04-09", author: "lalitm@google.com", message: "tp: fix invalid use and memory leak" },
  { hash: "1fee977d1", date: "2024-04-09", author: "lalitm@google.com", message: "Merge ＂tp: remove QueryCache class＂ into main" },
  { hash: "9c25054f0", date: "2024-04-09", author: "vilasbhat@google.com", message: "Merge ＂perfetto/ftrace: Introduce f2fs garbage collection ftrace events＂ into main" },
  { hash: "d1be345fc", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tp: Add android.power_rails module stub＂ into main" },
  { hash: "d4de9c1ad", date: "2024-04-09", author: "bql@google.com", message: "ui: add loading to flamegraph panel" },
  { hash: "669c6bb36", date: "2024-04-09", author: "stevegolton@google.com", message: "Merge ＂ui: Include *.scss files in prettier presubmit checks＂ into main" },
  { hash: "aff51bab4", date: "2024-04-09", author: "stevegolton@google.com", message: "ui: Use anchor element for 'Report a bug' link in sidebar" },
  { hash: "48ec466f1", date: "2024-04-09", author: "mayzner@google.com", message: "tp: Add android.power_rails module stub" },
  { hash: "e808db727", date: "2024-04-08", author: "vilasbhat@google.com", message: "perfetto/ftrace: Introduce f2fs garbage collection ftrace events" },
  { hash: "50d177ce6", date: "2024-04-09", author: "chinglinyu@chromium.org", message: "tp: multi-machine: add Machine ID to storage tables" },
  { hash: "5e34cb8e3", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂winscope protos: add comments for certain string fields＂ into main" },
  { hash: "0a2bf5c23", date: "2024-04-08", author: "vaage@google.com", message: "Trace Redaction - Drop process stats" },
  { hash: "3b1d2d002", date: "2024-04-08", author: "lalitm@google.com", message: "Merge ＂tp: rewrite span join to remove dependency on SqliteTable＂ into main" },
  { hash: "71c3b2e7c", date: "2024-04-08", author: "lalitm@google.com", message: "tp: rewrite span join to remove dependency on SqliteTable" },
  { hash: "262e25cc9", date: "2024-04-08", author: "lalitm@google.com", message: "tp: remove QueryCache class" },
  { hash: "e3043fa2a", date: "2024-04-08", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Create integration test pattern＂ into main" },
  { hash: "f15c35138", date: "2024-04-08", author: "rsavitski@google.com", message: "winscope protos: add comments for certain string fields" },
  { hash: "768117828", date: "2024-04-08", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Drop AndroidSystemProperty packets＂ into main" },
  { hash: "d6482e148", date: "2024-04-08", author: "vaage@google.com", message: "Trace Redaction - Create integration test pattern" },
  { hash: "a97a0429c", date: "2024-04-08", author: "vaage@google.com", message: "Trace Redaction - Filter print ftrace events" },
  { hash: "2b1117bf6", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ci: use yyyy-mm-dd format＂ into main" },
  { hash: "e9e354590", date: "2024-04-08", author: "vaage@google.com", message: "Trace Redaction - Drop AndroidSystemProperty packets" },
  { hash: "36932dc98", date: "2024-04-08", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Create shared filter ftrace events primitive＂ into main" },
  { hash: "96c012658", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂add tools/delete-permalink＂ into main" },
  { hash: "a28f676dd", date: "2024-04-08", author: "rsavitski@google.com", message: "ci: use yyyy-mm-dd format" },
  { hash: "2482ebd83", date: "2024-04-08", author: "stevegolton@google.com", message: "Merge ＂ui: Show currently loading plugin name in status bar on trace load＂ into main" },
  { hash: "33890fa03", date: "2024-04-08", author: "stevegolton@google.com", message: "ui: Show currently loading plugin name in status bar on trace load" },
  { hash: "53124bc27", date: "2024-04-08", author: "lalitm@google.com", message: "Merge ＂tp: implement tree partitioning by group algorithm＂ into main" },
  { hash: "51475bc85", date: "2024-04-08", author: "lalitm@google.com", message: "tp: implement tree partitioning by group algorithm" },
  { hash: "e2d4ae3fe", date: "2024-04-08", author: "parthsane@google.com", message: "Merge ＂Fix typo in io metrics＂ into main" },
  { hash: "cf40a2ccf", date: "2024-04-05", author: "ddiproietto@google.com", message: "protozero: Fix decoding repeated fields with high max id" },
  { hash: "eac285fa4", date: "2024-04-05", author: "primiano@google.com", message: "add tools/delete-permalink" },
  { hash: "7609c6712", date: "2024-04-05", author: "shinyuw@google.com", message: "Merge ＂Add dpu dsi_tx, dsi_rx, dsi_cmd_fifo_status ftrace event＂ into main" },
  { hash: "d73a73c82", date: "2024-04-04", author: "wusamuel@google.com", message: "stdlib: Add freq and idle state CPU slices" },
  { hash: "06e06f279", date: "2024-04-04", author: "mayzner@google.com", message: "Merge ＂tp: Add intervals_overlap_in_table macro＂ into main" },
  { hash: "29c68a331", date: "2024-04-04", author: "stevegolton@google.com", message: "Merge ＂ui: Avoid querying ftrace event counts on trace load＂ into main" },
  { hash: "5b69014ae", date: "2024-04-04", author: "stevegolton@google.com", message: "Merge ＂ui: Add ftrace tracks from the plugin rather than track decider＂ into main" },
  { hash: "fe3dbf458", date: "2024-04-04", author: "vaage@google.com", message: "Trace Redaction - Create shared filter ftrace events primitive" },
  { hash: "d5f1f982e", date: "2024-04-04", author: "lalitm@google.com", message: "Merge ＂perfetto: extract out lifecycle management from the window operator＂ into main" },
  { hash: "5747cfbc8", date: "2024-04-04", author: "simonmacm@google.com", message: "Merge ＂Make ＂human readable＂ scaling compatible with log scales.＂ into main" },
  { hash: "8403da901", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Convert BLE scan cycle and kernel wakelocks to counters rather than slices showing numbers.＂ into main" },
  { hash: "db9da1032", date: "2024-04-04", author: "simonmacm@google.com", message: "Make ＂human readable＂ scaling compatible with log scales." },
  { hash: "97178bf5c", date: "2024-04-04", author: "vaage@google.com", message: "Merge ＂Trace Redaction - Move allocation inside of redactor＂ into main" },
  { hash: "f27d52658", date: "2024-04-04", author: "simonmacm@google.com", message: "Convert BLE scan cycle and kernel wakelocks to counters rather than slices showing numbers." },
  { hash: "6e71d94ab", date: "2024-04-04", author: "mayzner@google.com", message: "tp: Add intervals_overlap_in_table macro" },
  { hash: "891297108", date: "2024-04-04", author: "stevegolton@google.com", message: "ui: Add ftrace tracks from the plugin rather than track decider" },
  { hash: "c1b19aed9", date: "2024-04-04", author: "stevegolton@google.com", message: "Merge ＂ui: Tidy up PanelContainer＂ into main" },
  { hash: "7088076a2", date: "2024-04-04", author: "parthsane@google.com", message: "Fix typo in io metrics" },
  { hash: "d2a03aaa8", date: "2024-04-04", author: "stevegolton@google.com", message: "ui: Avoid querying ftrace event counts on trace load" },
  { hash: "216ad71a6", date: "2024-04-04", author: "ddiproietto@google.com", message: "Merge ＂Download standalone clang .tgz instead of .tar.xz＂ into main" },
  { hash: "f7e396a20", date: "2024-04-04", author: "stevegolton@google.com", message: "ui: Tidy up PanelContainer" },
  { hash: "1b916584a", date: "2024-04-03", author: "vaage@google.com", message: "Trace Redaction - Move allocation inside of redactor" },
  { hash: "8364234e5", date: "2024-04-03", author: "lalitm@google.com", message: "perfetto: extract out lifecycle management from the window operator" },
  { hash: "efb7355cb", date: "2024-04-03", author: "stevegolton@google.com", message: "ui: Include *.scss files in prettier presubmit checks" },
  { hash: "4284dbe9d", date: "2024-04-03", author: "ddiproietto@google.com", message: "Download standalone clang .tgz instead of .tar.xz" },
  { hash: "17717eb27", date: "2024-04-03", author: "lydiatse@google.com", message: "Merge ＂ui: Pivotable debug tracks＂ into main" },
  { hash: "1e6b5d125", date: "2024-04-03", author: "hjd@google.com", message: "Merge ＂ui: Release canary＂ into main" },
  { hash: "7ee7a0096", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tracing: Relax restriction on CounterTrack name＂ into main" },
  { hash: "4c224e9bc", date: "2024-04-03", author: "agarwaltushar@google.com", message: "Merge ＂COPYBARA_IMPORT=Project import generated by Copybara.＂ into main" },
  { hash: "4c2d88816", date: "2024-04-03", author: "lalitm@google.com", message: "ui: remove repeated query for each process" },
  { hash: "095dd66e8", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ui: significantly improve loading query performance on large traces＂ into main" },
  { hash: "bc8817d28", date: "2024-04-03", author: "lalitm@google.com", message: "ui: significantly improve loading query performance on large traces" },
  { hash: "1286fac3d", date: "2024-04-03", author: "ddiproietto@google.com", message: "tracing: Relax restriction on CounterTrack name" },
  { hash: "b6529f727", date: "2024-04-03", author: "hjd@google.com", message: "ui: Release canary" },
  { hash: "b545ca95b", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂tracing: Use better constexpr hash with C++17＂ into main" },
  { hash: "dbe122e29", date: "2024-04-03", author: "lalitm@google.com", message: "tp: fix comments missing from previous CL" },
  { hash: "aa66b34d4", date: "2024-04-03", author: "lalitm@google.com", message: "tp: migrate the dfs macro to use value tables + aggregates instead" },
  { hash: "71816b5b4", date: "2024-04-03", author: "lalitm@google.com", message: "Merge ＂tp: introduce virtual table module for table pointers＂ into main" },
  { hash: "83821d755", date: "2024-04-02", author: "mayzner@google.com", message: "Merge ＂tp: Stub of frames stdlib support＂ into main" },
  { hash: "44f50f6f0", date: "2024-04-02", author: "vaage@google.com", message: "Merge ＂Trace Processor - Redact Sched Waking＂ into main" },
  { hash: "52cff3ddd", date: "2024-04-02", author: "shinyuw@google.com", message: "Add dpu dsi_tx, dsi_rx, dsi_cmd_fifo_status ftrace event" },
  { hash: "e0696ec76", date: "2024-04-02", author: "lalitm@google.com", message: "tp: introduce virtual table module for table pointers" },
  { hash: "6fd518058", date: "2024-04-02", author: "lalitm@google.com", message: "Merge ＂tp: tag the no_resolvers target as avoid_dep＂ into main" },
  { hash: "e819b05cb", date: "2024-04-02", author: "mayzner@google.com", message: "tp: Stub of frames stdlib support" },
  { hash: "443f190b1", date: "2024-04-02", author: "devarshimb@google.com", message: "Merge ＂Add metric for Android blocking calls for all calls in trace.＂ into main" },
  { hash: "52826e846", date: "2024-04-02", author: "lalitm@google.com", message: "ui: refactor startup to be a plugin instead of a derived track" },
  { hash: "3195a2a2c", date: "2024-04-02", author: "lalitm@google.com", message: "ui: bump max allowed wasm memory" },
  { hash: "a589268af", date: "2024-04-02", author: "stevegolton@google.com", message: "Merge ＂ui: Fix ftrace filtering issues＂ into main" },
  { hash: "096c6b524", date: "2024-04-02", author: "stevegolton@google.com", message: "ui: Fix ftrace filtering issues" },
  { hash: "cc701faf7", date: "2024-04-02", author: "devarshimb@google.com", message: "Add metric for Android blocking calls for all calls in trace." },
  { hash: "c28734287", date: "2024-04-02", author: "shinyuw@google.com", message: "Merge ＂trace_processor: add parsing support for panel_write_generic＂ into main" },
]});
repoLogs.push({ path: "external/perfmark", logs: [
]});
repoLogs.push({ path: "external/pffft", logs: [
]});
repoLogs.push({ path: "external/piex", logs: [
]});
repoLogs.push({ path: "external/pigweed", logs: [
]});
repoLogs.push({ path: "external/ply", logs: [
]});
repoLogs.push({ path: "external/ppp", logs: [
]});
repoLogs.push({ path: "external/private-join-and-compute", logs: [
  { hash: "c537765", date: "2024-04-05", author: "krzysio@google.com", message: "Update to upstream master." },
]});
repoLogs.push({ path: "external/protobuf", logs: [
]});
repoLogs.push({ path: "external/psimd", logs: [
]});
repoLogs.push({ path: "external/pthreadpool", logs: [
]});
repoLogs.push({ path: "external/puffin", logs: [
]});
repoLogs.push({ path: "external/python/absl-py", logs: [
]});
repoLogs.push({ path: "external/python/apitools", logs: [
]});
repoLogs.push({ path: "external/python/asn1crypto", logs: [
]});
repoLogs.push({ path: "external/python/bumble", logs: [
]});
repoLogs.push({ path: "external/python/cachetools", logs: [
]});
repoLogs.push({ path: "external/python/cpython2", logs: [
]});
repoLogs.push({ path: "external/python/cpython3", logs: [
]});
repoLogs.push({ path: "external/python/dateutil", logs: [
]});
repoLogs.push({ path: "external/python/enum34", logs: [
]});
repoLogs.push({ path: "external/python/google-api-python-client", logs: [
]});
repoLogs.push({ path: "external/python/google-auth-library-python", logs: [
]});
repoLogs.push({ path: "external/python/httplib2", logs: [
]});
repoLogs.push({ path: "external/python/ipaddress", logs: [
]});
repoLogs.push({ path: "external/python/jinja", logs: [
]});
repoLogs.push({ path: "external/python/mako", logs: [
]});
repoLogs.push({ path: "external/python/markupsafe", logs: [
]});
repoLogs.push({ path: "external/python/mobly", logs: [
]});
repoLogs.push({ path: "external/python/oauth2client", logs: [
]});
repoLogs.push({ path: "external/python/parse_type", logs: [
]});
repoLogs.push({ path: "external/python/portpicker", logs: [
]});
repoLogs.push({ path: "external/python/pyasn1", logs: [
]});
repoLogs.push({ path: "external/python/pyasn1-modules", logs: [
]});
repoLogs.push({ path: "external/python/pycparser", logs: [
]});
repoLogs.push({ path: "external/python/pyee", logs: [
]});
repoLogs.push({ path: "external/python/pyfakefs", logs: [
]});
repoLogs.push({ path: "external/python/pyserial", logs: [
]});
repoLogs.push({ path: "external/python/python-api-core", logs: [
]});
repoLogs.push({ path: "external/python/pyyaml", logs: [
]});
repoLogs.push({ path: "external/python/rsa", logs: [
]});
repoLogs.push({ path: "external/python/setuptools", logs: [
]});
repoLogs.push({ path: "external/python/six", logs: [
]});
repoLogs.push({ path: "external/python/timeout-decorator", logs: [
]});
repoLogs.push({ path: "external/python/typing", logs: [
]});
repoLogs.push({ path: "external/python/uritemplates", logs: [
]});
repoLogs.push({ path: "external/rappor", logs: [
]});
repoLogs.push({ path: "external/regex-re2", logs: [
]});
repoLogs.push({ path: "external/renderscript-intrinsics-replacement-toolkit", logs: [
]});
repoLogs.push({ path: "external/replicaisland", logs: [
]});
repoLogs.push({ path: "external/rmi4utils", logs: [
]});
repoLogs.push({ path: "external/rnnoise", logs: [
]});
repoLogs.push({ path: "external/robolectric", logs: [
  { hash: "9201ec4b5", date: "2024-04-18", author: "ramperi@google.com", message: "Merge ＂Merge branch 'upstream-google' into attempt_merge_upstream＂ into main" },
  { hash: "477446876", date: "2024-04-18", author: "ihcinihsdk@google.com", message: "Merge branch 'upstream-google' into attempt_merge_upstream" },
  { hash: "1920a4cbb", date: "2024-04-17", author: "noreply@google.com", message: "Small fixes on potential null pointers since ARSC loading support." },
  { hash: "71dc7ee3b", date: "2024-04-17", author: "timpeut@google.com", message: "Remove references to KITKAT from Robolectric framework tests." },
  { hash: "7c563e9b4", date: "2024-04-17", author: "juliansull@google.com", message: "Add pickInstrumentation to allow different versions of Instrumentation." },
  { hash: "92fc90561", date: "2024-04-17", author: "raphael@google.com", message: "Add PerfStarts for Screenshots." },
  { hash: "e54bde4a2", date: "2024-04-17", author: "juliansull@google.com", message: "Update ShadowMotionEvent and AndroidTestEnvironment to support Android V" },
  { hash: "9bb0d6d5a", date: "2024-04-17", author: "timpeut@google.com", message: "Update some robolectric tests to no longer run on K." },
  { hash: "f8bbdb1ea", date: "2024-04-17", author: "hoisie@google.com", message: "Clarify `@DoNotMock` error message in ClassInstrumentor" },
  { hash: "fef58ca6c", date: "2024-04-17", author: "richking@google.com", message: "Provide builder to create EmergencyNumber instances." },
  { hash: "27333928c", date: "2024-04-16", author: "hoisie@google.com", message: "Add a shadow method for ViewConfiguration.getScaledMaximumDrawingCacheSize" },
  { hash: "6970abf24", date: "2024-04-16", author: "hoisie@google.com", message: "Rename `robolectric.screenshot.hwrdr.native` to `robolectric.pixelCopyRenderMode`" },
  { hash: "2720630fd", date: "2024-04-15", author: "sooniln@google.com", message: "Fix ShadowLocationManager time comparison." },
  { hash: "b3b17db94", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂merge＂ into main" },
  { hash: "c0c8e9869", date: "2024-04-14", author: "hoisie@google.com", message: "Use Bitmap.copyPixelsFromBuffer to copy image data ImageReader in HW rendering" },
  { hash: "acf14fc6b", date: "2024-04-13", author: "rexhoffman@google.com", message: "Cleanup vs upstream." },
  { hash: "fdc3b6b1a", date: "2024-04-13", author: "rexhoffman@google.com", message: "Merge branch 'upstream-google' of sso://android.googlesource.com/platform/external/robolectric into update" },
  { hash: "f53137893", date: "2024-04-12", author: "noreply@google.com", message: "Handle changing apis." },
  { hash: "f98d1ae14", date: "2024-04-12", author: "noreply@google.com", message: "Roll back recent changes to SQLiteDatabaseTest" },
  { hash: "3ae9acca8", date: "2024-04-12", author: "noreply@google.com", message: "Add FLAG_MAIN in ShadowUserManager" },
  { hash: "b4cd9364b", date: "2024-04-09", author: "noreply@google.com", message: "Prevent sqlite test that require native support from running when not supported." },
  { hash: "d525b84ec", date: "2024-04-09", author: "noreply@google.com", message: "Add isDataRoamingEnabled to the ShadowTelephonyManager." },
  { hash: "c4ee6e000", date: "2024-04-09", author: "noreply@google.com", message: "Support FileIntegrityManager.isApkVeritySupported in robolectric" },
  { hash: "cf59fe600", date: "2024-04-08", author: "brettchabot@google.com", message: "Deprecate Scheduler." },
  { hash: "300f6ab8d", date: "2024-04-07", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Merge branch 'upstream-google' of sso://android.googlesource.com/platform/external/robolectric into upstreaming_fix＂ into main" },
  { hash: "1eb2d5cee", date: "2024-04-05", author: "hoisie@google.com", message: "Turn off shadowOf generation for ShadowTranslationManager" },
  { hash: "4fd6139fd", date: "2024-04-05", author: "hoisie@google.com", message: "Remove LoadWeirdClassesTest.shadowOf_shouldCompile" },
  { hash: "fd7774e43", date: "2024-04-05", author: "hoisie@google.com", message: "Rename ShadowInformationElement to InformationElementBuilder" },
  { hash: "479f1fc72", date: "2024-04-04", author: "hoisie@google.com", message: "Update dependency-on-stubs build.gradle to use AGP" },
  { hash: "b7244e3e1", date: "2024-04-03", author: "noreply@google.com", message: "Add support for getSimSpecificCarrierIdName() in the ShadowTelephonyManager." },
  { hash: "8adf89733", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disabling validator as downstream branches declare themselves to be older versions of android, breaking this validation logic.＂ into main" },
  { hash: "2a9266940", date: "2024-04-03", author: "rexhoffman@google.com", message: "Disabling validator as downstream branches declare themselves to be older versions of android, breaking this validation logic." },
  { hash: "c1e9dcc09", date: "2024-04-03", author: "rexhoffman@google.com", message: "Merge changes I6ae79b35,If1ded0da into main" },
  { hash: "8a88d54f8", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Handle in development changes to rendering logic＂ into main" },
  { hash: "e1d1549a0", date: "2024-04-03", author: "rexhoffman@google.com", message: "Support for Robolectric's validator" },
  { hash: "246f462a1", date: "2024-04-02", author: "paulsowden@google.com", message: "Adds support for exercising predictive back animations" },
  { hash: "adf266211", date: "2024-04-03", author: "rexhoffman@google.com", message: "Merge remote-tracking branch 'aosp/upstream-google' into merge" },
  { hash: "17e9ae112", date: "2024-04-03", author: "noreply@google.com", message: "Handle in development changes to rendering logic" },
  { hash: "78576fd4e", date: "2024-04-03", author: "rexhoffman@google.com", message: "Merge branch 'upstream-google' of sso://android.googlesource.com/platform/external/robolectric into upstreaming_fix" },
  { hash: "729893690", date: "2024-04-03", author: "rexhoffman@google.com", message: "Merge changes I03f7eed8,I6127f7a5 into main" },
  { hash: "94f4cd031", date: "2024-04-02", author: "rexhoffman@google.com", message: "Merging back to aosp, with needed fixes." },
  { hash: "6c679013d", date: "2024-04-02", author: "lihongyu@google.com", message: "Add ActivityWindowInfo parameter to ViewRootImpl#dispatchResized" },
  { hash: "36c75fb8a", date: "2024-04-02", author: "noreply@google.com", message: "Move AndroidVersions to annotations sub project and always read build.prop directly." },
  { hash: "4e4c42736", date: "2024-04-02", author: "noreply@google.com", message: "Sdk Validation for current target of compilation" },
  { hash: "7fbb1bf06", date: "2024-04-02", author: "hoisie@google.com", message: "Stop logging TempDirectory IOExceptions in Windows" },
  { hash: "b9c768d08", date: "2024-04-02", author: "hoisie@google.com", message: "Reduce references to `android.util.Log$TerribleFailure` in ShadowLog" },
  { hash: "d99da9c64", date: "2024-04-02", author: "ihcinihsdk@google.com", message: "Merge ＂Change the ID of `config_headlineFontFamily`.＂ into main" },
]});
repoLogs.push({ path: "external/robolectric-shadows", logs: [
]});
repoLogs.push({ path: "external/roboto-flex-fonts", logs: [
]});
repoLogs.push({ path: "external/roboto-fonts", logs: [
]});
repoLogs.push({ path: "external/rootdev", logs: [
]});
repoLogs.push({ path: "external/rust/autocxx", logs: [
]});
repoLogs.push({ path: "external/rust/beto-rust", logs: [
]});
repoLogs.push({ path: "external/rust/crates/aarch64-paging", logs: [
]});
repoLogs.push({ path: "external/rust/crates/acpi", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ahash", logs: [
]});
repoLogs.push({ path: "external/rust/crates/aho-corasick", logs: [
]});
repoLogs.push({ path: "external/rust/crates/android_log-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/android_logger", logs: [
]});
repoLogs.push({ path: "external/rust/crates/anes", logs: [
]});
repoLogs.push({ path: "external/rust/crates/annotate-snippets", logs: [
]});
repoLogs.push({ path: "external/rust/crates/anyhow", logs: [
]});
repoLogs.push({ path: "external/rust/crates/arbitrary", logs: [
]});
repoLogs.push({ path: "external/rust/crates/arc-swap", logs: [
]});
repoLogs.push({ path: "external/rust/crates/argh", logs: [
]});
repoLogs.push({ path: "external/rust/crates/argh_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/argh_shared", logs: [
]});
repoLogs.push({ path: "external/rust/crates/arrayvec", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ash", logs: [
]});
repoLogs.push({ path: "external/rust/crates/async-stream", logs: [
]});
repoLogs.push({ path: "external/rust/crates/async-stream-impl", logs: [
]});
repoLogs.push({ path: "external/rust/crates/async-task", logs: [
]});
repoLogs.push({ path: "external/rust/crates/async-trait", logs: [
]});
repoLogs.push({ path: "external/rust/crates/atomic", logs: [
]});
repoLogs.push({ path: "external/rust/crates/atty", logs: [
]});
repoLogs.push({ path: "external/rust/crates/base64", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bencher", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bincode", logs: [
  { hash: "cbfef00", date: "2024-04-11", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
]});
repoLogs.push({ path: "external/rust/crates/bindgen", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bindgen-cli", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bit_field", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bitflags", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bitreader", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bstr", logs: [
]});
repoLogs.push({ path: "external/rust/crates/buddy_system_allocator", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bytemuck", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bytemuck_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/byteorder", logs: [
]});
repoLogs.push({ path: "external/rust/crates/bytes", logs: [
]});
repoLogs.push({ path: "external/rust/crates/camino", logs: [
  { hash: "6058098", date: "2024-04-19", author: "ipalant@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "6e49d37", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'camino' crate" },
]});
repoLogs.push({ path: "external/rust/crates/cast", logs: [
]});
repoLogs.push({ path: "external/rust/crates/cesu8", logs: [
]});
repoLogs.push({ path: "external/rust/crates/cexpr", logs: [
]});
repoLogs.push({ path: "external/rust/crates/cfg-if", logs: [
]});
repoLogs.push({ path: "external/rust/crates/chrono", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ciborium", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ciborium-io", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ciborium-ll", logs: [
]});
repoLogs.push({ path: "external/rust/crates/clang-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/clap", logs: [
]});
repoLogs.push({ path: "external/rust/crates/clap_complete", logs: [
]});
repoLogs.push({ path: "external/rust/crates/clap_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/clap_lex", logs: [
]});
repoLogs.push({ path: "external/rust/crates/codespan-reporting", logs: [
]});
repoLogs.push({ path: "external/rust/crates/combine", logs: [
]});
repoLogs.push({ path: "external/rust/crates/command-fds", logs: [
]});
repoLogs.push({ path: "external/rust/crates/config", logs: [
]});
repoLogs.push({ path: "external/rust/crates/configparser", logs: [
]});
repoLogs.push({ path: "external/rust/crates/const-oid", logs: [
]});
repoLogs.push({ path: "external/rust/crates/coset", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crc32fast", logs: [
]});
repoLogs.push({ path: "external/rust/crates/criterion", logs: [
]});
repoLogs.push({ path: "external/rust/crates/criterion-plot", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crossbeam-channel", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crossbeam-deque", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crossbeam-epoch", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crossbeam-queue", logs: [
]});
repoLogs.push({ path: "external/rust/crates/crossbeam-utils", logs: [
]});
repoLogs.push({ path: "external/rust/crates/csv", logs: [
]});
repoLogs.push({ path: "external/rust/crates/csv-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/darling", logs: [
  { hash: "83526e3", date: "2024-04-19", author: "mgeisler@google.com", message: "Delete patch submitted upstream" },
  { hash: "ee838bd", date: "2024-04-18", author: "mgeisler@google.com", message: "Patch test which depends on disabled Cargo feature" },
]});
repoLogs.push({ path: "external/rust/crates/darling_core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/darling_macro", logs: [
]});
repoLogs.push({ path: "external/rust/crates/dashmap", logs: [
]});
repoLogs.push({ path: "external/rust/crates/data-encoding", logs: [
]});
repoLogs.push({ path: "external/rust/crates/debug_tree", logs: [
]});
repoLogs.push({ path: "external/rust/crates/der", logs: [
]});
repoLogs.push({ path: "external/rust/crates/der_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/derive_arbitrary", logs: [
]});
repoLogs.push({ path: "external/rust/crates/displaydoc", logs: [
]});
repoLogs.push({ path: "external/rust/crates/document-features", logs: [
]});
repoLogs.push({ path: "external/rust/crates/downcast", logs: [
]});
repoLogs.push({ path: "external/rust/crates/downcast-rs", logs: [
]});
repoLogs.push({ path: "external/rust/crates/drm", logs: [
]});
repoLogs.push({ path: "external/rust/crates/drm-ffi", logs: [
]});
repoLogs.push({ path: "external/rust/crates/drm-fourcc", logs: [
]});
repoLogs.push({ path: "external/rust/crates/either", logs: [
]});
repoLogs.push({ path: "external/rust/crates/enumn", logs: [
]});
repoLogs.push({ path: "external/rust/crates/env_logger", logs: [
]});
repoLogs.push({ path: "external/rust/crates/epoll", logs: [
]});
repoLogs.push({ path: "external/rust/crates/errno", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fallible-iterator", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fallible-streaming-iterator", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fastrand", logs: [
]});
repoLogs.push({ path: "external/rust/crates/flagset", logs: [
]});
repoLogs.push({ path: "external/rust/crates/flate2", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fnv", logs: [
]});
repoLogs.push({ path: "external/rust/crates/foreign-types", logs: [
]});
repoLogs.push({ path: "external/rust/crates/foreign-types-shared", logs: [
]});
repoLogs.push({ path: "external/rust/crates/form_urlencoded", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fragile", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fs-err", logs: [
  { hash: "b7bf090", date: "2024-04-25", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "0148400", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'fs-err' crate" },
]});
repoLogs.push({ path: "external/rust/crates/futures", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-channel", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-executor", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-io", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-macro", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-sink", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-task", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-test", logs: [
]});
repoLogs.push({ path: "external/rust/crates/futures-util", logs: [
]});
repoLogs.push({ path: "external/rust/crates/fxhash", logs: [
]});
repoLogs.push({ path: "external/rust/crates/gbm", logs: [
]});
repoLogs.push({ path: "external/rust/crates/gdbstub", logs: [
]});
repoLogs.push({ path: "external/rust/crates/gdbstub_arch", logs: [
]});
repoLogs.push({ path: "external/rust/crates/getrandom", logs: [
]});
repoLogs.push({ path: "external/rust/crates/glam", logs: [
]});
repoLogs.push({ path: "external/rust/crates/glob", logs: [
]});
repoLogs.push({ path: "external/rust/crates/googletest", logs: [
]});
repoLogs.push({ path: "external/rust/crates/googletest_macro", logs: [
]});
repoLogs.push({ path: "external/rust/crates/gpio-cdev", logs: [
]});
repoLogs.push({ path: "external/rust/crates/grpcio", logs: [
]});
repoLogs.push({ path: "external/rust/crates/grpcio-compiler", logs: [
]});
repoLogs.push({ path: "external/rust/crates/grpcio-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/half", logs: [
]});
repoLogs.push({ path: "external/rust/crates/hashbrown", logs: [
]});
repoLogs.push({ path: "external/rust/crates/hashlink", logs: [
]});
repoLogs.push({ path: "external/rust/crates/heck", logs: [
]});
repoLogs.push({ path: "external/rust/crates/hex", logs: [
]});
repoLogs.push({ path: "external/rust/crates/http", logs: [
]});
repoLogs.push({ path: "external/rust/crates/httparse", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ident_case", logs: [
  { hash: "88486de", date: "2024-04-11", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "28d62e4", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'ident_case' crate" },
]});
repoLogs.push({ path: "external/rust/crates/idna", logs: [
]});
repoLogs.push({ path: "external/rust/crates/indexmap", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ini", logs: [
]});
repoLogs.push({ path: "external/rust/crates/instant", logs: [
]});
repoLogs.push({ path: "external/rust/crates/intrusive-collections", logs: [
]});
repoLogs.push({ path: "external/rust/crates/itertools", logs: [
]});
repoLogs.push({ path: "external/rust/crates/itoa", logs: [
]});
repoLogs.push({ path: "external/rust/crates/jni", logs: [
]});
repoLogs.push({ path: "external/rust/crates/jni-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/json5", logs: [
]});
repoLogs.push({ path: "external/rust/crates/kernlog", logs: [
]});
repoLogs.push({ path: "external/rust/crates/lazy_static", logs: [
]});
repoLogs.push({ path: "external/rust/crates/lazycell", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libc", logs: [
  { hash: "5450d5b9", date: "2024-04-12", author: "fmayle@google.com", message: "add all android sysconf constants" },
]});
repoLogs.push({ path: "external/rust/crates/libfuzzer-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libloading", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libm", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libsqlite3-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libtest-mimic", logs: [
]});
repoLogs.push({ path: "external/rust/crates/libz-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/linked-hash-map", logs: [
]});
repoLogs.push({ path: "external/rust/crates/linkme", logs: [
]});
repoLogs.push({ path: "external/rust/crates/linkme-impl", logs: [
]});
repoLogs.push({ path: "external/rust/crates/litrs", logs: [
]});
repoLogs.push({ path: "external/rust/crates/lock_api", logs: [
]});
repoLogs.push({ path: "external/rust/crates/log", logs: [
]});
repoLogs.push({ path: "external/rust/crates/lru-cache", logs: [
]});
repoLogs.push({ path: "external/rust/crates/lz4_flex", logs: [
]});
repoLogs.push({ path: "external/rust/crates/macaddr", logs: [
]});
repoLogs.push({ path: "external/rust/crates/managed", logs: [
]});
repoLogs.push({ path: "external/rust/crates/matches", logs: [
]});
repoLogs.push({ path: "external/rust/crates/maybe-async", logs: [
]});
repoLogs.push({ path: "external/rust/crates/memchr", logs: [
]});
repoLogs.push({ path: "external/rust/crates/memmap2", logs: [
]});
repoLogs.push({ path: "external/rust/crates/memoffset", logs: [
]});
repoLogs.push({ path: "external/rust/crates/merge", logs: [
]});
repoLogs.push({ path: "external/rust/crates/merge_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/miette", logs: [
]});
repoLogs.push({ path: "external/rust/crates/miette-derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/minimal-lexical", logs: [
]});
repoLogs.push({ path: "external/rust/crates/mio", logs: [
]});
repoLogs.push({ path: "external/rust/crates/mls-rs", logs: [
  { hash: "2511f0e", date: "2024-04-11", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "51f31cc", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'mls-rs' crate" },
]});
repoLogs.push({ path: "external/rust/crates/mls-rs-codec", logs: [
  { hash: "03d7c9f", date: "2024-04-25", author: "mgeisler@google.com", message: "Add license module" },
]});
repoLogs.push({ path: "external/rust/crates/mls-rs-codec-derive", logs: [
  { hash: "6ad1d7f", date: "2024-04-25", author: "mgeisler@google.com", message: "Add license module" },
]});
repoLogs.push({ path: "external/rust/crates/mls-rs-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/mockall", logs: [
]});
repoLogs.push({ path: "external/rust/crates/mockall_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/moveit", logs: [
]});
repoLogs.push({ path: "external/rust/crates/named-lock", logs: [
]});
repoLogs.push({ path: "external/rust/crates/nix", logs: [
]});
repoLogs.push({ path: "external/rust/crates/no-panic", logs: [
]});
repoLogs.push({ path: "external/rust/crates/nom", logs: [
]});
repoLogs.push({ path: "external/rust/crates/num-bigint", logs: [
]});
repoLogs.push({ path: "external/rust/crates/num-derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/num-integer", logs: [
]});
repoLogs.push({ path: "external/rust/crates/num-traits", logs: [
]});
repoLogs.push({ path: "external/rust/crates/num_cpus", logs: [
]});
repoLogs.push({ path: "external/rust/crates/octets", logs: [
]});
repoLogs.push({ path: "external/rust/crates/once_cell", logs: [
]});
repoLogs.push({ path: "external/rust/crates/oneshot-uniffi", logs: [
  { hash: "1559a0d", date: "2024-04-23", author: "mgeisler@google.com", message: "Generate Android.bp for oneshot-uniffi" },
  { hash: "e28e2f6", date: "2024-04-12", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "e1020e5", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'oneshot-uniffi' crate" },
]});
repoLogs.push({ path: "external/rust/crates/oorandom", logs: [
]});
repoLogs.push({ path: "external/rust/crates/openmls", logs: [
]});
repoLogs.push({ path: "external/rust/crates/openmls_traits", logs: [
]});
repoLogs.push({ path: "external/rust/crates/openssl", logs: [
]});
repoLogs.push({ path: "external/rust/crates/openssl-macros", logs: [
]});
repoLogs.push({ path: "external/rust/crates/os_str_bytes", logs: [
]});
repoLogs.push({ path: "external/rust/crates/p9", logs: [
]});
repoLogs.push({ path: "external/rust/crates/p9_wire_format_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/parking_lot", logs: [
]});
repoLogs.push({ path: "external/rust/crates/parking_lot_core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/paste", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pathdiff", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pdl-compiler", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pdl-runtime", logs: [
]});
repoLogs.push({ path: "external/rust/crates/peeking_take_while", logs: [
]});
repoLogs.push({ path: "external/rust/crates/percent-encoding", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pest", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pest_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pest_generator", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pest_meta", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pin-project", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pin-project-internal", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pin-project-lite", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pin-utils", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pkcs1", logs: [
]});
repoLogs.push({ path: "external/rust/crates/pkcs8", logs: [
]});
repoLogs.push({ path: "external/rust/crates/plotters", logs: [
]});
repoLogs.push({ path: "external/rust/crates/plotters-backend", logs: [
]});
repoLogs.push({ path: "external/rust/crates/plotters-svg", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ppv-lite86", logs: [
]});
repoLogs.push({ path: "external/rust/crates/predicates", logs: [
]});
repoLogs.push({ path: "external/rust/crates/predicates-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/predicates-tree", logs: [
]});
repoLogs.push({ path: "external/rust/crates/prettyplease", logs: [
]});
repoLogs.push({ path: "external/rust/crates/proc-macro2", logs: [
]});
repoLogs.push({ path: "external/rust/crates/protobuf", logs: [
]});
repoLogs.push({ path: "external/rust/crates/protobuf-codegen", logs: [
]});
repoLogs.push({ path: "external/rust/crates/protobuf-json-mapping", logs: [
]});
repoLogs.push({ path: "external/rust/crates/protobuf-parse", logs: [
]});
repoLogs.push({ path: "external/rust/crates/protobuf-support", logs: [
]});
repoLogs.push({ path: "external/rust/crates/quiche", logs: [
]});
repoLogs.push({ path: "external/rust/crates/quickcheck", logs: [
]});
repoLogs.push({ path: "external/rust/crates/quote", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rand", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rand_chacha", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rand_core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rand_xorshift", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rayon", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rayon-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/regex", logs: [
]});
repoLogs.push({ path: "external/rust/crates/regex-automata", logs: [
]});
repoLogs.push({ path: "external/rust/crates/regex-syntax", logs: [
]});
repoLogs.push({ path: "external/rust/crates/remain", logs: [
]});
repoLogs.push({ path: "external/rust/crates/remove_dir_all", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ring", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ron", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rusqlite", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rustc-demangle", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rustc-demangle-capi", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rustc-hash", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rustix", logs: [
]});
repoLogs.push({ path: "external/rust/crates/rustversion", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ryu", logs: [
]});
repoLogs.push({ path: "external/rust/crates/same-file", logs: [
]});
repoLogs.push({ path: "external/rust/crates/scopeguard", logs: [
]});
repoLogs.push({ path: "external/rust/crates/sec1", logs: [
]});
repoLogs.push({ path: "external/rust/crates/semver", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde-xml-rs", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_cbor", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_json", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_spanned", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_test", logs: [
]});
repoLogs.push({ path: "external/rust/crates/serde_yaml", logs: [
]});
repoLogs.push({ path: "external/rust/crates/sharded-slab", logs: [
]});
repoLogs.push({ path: "external/rust/crates/shared_child", logs: [
]});
repoLogs.push({ path: "external/rust/crates/shared_library", logs: [
]});
repoLogs.push({ path: "external/rust/crates/shlex", logs: [
]});
repoLogs.push({ path: "external/rust/crates/slab", logs: [
]});
repoLogs.push({ path: "external/rust/crates/smallvec", logs: [
]});
repoLogs.push({ path: "external/rust/crates/smccc", logs: [
]});
repoLogs.push({ path: "external/rust/crates/socket2", logs: [
]});
repoLogs.push({ path: "external/rust/crates/spin", logs: [
]});
repoLogs.push({ path: "external/rust/crates/spki", logs: [
]});
repoLogs.push({ path: "external/rust/crates/static_assertions", logs: [
]});
repoLogs.push({ path: "external/rust/crates/strsim", logs: [
]});
repoLogs.push({ path: "external/rust/crates/strum", logs: [
]});
repoLogs.push({ path: "external/rust/crates/strum_macros", logs: [
]});
repoLogs.push({ path: "external/rust/crates/syn", logs: [
]});
repoLogs.push({ path: "external/rust/crates/syn-mid", logs: [
]});
repoLogs.push({ path: "external/rust/crates/synstructure", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tempfile", logs: [
]});
repoLogs.push({ path: "external/rust/crates/termcolor", logs: [
]});
repoLogs.push({ path: "external/rust/crates/termtree", logs: [
]});
repoLogs.push({ path: "external/rust/crates/textwrap", logs: [
]});
repoLogs.push({ path: "external/rust/crates/thiserror", logs: [
]});
repoLogs.push({ path: "external/rust/crates/thiserror-impl", logs: [
]});
repoLogs.push({ path: "external/rust/crates/thread_local", logs: [
]});
repoLogs.push({ path: "external/rust/crates/threadpool", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tinyjson", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tinytemplate", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tinyvec", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tinyvec_macros", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tls_codec", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tls_codec_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tokio", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tokio-macros", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tokio-stream", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tokio-test", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tokio-util", logs: [
]});
repoLogs.push({ path: "external/rust/crates/toml", logs: [
]});
repoLogs.push({ path: "external/rust/crates/toml_datetime", logs: [
]});
repoLogs.push({ path: "external/rust/crates/toml_edit", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tracing", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tracing-attributes", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tracing-core", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tracing-subscriber", logs: [
]});
repoLogs.push({ path: "external/rust/crates/tungstenite", logs: [
]});
repoLogs.push({ path: "external/rust/crates/twox-hash", logs: [
]});
repoLogs.push({ path: "external/rust/crates/ucd-trie", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-bidi", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-ident", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-normalization", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-segmentation", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-width", logs: [
]});
repoLogs.push({ path: "external/rust/crates/unicode-xid", logs: [
]});
repoLogs.push({ path: "external/rust/crates/uniffi_checksum_derive", logs: [
  { hash: "0afabf7", date: "2024-04-15", author: "rassb@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "17632c1", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'uniffi_checksum_derive' crate" },
]});
repoLogs.push({ path: "external/rust/crates/uniffi_core", logs: [
  { hash: "69c166a", date: "2024-04-23", author: "mgeisler@google.com", message: "Generate Android.bp for uniffi_core" },
  { hash: "1ce8a6d", date: "2024-04-19", author: "ipalant@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "cb3e01c", date: "2024-04-10", author: "mgeisler@google.com", message: "Import 'uniffi_core' crate" },
]});
repoLogs.push({ path: "external/rust/crates/uniffi_meta", logs: [
  { hash: "7a07d4c", date: "2024-04-19", author: "ipalant@google.com", message: "Merge remote-tracking branch 'origin/upstream'" },
  { hash: "ca0981f", date: "2024-04-09", author: "mgeisler@google.com", message: "Import 'uniffi_meta' crate" },
]});
repoLogs.push({ path: "external/rust/crates/unsafe-libyaml", logs: [
]});
repoLogs.push({ path: "external/rust/crates/untrusted", logs: [
]});
repoLogs.push({ path: "external/rust/crates/url", logs: [
]});
repoLogs.push({ path: "external/rust/crates/userfaultfd", logs: [
]});
repoLogs.push({ path: "external/rust/crates/userfaultfd-sys", logs: [
]});
repoLogs.push({ path: "external/rust/crates/utf-8", logs: [
]});
repoLogs.push({ path: "external/rust/crates/uuid", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vhost", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vhost-device-vsock", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vhost-user-backend", logs: [
]});
repoLogs.push({ path: "external/rust/crates/virtio-bindings", logs: [
]});
repoLogs.push({ path: "external/rust/crates/virtio-drivers", logs: [
]});
repoLogs.push({ path: "external/rust/crates/virtio-queue", logs: [
]});
repoLogs.push({ path: "external/rust/crates/virtio-vsock", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vm-memory", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vmm-sys-util", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vsock", logs: [
]});
repoLogs.push({ path: "external/rust/crates/vulkano", logs: [
]});
repoLogs.push({ path: "external/rust/crates/walkdir", logs: [
]});
repoLogs.push({ path: "external/rust/crates/weak-table", logs: [
]});
repoLogs.push({ path: "external/rust/crates/webpki", logs: [
]});
repoLogs.push({ path: "external/rust/crates/which", logs: [
]});
repoLogs.push({ path: "external/rust/crates/winnow", logs: [
]});
repoLogs.push({ path: "external/rust/crates/x509-cert", logs: [
]});
repoLogs.push({ path: "external/rust/crates/xml-rs", logs: [
]});
repoLogs.push({ path: "external/rust/crates/yaml-rust", logs: [
]});
repoLogs.push({ path: "external/rust/crates/zerocopy", logs: [
]});
repoLogs.push({ path: "external/rust/crates/zerocopy-derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/zeroize", logs: [
]});
repoLogs.push({ path: "external/rust/crates/zeroize_derive", logs: [
]});
repoLogs.push({ path: "external/rust/crates/zip", logs: [
]});
repoLogs.push({ path: "external/rust/cxx", logs: [
]});
repoLogs.push({ path: "external/rust/pica", logs: [
  { hash: "2fa0409", date: "2024-04-05", author: "henrichataing@google.com", message: "Update pica to v0.1.9 from upstream" },
  { hash: "1c4360d", date: "2024-04-05", author: "henrichataing@google.com", message: "Update version to 0.1.9" },
  { hash: "8f104b0", date: "2024-04-05", author: "henrichataing@google.com", message: "Update the format of the notification Update Controller Multicast List" },
]});
repoLogs.push({ path: "external/ruy", logs: [
]});
repoLogs.push({ path: "external/s2-geometry-library-java", logs: [
]});
repoLogs.push({ path: "external/sandboxed-api", logs: [
]});
repoLogs.push({ path: "external/scapy", logs: [
]});
repoLogs.push({ path: "external/scrypt", logs: [
  { hash: "2eee6f1", date: "2024-04-25", author: "enh@google.com", message: "Merge ＂Remove unnecessary `neon:`.＂ into main" },
]});
repoLogs.push({ path: "external/scudo", logs: [
  { hash: "af1c12f2243", date: "2024-04-25", author: "chiahungduan@google.com", message: "[scudo] Fix the misused Exhausted in region allocation (#89852)" },
  { hash: "654039be906", date: "2024-04-25", author: "fdurso@google.com", message: "[scudo] Improve readability of MemMapFuchsia's error handling (#90102)" },
  { hash: "e7c3a3d5418", date: "2024-04-24", author: "fdurso@google.com", message: "Allow ZX_ERR_NO_RESOURCES with MAP_ALLOWNOMEM on Fuchsia (#89767)" },
  { hash: "04c08798ae3", date: "2024-04-19", author: "fdurso@google.com", message: "Sync FuchsiaConfig with downstream's custom_scudo_config.h (#89244)" },
  { hash: "9b638c8c43b", date: "2024-04-09", author: "chiahungduan@google.com", message: "[scudo] Add EnableContiguousRegions mode (#85149)" },
  { hash: "7eafe41f9b2", date: "2024-04-08", author: "cferris1000@users.noreply.github.com", message: "[scudo] Remove end of line checks. (#88022)" },
]});
repoLogs.push({ path: "external/sdv/vsomeip", logs: [
]});
repoLogs.push({ path: "external/seccomp-tests", logs: [
]});
repoLogs.push({ path: "external/selinux", logs: [
  { hash: "261afd39", date: "2024-04-18", author: "emarteca@google.com", message: "Add /data/storage_area to app data directories" },
]});
repoLogs.push({ path: "external/setfilters", logs: [
]});
repoLogs.push({ path: "external/setupcompat", logs: [
]});
repoLogs.push({ path: "external/setupdesign", logs: [
]});
repoLogs.push({ path: "external/sfntly", logs: [
]});
repoLogs.push({ path: "external/sg3_utils", logs: [
]});
repoLogs.push({ path: "external/shaderc/spirv-headers", logs: [
]});
repoLogs.push({ path: "external/shflags", logs: [
]});
repoLogs.push({ path: "external/skia", logs: [
  { hash: "a59278fdd9", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove herb@google.com from include/OWNERS＂ into main" },
]});
repoLogs.push({ path: "external/sl4a", logs: [
]});
repoLogs.push({ path: "external/slf4j", logs: [
]});
repoLogs.push({ path: "external/snakeyaml", logs: [
]});
repoLogs.push({ path: "external/sonic", logs: [
]});
repoLogs.push({ path: "external/sonivox", logs: [
]});
repoLogs.push({ path: "external/spdx-tools", logs: [
]});
repoLogs.push({ path: "external/speex", logs: [
  { hash: "5e073aa", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Hand speex over to the janitors.＂ into main" },
  { hash: "933c1f0", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove NOTICE symlink.＂ into main" },
  { hash: "7f61a05", date: "2024-04-12", author: "enh@google.com", message: "Hand speex over to the janitors." },
]});
repoLogs.push({ path: "external/sqlite", logs: [
]});
repoLogs.push({ path: "external/squashfs-tools", logs: [
]});
repoLogs.push({ path: "external/stardoc", logs: [
]});
repoLogs.push({ path: "external/starlark-go", logs: [
]});
repoLogs.push({ path: "external/stg", logs: [
  { hash: "03ab09f", date: "2024-04-25", author: "gprocida@google.com", message: "Merge branch 'upstream-main' into 'main'" },
  { hash: "6e2c034", date: "2024-04-25", author: "gprocida@google.com", message: "CMake: express current dependency on Catch2 v2" },
  { hash: "27ca784", date: "2024-04-25", author: "gprocida@google.com", message: "proto writer: take references to key/value pairs in ID mapping loop" },
  { hash: "0cdd97b", date: "2024-04-25", author: "sidnayyar@google.com", message: "rust: add test case for rust tagged enums" },
  { hash: "bd7ac29", date: "2024-04-25", author: "gprocida@google.com", message: "comparison: use a cleaner enum for Ignore options" },
  { hash: "cee934c", date: "2024-04-25", author: "sidnayyar@google.com", message: "rust: add `Variant` node" },
  { hash: "5ef4e13", date: "2024-04-25", author: "sidnayyar@google.com", message: "rust: add `VariantMember` node" },
  { hash: "577d950", date: "2024-04-25", author: "sidnayyar@google.com", message: "rust: add info test for member functions in Rust enums" },
]});
repoLogs.push({ path: "external/strace", logs: [
]});
repoLogs.push({ path: "external/stressapptest", logs: [
]});
repoLogs.push({ path: "external/subsampling-scale-image-view", logs: [
]});
repoLogs.push({ path: "external/swiftshader", logs: [
  { hash: "0cfba8512", date: "2024-04-18", author: "android-autoroll@skia-public.iam.gserviceaccount.com", message: "Roll SwiftShader from bbe6452b420c to 9aec4b969291 (10 revisions)" },
  { hash: "9aec4b969", date: "2024-04-18", author: "wangqing-hf@loongson.cn", message: "llvm-16.0: Fix some issues in Reactor/LLVMJIT for LoongArch." },
  { hash: "f453d53a9", date: "2024-04-18", author: "wangqing-hf@loongson.cn", message: "Reactor: loongarch64 is not supported in subzero." },
  { hash: "764410d4d", date: "2024-04-17", author: "wangqing-hf@loongson.cn", message: "llvm-16.0: Add BUILD.gn for loongarch64." },
  { hash: "632c096c2", date: "2024-04-17", author: "wangqing-hf@loongson.cn", message: "llvm-16.0: Add configs/common and configs/linux for loongarch64." },
  { hash: "1eaac56de", date: "2024-04-15", author: "alex@alexrp.com", message: "Fix some build issues on Windows Arm64." },
]});
repoLogs.push({ path: "external/tagsoup", logs: [
]});
repoLogs.push({ path: "external/tcpdump", logs: [
]});
repoLogs.push({ path: "external/tensorflow", logs: [
]});
repoLogs.push({ path: "external/testng", logs: [
]});
repoLogs.push({ path: "external/tflite-support", logs: [
]});
repoLogs.push({ path: "external/timezone-boundary-builder", logs: [
]});
repoLogs.push({ path: "external/tink", logs: [
]});
repoLogs.push({ path: "external/tinyalsa", logs: [
]});
repoLogs.push({ path: "external/tinyalsa_new", logs: [
]});
repoLogs.push({ path: "external/tinycompress", logs: [
]});
repoLogs.push({ path: "external/tinyxml2", logs: [
  { hash: "c50cb41", date: "2024-04-15", author: "enh@google.com", message: "Merge ＂Upgrade tinyxml2 to 10.0.0＂ into main" },
  { hash: "f9e670b", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove unused LICENSE and NOTICE symlinks.＂ into main" },
  { hash: "8d3ca03", date: "2024-04-12", author: "enh@google.com", message: "Remove unused LICENSE and NOTICE symlinks." },
]});
repoLogs.push({ path: "external/toolchain-utils", logs: [
  { hash: "d865a56c", date: "2024-04-17", author: "zijunzhao@google.com", message: "Merging 68 commit(s) from Chromium's toolchain-utils" },
  { hash: "a37c013c", date: "2024-04-16", author: "gbiv@google.com", message: "llvm_tools: move FindChromeOSRootAbove to chroot.py" },
  { hash: "c6733c05", date: "2024-04-16", author: "gbiv@google.com", message: "auto_abandon_cls: include internal CLs" },
  { hash: "8a26cd3e", date: "2024-04-16", author: "gbiv@google.com", message: "cros_utils: add support for parsing for internal CL uploads" },
  { hash: "54e65f79", date: "2024-04-16", author: "gbiv@google.com", message: "git: add helper to determine if something's a full SHA" },
  { hash: "f46a883d", date: "2024-04-16", author: "gbiv@google.com", message: "llvm_tools: add package stabilization script" },
  { hash: "c5dcecf1", date: "2024-04-16", author: "gbiv@google.com", message: "llvm_tools: remove LLVM_HASH usage from get_upstream_patch" },
  { hash: "5a25614b", date: "2024-04-16", author: "gbiv@google.com", message: "llvm_tools: migrate nightly_revert_checker to get_llvm_hash" },
  { hash: "18a3ccb6", date: "2024-04-16", author: "gbiv@google.com", message: "llvm_tools: let `get_llvm_hash` grab llvm-next/llvm hashes" },
  { hash: "53ba4150", date: "2024-04-15", author: "gbiv@google.com", message: "llvm_tools: add bb_add.py" },
  { hash: "f8e584c2", date: "2024-04-15", author: "gbiv@google.com", message: "llvm_tools: add a file to contain llvm testing information" },
  { hash: "5910e9f1", date: "2024-04-15", author: "gbiv@google.com", message: "llvm_tools: add internal CL support to cros_cls" },
  { hash: "977ad131", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Perform exact prefix match for replacement" },
  { hash: "51776b56", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Update rust-analyzer in chroot to /usr/bin" },
  { hash: "7da035ef", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Replace on first match only." },
  { hash: "9b49b4f2", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Use arrays instead of hashmaps to store replacements" },
  { hash: "dc3dc47e", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Simplify test payloads" },
  { hash: "48b9e2d0", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Simplify test output Vec initialization" },
  { hash: "92a0ed1a", date: "2024-04-12", author: "ishitatsuyuki@google.com", message: "rust-analyzer-chromiumos-wrapper: Generate Content-Length for tests in the helper" },
  { hash: "6523933c", date: "2024-04-10", author: "ajordanr@google.com", message: "patch_sync: Fix android patch filtering." },
  { hash: "e72432d7", date: "2024-04-10", author: "ajordanr@google.com", message: "patch_sync: Clean up clippy lints" },
  { hash: "9418ce84", date: "2024-04-10", author: "gbiv@google.com", message: "llvm_tools: add gerrit cwd" },
  { hash: "91004c13", date: "2024-04-10", author: "gbiv@google.com", message: "llvm_tools: add revision autodetection to the patch cleanup script" },
  { hash: "26d580d4", date: "2024-04-10", author: "gbiv@google.com", message: "afdo_tools: move worktree creation to git_utils" },
  { hash: "13efc0f6", date: "2024-04-10", author: "zijunzhao@google.com", message: "Make git am a dry run when running test_apply()" },
  { hash: "9a6d822b", date: "2024-04-10", author: "mobiletc-prebuild@google.com", message: "afdo_metadata: Publish the new kernel profiles" },
  { hash: "ae16c1dd", date: "2024-04-08", author: "gbiv@google.com", message: "setup_for_workon: make --checkout or --no-checkout mandatory" },
  { hash: "b5f88d7d", date: "2024-04-08", author: "gbiv@google.com", message: "llvm_tools: use new make_tempdir method in tests" },
  { hash: "f6dc855c", date: "2024-04-08", author: "gbiv@google.com", message: "llvm_tools: add clean_up_old_llvm_patches script" },
  { hash: "e1133ef4", date: "2024-04-08", author: "mobiletc-prebuild@google.com", message: "afdo_metadata: Publish the new kernel profiles" },
  { hash: "4db0e315", date: "2024-04-08", author: "gbiv@google.com", message: "llvm_tools: fix `cros lint` & mypy issues in patch_utils" },
  { hash: "3f4382d0", date: "2024-04-08", author: "gbiv@google.com", message: "llvm_tools: remove unused `patch_cmd` arg" },
  { hash: "0fc9b4d6", date: "2024-04-08", author: "gbiv@google.com", message: "llvm_tools: remove REMOVE_PATCHES failure mode" },
  { hash: "f710649f", date: "2024-04-08", author: "gbiv@google.com", message: "afdo_tools: move git utilities into cros_utils" },
  { hash: "226bf89b", date: "2024-04-04", author: "mobiletc-prebuild@google.com", message: "compiler_wrapper: automatic sync" },
  { hash: "feab5cec", date: "2024-04-03", author: "mobiletc-prebuild@google.com", message: "afdo_metadata: Publish the new kernel profiles" },
  { hash: "443429f4", date: "2024-04-02", author: "gbiv@google.com", message: "check-presubmit: add missing f" },
  { hash: "baceb2f1", date: "2024-04-02", author: "ajordanr@google.com", message: "afdo_tools: Replace gsutil with gsutil.py" },
]});
repoLogs.push({ path: "external/toybox", logs: [
  { hash: "7c075dd4", date: "2024-04-22", author: "enh@google.com", message: "Upgrade toybox to 7c6aecd477a9b898df981197088c9e1d5775fe9c" },
  { hash: "7c6aecd4", date: "2024-04-20", author: "rob@landley.net", message: "Two changes to record-commands: 1) busybox find doesn't understand commas in -type so use parentheses and -o, 2) change semantics (sourcing changes variables) so running with no arguments sets up a persistent wrapper and outputs an export line to update variables." },
  { hash: "475d3aa8", date: "2024-04-19", author: "rob@landley.net", message: "The -f doesn't reliably shut up chmod." },
  { hash: "f5dead2d", date: "2024-04-19", author: "enh@google.com", message: "Add a getopt symlink." },
  { hash: "544a855c", date: "2024-04-18", author: "rob@landley.net", message: "Add cfspeed2bps() and bsp2cfspeed() conversion functions, and make xsetspeed() use them." },
  { hash: "880e973a", date: "2024-04-18", author: "rob@landley.net", message: "Let record-commands be run from an arbitrary directory." },
  { hash: "7d9ee89d", date: "2024-04-16", author: "rob@landley.net", message: "Vidar Karlsen says freebsd needs a magic constant." },
  { hash: "82720e59", date: "2024-04-13", author: "rob@landley.net", message: "Add uname to freebsd_miniconfig (pointed out by Vidar Karlsen)" },
  { hash: "f2079e0f", date: "2024-04-12", author: "rob@landley.net", message: "A sufficiently loaded server may not be able to fork()/exec() in .1 seconds (Elliott saw this), so give it a full second." },
  { hash: "122bbe60", date: "2024-04-08", author: "rob@landley.net", message: "Version 0.8.11" },
  { hash: "454cf8f1", date: "2024-04-08", author: "enh@google.com", message: "Upgrade toybox to 96d9f66127d84fba2f56f4754fc302e826968751" },
  { hash: "96d9f661", date: "2024-04-08", author: "rob@landley.net", message: "Thinko. (Reused a variable one line too early.)" },
  { hash: "207c9857", date: "2024-04-08", author: "rob@landley.net", message: "Build armv4l kernel." },
  { hash: "bd1b0982", date: "2024-04-08", author: "rob@landley.net", message: "Stop forcing CONFIG_EXPERT on to disable other symbols." },
  { hash: "9c0e6eff", date: "2024-04-07", author: "rob@landley.net", message: "Fix powerpc, mips64, and s390x boards under qemu." },
  { hash: "9303bd8a", date: "2024-04-05", author: "rob@landley.net", message: "Tweak help text and comments." },
  { hash: "fc0e86b4", date: "2024-04-05", author: "rob@landley.net", message: "Fix thinko." },
  { hash: "2b867151", date: "2024-04-05", author: "rob@landley.net", message: "Enforce min/max for % input type (time in seconds w/millisecond granularity)." },
  { hash: "59b041d1", date: "2024-04-05", author: "rob@landley.net", message: "Stdout buffering broke yet more stuff." },
  { hash: "9f7d285a", date: "2024-04-05", author: "rob@landley.net", message: "Copy numeric config symbols into config.h." },
  { hash: "63b36842", date: "2024-04-05", author: "rob@landley.net", message: "Fix creating initramfs.cpio.gz without building kernel." },
  { hash: "3bbc31c7", date: "2024-04-05", author: "rob@landley.net", message: "Alas, nproc isn't portable (sched_getaffinity() syscall) and scripts/portability.sh already has two fallbacks (sysctl -n hw.nproc for mac/bsd and if that doesn't work either it sets CPUS=1)." },
  { hash: "d21f10ec", date: "2024-04-05", author: "rob@landley.net", message: "Add suffix to toybox-prereq build." },
  { hash: "b947b52b", date: "2024-04-04", author: "rob@landley.net", message: "Promote fold and touch tests to ＂make tests＂." },
  { hash: "8dbf4e10", date: "2024-04-02", author: "rob@landley.net", message: "Update pass over the roadmap." },
]});
repoLogs.push({ path: "external/tpm2-tss", logs: [
]});
repoLogs.push({ path: "external/trace-cmd", logs: [
]});
repoLogs.push({ path: "external/tremolo", logs: [
]});
repoLogs.push({ path: "external/trusty/arm-trusted-firmware", logs: [
]});
repoLogs.push({ path: "external/trusty/bootloader", logs: [
]});
repoLogs.push({ path: "external/trusty/headers", logs: [
]});
repoLogs.push({ path: "external/trusty/lk", logs: [
  { hash: "be994329", date: "2024-04-25", author: "arve@android.com", message: "lib: device_tree: Add device_tree library" },
  { hash: "e073695b", date: "2024-04-18", author: "arve@android.com", message: "dev: interrupt: arm_gic: Fix ubsan error" },
  { hash: "7306e3dd", date: "2024-04-17", author: "arve@android.com", message: "binary_search_tree: Add missing type check for bst_search_type" },
  { hash: "fdc0761f", date: "2024-04-17", author: "arve@android.com", message: "binary_search_tree: Add search by key instead of node" },
  { hash: "cb80daa3", date: "2024-04-05", author: "perlarsen@google.com", message: "lib: rust_support: Avoid cyclic dependence on self" },
  { hash: "ecd8c7c8", date: "2024-04-05", author: "khyber@google.com", message: "lib: rust_support: impl thread::spawn wrapper" },
  { hash: "d2fd6102", date: "2024-04-02", author: "arve@android.com", message: "make: rust: Move lib/rust_support dependency" },
  { hash: "c7e51087", date: "2024-04-02", author: "rherouart@google.com", message: "external/lk: timetest times out" },
]});
repoLogs.push({ path: "external/trusty/musl", logs: [
]});
repoLogs.push({ path: "external/truth", logs: [
]});
repoLogs.push({ path: "external/turbine", logs: [
]});
repoLogs.push({ path: "external/unicode", logs: [
]});
repoLogs.push({ path: "external/universal-tween-engine", logs: [
]});
repoLogs.push({ path: "external/uwb", logs: [
  { hash: "5a41ec1", date: "2024-04-19", author: "phenixchen@google.com", message: "Merge ＂Revert ＂[uci] Pass in a boolean to indicate if support multicast...＂＂ into main" },
  { hash: "2cc334a", date: "2024-04-19", author: "phenixchen@google.com", message: "Revert ＂[uci] Pass in a boolean to indicate if support multicast...＂" },
  { hash: "36a4caf", date: "2024-04-18", author: "ziyiw@google.com", message: "[unit_test] Use NopLogger in unit tests to improve coverage." },
  { hash: "5835b64", date: "2024-04-17", author: "ziyiw@google.com", message: "[uci] Pass in a boolean to indicate if support multicast ntf v2." },
  { hash: "fff1484", date: "2024-04-15", author: "ziyiw@google.com", message: "[unit_test] Add more tests for uci_logger and notification." },
  { hash: "1bc7ee0", date: "2024-04-12", author: "ziyiw@google.com", message: "[unit_test] Add more tests for uci_manager." },
  { hash: "b28d119", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[unit_test] Add unit tests for uci vendor response.＂ into main" },
  { hash: "202bac0", date: "2024-04-11", author: "ziyiw@google.com", message: "Merge ＂[uci] Parse segment metrics from ranging diag. report＂ into main" },
  { hash: "01a1393", date: "2024-04-11", author: "ziyiw@google.com", message: "[unit_test] Add unit tests for uci vendor response." },
  { hash: "30e3739", date: "2024-04-11", author: "ziyiw@google.com", message: "[unit_test] Add more unit tests for uci notification." },
  { hash: "b82158a", date: "2024-04-10", author: "ziyiw@google.com", message: "[uci] Parse segment metrics from ranging diag. report" },
  { hash: "44d5f96", date: "2024-04-10", author: "ziyiw@google.com", message: "[unit test] Add test coverage for uwb commands." },
  { hash: "829aad9", date: "2024-04-08", author: "ziyiw@google.com", message: "[unit_test] Add more unit tests for uwb_uci_packets" },
  { hash: "028d318", date: "2024-04-05", author: "ziyiw@google.com", message: "[uwb] Support updateMulticastListNtf for both Fira 1.x and 2.0." },
  { hash: "fe73631", date: "2024-04-04", author: "rpius@google.com", message: "Merge ＂Race condition while processing session status notification.＂ into main" },
]});
repoLogs.push({ path: "external/v4l2_codec2", logs: [
]});
repoLogs.push({ path: "external/vboot_reference", logs: [
]});
repoLogs.push({ path: "external/virglrenderer", logs: [
]});
repoLogs.push({ path: "external/vixl", logs: [
]});
repoLogs.push({ path: "external/vogar", logs: [
]});
repoLogs.push({ path: "external/volley", logs: [
]});
repoLogs.push({ path: "external/vulkan-headers", logs: [
]});
repoLogs.push({ path: "external/vulkan-validation-layers", logs: [
]});
repoLogs.push({ path: "external/walt", logs: [
]});
repoLogs.push({ path: "external/wayland", logs: [
]});
repoLogs.push({ path: "external/wayland-protocols", logs: [
]});
repoLogs.push({ path: "external/webp", logs: [
  { hash: "e3204995", date: "2024-04-17", author: "jzern@google.com", message: "Merge ＂add LICENSE file＂ into main" },
  { hash: "740d30ec", date: "2024-04-17", author: "jzern@google.com", message: "add LICENSE file" },
  { hash: "f658fc2f", date: "2024-04-17", author: "jzern@google.com", message: "Merge ＂Upgrade webp to v1.4.0＂ into main" },
  { hash: "73a462f0", date: "2024-04-16", author: "jzern@google.com", message: "Upgrade webp to v1.4.0" },
  { hash: "845d5476", date: "2024-04-12", author: "jzern@google.com", message: "update ChangeLog" },
  { hash: "8a6a55bb", date: "2024-04-12", author: "jzern@google.com", message: "update NEWS" },
  { hash: "cf7c5a5d", date: "2024-04-11", author: "jzern@google.com", message: "provide a way to opt-out/override WEBP_NODISCARD" },
  { hash: "cc34288a", date: "2024-04-02", author: "jzern@google.com", message: "update ChangeLog" },
  { hash: "f13c0886", date: "2024-04-02", author: "jzern@google.com", message: "NEWS: fix date" },
  { hash: "74555950", date: "2024-04-02", author: "jzern@google.com", message: "Merge ＂vwebp: fix window title when options are given＂ into 1.4.0" },
  { hash: "d781646c", date: "2024-04-01", author: "jzern@google.com", message: "vwebp: fix window title when options are given" },
  { hash: "c2e394de", date: "2024-04-01", author: "jzern@google.com", message: "update NEWS" },
  { hash: "f6d15cb7", date: "2024-04-01", author: "jzern@google.com", message: "bump version to 1.4.0" },
]});
repoLogs.push({ path: "external/webrtc", logs: [
]});
repoLogs.push({ path: "external/wmediumd", logs: [
]});
repoLogs.push({ path: "external/wpa_supplicant_8", logs: [
]});
repoLogs.push({ path: "external/wuffs-mirror-release-c", logs: [
]});
repoLogs.push({ path: "external/wycheproof", logs: [
]});
repoLogs.push({ path: "external/xmp_toolkit", logs: [
]});
repoLogs.push({ path: "external/xz-embedded", logs: [
  { hash: "53e94b0", date: "2024-04-12", author: "enh@google.com", message: "Remove NOTICE symlink." },
  { hash: "86cac5f", date: "2024-04-11", author: "enh@google.com", message: "Restrict BCJ decoding to just the ones in use in the encoder." },
  { hash: "d241875", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Disable BCJ filters.＂＂ into main" },
  { hash: "38c08d8", date: "2024-04-11", author: "enh@google.com", message: "Revert ＂Disable BCJ filters.＂" },
  { hash: "d1e49f9", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disable BCJ filters.＂ into main" },
  { hash: "c5acbd0", date: "2024-04-08", author: "enh@google.com", message: "Disable BCJ filters." },
]});
repoLogs.push({ path: "external/xz-java", logs: [
]});
repoLogs.push({ path: "external/yapf", logs: [
]});
repoLogs.push({ path: "external/zlib", logs: [
  { hash: "b34cd2e", date: "2024-04-10", author: "elsk@google.com", message: "Merge ＂Revert ＂kleaf: Add pkg_files for TEST_MAPPING.＂＂ into main" },
  { hash: "7ba1c4d", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Upgrade zlib to 7d77fb7fd66d8a5640618ad32c71fdeb7d3e02df＂ into main" },
  { hash: "3a75c2f", date: "2024-04-10", author: "enh@google.com", message: "Upgrade zlib to 7d77fb7fd66d8a5640618ad32c71fdeb7d3e02df" },
  { hash: "7d77fb7", date: "2024-04-09", author: "cavalcantii@chromium.org", message: "[zlib] Add large payloads and compression levels unit tests" },
  { hash: "8a0ab91", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Upgrade zlib to 37d9855c8db5a130571971e78fde2740314cd98a＂ into main" },
  { hash: "932a588", date: "2024-04-09", author: "elsk@google.com", message: "Revert ＂kleaf: Add pkg_files for TEST_MAPPING.＂" },
  { hash: "f843f2d", date: "2024-04-09", author: "enh@google.com", message: "Upgrade zlib to 37d9855c8db5a130571971e78fde2740314cd98a" },
  { hash: "37d9855", date: "2024-04-09", author: "cavalcantii@chromium.org", message: "[zlib][riscv] Import superior Adler-32 implementation" },
  { hash: "29a30d3", date: "2024-04-09", author: "cavalcantii@chromium.org", message: "[zlib][tools] Import zpipe and minigzip (!= minizip)" },
  { hash: "9d8da16", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow bootable/deprecated-ota to use zlib＂ into main" },
  { hash: "6c801e3", date: "2024-04-08", author: "enh@google.com", message: "Merge ＂Upgrade zlib to d076d8bd089843ae105b1aeeda32dbeb667402ef＂ into main" },
  { hash: "7bb7916", date: "2024-04-05", author: "enh@google.com", message: "Upgrade zlib to d076d8bd089843ae105b1aeeda32dbeb667402ef" },
  { hash: "d076d8b", date: "2024-04-05", author: "cavalcantii@chromium.org", message: "[zlib][riscv] Implement generic chunk_copy" },
  { hash: "cca7acf", date: "2024-04-05", author: "zhangkelvin@google.com", message: "Allow bootable/deprecated-ota to use zlib" },
  { hash: "0e58d44", date: "2024-04-04", author: "danakj@chromium.org", message: "Remove unused base/sys_byteorder.h includes" },
  { hash: "fbd0a40", date: "2024-04-02", author: "dbertoni@chromium.org", message: "[Code Health] Remove some uses of base::SupportsWeakPtr." },
  { hash: "d9645b4", date: "2024-04-03", author: "enh@google.com", message: "Merge ＂Add riscv64 optimization placeholder.＂ into main" },
]});
repoLogs.push({ path: "external/zopfli", logs: [
]});
repoLogs.push({ path: "external/zstd", logs: [
]});
repoLogs.push({ path: "external/zucchini", logs: [
]});
repoLogs.push({ path: "external/zxing", logs: [
]});
repoLogs.push({ path: "frameworks/av", logs: [
  { hash: "16bf9fca67", date: "2024-04-26", author: "shuzhenwang@google.com", message: "Merge ＂camera:fix wait request timeout in switching camera＂ into main" },
  { hash: "ac76e8e9e3", date: "2024-04-26", author: "inseob@google.com", message: "Merge ＂Build audio_effects.xml with Soong＂ into main" },
  { hash: "8bd6b74bc5", date: "2024-04-24", author: "petericci@google.com", message: "Merge ＂Fix memory leak due to un-released gralloc buffers＂ into main" },
  { hash: "601b8c3188", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Refactored libstagefright_mediamuxer_fuzzer＂ into main" },
  { hash: "c51da1b079", date: "2024-04-24", author: "aashutosh.murthy@ittiam.com", message: "Refactored libstagefright_mediamuxer_fuzzer" },
  { hash: "8b6342670c", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂HiRes: Check mixport samplerates＂ into main" },
  { hash: "a3e63da447", date: "2024-04-23", author: "inseob@google.com", message: "Build audio_effects.xml with Soong" },
  { hash: "2e05573105", date: "2024-04-22", author: "yaoshunkai@google.com", message: "Merge ＂Effect AIDL: relax dynamics processing effect parameter validations＂ into main" },
  { hash: "f2cb566635", date: "2024-04-22", author: "yaoshunkai@google.com", message: "Effect AIDL: relax dynamics processing effect parameter validations" },
  { hash: "02a0b39350", date: "2024-04-22", author: "blindahl@google.com", message: "Merge ＂Add DecoderRenderTest to tv-postsubmit＂ into main" },
  { hash: "bfe3065273", date: "2024-04-22", author: "blindahl@google.com", message: "Add DecoderRenderTest to tv-postsubmit" },
  { hash: "e5d2d6f8cc", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable CONFIGURE_FLAG_USE_CRYPTO_ASYNC for audio＂ into main" },
  { hash: "1286982017", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂C2: Advertise support for FEATURE_QpBounds in s/w video encoders＂ into main" },
  { hash: "5e2f448439", date: "2024-04-19", author: "arunjohnson@google.com", message: "Enable CONFIGURE_FLAG_USE_CRYPTO_ASYNC for audio" },
  { hash: "6af9330e67", date: "2024-04-19", author: "girishshetty@google.com", message: "Merge changes I0e5b59b9,I6a37e397 into main" },
  { hash: "02e64af2cd", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂C2SoftVpxDec: Add dynamic color aspects support＂ into main" },
  { hash: "d9ae2399d2", date: "2024-04-18", author: "mnaganov@google.com", message: "Merge ＂libaudiohal@aidl: Handle stream resume uniformly＂ into main" },
  { hash: "dc187558fc", date: "2024-04-18", author: "girishshetty@google.com", message: "resourcemanager: add resource metrics to dumpsys" },
  { hash: "286204445d", date: "2024-04-18", author: "girishshetty@google.com", message: "libstagefright: record failed codec initialization" },
  { hash: "67c12fe44c", date: "2024-04-18", author: "richardfolke.tullberg@sony.com", message: "HiRes: Check mixport samplerates" },
  { hash: "bd98dc515d", date: "2024-04-18", author: "ibaker@google.com", message: "Merge ＂Handle video track with invalid WxH to avoid mediaserver crash＂ into main" },
  { hash: "dfe71bf739", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Refactored libstagefright_frameDecoder_fuzzer＂ into main" },
  { hash: "80e0c61984", date: "2024-04-18", author: "hmahendrakar@google.com", message: "C2: Advertise support for FEATURE_QpBounds in s/w video encoders" },
  { hash: "887d067996", date: "2024-04-17", author: "wonsik@google.com", message: "Merge ＂aconfig: add a bugfix flag set_callback_stall＂ into main" },
  { hash: "70f1225b35", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂audio policy: Fix handling of external device connection failure＂ into main" },
  { hash: "3754b64b39", date: "2024-04-17", author: "mnaganov@google.com", message: "audio policy: Fix handling of external device connection failure" },
  { hash: "7391be1cb0", date: "2024-04-17", author: "wonsik@google.com", message: "aconfig: add a bugfix flag set_callback_stall" },
  { hash: "c1654c6dd4", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂audio: fix log printing issue＂ into main" },
  { hash: "7de39d52dd", date: "2024-04-17", author: "jiangyao@xiaomi.com", message: "audio: fix log printing issue" },
  { hash: "7f8bc582c6", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂mediametrics_service_fuzzer: Bug fix＂ into main" },
  { hash: "a951c1e786", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable low-latency feature in av1 decoders＂ into main" },
  { hash: "9f0a032fe0", date: "2024-04-17", author: "haripriya.deshmukh@ittiam.com", message: "C2SoftVpxDec: Add dynamic color aspects support" },
  { hash: "82df815a77", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂C2SoftAomEnc: Add support for configuring min max QP Params＂ into main" },
  { hash: "e8cd125e47", date: "2024-04-17", author: "wonsik@google.com", message: "Merge ＂Fix MediaCodec potential use-after-free＂ into main" },
  { hash: "0f56965eaa", date: "2024-04-17", author: "will-cw.chen@mediatek.com", message: "Fix MediaCodec potential use-after-free" },
  { hash: "b27cb9babb", date: "2024-04-16", author: "mnaganov@google.com", message: "libaudiohal@aidl: Handle stream resume uniformly" },
  { hash: "20c9bba55b", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Audio Fuzzers : Initialise audio services one time＂ into main" },
  { hash: "3cf4c5b801", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂fix send null static meta to VENC when HDR Editing＂ into main" },
  { hash: "6b8559ddc7", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libaudiohal@aidl: Fix 'localReply' scope in 'sendCommand'＂ into main" },
  { hash: "ee0fe68474", date: "2024-04-16", author: "mnaganov@google.com", message: "libaudiohal@aidl: Fix 'localReply' scope in 'sendCommand'" },
  { hash: "5c8cbeda54", date: "2024-04-16", author: "chenguolin@xiaomi.corp-partner.google.com", message: "camera:fix wait request timeout in switching camera" },
  { hash: "82ad275673", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libaudiohal@aidl: Synchronize commands sending＂ into main" },
  { hash: "503b1d8526", date: "2024-04-15", author: "mnaganov@google.com", message: "libaudiohal@aidl: Synchronize commands sending" },
  { hash: "60af20cf87", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂C2SoftFlacEnc: Update max input buffer size calculation＂ into main" },
  { hash: "155481c21f", date: "2024-04-12", author: "hmahendrakar@google.com", message: "C2SoftFlacEnc: Update max input buffer size calculation" },
  { hash: "74656dddde", date: "2024-04-12", author: "wonsik@google.com", message: "Merge ＂Fix seek error in loop mode.＂ into main" },
  { hash: "e355f2e272", date: "2024-04-12", author: "haripriya.deshmukh@ittiam.com", message: "C2SoftAomEnc: Add support for configuring min max QP Params" },
  { hash: "005302b9e6", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂C2SoftOpusEnc: CleanUp output allocations for opus encoder＂ into main" },
  { hash: "d01e2598ed", date: "2024-04-12", author: "ming.zhou@nxp.com", message: "Fix seek error in loop mode." },
  { hash: "aa6cd7d3e7", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂GraphicsTraker: handle temporary errors in BQ＂ into main" },
  { hash: "73f984e258", date: "2024-04-11", author: "taklee@google.com", message: "GraphicsTraker: handle temporary errors in BQ" },
  { hash: "78f6d89f81", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂MediaCodec: fix 0-sized buffer handling＂ into main" },
  { hash: "b575aa324f", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Updated 'cc' field of fuzz_config in Android.bp file＂ into main" },
  { hash: "68af8e59ac", date: "2024-04-11", author: "wonsik@google.com", message: "MediaCodec: fix 0-sized buffer handling" },
  { hash: "1300acfa73", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ReverbContext: Add support for higher frame count.＂ into main" },
  { hash: "311342b2ce", date: "2024-04-11", author: "haripriya.deshmukh@ittiam.com", message: "C2SoftOpusEnc: CleanUp output allocations for opus encoder" },
  { hash: "9f09d81a1c", date: "2024-04-11", author: "akshata.jadhav@ittiam.com", message: "Updated 'cc' field of fuzz_config in Android.bp file" },
  { hash: "b4f2c4cd46", date: "2024-04-11", author: "suyog.pawar@ittiam.com", message: "Enable low-latency feature in av1 decoders" },
  { hash: "fdc86e2a5c", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libaudiohal@aidl: Follow up for callbacks handling＂ into main" },
  { hash: "4282cca6af", date: "2024-04-10", author: "mnaganov@google.com", message: "libaudiohal@aidl: Follow up for callbacks handling" },
  { hash: "544bfd016d", date: "2024-04-10", author: "hunga@google.com", message: "Merge ＂audio: enable frameworks/av bpfmt PREUPLOAD hooks＂ into main" },
  { hash: "f9410e8a10", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂MPEG4Writer: Remove timestamp validation＂ into main" },
  { hash: "5a9cbb27a7", date: "2024-04-10", author: "sbbanore@amazon.com", message: "Handle video track with invalid WxH to avoid mediaserver crash" },
  { hash: "faa2065048", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Matroskaextractor: improve findThumbnails() time.＂ into main" },
  { hash: "f909d513c7", date: "2024-04-09", author: "hmahendrakar@google.com", message: "MPEG4Writer: Remove timestamp validation" },
  { hash: "658922e9bc", date: "2024-04-09", author: "yaoshunkai@google.com", message: "Merge ＂Spatializer: allow vendor extension parameters＂ into main" },
  { hash: "0d53216119", date: "2024-04-09", author: "hunga@google.com", message: "audio: enable frameworks/av bpfmt PREUPLOAD hooks" },
  { hash: "271a14d19d", date: "2024-04-09", author: "yaoshunkai@google.com", message: "Spatializer: allow vendor extension parameters" },
  { hash: "fcc95542dd", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂VP9: Synthesize CSD from frame header＂ into main" },
  { hash: "1f6038341e", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AudioSystem : Add method to disable creation of thread pool＂ into main" },
  { hash: "ffc69fa1c7", date: "2024-04-09", author: "venkataramaa@google.com", message: "VP9: Synthesize CSD from frame header" },
  { hash: "239dab8497", date: "2024-04-09", author: "guochuang@xiaomi.corp-partner.google.com", message: "Matroskaextractor: improve findThumbnails() time." },
  { hash: "30fe7300b3", date: "2024-04-08", author: "enh@google.com", message: "Merge ＂Remove obsolete `neon:` clause.＂ into main" },
  { hash: "e95a81ae6b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Virtualizer Effect : Add support to force virtualization mode＂ into main" },
  { hash: "500714c47f", date: "2024-04-08", author: "enh@google.com", message: "Remove obsolete `neon:` clause." },
  { hash: "a81853e93e", date: "2024-04-08", author: "shraddha.basantwani@ittiam.com", message: "Audio Fuzzers : Initialise audio services one time" },
  { hash: "f2aa250531", date: "2024-04-08", author: "shraddha.basantwani@ittiam.com", message: "AudioSystem : Add method to disable creation of thread pool" },
  { hash: "ff8dca48e4", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^3 ＂VP9: Synthesize CSD from frame header＂＂ into main" },
  { hash: "70c25c1cf9", date: "2024-04-04", author: "rsavitski@google.com", message: "Revert^3 ＂VP9: Synthesize CSD from frame header＂" },
  { hash: "8837848d3b", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂VP9: Synthesize CSD from frame header＂＂ into main" },
  { hash: "018615e375", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂media: advertise detached surface capability for non-tunneled video decoders＂ into main" },
  { hash: "4f4e19bbc8", date: "2024-04-03", author: "yanqiang.fan@mediatek.com", message: "fix send null static meta to VENC when HDR Editing" },
  { hash: "d55f06f97d", date: "2024-04-02", author: "lajos@google.com", message: "media: advertise detached surface capability for non-tunneled video decoders" },
  { hash: "5c912fe8c9", date: "2024-04-02", author: "venkataramaa@google.com", message: "Revert^2 ＂VP9: Synthesize CSD from frame header＂" },
  { hash: "f38f9ce666", date: "2024-04-02", author: "shraddha.basantwani@ittiam.com", message: "Virtualizer Effect : Add support to force virtualization mode" },
  { hash: "658e70f518", date: "2024-04-02", author: "sneha.patil@ittiam.com", message: "ReverbContext: Add support for higher frame count." },
]});
repoLogs.push({ path: "frameworks/base", logs: [
  { hash: "0886f9289c43", date: "2024-04-26", author: "jeffdq@google.com", message: "Merge ＂Support new generated CustomFeatureFlags＂ into main" },
  { hash: "3539fa7df64c", date: "2024-04-26", author: "emarteca@google.com", message: "Merge ＂Add a finalizer to LockscreenCredential to wipe the LSKF on GC＂ into main" },
  { hash: "296079cc1291", date: "2024-04-26", author: "emarteca@google.com", message: "Merge ＂Add API flag for storage area API＂ into main" },
  { hash: "842a6656e9f6", date: "2024-04-26", author: "emarteca@google.com", message: "Add API flag for storage area API" },
  { hash: "f2b3fc05bf5c", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix typo in aapt2_results genrule.＂ into main" },
  { hash: "3577d5d05d51", date: "2024-04-26", author: "dariofreni@google.com", message: "Fix typo in aapt2_results genrule." },
  { hash: "08d389fc6220", date: "2024-04-25", author: "emarteca@google.com", message: "Add a finalizer to LockscreenCredential to wipe the LSKF on GC" },
  { hash: "9a76dedd00a5", date: "2024-04-25", author: "mattbuckley@google.com", message: "Merge ＂Add ADPF ownership for relevant files＂ into main" },
  { hash: "b832763a48ce", date: "2024-04-25", author: "mattbuckley@google.com", message: "Add ADPF ownership for relevant files" },
  { hash: "4857d7011dea", date: "2024-04-25", author: "emarteca@google.com", message: "Merge ＂Mitigate LSKF leaks in RecoverableKeyStoreManager＂ into main" },
  { hash: "562ea6037ef2", date: "2024-04-24", author: "emarteca@google.com", message: "Mitigate LSKF leaks in RecoverableKeyStoreManager" },
  { hash: "c2556685a6b5", date: "2024-04-24", author: "jeffdq@google.com", message: "Support new generated CustomFeatureFlags" },
  { hash: "548ee3851e39", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix NPE in SystemUI＂ into main" },
  { hash: "25d36a491643", date: "2024-04-24", author: "harshitmahajan@google.com", message: "Merge ＂Fixing RescuePartyTests＂ into main" },
  { hash: "dc21a0499726", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Create a flag for rescue party flag resets＂ into main" },
  { hash: "9f4250787060", date: "2024-04-24", author: "annabauza@google.com", message: "Merge ＂UserManagerService：getUserDataLU method should called by mUsersLock lock.＂ into main" },
  { hash: "e1773b2e4028", date: "2024-04-24", author: "harshitmahajan@google.com", message: "Fixing RescuePartyTests" },
  { hash: "952b686e56c3", date: "2024-04-24", author: "lijilou@xiaomi.corp-partner.google.com", message: "UserManagerService：getUserDataLU method should called by mUsersLock lock." },
  { hash: "489002ec4d7e", date: "2024-04-24", author: "ricow@google.com", message: "Merge ＂Use optimized resource shrinking for SystemUI＂ into main" },
  { hash: "65526b2114dc", date: "2024-04-24", author: "ricow@google.com", message: "Use optimized resource shrinking for SystemUI" },
  { hash: "3376c75176f3", date: "2024-04-24", author: "arunjohnson@google.com", message: "Merge ＂Correcting Offset and size checks while queing＂ into main" },
  { hash: "2ad6d539c2b3", date: "2024-04-23", author: "rprichard@google.com", message: "Merge ＂hwui: add missing <mutex> include＂ into main" },
  { hash: "09b8310348d3", date: "2024-04-23", author: "arunjohnson@google.com", message: "Correcting Offset and size checks while queing" },
  { hash: "067e0eb8fd5f", date: "2024-04-23", author: "harshitmahajan@google.com", message: "Create a flag for rescue party flag resets" },
  { hash: "a5c94e61fe05", date: "2024-04-23", author: "annabauza@google.com", message: "Merge ＂Integrating new Avatar Picker App in Settings＂ into main" },
  { hash: "487165c647ff", date: "2024-04-23", author: "annabauza@google.com", message: "Merge ＂Adding avatar picker to platform allow list＂ into main" },
  { hash: "bf62098c10cd", date: "2024-04-23", author: "aquilescanta@google.com", message: "Merge ＂Revert^2 ＂Simplify MediaSessionRecord callback invocations＂＂ into main" },
  { hash: "bc3bf5b04438", date: "2024-04-22", author: "rprichard@google.com", message: "hwui: add missing <mutex> include" },
  { hash: "c30aeaf42a06", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Sysconfig: Allow runtime differentiation of product configuration＂ into main" },
  { hash: "667714347f34", date: "2024-04-22", author: "waghpawan@google.com", message: "Merge ＂Block align start and length while punching holes＂ into main" },
  { hash: "cc4b23c71032", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove stale profile from CredentialManager＂ into main" },
  { hash: "a6d3a3381087", date: "2024-04-22", author: "christofferqa@google.com", message: "Remove stale profile from CredentialManager" },
  { hash: "d5ab603f8209", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix empty anr file when process exit early＂ into main" },
  { hash: "3454253222ec", date: "2024-04-22", author: "keanmariotti@google.com", message: "Merge ＂Update OWNERS for tracing related code＂ into main" },
  { hash: "7c9c464976b7", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from libs/WindowManager/Shell/src/com/android/wm/shell/pip/OWNERS＂ into main" },
  { hash: "b8c0af40899b", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from libs/WindowManager/Shell/src/com/android/wm/shell/pip2/OWNERS＂ into main" },
  { hash: "5910434493dd", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from packages/SystemUI/OWNERS＂ into main" },
  { hash: "5090c03660d9", date: "2024-04-22", author: "mpodolian@google.com", message: "Merge ＂Added missing code owners＂ into main" },
  { hash: "85f0ee3622ad", date: "2024-04-22", author: "annabauza@google.com", message: "Adding avatar picker to platform allow list" },
  { hash: "c6487432359f", date: "2024-04-22", author: "annabauza@google.com", message: "Integrating new Avatar Picker App in Settings" },
  { hash: "63b44c25cfa5", date: "2024-04-22", author: "pablogamito@google.com", message: "Update OWNERS for tracing related code" },
  { hash: "a56245f3901f", date: "2024-04-20", author: "waghpawan@google.com", message: "Block align start and length while punching holes" },
  { hash: "7e3b5f5787a0", date: "2024-04-19", author: "evitayan@google.com", message: "Merge ＂Dump IkeSession in VcnGatewayConnection#dump＂ into main" },
  { hash: "978ed252eafa", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Checking BadOffset while queuing buffers＂ into main" },
  { hash: "d05142228ab9", date: "2024-04-19", author: "prabirmsp@google.com", message: "Merge ＂IPackageManagerNative: Add getPackageUid＂ into main" },
  { hash: "022bdcc72b82", date: "2024-04-19", author: "aquilescanta@google.com", message: "Revert^2 ＂Simplify MediaSessionRecord callback invocations＂" },
  { hash: "84ebcbd07cdc", date: "2024-04-19", author: "jernej@google.com", message: "Merge ＂Revert ＂Simplify MediaSessionRecord callback invocations＂＂ into main" },
  { hash: "1e40a6c1261c", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂BiometricService: put the mthod of resetLockoutFor into handler when binder called and keep thread-safe in RingBuffer.＂ into main" },
  { hash: "7171819017ce", date: "2024-04-19", author: "henneman@google.com", message: "Merge ＂TEST_MAPPING: re-enable ScanningSettingsTest in presubmit＂ into main" },
  { hash: "f6b041100c9a", date: "2024-04-19", author: "paulduffin@google.com", message: "Merge ＂Add missing android.location.flags-aconfig-java to framework-location＂ into main" },
  { hash: "a42fc0f1a912", date: "2024-04-19", author: "jernej@google.com", message: "Revert ＂Simplify MediaSessionRecord callback invocations＂" },
  { hash: "b92cea9bdae4", date: "2024-04-19", author: "aquilescanta@google.com", message: "Merge ＂Simplify MediaSessionRecord callback invocations＂ into main" },
  { hash: "e9e339fcf489", date: "2024-04-19", author: "paulduffin@google.com", message: "Add missing android.location.flags-aconfig-java to framework-location" },
  { hash: "babdfbcb0a06", date: "2024-04-19", author: "lijilou@xiaomi.corp-partner.google.com", message: "BiometricService: put the mthod of resetLockoutFor into handler when binder called and keep thread-safe in RingBuffer." },
  { hash: "51e8133dcff4", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove @FlaggedApi for android.os.Build.VANILLA_ICE_CREAM＂ into main" },
  { hash: "95293e07c602", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a flag to choose the output format for the am profile command＂ into main" },
  { hash: "535b278366e6", date: "2024-04-18", author: "evitayan@google.com", message: "Dump IkeSession in VcnGatewayConnection#dump" },
  { hash: "8b390cb19118", date: "2024-04-18", author: "arunjohnson@google.com", message: "Checking BadOffset while queuing buffers" },
  { hash: "b7afa49e01ac", date: "2024-04-18", author: "henneman@google.com", message: "TEST_MAPPING: re-enable ScanningSettingsTest in presubmit" },
  { hash: "ade571062f3b", date: "2024-04-18", author: "evitayan@google.com", message: "Merge ＂Encode IkeSessionParams using getIkeOptions＂ into main" },
  { hash: "7c60e2c37544", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I4e92d70c,Ibf25ff58 into main" },
  { hash: "b54da2d7cdf1", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂cleanup messages allow list＂ into main" },
  { hash: "804f0134e8f5", date: "2024-04-18", author: "keanmariotti@google.com", message: "Avoid outer/inner class name clashes" },
  { hash: "2163c8ae365c", date: "2024-04-18", author: "keanmariotti@google.com", message: "Emit extension fields" },
  { hash: "18a165ea7ec5", date: "2024-04-18", author: "keanmariotti@google.com", message: "cleanup messages allow list" },
  { hash: "acc326408ca5", date: "2024-04-18", author: "emarteca@google.com", message: "Merge ＂Update arguments to vold binder to use byte[] secret for CE storage＂ into main" },
  { hash: "f3326ebec991", date: "2024-04-18", author: "inseob@google.com", message: "Merge ＂Build dirty-image-objects in Soong＂ into main" },
  { hash: "afd333e22bed", date: "2024-04-18", author: "waghpawan@google.com", message: "Merge ＂Adding FileSystemUtilsTests to presubmit＂ into main" },
  { hash: "03079c66073e", date: "2024-04-17", author: "prabirmsp@google.com", message: "IPackageManagerNative: Add getPackageUid" },
  { hash: "45645485e48c", date: "2024-04-17", author: "evitayan@google.com", message: "Merge ＂Check the existence of IpSecTransformState API with try catch＂ into main" },
  { hash: "0eee78203e52", date: "2024-04-17", author: "wonsik@google.com", message: "Merge ＂MediaCodec: add log around Handler.removeMessages＂ into main" },
  { hash: "5457e16d3295", date: "2024-04-17", author: "evitayan@google.com", message: "Encode IkeSessionParams using getIkeOptions" },
  { hash: "0346207e750a", date: "2024-04-17", author: "evitayan@google.com", message: "Check the existence of IpSecTransformState API with try catch" },
  { hash: "ff8446f88514", date: "2024-04-17", author: "wonsik@google.com", message: "MediaCodec: add log around Handler.removeMessages" },
  { hash: "e9e7e78f651b", date: "2024-04-17", author: "yixiaoluo@google.com", message: "Merge ＂MediaCas: Release cas resource only when all sessions are closed＂ into main" },
  { hash: "0b2278d9a4bb", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂crMoveBack＂ into main" },
  { hash: "1bd43fbb2de4", date: "2024-04-17", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Remove rundundant <test> tag＂ into android14-tests-dev am: 629a92deb0＂ into main" },
  { hash: "fe6fb6668e19", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove rundundant <test> tag＂ into android14-tests-dev am: 629a92deb0" },
  { hash: "04ddafe1eca5", date: "2024-04-17", author: "inseob@google.com", message: "Build dirty-image-objects in Soong" },
  { hash: "629a92deb0fc", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove rundundant <test> tag＂ into android14-tests-dev" },
  { hash: "62677b244391", date: "2024-04-16", author: "sumedhsen@google.com", message: "Remove rundundant <test> tag" },
  { hash: "53738cf5e4be", date: "2024-04-16", author: "emarteca@google.com", message: "Update arguments to vold binder to use byte[] secret for CE storage" },
  { hash: "d666832c39f1", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable reuse of LinearBlock for during secure playback＂ into main" },
  { hash: "bd161c547e83", date: "2024-04-16", author: "waghpawan@google.com", message: "Merge ＂Adding FileSystemUtilsTests to postsubmit＂ into main" },
  { hash: "2d3307f9eb3c", date: "2024-04-16", author: "shraddha.basantwani@ittiam.com", message: "MediaCas: Release cas resource only when all sessions are closed" },
  { hash: "df89c1e680a2", date: "2024-04-16", author: "aquilescanta@google.com", message: "Merge ＂Disable flaky testSelectAndTransferAndRelease＂ into main" },
  { hash: "f0f6981ae2e4", date: "2024-04-16", author: "aquilescanta@google.com", message: "Disable flaky testSelectAndTransferAndRelease" },
  { hash: "7fb8031b9dc4", date: "2024-04-16", author: "elaurent@google.com", message: "Merge ＂audio: DEVICE_MEDIA_UNMUTED_ON_PLUG_SET add hearing_aid＂ into main" },
  { hash: "f5a6523b2491", date: "2024-04-16", author: "rbraunstein@google.com", message: "Merge ＂Migrate TEST_MAPPING options -> Android.bp＂ into main" },
  { hash: "e77ac3220e19", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix uses_libs properties for OneMedia.＂ into main" },
  { hash: "b1b6f7f3495e", date: "2024-04-16", author: "aquilescanta@google.com", message: "Simplify MediaSessionRecord callback invocations" },
  { hash: "6dbaa54098b3", date: "2024-04-16", author: "aquilescanta@google.com", message: "Merge ＂Disable flaky MR2ManagerTests＂ into main" },
  { hash: "6f8aae448eb8", date: "2024-04-16", author: "ivanbuper@google.com", message: "Merge ＂Add Android Media Solutions to SettingsLib aconfig OWNERS＂ into main" },
  { hash: "df028a7df4dc", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂The order of paramenters is wrong.＂ into main" },
  { hash: "684639afd322", date: "2024-04-16", author: "cferris@google.com", message: "Merge ＂Add copy of f_accessory.h.＂ into main" },
  { hash: "a895d3a1280d", date: "2024-04-16", author: "rbraunstein@google.com", message: "Migrate TEST_MAPPING options -> Android.bp" },
  { hash: "17a51311efcf", date: "2024-04-15", author: "evitayan@google.com", message: "Merge changes Iccc47e83,I163cb274 into main" },
  { hash: "afae230c3539", date: "2024-04-15", author: "cferris@google.com", message: "Add copy of f_accessory.h." },
  { hash: "bd836d4c0b0f", date: "2024-04-15", author: "waghpawan@google.com", message: "Adding FileSystemUtilsTests to presubmit" },
  { hash: "9e3d6734f3ec", date: "2024-04-15", author: "waghpawan@google.com", message: "Adding FileSystemUtilsTests to postsubmit" },
  { hash: "541ccea347e5", date: "2024-04-15", author: "aquilescanta@google.com", message: "Disable flaky MR2ManagerTests" },
  { hash: "b402f570f252", date: "2024-04-15", author: "waghpawan@google.com", message: "Merge changes from topic ＂punch_holes_apk＂ into main" },
  { hash: "7239f02c6bf8", date: "2024-04-15", author: "ivanbuper@google.com", message: "Add Android Media Solutions to SettingsLib aconfig OWNERS" },
  { hash: "23311d456a77", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add metaData null check in isRequiredAppDeclaredInMetadata＂ into main" },
  { hash: "0affadc4ca82", date: "2024-04-15", author: "lalitm@google.com", message: "Merge ＂fw: delay TracingServiceProxy until PHASE_THIRD_PARTY_APPS_CAN_START＂ into main" },
  { hash: "bc66657b3b2c", date: "2024-04-15", author: "jiakaiz@google.com", message: "Fix uses_libs properties for OneMedia." },
  { hash: "c21afc29c3a0", date: "2024-04-15", author: "jeongik@google.com", message: "Add metaData null check in isRequiredAppDeclaredInMetadata" },
  { hash: "dc44cbbb4258", date: "2024-04-15", author: "lalitm@google.com", message: "fw: delay TracingServiceProxy until PHASE_THIRD_PARTY_APPS_CAN_START" },
  { hash: "34f5ee32d239", date: "2024-04-14", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove mateuszc@google.com from packages/SystemUI/OWNERS" },
  { hash: "b6b41898d71e", date: "2024-04-14", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove mateuszc@google.com from libs/WindowManager/Shell/src/com/android/wm/shell/pip2/OWNERS" },
  { hash: "4a176895ce36", date: "2024-04-14", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove mateuszc@google.com from libs/WindowManager/Shell/src/com/android/wm/shell/pip/OWNERS" },
  { hash: "32637fbc2579", date: "2024-04-13", author: "evitayan@google.com", message: "VCN: Ignore packet loss detection when there is too few traffic" },
  { hash: "6bc811da45d0", date: "2024-04-13", author: "evitayan@google.com", message: "VCN: Handle sequence number leap in packet loss detector" },
  { hash: "2724e0f6fdc5", date: "2024-04-12", author: "waghpawan@google.com", message: "Punch extracted ELF64 files" },
  { hash: "4b1184df8902", date: "2024-04-12", author: "waghpawan@google.com", message: "Punch holes in extra field in local headers inside apk" },
  { hash: "051514788249", date: "2024-04-12", author: "justkoomega@gmail.com", message: "The order of paramenters is wrong." },
  { hash: "cb47bdacd549", date: "2024-04-12", author: "waghpawan@google.com", message: "Add Extra field info in ZipFileRO" },
  { hash: "52bd4f135acd", date: "2024-04-12", author: "evitayan@google.com", message: "Merge ＂VCN: Refactor getPacketLossRatePercentage to return an object＂ into main" },
  { hash: "6b9f2df3469e", date: "2024-04-12", author: "evitayan@google.com", message: "VCN: Refactor getPacketLossRatePercentage to return an object" },
  { hash: "5fb6f67e1989", date: "2024-04-12", author: "arunjohnson@google.com", message: "Enable reuse of LinearBlock for during secure playback" },
  { hash: "92e7cc4cdb29", date: "2024-04-12", author: "ebiggers@google.com", message: "Merge ＂Remove android.security.KeyStore#getInstance()＂ into main" },
  { hash: "1fc9f2216db7", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add Framework and VM capabilities to am＂ into main" },
  { hash: "18e4fdc211e2", date: "2024-04-11", author: "sanglardf@google.com", message: "Add Framework and VM capabilities to am" },
  { hash: "f647719c2c04", date: "2024-04-11", author: "waghpawan@google.com", message: "Merge ＂Flag punch hole changes with build time flag＂ into main" },
  { hash: "a484783a0a8f", date: "2024-04-11", author: "yimingpan@google.com", message: "Merge ＂APIs in a nested class can be flagged by outer class.＂ into main" },
  { hash: "114bff10acd8", date: "2024-04-11", author: "waghpawan@google.com", message: "Merge changes from topic ＂punch_shared_libs＂ into main" },
  { hash: "eb7fea6f33cb", date: "2024-04-11", author: "ewtqyqyewtqyqy@gmail.com", message: "Fix NPE in SystemUI" },
  { hash: "5e04e9a1c47e", date: "2024-04-11", author: "paulduffin@google.com", message: "Merge ＂Do not split struct properties based on soong_config_variables＂ into main" },
  { hash: "8948d071a20f", date: "2024-04-11", author: "waghpawan@google.com", message: "Flag punch hole changes with build time flag" },
  { hash: "1ad068f53cc8", date: "2024-04-11", author: "waghpawan@google.com", message: "Adding FileSystemUtils test" },
  { hash: "5f47f06075d9", date: "2024-04-11", author: "waghpawan@google.com", message: "Punch holes in 64 bit native libs" },
  { hash: "38d8f72e8dfc", date: "2024-04-11", author: "waghpawan@google.com", message: "Add method to return Zip file name" },
  { hash: "dd35c2f8683e", date: "2024-04-10", author: "yimingpan@google.com", message: "APIs in a nested class can be flagged by outer class." },
  { hash: "209c1cda3774", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂OomKillRecord: Track new oom/mark_victim tracepoint fields＂ into main" },
  { hash: "00f480e0b833", date: "2024-04-10", author: "jihoonkang@google.com", message: "Do not split struct properties based on soong_config_variables" },
  { hash: "835b8f3329e8", date: "2024-04-10", author: "carlosgalo@google.com", message: "OomKillRecord: Track new oom/mark_victim tracepoint fields" },
  { hash: "22be9ae76937", date: "2024-04-10", author: "yimingpan@google.com", message: "Merge ＂Fix: classes with constructors only shouldn't be skipped.＂ into main" },
  { hash: "14e87269e53f", date: "2024-04-10", author: "harshitmahajan@google.com", message: "[CrashRecovery] Moving the files back" },
  { hash: "64d8d5be146b", date: "2024-04-10", author: "harshitmahajan@google.com", message: "Revert^3 ＂Update the BackgroundThread dependency＂" },
  { hash: "04cb3342b2e6", date: "2024-04-10", author: "harshitmahajan@google.com", message: "Revert^3 ＂Utils required for CrashRecovery module＂" },
  { hash: "db74218a23f7", date: "2024-04-10", author: "ebiggers@google.com", message: "Remove android.security.KeyStore#getInstance()" },
  { hash: "3820160a3f00", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Unregister broadcast receiver when user removed＂ into main" },
  { hash: "0f5a35fbe50d", date: "2024-04-10", author: "song.jiayin1@zte.com.cn", message: "Unregister broadcast receiver when user removed" },
  { hash: "823c15d5af23", date: "2024-04-09", author: "yimingpan@google.com", message: "Fix: classes with constructors only shouldn't be skipped." },
  { hash: "412cb16d5474", date: "2024-04-09", author: "amallampati@google.com", message: "Merge ＂Google RCS uses FTEU MO SMS for phone number verification [ Week 08, 09 & 10]＂ into main" },
  { hash: "d5e36cdf2e13", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Utils required for CrashRecovery module＂＂ into main" },
  { hash: "15ba5a9097fa", date: "2024-04-09", author: "harshitmahajan@google.com", message: "Revert^2 ＂Utils required for CrashRecovery module＂" },
  { hash: "59dcfbd1301d", date: "2024-04-09", author: "quic_xiaohuin@quicinc.com", message: "Fix empty anr file when process exit early" },
  { hash: "318e906e5a08", date: "2024-04-09", author: "arteiro@google.com", message: "Merge ＂Updating ownership of color resources＂ into main" },
  { hash: "fd9335cd8f0a", date: "2024-04-09", author: "nikolayelenkov@google.com", message: "Merge changes from topic ＂fbe-wipe-no-reboot＂ into main" },
  { hash: "12b5db18c51c", date: "2024-04-09", author: "jeongik@google.com", message: "Merge ＂Add //visibility:any_system_partition＂ into main" },
  { hash: "ad2da357f823", date: "2024-04-08", author: "jji@google.com", message: "Merge changes from topic ＂bug_298263955_proxy_warning＂ into main" },
  { hash: "11514e7413e2", date: "2024-04-08", author: "rbraunstein@google.com", message: "Merge ＂Migrating test options From TEST_MAPPING -> Android.bp＂ into main" },
  { hash: "945a0e1d5d20", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂nfc: Add CtsNdefTestCases to presubmit＂ into main" },
  { hash: "1ad62c2472e7", date: "2024-04-08", author: "henrichataing@google.com", message: "nfc: Add CtsNdefTestCases to presubmit" },
  { hash: "7d782bbb73bc", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂MediaSessionRecord: add synchronize control for modification of mControllerCallbackHolders＂ into main" },
  { hash: "0c1110096270", date: "2024-04-08", author: "hkurli@google.com", message: "Merge ＂Add feature flag for replace replace_vpn_profile_store＂ into main" },
  { hash: "aeb86cdc5908", date: "2024-04-08", author: "nikolayelenkov@google.com", message: "Call ISecretKeeper.deleteAll() from deleteSecrets()" },
  { hash: "0d00031851e9", date: "2024-04-08", author: "nikolayelenkov@google.com", message: "Delete keystore keys from RecoveryService.rebootRecoveryWithCommand()" },
  { hash: "c761eab96622", date: "2024-04-05", author: "harshitmahajan@google.com", message: "Merge ＂Revert^2 ＂Update the BackgroundThread dependency＂＂ into main" },
  { hash: "d47fc309e4e3", date: "2024-04-05", author: "harshitmahajan@google.com", message: "Revert^2 ＂Update the BackgroundThread dependency＂" },
  { hash: "af952607e887", date: "2024-04-05", author: "roosa@google.com", message: "Merge ＂Update android_tracing_Perfetto* owners＂ into main" },
  { hash: "0a1bc7215767", date: "2024-04-05", author: "pablogamito@google.com", message: "Update android_tracing_Perfetto* owners" },
  { hash: "0431bac2d853", date: "2024-04-05", author: "jeongik@google.com", message: "Add //visibility:any_system_partition" },
  { hash: "3063c64e322a", date: "2024-04-05", author: "chenxin20@xiaomi.com", message: "audio: DEVICE_MEDIA_UNMUTED_ON_PLUG_SET add hearing_aid" },
  { hash: "0c89b7649a52", date: "2024-04-05", author: "pittamalla@google.com", message: "Google RCS uses FTEU MO SMS for phone number verification [ Week 08, 09 & 10]" },
  { hash: "063ac7b8fd99", date: "2024-04-05", author: "ericymiao@google.com", message: "Merge ＂Add compressed bitmaps to be included in `am dumpheap`＂ into main" },
  { hash: "d9b0dc595e26", date: "2024-04-04", author: "rbraunstein@google.com", message: "Migrating test options From TEST_MAPPING -> Android.bp" },
  { hash: "bd32b151f643", date: "2024-04-04", author: "mpodolian@google.com", message: "Added missing code owners" },
  { hash: "281a76bf08f1", date: "2024-04-04", author: "ebiggers@google.com", message: "Merge ＂Use consistent helper class for keystore authorization＂ into main" },
  { hash: "21345e885bbc", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from apex/jobscheduler/framework/java/android/app/job/OWNERS＂ into main" },
  { hash: "e7bf8e5b91d2", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from apex/jobscheduler/service/java/com/android/server/tare/OWNERS＂ into main" },
  { hash: "711bc4d9c5f4", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from cmds/incident_helper/OWNERS＂ into main" },
  { hash: "dbaf8c353c4f", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from core/proto/OWNERS＂ into main" },
  { hash: "baaf8a49c55e", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from services/core/java/com/android/server/am/OWNERS＂ into main" },
  { hash: "8a60e05fd18b", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from services/core/java/com/android/server/power/batterysaver/OWNERS＂ into main" },
  { hash: "b85cda8247a2", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from services/core/java/com/android/server/utils/quota/OWNERS＂ into main" },
  { hash: "598dfd66cba5", date: "2024-04-04", author: "juliepan@google.com", message: "Merge ＂Remove kwekua@google.com from apex/jobscheduler/OWNERS＂ into main" },
  { hash: "0624a5c15b93", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from apex/jobscheduler/OWNERS" },
  { hash: "9c85945f821f", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from services/core/java/com/android/server/utils/quota/OWNERS" },
  { hash: "a431de0b4027", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from services/core/java/com/android/server/power/batterysaver/OWNERS" },
  { hash: "16f86b529ae1", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from services/core/java/com/android/server/am/OWNERS" },
  { hash: "72f2f9d8ea14", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from core/proto/OWNERS" },
  { hash: "d18052c7e654", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from cmds/incident_helper/OWNERS" },
  { hash: "0c46ffad24b9", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from apex/jobscheduler/service/java/com/android/server/tare/OWNERS" },
  { hash: "894439e4d6a7", date: "2024-04-04", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove kwekua@google.com from apex/jobscheduler/framework/java/android/app/job/OWNERS" },
  { hash: "296b1164f427", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update OWNER for SensitiveContentProtectionManager＂ into main" },
  { hash: "c3d102200d6a", date: "2024-04-04", author: "nkapron@google.com", message: "Merge ＂ShadeCarrierGroupController: remove excessive log＂ into main" },
  { hash: "af4b7de71130", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adapt to changing function signature.＂ into main" },
  { hash: "02d17267e77a", date: "2024-04-04", author: "shrinidhihegde@google.com", message: "Merge ＂update package watchdog to perform mitigations after every reboot once threshold is reached.＂ into main" },
  { hash: "0d60b0757428", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I0e61db91,Icb7ab995 into main" },
  { hash: "8a8fa607fbeb", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update RescueParty throttle duration＂ into main" },
  { hash: "1df0ae1849c9", date: "2024-04-04", author: "harshitmahajan@google.com", message: "Revert ＂Update the BackgroundThread dependency＂" },
  { hash: "940582654178", date: "2024-04-04", author: "harshitmahajan@google.com", message: "Revert ＂Utils required for CrashRecovery module＂" },
  { hash: "a1837233a945", date: "2024-04-04", author: "harshitmahajan@google.com", message: "Update RescueParty throttle duration" },
  { hash: "6dfecff783a4", date: "2024-04-04", author: "rgl@google.com", message: "Merge ＂Modify comments for SurfaceSession.＂ into main" },
  { hash: "81d97d942870", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂AMS: Adding boot complete cmd code for LMKD＂ into main" },
  { hash: "c2afb0c8fe43", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "9430cdaea2f7", date: "2024-04-04", author: "kumarashishg@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
  { hash: "5b2447940bf8", date: "2024-04-03", author: "rmacgregor@google.com", message: "Update OWNER for SensitiveContentProtectionManager" },
  { hash: "6b913abefca7", date: "2024-04-04", author: "jiayongqiang@xiaomi.com", message: "Modify comments for SurfaceSession." },
  { hash: "093c0d8914a5", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix font update failure＂ into main" },
  { hash: "21c4dd4de0ce", date: "2024-04-03", author: "danalbert@google.com", message: "Adapt to changing function signature." },
  { hash: "d1867469b996", date: "2024-04-03", author: "nkapron@google.com", message: "ShadeCarrierGroupController: remove excessive log" },
  { hash: "95d99a3936ce", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix a misleading error message.＂ into main" },
  { hash: "710c27c8a207", date: "2024-04-03", author: "carlosgalo@google.com", message: "AMS: Adding boot complete cmd code for LMKD" },
  { hash: "badbb20d08d2", date: "2024-04-03", author: "jihoonkang@google.com", message: "Merge ＂Modify non updatable droidstubs dependency based on release flag＂ into main" },
  { hash: "3c56021d8981", date: "2024-04-03", author: "shrinidhihegde@google.com", message: "update package watchdog to perform mitigations after every reboot once threshold is reached." },
  { hash: "f9c1047ed2ce", date: "2024-04-03", author: "rbraunstein@google.com", message: "Merge ＂Migrate TestMapping options to Android.bp Presubmit＂ into main" },
  { hash: "85813d30be76", date: "2024-04-03", author: "kennethford@google.com", message: "Merge ＂Adds kennethford@ and lihongyu@ to devicestate package OWNERS＂ into main" },
  { hash: "11b8f124907d", date: "2024-04-03", author: "arteiro@google.com", message: "Updating ownership of color resources" },
  { hash: "6863c10be40e", date: "2024-04-03", author: "mythria@google.com", message: "Add a flag to choose the output format for the am profile command" },
  { hash: "55a60a5a8fbc", date: "2024-04-03", author: "nona@google.com", message: "Fix font update failure" },
  { hash: "93673abba817", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove unused frameworks/base/Android.mk＂ into main" },
  { hash: "9c389cccd8cd", date: "2024-04-03", author: "lajos@google.com", message: "Merge ＂media: support MediaCodec::detachOutputSurface＂ into main" },
  { hash: "1e774b801770", date: "2024-04-03", author: "nelsonli@google.com", message: "Remove unused frameworks/base/Android.mk" },
  { hash: "c9fc665ec094", date: "2024-04-03", author: "enh@google.com", message: "Fix a misleading error message." },
  { hash: "2d295aea9fd3", date: "2024-04-02", author: "jihoonkang@google.com", message: "Modify non updatable droidstubs dependency based on release flag" },
  { hash: "dc20b19137cd", date: "2024-04-02", author: "devinmoore@google.com", message: "Merge ＂Add some binder transaction info when dumping backtraces for ANR＂ into main" },
  { hash: "9a856d325ca1", date: "2024-04-02", author: "jji@google.com", message: "Log the excessive incoming binder proxies into statsd" },
  { hash: "eaa72139515f", date: "2024-04-02", author: "jji@google.com", message: "Add a feature flag to log excessive incoming binder proxies in statsd" },
  { hash: "45e14fcb6cd4", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Cleanup: remove logging of LMK_STAT_STATE_CHANGED＂ into main" },
  { hash: "5989313dd325", date: "2024-04-02", author: "rbraunstein@google.com", message: "Migrate TestMapping options to Android.bp Presubmit" },
  { hash: "baf33d2f1f16", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂nfc(api): Add OEM extension surface＂ into main" },
  { hash: "246079852de8", date: "2024-04-02", author: "rslawik@google.com", message: "Cleanup: remove logging of LMK_STAT_STATE_CHANGED" },
  { hash: "b540eb9d6ee3", date: "2024-04-02", author: "devinmoore@google.com", message: "Add some binder transaction info when dumping backtraces for ANR" },
  { hash: "9750a104497c", date: "2024-04-02", author: "yimingpan@google.com", message: "Merge ＂Fix: some flagged APIs are not recorded.＂ into main" },
  { hash: "d48d873a2f6d", date: "2024-04-02", author: "ericymiao@google.com", message: "Add compressed bitmaps to be included in `am dumpheap`" },
  { hash: "ba5c741f77bc", date: "2024-04-02", author: "mrziwang@google.com", message: "Merge ＂Remove skip_jarjar_repackage＂ into main" },
  { hash: "e3294fcd88d2", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update OWNERS of AppWidgetService＂ into main" },
  { hash: "4649135400f5", date: "2024-04-02", author: "yimingpan@google.com", message: "Fix: some flagged APIs are not recorded." },
  { hash: "98706373ff26", date: "2024-04-02", author: "lanzhi@google.com", message: "Merge ＂Refactor android_os_Debug to use androidprocheaps＂ into main" },
  { hash: "f35b51d93ea3", date: "2024-04-02", author: "lanzhi@google.com", message: "Refactor android_os_Debug to use androidprocheaps" },
  { hash: "96c9d9f812b2", date: "2024-04-02", author: "mrziwang@google.com", message: "Remove skip_jarjar_repackage" },
  { hash: "a43295405332", date: "2024-04-02", author: "rpius@google.com", message: "nfc(api): Add OEM extension surface" },
  { hash: "f7598e45ebf1", date: "2024-04-02", author: "pinyaoting@google.com", message: "Update OWNERS of AppWidgetService" },
  { hash: "ae51c4299f8e", date: "2024-04-02", author: "brup@google.com", message: "Merge ＂Revert ＂Updating ownership of color resources＂＂ into main" },
  { hash: "ade1f883d7d2", date: "2024-04-02", author: "brup@google.com", message: "Revert ＂Updating ownership of color resources＂" },
  { hash: "027267002419", date: "2024-04-02", author: "arteiro@google.com", message: "Merge ＂Updating ownership of color resources＂ into main" },
  { hash: "f61fae159d1a", date: "2024-04-02", author: "arteiro@google.com", message: "Updating ownership of color resources" },
  { hash: "3a7c83a847ca", date: "2024-04-02", author: "lajos@google.com", message: "media: support MediaCodec::detachOutputSurface" },
]});
repoLogs.push({ path: "frameworks/compile/libbcc", logs: [
]});
repoLogs.push({ path: "frameworks/compile/mclinker", logs: [
]});
repoLogs.push({ path: "frameworks/compile/slang", logs: [
]});
repoLogs.push({ path: "frameworks/ex", logs: [
  { hash: "2fd62639", date: "2024-04-23", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "frameworks/hardware/interfaces", logs: [
]});
repoLogs.push({ path: "frameworks/layoutlib", logs: [
]});
repoLogs.push({ path: "frameworks/libs/binary_translation", logs: [
  { hash: "29b0a3fb", date: "2024-04-25", author: "levarum@google.com", message: "Merge ＂berberis_all: Run tests when target allows＂ into main" },
  { hash: "78c8b6f7", date: "2024-04-25", author: "levarum@google.com", message: "berberis_all: Run tests when target allows" },
  { hash: "79234934", date: "2024-04-24", author: "levarum@google.com", message: "kernel_api: Emulate /proc/self/maps" },
  { hash: "5fe6d56c", date: "2024-04-24", author: "levarum@google.com", message: "base: export fd.h" },
  { hash: "219fd073", date: "2024-04-24", author: "paulfaria@google.com", message: "Merge ＂[berberis/runtime] Enable two-gear translation by default＂ into main" },
  { hash: "9c08eee2", date: "2024-04-24", author: "hainesy@google.com", message: "Implement Rem(u) vv and vx as vector intrinsics" },
  { hash: "f76d5f05", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add Rem intrinsics＂ into main" },
  { hash: "c9512ecb", date: "2024-04-23", author: "paulfaria@google.com", message: "[berberis/runtime] Enable two-gear translation by default" },
  { hash: "9b0ed417", date: "2024-04-22", author: "hainesy@google.com", message: "Add Rem intrinsics" },
  { hash: "bc5c5cb9", date: "2024-04-18", author: "jzgriffin@google.com", message: "riscv64: Extend integer args passed host-to-guest" },
  { hash: "783553b8", date: "2024-04-18", author: "hainesy@google.com", message: "Merge ＂Add vdiv/u.vx as intrinsics＂ into main" },
  { hash: "1aa28e38", date: "2024-04-17", author: "hainesy@google.com", message: "Add vdiv/u.vx as intrinsics" },
  { hash: "2cc8056c", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add Vfrsqrt7.v as intrinsic＂ into main" },
  { hash: "ff2887ba", date: "2024-04-16", author: "levarum@google.com", message: "signal: manage guest handlers using shared_ptr" },
  { hash: "7363dc1e", date: "2024-04-15", author: "hainesy@google.com", message: "Add Vfrsqrt7.v as intrinsic" },
  { hash: "296fe200", date: "2024-04-14", author: "levarum@google.com", message: "clone: add test for handlers sharing" },
  { hash: "14fc3828", date: "2024-04-12", author: "sijiec@google.com", message: "Merge ＂[Berberis][CrashReporting] Resolve LoadGuestStateRegisters symbol issue＂ into main" },
  { hash: "cfeb45d9", date: "2024-04-12", author: "sijiec@google.com", message: "[Berberis][CrashReporting] Resolve LoadGuestStateRegisters symbol issue" },
  { hash: "65bd50d9", date: "2024-04-11", author: "hainesy@google.com", message: "Merge ＂Add RSqrtEstimate as an intrinsic＂ into main" },
  { hash: "322a9b34", date: "2024-04-11", author: "hainesy@google.com", message: "Add RSqrtEstimate as an intrinsic" },
  { hash: "59f39d29", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂decoder: rename Unimplemented to Undefined＂ into main" },
  { hash: "0e7d00a6", date: "2024-04-11", author: "levarum@google.com", message: "Merge changes Id07a9d96,I08a08322 into main" },
  { hash: "c2f04034", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I2b411e13,Iea7acf95 into main" },
  { hash: "042d7f20", date: "2024-04-11", author: "levarum@google.com", message: "decoder: rename Unimplemented to Undefined" },
  { hash: "9024e1d1", date: "2024-04-11", author: "levarum@google.com", message: "clone: support CLONE_VM without CLONE_SIGHAND" },
  { hash: "cb40c982", date: "2024-04-11", author: "levarum@google.com", message: "kernel_api: disable pending signals around syscalls" },
  { hash: "10ddf85f", date: "2024-04-11", author: "levarum@google.com", message: "signals: Make handlers a property of guest thread" },
  { hash: "0a6a1e89", date: "2024-04-11", author: "levarum@google.com", message: "kernel_api: enhance RunGuestSyscall" },
  { hash: "7f7a3272", date: "2024-04-10", author: "isma@google.com", message: "[berberis] vslidedown and vslide1down are ok with intersecting vector groups" },
  { hash: "39e7be5b", date: "2024-04-09", author: "khim@google.com", message: "Merge ＂riscv64: Restore SP on host call frame exit＂ into main" },
  { hash: "6f7cf85c", date: "2024-04-09", author: "jzgriffin@google.com", message: "riscv64: Restore SP on host call frame exit" },
  { hash: "266091b7", date: "2024-04-09", author: "yikong@google.com", message: "Fix build on clang-r522817" },
  { hash: "8bfdb555", date: "2024-04-08", author: "paulfaria@google.com", message: "Merge ＂Add viota.m instruction＂ into main" },
  { hash: "1577a6ce", date: "2024-04-05", author: "paulfaria@google.com", message: "Add viota.m instruction" },
  { hash: "23833211", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Implement getTrampolineForFunctionPointer＂ into main" },
  { hash: "875f13e8", date: "2024-04-05", author: "dimitry@google.com", message: "Implement getTrampolineForFunctionPointer" },
  { hash: "d337765a", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use `phony_rule_defaults` to rewrite the dependencies of `berberis_all`.＂ into main" },
  { hash: "c2770ca5", date: "2024-04-03", author: "dimitry@google.com", message: "Merge ＂guest_loader: Store dlerror in GuestLoader＂ into main" },
  { hash: "0a0b830d", date: "2024-04-03", author: "nelsonli@google.com", message: "Use `phony_rule_defaults` to rewrite the dependencies of `berberis_all`." },
  { hash: "d6bae56c", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Convert `berberis_all` to Android.bp＂ into main" },
  { hash: "46a3ffdb", date: "2024-04-02", author: "dimitry@google.com", message: "Merge ＂[Berberis] Update nogrod＂ into main" },
  { hash: "fe31e529", date: "2024-04-02", author: "sijiec@google.com", message: "[Berberis] Update nogrod" },
]});
repoLogs.push({ path: "frameworks/libs/gsma_services", logs: [
]});
repoLogs.push({ path: "frameworks/libs/modules-utils", logs: [
  { hash: "a754dc7", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simplify IsAtLeastU()＂ into main" },
]});
repoLogs.push({ path: "frameworks/libs/native_bridge_support", logs: [
  { hash: "08cece8", date: "2024-04-16", author: "sijiec@google.com", message: "Merge ＂[Berberis][CrashReporting] Improving accessor library＂ into main" },
  { hash: "0ca0d9f", date: "2024-04-15", author: "sijiec@google.com", message: "[Berberis][CrashReporting] Improving accessor library" },
  { hash: "e32ddc9", date: "2024-04-12", author: "dimitry@google.com", message: "Update libandroid stubs and proxies" },
  { hash: "3470cf8", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Do not convert native methods＂ into main" },
  { hash: "41e8e27", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update the message to keep the dependencies of berberis_all synchronized.＂ into main" },
  { hash: "a48496e", date: "2024-04-03", author: "dimitry@google.com", message: "Merge ＂libcamera2ndk: update trampolines and libraries＂ into main" },
  { hash: "2e5c4c0", date: "2024-04-03", author: "dimitry@google.com", message: "Merge ＂Update api json files＂ into main" },
  { hash: "8691055", date: "2024-04-03", author: "dimitry@google.com", message: "libcamera2ndk: update trampolines and libraries" },
  { hash: "c9f621c", date: "2024-04-03", author: "dimitry@google.com", message: "Update api json files" },
  { hash: "493b8c3", date: "2024-04-03", author: "nelsonli@google.com", message: "Update the message to keep the dependencies of berberis_all synchronized." },
  { hash: "8366aec", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a warning to keep variables related to berberis_all synchronized.＂ into main" },
]});
repoLogs.push({ path: "frameworks/libs/service_entitlement", logs: [
]});
repoLogs.push({ path: "frameworks/libs/systemui", logs: [
  { hash: "02fe034", date: "2024-04-23", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "frameworks/minikin", logs: [
]});
repoLogs.push({ path: "frameworks/multidex", logs: [
]});
repoLogs.push({ path: "frameworks/native", logs: [
  { hash: "951e73500c", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add missing header for std::binary_search＂ into main" },
  { hash: "28205a393f", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Fix sync issue with handling display state changes＂ into main" },
  { hash: "be85d4f3fd", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update description for debug.renderengine.backend＂ into main" },
  { hash: "e9f1135098", date: "2024-04-22", author: "nscobie@google.com", message: "Update description for debug.renderengine.backend" },
  { hash: "38f51279d1", date: "2024-04-22", author: "qsr@chromium.org", message: "Add missing header for std::binary_search" },
  { hash: "44b6216a2d", date: "2024-04-19", author: "prabirmsp@google.com", message: "Merge ＂IPackageManagerNative: Add getPackageUid＂ into main" },
  { hash: "686c83d523", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Expose RpcServer::setMaxThreads in BinderRpc Rust API.＂ into main" },
  { hash: "c172313bba", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂binderLibTest: catch binder driver with reversed freezing＂ into main" },
  { hash: "fad1310658", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Updated fuzz_config in Android.bp file＂ into main" },
  { hash: "55d76349d2", date: "2024-04-18", author: "radsaggi@google.com", message: "Expose RpcServer::setMaxThreads in BinderRpc Rust API." },
  { hash: "e33f7da58c", date: "2024-04-18", author: "cferris@google.com", message: "Merge ＂Update for kernel 6.8 headers.＂ into main" },
  { hash: "5fbf6b2a0f", date: "2024-04-17", author: "prabirmsp@google.com", message: "IPackageManagerNative: Add getPackageUid" },
  { hash: "39fb2e6fda", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix flaky notifyPowerBoostNotifiesTouchEvent test＂ into main" },
  { hash: "6e495a7ca7", date: "2024-04-16", author: "mattbuckley@google.com", message: "Fix flaky notifyPowerBoostNotifiesTouchEvent test" },
  { hash: "8f6abf19cc", date: "2024-04-16", author: "cferris@google.com", message: "Update for kernel 6.8 headers." },
  { hash: "9a4ec89429", date: "2024-04-15", author: "vishnun@google.com", message: "DO NOT MERGE: Fix sync issue with handling display state changes" },
  { hash: "eaeac94025", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add separate OWNERS file for SF tests.＂ into main" },
  { hash: "3ab2a9d7df", date: "2024-04-15", author: "whisperwing@google.com", message: "Add separate OWNERS file for SF tests." },
  { hash: "5da9a27da3", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder_rs: Add Rust binderRpcTestService on Trusty＂ into main" },
  { hash: "be5eaf3d35", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂trusty-libbinder-rs-service＂ into main" },
  { hash: "8ebeb61a4b", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix -Wfortify-source warning (2nd)＂ into main" },
  { hash: "963c2298c8", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add missing argument to ALOGE＂ into main" },
  { hash: "4634c90ba4", date: "2024-04-12", author: "aliceryhl@google.com", message: "binderLibTest: catch binder driver with reversed freezing" },
  { hash: "9bb855d3c6", date: "2024-04-11", author: "yikong@google.com", message: "Fix -Wfortify-source warning (2nd)" },
  { hash: "ce96a6075c", date: "2024-04-11", author: "akshata.jadhav@ittiam.com", message: "Updated fuzz_config in Android.bp file" },
  { hash: "2617c8434c", date: "2024-04-11", author: "ahomescu@google.com", message: "rpcbinder: Add Trusty server module" },
  { hash: "a800ac7b2c", date: "2024-04-11", author: "ahomescu@google.com", message: "libbinder: Add ARpcServerTrusty API" },
  { hash: "67d652854a", date: "2024-04-10", author: "licorne@google.com", message: "Add missing argument to ALOGE" },
  { hash: "dfa78e4538", date: "2024-04-10", author: "ahomescu@google.com", message: "libbinder_rs: Add Rust binderRpcTestService on Trusty" },
  { hash: "ab2daeca28", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder_rs: Add libbinder_rs_on_trusty_mock＂ into main" },
  { hash: "9ecd5a2566", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder: Add libbinder_ndk_on_trusty_mock＂ into main" },
  { hash: "5d84fd8ba6", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder: Add internal API to RpcServerTrusty for Rust＂ into main" },
  { hash: "3bd01f6482", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
  { hash: "fd001b342c", date: "2024-04-09", author: "jeongik@google.com", message: "Merge ＂Add //visibility:any_system_partition＂ into main" },
  { hash: "ffdc64639c", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂rust/binder_rpc_test: Build on Trusty＂ into main" },
  { hash: "77112778b4", date: "2024-04-08", author: "ahomescu@google.com", message: "libbinder: Add internal API to RpcServerTrusty for Rust" },
  { hash: "8e5d5180c0", date: "2024-04-08", author: "jji@google.com", message: "Merge ＂Add a new callback for the excessive binder proxy count＂ into main" },
  { hash: "fc15483a9a", date: "2024-04-07", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adjust SF owners＂ into main" },
  { hash: "4d947f141b", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder_rs: Move service manager code to separate module＂ into main" },
  { hash: "936a235337", date: "2024-04-06", author: "alecmouri@google.com", message: "Adjust SF owners" },
  { hash: "6dfa8c92b7", date: "2024-04-06", author: "ahomescu@google.com", message: "libbinder_rs: Add libbinder_rs_on_trusty_mock" },
  { hash: "40dbf25a90", date: "2024-04-06", author: "ahomescu@google.com", message: "libbinder: Add libbinder_ndk_on_trusty_mock" },
  { hash: "c5bf3f817f", date: "2024-04-06", author: "ahomescu@google.com", message: "libbinder_rs: Move service manager code to separate module" },
  { hash: "e16986ea78", date: "2024-04-05", author: "enh@google.com", message: "Merge ＂Don't duplicate `struct sched_attr`.＂ into main" },
  { hash: "e3ffd13373", date: "2024-04-05", author: "enh@google.com", message: "Don't duplicate `struct sched_attr`." },
  { hash: "cb17d91035", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I62db2bc4,I20f13fd3 into main" },
  { hash: "30cfde3b12", date: "2024-04-05", author: "jiyong@google.com", message: "Make libnativewindow_rs be available to the virt APEX" },
  { hash: "8032bff1b6", date: "2024-04-05", author: "jiyong@google.com", message: "Export surface::Surface as Surface" },
  { hash: "068bb7a296", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libbinder: Disable shell commands on non-IPC builds＂ into main" },
  { hash: "ca96a10173", date: "2024-04-04", author: "ahomescu@google.com", message: "rust/binder_rpc_test: Build on Trusty" },
  { hash: "147b6cbba5", date: "2024-04-04", author: "scroggo@google.com", message: "Merge ＂Remove unnecessary local variant definition.＂ into main" },
  { hash: "823410f2d3", date: "2024-04-04", author: "jiayongqiang@xiaomi.com", message: "Remove unnecessary local variant definition." },
  { hash: "72e720a93b", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂surface_control: Add ABI type information to `enum`s＂ into main" },
  { hash: "b30f2dd618", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make enum use C compatible.＂ into main" },
  { hash: "38eafb7efd", date: "2024-04-04", author: "ahomescu@google.com", message: "libbinder: Disable shell commands on non-IPC builds" },
  { hash: "896a661ddd", date: "2024-04-02", author: "marijns95@gmail.com", message: "surface_control: Add ABI type information to `enum`s" },
  { hash: "8c540c7795", date: "2024-04-02", author: "devinmoore@google.com", message: "Merge ＂Add a method to get the binderfs transactions for a given process＂ into main" },
  { hash: "bdbe29a757", date: "2024-04-02", author: "jji@google.com", message: "Add a new callback for the excessive binder proxy count" },
  { hash: "dd05718927", date: "2024-04-02", author: "danalbert@google.com", message: "Make enum use C compatible." },
  { hash: "2d0d712f51", date: "2024-04-02", author: "mohamadmahmoud@google.com", message: "Merge ＂Add libdebugstore for Future Use by ART and Frameworks＂ into main" },
]});
repoLogs.push({ path: "frameworks/opt/bitmap", logs: [
]});
repoLogs.push({ path: "frameworks/opt/calendar", logs: [
]});
repoLogs.push({ path: "frameworks/opt/car/services", logs: [
]});
repoLogs.push({ path: "frameworks/opt/car/setupwizard", logs: [
]});
repoLogs.push({ path: "frameworks/opt/chips", logs: [
]});
repoLogs.push({ path: "frameworks/opt/colorpicker", logs: [
]});
repoLogs.push({ path: "frameworks/opt/localepicker", logs: [
]});
repoLogs.push({ path: "frameworks/opt/net/ethernet", logs: [
]});
repoLogs.push({ path: "frameworks/opt/net/ims", logs: [
]});
repoLogs.push({ path: "frameworks/opt/net/voip", logs: [
]});
repoLogs.push({ path: "frameworks/opt/net/wifi", logs: [
  { hash: "db1ee07fd", date: "2024-04-18", author: "kiyoungkim@google.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
]});
repoLogs.push({ path: "frameworks/opt/photoviewer", logs: [
]});
repoLogs.push({ path: "frameworks/opt/setupwizard", logs: [
]});
repoLogs.push({ path: "frameworks/opt/telephony", logs: [
  { hash: "d2d5a507e3", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix CarrierApiTest#testOpportunistic CTS case failure＂ into main" },
  { hash: "248dc9ea5d", date: "2024-04-25", author: "rambowang@google.com", message: "Fix CarrierApiTest#testOpportunistic CTS case failure" },
]});
repoLogs.push({ path: "frameworks/opt/timezonepicker", logs: [
]});
repoLogs.push({ path: "frameworks/opt/tv/tvsystem", logs: [
]});
repoLogs.push({ path: "frameworks/opt/vcard", logs: [
]});
repoLogs.push({ path: "frameworks/proto_logging", logs: [
  { hash: "66b065fb", date: "2024-04-19", author: "sharaienko@google.com", message: "[statsd] Added data corruption reason propagation to EventMetric" },
  { hash: "45f921b0", date: "2024-04-12", author: "rghanti@google.com", message: "Merge ＂Add atom for logging RDI with metric ID＂ into main" },
  { hash: "3075d5fb", date: "2024-04-11", author: "rghanti@google.com", message: "Add atom for logging RDI with metric ID" },
  { hash: "68fc143a", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂KernelOomKillOccurred: Adding new oom/mark_victim fields＂ into main" },
  { hash: "475f1284", date: "2024-04-10", author: "carlosgalo@google.com", message: "KernelOomKillOccurred: Adding new oom/mark_victim fields" },
  { hash: "23044414", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[BluetoothMetrics]: Adding RDI information within atom for Profile Connection＂ into main" },
  { hash: "701d736a", date: "2024-04-08", author: "ahujapalash@google.com", message: "[BluetoothMetrics]: Adding RDI information within atom for Profile Connection" },
  { hash: "3c873c2e", date: "2024-04-08", author: "jji@google.com", message: "Merge ＂Add the atom to log the excessive binder proxies event＂ into main" },
  { hash: "501322e7", date: "2024-04-04", author: "wescande@google.com", message: "Merge ＂Revert ＂BluetoothSystemServer: add Hidden AutoOn metrics＂＂ into main" },
  { hash: "93bab941", date: "2024-04-02", author: "jji@google.com", message: "Add the atom to log the excessive binder proxies event" },
]});
repoLogs.push({ path: "frameworks/rs", logs: [
  { hash: "b51dc343", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂rs: remove one last `neon:` from the build!＂ into main" },
]});
repoLogs.push({ path: "frameworks/wilhelm", logs: [
]});
repoLogs.push({ path: "hardware/broadcom/libbt", logs: [
]});
repoLogs.push({ path: "hardware/broadcom/wlan", logs: [
  { hash: "c3f1576", date: "2024-04-17", author: "gbiren@google.com", message: "Merge ＂Update legacy header file dependency in the Broadcom Wifi HAL.＂ into main" },
  { hash: "c6d1c20", date: "2024-04-15", author: "gbiren@google.com", message: "Update legacy header file dependency in the Broadcom Wifi HAL." },
  { hash: "2656458", date: "2024-04-10", author: "cferris@google.com", message: "Merge changes from topic ＂libnl_cleanup＂ into main" },
  { hash: "3170f1e", date: "2024-04-09", author: "cferris@google.com", message: "Remove references to internal libnl headers." },
]});
repoLogs.push({ path: "hardware/google/aemu", logs: [
  { hash: "25135e1", date: "2024-04-09", author: "hyunjaemoon@google.com", message: "Provide feature flag for Uwb in goldfish" },
]});
repoLogs.push({ path: "hardware/google/apf", logs: [
  { hash: "a134374", date: "2024-04-26", author: "maze@google.com", message: "Merge ＂Extend disassembler's JBSMATCH support for multi-byte sequences＂ into main" },
  { hash: "6df7e7b", date: "2024-04-26", author: "yuyanghuang@google.com", message: "Extend disassembler's JBSMATCH support for multi-byte sequences" },
  { hash: "80b60d0", date: "2024-04-26", author: "maze@google.com", message: "v5: add some more comments" },
  { hash: "13b96dc", date: "2024-04-25", author: "maze@google.com", message: "v4: copy apf.h to v4/apf.h" },
  { hash: "412b010", date: "2024-04-25", author: "maze@google.com", message: "v5: add one more function indirect for apf_run()" },
  { hash: "eda4335", date: "2024-04-25", author: "yuyanghuang@google.com", message: "Add JONEOF_EXT_OPCODE disassembly support to apf_disassembler" },
  { hash: "c83ab00", date: "2024-04-24", author: "maze@google.com", message: "v5: introduce exception debug buffer" },
  { hash: "75d1f33", date: "2024-04-24", author: "maze@google.com", message: "v5: add JBSMATCH multi match support" },
  { hash: "7cc11e0", date: "2024-04-24", author: "maze@google.com", message: "v5: optimize for arm interpreter size (as opposed to x86)" },
  { hash: "bb3f1b0", date: "2024-04-24", author: "maze@google.com", message: "v5: optimize interpreter immediate decoding" },
  { hash: "65079fb", date: "2024-04-24", author: "maze@google.com", message: "v5: make JONEOF support 2..33 values instead of 1..32" },
  { hash: "34d2fe5", date: "2024-04-23", author: "yuyanghuang@google.com", message: "Fix documentation for JONEOF_EXT_OPCODE" },
  { hash: "9a5befd", date: "2024-04-15", author: "maze@google.com", message: "v5: reduce number of var declarations after statements, part 3" },
  { hash: "d9cc3df", date: "2024-04-15", author: "maze@google.com", message: "v5: reduce number of var declarations after statements, part 2" },
  { hash: "d05ec97", date: "2024-04-14", author: "maze@google.com", message: "v5: reduce number of var declarations after statements" },
  { hash: "02ad338", date: "2024-04-14", author: "maze@google.com", message: "v5: make apf_run() return more helpful value on firmware integration bugs" },
  { hash: "74b2bfb", date: "2024-04-15", author: "maze@google.com", message: "v5: fix a bug in JONEOF_EXT_OPCODE" },
  { hash: "92aa71f", date: "2024-04-15", author: "maze@google.com", message: "v5: add back PASS for 'normal' pass cases" },
  { hash: "5a5831c", date: "2024-04-14", author: "maze@google.com", message: "v5: replace PASS_PACKET with EXCEPTION" },
  { hash: "b004229", date: "2024-04-14", author: "maze@google.com", message: "v5: replace DROP_PACKET with just DROP" },
  { hash: "c720b5a", date: "2024-04-09", author: "maze@google.com", message: "v5: get us closer to ANSI C" },
  { hash: "56847bd", date: "2024-04-09", author: "maze@google.com", message: "v5: remove unused err_code" },
  { hash: "d68a32c", date: "2024-04-09", author: "maze@google.com", message: "v5: enable gcc -Wsign-conversion" },
  { hash: "a7ad6eb", date: "2024-04-08", author: "maze@google.com", message: "disassembler: LDDW/STDW v6 mode, cnt -> counter" },
  { hash: "1c077ba", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enhance disassembler output clarity for DROP/PASS opcodes＂ into main" },
  { hash: "e7956d4", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Add disassembler support for STDW and LDDW opcodes in v6 mode" },
  { hash: "19e74c3", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Enhance disassembler output clarity for DROP/PASS opcodes" },
  { hash: "ca8f966", date: "2024-04-07", author: "maze@google.com", message: "v6: apf_interpreter.{h,c} - create placeholder text" },
  { hash: "6d5cbf6", date: "2024-04-06", author: "maze@google.com", message: "v4: move apf_interpreter.{h,c} into v4 subdirectory" },
  { hash: "4b33e23", date: "2024-04-02", author: "yuyanghuang@google.com", message: "Remove the unused IPPROTO_{ICMP|ICMPV6|TCP|UDP} constants" },
]});
repoLogs.push({ path: "hardware/google/av", logs: [
]});
repoLogs.push({ path: "hardware/google/camera", logs: [
]});
repoLogs.push({ path: "hardware/google/easel", logs: [
]});
repoLogs.push({ path: "hardware/google/gchips", logs: [
]});
repoLogs.push({ path: "hardware/google/gfxstream", logs: [
  { hash: "e8475e05", date: "2024-04-25", author: "natsu@google.com", message: "Merge changes Iae194bdc,Idba8e3f4 into main" },
  { hash: "f845fbe2", date: "2024-04-24", author: "jansene@google.com", message: "Fix windows build break due to missing file" },
  { hash: "89a0f70d", date: "2024-04-24", author: "hailinzhang@google.com", message: "Vulkan: fix dstArrayElement index wrap issue" },
  { hash: "b2f3118a", date: "2024-04-24", author: "natsu@google.com", message: "Add test for vkUpdateDescriptorSetWithTemplate() with wrapping" },
  { hash: "9a061665", date: "2024-04-24", author: "natsu@google.com", message: "Add tracking for sync objs used by vkAcquireImageANDROID()" },
  { hash: "a4d121b6", date: "2024-04-23", author: "gurchetansingh@google.com", message: "gfxstream: random changes to support QNX" },
  { hash: "cb8e9da4", date: "2024-04-23", author: "aruby@blackberry.com", message: "gfxstream: spec fix" },
  { hash: "64a06812", date: "2024-04-23", author: "aruby@blackberry.com", message: "gfxstream: ColorBufferVk: Don't append VkExternalMemoryImageCreateInfo without a valid handle for import" },
  { hash: "9f755ae1", date: "2024-04-23", author: "natsu@google.com", message: "Filter guest VK_EXT_device_memory_report structs from host" },
  { hash: "a2d88f83", date: "2024-04-22", author: "cstout@google.com", message: "Merge ＂[guest] Fuchsia: initialize queries＂ into main" },
  { hash: "9fe83d7a", date: "2024-04-22", author: "natsu@google.com", message: "Merge ＂Reland ＂Partial revert of aosp/2858589 to avoid Mesa layer for Android＂＂ into main" },
  { hash: "f3c645b0", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix ColorBufferVk layout on snapshot load again＂ into main" },
  { hash: "a9add0b8", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂gfxstream: fix meson build＂ into main" },
  { hash: "80345ad7", date: "2024-04-19", author: "gurchetansingh@google.com", message: "gfxstream: fix meson build" },
  { hash: "88df7cff", date: "2024-04-19", author: "yahan@google.com", message: "Fix ColorBufferVk layout on snapshot load again" },
  { hash: "871ddc27", date: "2024-04-16", author: "natsu@google.com", message: "Add app and engine name to the existing vkCreateDevice() log" },
  { hash: "01e334b5", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂resizable: clear width, height and number of pixels when skip frames＂ into main" },
  { hash: "d181c34d", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add tests (initially disabled) testing sync obj usage in ANI＂ into main" },
  { hash: "d2049d02", date: "2024-04-16", author: "bohu@google.com", message: "resizable: clear width, height and number of pixels when skip frames" },
  { hash: "1d3b3534", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Log nofile limit＂ into main" },
  { hash: "3ecaceea", date: "2024-04-15", author: "natsu@google.com", message: "Add tests (initially disabled) testing sync obj usage in ANI" },
  { hash: "8aa13543", date: "2024-04-15", author: "natsu@google.com", message: "Log nofile limit" },
  { hash: "1006a864", date: "2024-04-12", author: "yahan@google.com", message: "Handle dependency by VkMemoryDedicatedAllocateInfo" },
  { hash: "c3407cd7", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Skip snapshotting multi-sample images＂ into main" },
  { hash: "77a83eaf", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Hide ColorBuffer Vulkan snapshot behind a flag＂ into main" },
  { hash: "696eaaa0", date: "2024-04-12", author: "natsu@google.com", message: "Reland ＂Partial revert of aosp/2858589 to avoid Mesa layer for Android＂" },
  { hash: "77d84117", date: "2024-04-11", author: "yahan@google.com", message: "Skip snapshotting multi-sample images" },
  { hash: "9e04a48c", date: "2024-04-11", author: "jansene@google.com", message: "Bazel: Fix missing cpp file" },
  { hash: "4c20def4", date: "2024-04-11", author: "yahan@google.com", message: "Hide ColorBuffer Vulkan snapshot behind a flag" },
  { hash: "fe6b8b01", date: "2024-04-11", author: "natsu@google.com", message: "Merge ＂Revert ＂Partial revert of aosp/2858589 to avoid Mesa layer for Android＂＂ into main" },
  { hash: "9eef6d0a", date: "2024-04-11", author: "natsu@google.com", message: "Revert ＂Partial revert of aosp/2858589 to avoid Mesa layer for Android＂" },
  { hash: "2ebd4374", date: "2024-04-10", author: "natsu@google.com", message: "Revert ＂Reland ＂Defer destruction of fences and semaphores used for ANI＂＂" },
  { hash: "49a4aeff", date: "2024-04-09", author: "natsu@google.com", message: "Reland ＂Defer destruction of fences and semaphores used for ANI＂" },
  { hash: "ec5d96c8", date: "2024-04-09", author: "natsu@google.com", message: "Merge ＂Partial revert of aosp/2858589 to avoid Mesa layer for Android＂ into main" },
  { hash: "f6b1a9a0", date: "2024-04-09", author: "jiyong@google.com", message: "Merge ＂Allow static linking of libgfxstream_backend＂ into main" },
  { hash: "e39be73b", date: "2024-04-09", author: "yahan@google.com", message: "Merge ＂Snapshot image layout＂ into main" },
  { hash: "d6e1b000", date: "2024-04-09", author: "natsu@google.com", message: "Partial revert of aosp/2858589 to avoid Mesa layer for Android" },
  { hash: "9cea79aa", date: "2024-04-09", author: "natsu@google.com", message: "Use scoped AHB helper" },
  { hash: "b1514065", date: "2024-04-08", author: "yahan@google.com", message: "Snapshot image layout" },
  { hash: "909c31f1", date: "2024-04-08", author: "yahan@google.com", message: "Remove GL_EXT_shader_framebuffer_fetch support" },
  { hash: "825d1290", date: "2024-04-05", author: "yahan@google.com", message: "Add stencil format support in snapshot" },
  { hash: "5c088a8d", date: "2024-04-04", author: "natsu@google.com", message: "Add gfxstream_vkemulatedphysicaldevicememory_tests to CTS" },
  { hash: "466c8db9", date: "2024-04-04", author: "jiyong@google.com", message: "Allow static linking of libgfxstream_backend" },
  { hash: "8a415189", date: "2024-04-03", author: "natsu@google.com", message: "Ignore .gdb_history" },
  { hash: "8f62b2d3", date: "2024-04-03", author: "natsu@google.com", message: "Remove extra sleep during test shutdown" },
  { hash: "d2a6f6f2", date: "2024-04-03", author: "natsu@google.com", message: "Unmap should run on the virtio gpu worker thread" },
  { hash: "244fd722", date: "2024-04-03", author: "natsu@google.com", message: "Adds feature for using an emulated memory type for AHBs" },
  { hash: "2aaf6ee6", date: "2024-04-02", author: "natsu@google.com", message: "Explicitly specify target/bind/bpp in resource creation" },
  { hash: "6d3d7b26", date: "2024-04-02", author: "natsu@google.com", message: "Rename VirtGpuBlob -> VirtGpuResource" },
]});
repoLogs.push({ path: "hardware/google/graphics/common", logs: [
]});
repoLogs.push({ path: "hardware/google/graphics/gs101", logs: [
]});
repoLogs.push({ path: "hardware/google/graphics/gs201", logs: [
]});
repoLogs.push({ path: "hardware/google/graphics/zuma", logs: [
]});
repoLogs.push({ path: "hardware/google/interfaces", logs: [
]});
repoLogs.push({ path: "hardware/google/pixel", logs: [
]});
repoLogs.push({ path: "hardware/google/pixel-sepolicy", logs: [
]});
repoLogs.push({ path: "hardware/google/trusty", logs: [
]});
repoLogs.push({ path: "hardware/interfaces", logs: [
  { hash: "6857ff20a9", date: "2024-04-26", author: "tedwang@google.com", message: "Merge ＂Revert ＂Test that the Bluetooth Finder property is set.＂＂ into main" },
  { hash: "8a7e803ff6", date: "2024-04-26", author: "tedwang@google.com", message: "Revert ＂Test that the Bluetooth Finder property is set.＂" },
  { hash: "62734b79cb", date: "2024-04-25", author: "okamil@google.com", message: "Merge ＂Add VTS requirement for concurrent LE connections.＂ into main" },
  { hash: "f9fc955231", date: "2024-04-25", author: "inseob@google.com", message: "Merge ＂Build media_profiles_V1_0.dtd with Soong＂ into main" },
  { hash: "af021acc42", date: "2024-04-25", author: "inseob@google.com", message: "Build media_profiles_V1_0.dtd with Soong" },
  { hash: "43cc0ce670", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Remove the SIM card status condition check and add accepted possible errors＂ into android14-tests-dev am: fd06d0a042 -s ours" },
  { hash: "7cf31fb471", date: "2024-04-24", author: "liuxiangjun3@xiaomi.com", message: "[automerger skipped] Remove the SIM card status condition check and add accepted possible errors am: 4b7f0175f1 -s ours" },
  { hash: "fd06d0a042", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove the SIM card status condition check and add accepted possible errors＂ into android14-tests-dev" },
  { hash: "ceb60ff408", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix component ID for dumpstate OWNERS＂ into main" },
  { hash: "f7391d5ac4", date: "2024-04-22", author: "yaoshunkai@google.com", message: "Merge ＂Effect AIDL VTS: relax dynamics processing effect parameter validations＂ into main" },
  { hash: "972b465a0e", date: "2024-04-22", author: "yaoshunkai@google.com", message: "Effect AIDL VTS: relax dynamics processing effect parameter validations" },
  { hash: "84a95be33b", date: "2024-04-22", author: "okamil@google.com", message: "Add VTS requirement for concurrent LE connections." },
  { hash: "952bb4ad1f", date: "2024-04-22", author: "devinmoore@google.com", message: "Fix component ID for dumpstate OWNERS" },
  { hash: "30da02f704", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove chenhaosjtuacm@google.com from automotive/vehicle/OWNERS＂ into main" },
  { hash: "98ef872235", date: "2024-04-22", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "53eb12245b", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂audio: Use more bursts in audio I/O VTS tests＂ into main" },
  { hash: "a2a9fa5003", date: "2024-04-19", author: "mnaganov@google.com", message: "audio: Use more bursts in audio I/O VTS tests" },
  { hash: "0dccb6e265", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes Icd33f3cb,I737479d8 into main" },
  { hash: "5e6d99b424", date: "2024-04-18", author: "mnaganov@google.com", message: "Merge ＂audio: Update 'PauseSync' scenario in AudioStreamIoOutTest＂ into main" },
  { hash: "22e17d43bd", date: "2024-04-18", author: "mnaganov@google.com", message: "audio: Update 'PauseSync' scenario in AudioStreamIoOutTest" },
  { hash: "8dd96d4c41", date: "2024-04-18", author: "mnaganov@google.com", message: "audio: Fix AudioPatchTest/AudioModulePatch#UpdateInvalidPatchId VTS test" },
  { hash: "a62c5df181", date: "2024-04-18", author: "mnaganov@google.com", message: "audio: Skip stream I/O test for ＂echo reference＂ input device" },
  { hash: "0af575b2f1", date: "2024-04-18", author: "bccunha@motorola.com", message: "[automerger skipped] Improve OpenAfterOpen VTS test am: 8d3cb52ead -s ours" },
  { hash: "8d3cb52ead", date: "2024-04-18", author: "bccunha@motorola.com", message: "Improve OpenAfterOpen VTS test" },
  { hash: "5c93471127", date: "2024-04-17", author: "lijiawei@google.com", message: "[automerger skipped] Update VTS SupplicantStaIfaceAidlTest#SetCountryCode to US am: 59aeb3182b -s ours" },
  { hash: "403040b952", date: "2024-04-17", author: "mnaganov@google.com", message: "Merge ＂audio: Fix IStreamIn.getActiveMicrophones test＂ into main" },
  { hash: "eee5499ba8", date: "2024-04-17", author: "mnaganov@google.com", message: "audio: Fix IStreamIn.getActiveMicrophones test" },
  { hash: "cdf6fc5424", date: "2024-04-17", author: "hsinyichen@google.com", message: "Merge ＂Move libimapper_stablec ABI dumps from prebuilts/abi-dumps＂ into main" },
  { hash: "7291b19db1", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂audio: skip data path for offload Virtualizer＂ into main" },
  { hash: "e8c0492a32", date: "2024-04-16", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove chenhaosjtuacm@google.com from automotive/vehicle/OWNERS" },
  { hash: "59aeb3182b", date: "2024-04-16", author: "lijiawei@google.com", message: "Update VTS SupplicantStaIfaceAidlTest#SetCountryCode to US" },
  { hash: "66351e5a9f", date: "2024-04-16", author: "mnaganov@google.com", message: "audio: Align bluetooth start behavior" },
  { hash: "219876109a", date: "2024-04-16", author: "hsinyichen@google.com", message: "Move libimapper_stablec ABI dumps from prebuilts/abi-dumps" },
  { hash: "613782fa78", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Annotate Health HAL test for VSR.＂ into main" },
  { hash: "84c6d5e8c6", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update VTS SupplicantStaIfaceAidlTest#SetCountryCode to US＂ into main" },
  { hash: "9f7c9102d3", date: "2024-04-15", author: "quic_jaidshar@quicinc.com", message: "audio: skip data path for offload Virtualizer" },
  { hash: "e23e450487", date: "2024-04-14", author: "schuffelen@google.com", message: "Merge ＂C++ AIDL on-device GateKeeper / SharedSecret impl＂ into main" },
  { hash: "73e55bdbcf", date: "2024-04-13", author: "lijiawei@google.com", message: "Update VTS SupplicantStaIfaceAidlTest#SetCountryCode to US" },
  { hash: "056aa140ca", date: "2024-04-12", author: "bccunha@motorola.com", message: "Improve OpenAfterOpen VTS test" },
  { hash: "097e625335", date: "2024-04-11", author: "schuffelen@google.com", message: "C++ AIDL on-device GateKeeper / SharedSecret impl" },
  { hash: "0f141d1967", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂PresetReverb: Add test to validate PresetReverb Effect＂ into main" },
  { hash: "a6c9097dd0", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Bluetooth vts hal: Restore to 2s startup＂ into main" },
  { hash: "ac0f34f6cd", date: "2024-04-11", author: "wescande@google.com", message: "Bluetooth vts hal: Restore to 2s startup" },
  { hash: "776e39b725", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow vendor ISharedSecret HALs  by any name＂ into main" },
  { hash: "82bb6fcfdc", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] make sure buffer size is enough＂ into main" },
  { hash: "cb8a9d74a0", date: "2024-04-11", author: "shihchienc@google.com", message: "[Thread] make sure buffer size is enough" },
  { hash: "94abce0998", date: "2024-04-11", author: "sneha.patil@ittiam.com", message: "PresetReverb: Add test to validate PresetReverb Effect" },
  { hash: "7b9b9e03e5", date: "2024-04-10", author: "mnaganov@google.com", message: "audio: Use allow list for device connection types in TryConnectMissingDevice" },
  { hash: "f693f3bc5c", date: "2024-04-10", author: "schuffelen@google.com", message: "Allow vendor ISharedSecret HALs  by any name" },
  { hash: "287187f1d2", date: "2024-04-09", author: "oarbildo@google.com", message: "Add key parameter to deriveDicePolicyBoundKey" },
  { hash: "fae563acb0", date: "2024-04-09", author: "sethmo@google.com", message: "Merge ＂Allow RKP-only devices to pass keymint VTS＂ into main" },
  { hash: "61c9ab4d87", date: "2024-04-09", author: "drysdale@google.com", message: "Merge ＂Make batch attestation keys/certs optional＂ into main" },
  { hash: "f02c7e0b2f", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[threadnetwork] update the platform log API usages and implementations＂ into main" },
  { hash: "160c3d610c", date: "2024-04-09", author: "kiyoungkim@google.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
  { hash: "6e71b471a9", date: "2024-04-09", author: "nikolayelenkov@google.com", message: "Merge ＂Enable Java backend for ISecretKeeper＂ into main" },
  { hash: "4761ae94fd", date: "2024-04-08", author: "oarbildo@google.com", message: "Merge ＂Add deriveKey function＂ into main" },
  { hash: "22c8d13258", date: "2024-04-08", author: "oarbildo@google.com", message: "Merge ＂deriveDicePolicyBoundKey AIDL definition＂ into main" },
  { hash: "cfcdb0b4b9", date: "2024-04-08", author: "oarbildo@google.com", message: "Add deriveKey function" },
  { hash: "6a82aa921e", date: "2024-04-08", author: "oarbildo@google.com", message: "deriveDicePolicyBoundKey AIDL definition" },
  { hash: "c5c52ce1d3", date: "2024-04-08", author: "sethmo@google.com", message: "Allow RKP-only devices to pass keymint VTS" },
  { hash: "7efa3c930a", date: "2024-04-08", author: "rockyfang@google.com", message: "Remove Arthur from owner's file" },
  { hash: "3c153add59", date: "2024-04-08", author: "zhanglongxia@google.com", message: "[threadnetwork] update the platform log API usages and implementations" },
  { hash: "fe5f33a61e", date: "2024-04-05", author: "drysdale@google.com", message: "Make batch attestation keys/certs optional" },
  { hash: "9e9d41d162", date: "2024-04-05", author: "kiyoungkim@google.com", message: "Remove VNDK definition(s)" },
  { hash: "0c2179c224", date: "2024-04-04", author: "chiw@google.com", message: "Merge ＂Update needed for Rust v1.77.1＂ into main" },
  { hash: "863f96ecdd", date: "2024-04-03", author: "raychin@google.com", message: "Refine infeasible frontend status check am: 9b13077c4c" },
  { hash: "5fc736d96d", date: "2024-04-03", author: "chiw@google.com", message: "Update needed for Rust v1.77.1" },
  { hash: "48def07853", date: "2024-04-03", author: "gbiren@google.com", message: "Merge ＂Copy legacy HAL header files to the wifi interface directory.＂ into main" },
  { hash: "8e0b0ae117", date: "2024-04-03", author: "oarbildo@google.com", message: "Merge ＂HWCrypto AES non-authenticated AIDL definitions＂ into main" },
  { hash: "ffe8335846", date: "2024-04-03", author: "rpius@google.com", message: "nfc(interface): Align owner's file with other NFC locations" },
  { hash: "d0470df3e3", date: "2024-04-02", author: "oarbildo@google.com", message: "HWCrypto AES non-authenticated AIDL definitions" },
  { hash: "fbd08f8892", date: "2024-04-02", author: "oarbildo@google.com", message: "Merge ＂Add OWNERS file＂ into main" },
  { hash: "aeab14d52c", date: "2024-04-02", author: "devinmoore@google.com", message: "Merge ＂Fix fmq_test when HIDL is not supported＂ into main" },
  { hash: "2d9f5e9df9", date: "2024-04-02", author: "oarbildo@google.com", message: "Add OWNERS file" },
  { hash: "97e48aa122", date: "2024-04-02", author: "gbiren@google.com", message: "Copy legacy HAL header files to the wifi interface directory." },
  { hash: "648d748e35", date: "2024-04-02", author: "oarbildo@google.com", message: "Merge ＂HWCrypto authenticated symmetric cryptography AIDL definitions＂ into main" },
  { hash: "b4e55bd84d", date: "2024-04-02", author: "oarbildo@google.com", message: "Merge ＂HWCrypto base AIDL definitions＂ into main" },
  { hash: "e237f5bfaa", date: "2024-04-02", author: "yaoshunkai@google.com", message: "Merge ＂Use customized toString for UUID in VTS＂ into main" },
  { hash: "9b13077c4c", date: "2024-04-02", author: "raychin@google.com", message: "Refine infeasible frontend status check" },
  { hash: "bbd7bba074", date: "2024-04-01", author: "henrichataing@google.com", message: "Merge ＂VtsHalBluetoothTargetTest: Link with libbluetooth_log＂ into main" },
  { hash: "926c26500c", date: "2024-04-01", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I86ba4225,I04d8e19a into main" },
  { hash: "52815dd2b0", date: "2024-04-01", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ExternalCameraHAL: Skip importing buffer from capture request＂ into main" },
]});
repoLogs.push({ path: "hardware/invensense", logs: [
]});
repoLogs.push({ path: "hardware/knowles/athletico/sound_trigger_hal", logs: [
]});
repoLogs.push({ path: "hardware/libhardware", logs: [
]});
repoLogs.push({ path: "hardware/libhardware_legacy", logs: [
]});
repoLogs.push({ path: "hardware/nxp/keymint", logs: [
]});
repoLogs.push({ path: "hardware/nxp/nfc", logs: [
]});
repoLogs.push({ path: "hardware/nxp/secure_element", logs: [
]});
repoLogs.push({ path: "hardware/nxp/uwb", logs: [
  { hash: "df363d8", date: "2024-04-23", author: "ikjn@google.com", message: "Handling per-country tx_power calibration" },
  { hash: "5001c67", date: "2024-04-23", author: "ikjn@google.com", message: "Cleanup: add tlv parsing functions" },
  { hash: "69a4bcb", date: "2024-04-23", author: "ikjn@google.com", message: "Cleanup: move all DevCaps handling code into one place" },
  { hash: "ed7f569", date: "2024-04-23", author: "bhautik.ardeshana@nxp.com", message: "No need to retry for INVALID_LEN/SYNTAX_ERROR" },
  { hash: "df5cf0a", date: "2024-04-22", author: "purnank@google.com", message: "Merge ＂[UWB] Add a verbose logging level＂ into main" },
  { hash: "0a00458", date: "2024-04-21", author: "purnank@google.com", message: "Refactored SR1XX Calibration to separate file." },
  { hash: "0bd04ac", date: "2024-04-19", author: "purnank@google.com", message: "[UWB] Add a verbose logging level" },
  { hash: "c44feda", date: "2024-04-11", author: "ikjn@google.com", message: "Apply chip-reset right before FW downloading" },
  { hash: "58a6841", date: "2024-04-11", author: "purnank@google.com", message: "Handle Group Delay calibrated by D48/D49 in D50" },
  { hash: "fa01693", date: "2024-04-09", author: "ikjn@google.com", message: "Determine chip type" },
  { hash: "08c84ee", date: "2024-04-09", author: "ikjn@google.com", message: "split sr1xx dependent logics into halimpl/hal/sr1xx" },
  { hash: "c1aa9ec", date: "2024-04-09", author: "ikjn@google.com", message: "Use rx handler for CoreGetDeviceInfo in init_hw" },
  { hash: "e495ff5", date: "2024-04-09", author: "ikjn@google.com", message: "use helper classes from init_hw()" },
  { hash: "6c8c818", date: "2024-04-09", author: "ikjn@google.com", message: "Add rx handler helper class" },
  { hash: "bf791a2", date: "2024-04-09", author: "ikjn@google.com", message: "Add semaphore wrapper class" },
]});
repoLogs.push({ path: "hardware/nxp/weaver", logs: [
]});
repoLogs.push({ path: "hardware/qcom/audio", logs: [
]});
repoLogs.push({ path: "hardware/qcom/bootctrl", logs: [
]});
repoLogs.push({ path: "hardware/qcom/bt", logs: [
]});
repoLogs.push({ path: "hardware/qcom/camera", logs: [
]});
repoLogs.push({ path: "hardware/qcom/data/ipacfg-mgr", logs: [
]});
repoLogs.push({ path: "hardware/qcom/display", logs: [
]});
repoLogs.push({ path: "hardware/qcom/gps", logs: [
]});
repoLogs.push({ path: "hardware/qcom/keymaster", logs: [
]});
repoLogs.push({ path: "hardware/qcom/media", logs: [
]});
repoLogs.push({ path: "hardware/qcom/power", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm7150/gps", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm7250/display", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm7250/gps", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm7250/media", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/data/ipacfg-mgr", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/display", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/gps", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/media", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/thermal", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150/vr", logs: [
]});
repoLogs.push({ path: "hardware/qcom/sm8150p/gps", logs: [
]});
repoLogs.push({ path: "hardware/qcom/wlan", logs: [
  { hash: "2254a01", date: "2024-04-17", author: "otaner@google.com", message: "Merge ＂Update references to internal libnl headers.＂ into main" },
]});
repoLogs.push({ path: "hardware/ril", logs: [
]});
repoLogs.push({ path: "hardware/samsung/nfc", logs: [
]});
repoLogs.push({ path: "hardware/st/nfc", logs: [
  { hash: "c691c84", date: "2024-04-10", author: "rpius@google.com", message: "Merge ＂Revert ＂Implementing support for NFC observe mode, polling loop fingerprints＂＂ into main" },
  { hash: "8802a9b", date: "2024-04-10", author: "nattharatj@google.com", message: "Revert ＂Implementing support for NFC observe mode, polling loop fingerprints＂" },
  { hash: "1ccf5d2", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂st(nfc): Align owner's file with other NFC locations＂ into main" },
]});
repoLogs.push({ path: "hardware/st/secure_element", logs: [
]});
repoLogs.push({ path: "hardware/st/secure_element2", logs: [
]});
repoLogs.push({ path: "hardware/synaptics/wlan", logs: [
  { hash: "fd024f8", date: "2024-04-16", author: "gbiren@google.com", message: "Update legacy header file dependency in the Synaptics Wifi HAL." },
  { hash: "06d1bf6", date: "2024-04-10", author: "cferris@google.com", message: "Remove references to internal libnl headers." },
]});
repoLogs.push({ path: "hardware/ti/am57x", logs: [
]});
repoLogs.push({ path: "kernel/configs", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/4.19/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.10/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.10/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.15/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.15/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.4/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/5.4/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/6.1/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/6.1/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/6.6/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/6.6/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/4.19/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/4.19/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.10/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.10/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.15/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.15/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.4/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/5.4/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/6.1/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/6.1/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/6.6/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/6.6/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/mainline/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/common-modules/virtual-device/mainline/x86-64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/mainline/arm64", logs: [
]});
repoLogs.push({ path: "kernel/prebuilts/mainline/x86_64", logs: [
]});
repoLogs.push({ path: "kernel/tests", logs: [
  { hash: "2d537bc", date: "2024-04-17", author: "elsk@google.com", message: "Merge ＂Revert ＂test_mappings: Add OWNERS.＂＂ into main" },
  { hash: "cde4ff6", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Delete test_mappings Bazel targets.＂ into main" },
  { hash: "e5d5a0e", date: "2024-04-15", author: "prohr@google.com", message: "Add an error message to remind users to run from kernel directory" },
  { hash: "949ab1d", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂net-test: xfrm_algorithm_test - reduce sleep from 0.1s to 0.01s＂＂ into main" },
  { hash: "b617ecb", date: "2024-04-09", author: "elsk@google.com", message: "Revert ＂test_mappings: Add OWNERS.＂" },
  { hash: "ef2d78e", date: "2024-04-09", author: "elsk@google.com", message: "Delete test_mappings Bazel targets." },
  { hash: "ffccc38", date: "2024-04-09", author: "maze@google.com", message: "Revert ＂net-test: xfrm_algorithm_test - reduce sleep from 0.1s to 0.01s＂" },
  { hash: "94e4b5e", date: "2024-04-09", author: "elsk@google.com", message: "Drop //external/zlib:test_mappings." },
  { hash: "12a06ff", date: "2024-04-06", author: "maze@google.com", message: "net-test: gpylint ping6_test.py" },
  { hash: "04a0d28", date: "2024-04-06", author: "maze@google.com", message: "net-test: gpylint pf_key_test.py" },
  { hash: "ef3147d", date: "2024-04-06", author: "maze@google.com", message: "net-test: xfrm_algorithm_test - reduce sleep from 0.1s to 0.01s" },
  { hash: "a270355", date: "2024-04-06", author: "maze@google.com", message: "net-test: namespace.py - gpylint fixes" },
  { hash: "90f1b73", date: "2024-04-05", author: "maze@google.com", message: "net-test: namespace - remove stdout logging" },
  { hash: "7778aa7", date: "2024-04-05", author: "maze@google.com", message: "net-test: all_tests.py - move kver log to stderr" },
  { hash: "8a8835b", date: "2024-04-06", author: "maze@google.com", message: "net-test: xfrm_algorithm_test - attempt to deflake" },
  { hash: "c549770", date: "2024-04-05", author: "maze@google.com", message: "net-test: all_tests.py - log kernel version information" },
  { hash: "03f6504", date: "2024-04-05", author: "maze@google.com", message: "net-test: leak_test - fix a missing close()" },
  { hash: "6b301fd", date: "2024-04-05", author: "maze@google.com", message: "net-test: xfrm_algorithm_test - gpylint fixes" },
  { hash: "2e403ac", date: "2024-04-05", author: "maze@google.com", message: "net-test: fix use of non existing socket.socket.SHUT_RDWR" },
  { hash: "d3bd257", date: "2024-04-05", author: "maze@google.com", message: "net-test: fix propagation of server_error exception" },
  { hash: "ef5ee4d", date: "2024-04-05", author: "maze@google.com", message: "net-test: run_net_test.sh - rework CONFIG_FRAME_WARN" },
  { hash: "e6ab8ea", date: "2024-04-04", author: "maze@google.com", message: "net-test: xfrm_algorithm_test - tentative fix!?!" },
  { hash: "6af5900", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I82db15c1,If838bab9 into main" },
  { hash: "7948d75", date: "2024-04-04", author: "maze@google.com", message: "net-test: re-enable 'ignore::ResourceWarning' python warnings" },
  { hash: "f591f77", date: "2024-04-04", author: "maze@google.com", message: "net-test: close even more leaking sockets" },
  { hash: "a04570c", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂net-test: close some leaking sockets＂ into main" },
  { hash: "8341469", date: "2024-04-04", author: "maze@google.com", message: "net-test: close some leaking sockets" },
]});
repoLogs.push({ path: "libcore", logs: [
  { hash: "90ebde7475e", date: "2024-04-22", author: "vichang@google.com", message: "Merge ＂Update CurrencyTest due to ICU 75＂ into main" },
  { hash: "77d967c6f0d", date: "2024-04-19", author: "vichang@google.com", message: "Update CurrencyTest due to ICU 75" },
  { hash: "49ec0aef682", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Set test ownership.＂ into main" },
  { hash: "69380a798ee", date: "2024-04-18", author: "mast@google.com", message: "Set test ownership." },
  { hash: "0e1d9cf82ae", date: "2024-04-17", author: "vichang@google.com", message: "Merge ＂Increase the time out for TimerTest＂ into main" },
  { hash: "61551eb2bbd", date: "2024-04-17", author: "vichang@google.com", message: "Increase the time out for TimerTest" },
  { hash: "b9b0ab044fa", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update libcore.java.lang.reflect.ParameterTest after JDK21 changes＂ into main" },
  { hash: "7b081222628", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Disable Harmony test_setBroadcastZ().＂ into main" },
  { hash: "b35d1fbda23", date: "2024-04-11", author: "sorinbasca@google.com", message: "Update libcore.java.lang.reflect.ParameterTest after JDK21 changes" },
  { hash: "f6401daee6b", date: "2024-04-11", author: "prb@google.com", message: "Disable Harmony test_setBroadcastZ()." },
  { hash: "b6a77ff51f9", date: "2024-04-10", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-0f2a85b957b44e9b9ea3462b5304f061＂ into main" },
  { hash: "e2e174dabd1", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Update org.openjdk.tests.java.util.stream.FindFirstOpTest＂ into android14-tests-dev am: 673484cb37 -s ours" },
  { hash: "81f6fa7963a", date: "2024-04-10", author: "sorinbasca@google.com", message: "[automerger skipped] Update org.openjdk.tests.java.util.stream.FindFirstOpTest am: 8c3c3f15fe -s ours" },
  { hash: "673484cb378", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update org.openjdk.tests.java.util.stream.FindFirstOpTest＂ into android14-tests-dev" },
  { hash: "8c3c3f15fe1", date: "2024-04-10", author: "sorinbasca@google.com", message: "Update org.openjdk.tests.java.util.stream.FindFirstOpTest" },
  { hash: "7e9c61f0151", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove multi-release part of JarEntry javadoc.＂ into main" },
  { hash: "c0d6d47e052", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Switch from DNS name to IP literal for IsReachableViaLoopbackTest.＂ into main" },
  { hash: "97076873c2f", date: "2024-04-10", author: "prb@google.com", message: "Switch from DNS name to IP literal for IsReachableViaLoopbackTest." },
  { hash: "edf900cc4c0", date: "2024-04-10", author: "mingaleev@google.com", message: "Remove multi-release part of JarEntry javadoc." },
  { hash: "7635e2ae5ca", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add ICU version check to DateTimeFormatterTest#test_format_locale_tok＂ into main" },
  { hash: "9681955ca7f", date: "2024-04-05", author: "vichang@google.com", message: "Add ICU version check to DateTimeFormatterTest#test_format_locale_tok" },
  { hash: "9e3cd1511a6", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add SAXParser test coverage.＂ into main" },
  { hash: "7da4a61e12b", date: "2024-04-03", author: "mingaleev@google.com", message: "Merge ＂Add missing android.system.Os test coverage.＂ into main" },
  { hash: "9b14527b26f", date: "2024-04-03", author: "mingaleev@google.com", message: "Add SAXParser test coverage." },
  { hash: "8a36e697d0b", date: "2024-04-02", author: "mingaleev@google.com", message: "Add missing android.system.Os test coverage." },
  { hash: "f9f7f26612f", date: "2024-04-02", author: "mingaleev@google.com", message: "Merge changes from topic ＂cleanertest-jdk21＂ into main" },
  { hash: "d282f70ff51", date: "2024-04-02", author: "mingaleev@google.com", message: "Merge CleanerTest from jdk-21.0.2-ga into the aosp/main branch" },
]});
repoLogs.push({ path: "libnativehelper", logs: [
  { hash: "2580ffd", date: "2024-04-22", author: "mast@google.com", message: "Merge ＂Set test ownership.＂ into main" },
]});
repoLogs.push({ path: "packages/apps/AvatarPicker", logs: [
  { hash: "2896be1", date: "2024-04-02", author: "byi@google.com", message: "Merge ＂Import translations. DO NOT MERGE ANYWHERE＂ into main" },
  { hash: "65b1bb8", date: "2024-04-02", author: "byi@google.com", message: "[automerger skipped] Import translations. DO NOT MERGE ANYWHERE am: 71ee37515b -s ours" },
  { hash: "604e5fd", date: "2024-04-02", author: "annabauza@google.com", message: "Remove content description from app icon" },
  { hash: "71ee375", date: "2024-04-01", author: "byi@google.com", message: "Import translations. DO NOT MERGE ANYWHERE" },
]});
repoLogs.push({ path: "packages/apps/BasicSmsReceiver", logs: [
]});
repoLogs.push({ path: "packages/apps/Browser2", logs: [
]});
repoLogs.push({ path: "packages/apps/Calendar", logs: [
]});
repoLogs.push({ path: "packages/apps/Camera2", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Cluster", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/DebuggingRestrictionController", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/DialerPrebuilt", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/LatinIME", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Launcher", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/LinkViewer", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/LocalMediaPlayer", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/MediaPrebuilt", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/MessengerPrebuilt", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Notification", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Provision", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Radio", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/RotaryController", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/Settings", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/SettingsIntelligence", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/SystemUI", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/SystemUpdater", logs: [
]});
repoLogs.push({ path: "packages/apps/Car/systemlibs", logs: [
  { hash: "8a7ed9c", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "packages/apps/CarrierConfig", logs: [
  { hash: "ab99574", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "575e4cb", date: "2024-04-19", author: "bdeepankar@google.com", message: "Add package names for Airtel IN carrier privileged apps" },
  { hash: "c6f9fee", date: "2024-04-19", author: "franckp@google.com", message: "Merge ＂Need to submit CL to AOSP with Safaricom's HASH certificate to enable reading IMEI via their new kiosk app for Device Lock Controller.＂ into main" },
  { hash: "1e5bee9", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update Carrier Config file for Claro Brazil Test: Build Pass and Carrier app development tests＂ into main" },
  { hash: "22e422f", date: "2024-04-18", author: "eliseo.fernandes@globalhitss.com.br", message: "Update Carrier Config file for Claro Brazil Test: Build Pass and Carrier app development tests" },
  { hash: "d4697d2", date: "2024-04-17", author: "ckiagiri@google.com", message: "Need to submit CL to AOSP with Safaricom's HASH certificate to enable reading IMEI via their new kiosk app for Device Lock Controller." },
  { hash: "061f5f6", date: "2024-04-16", author: "fferracioli@google.com", message: "Merge ＂Removing privileges not used by Movistar＂ into main" },
  { hash: "d1dc1a5", date: "2024-04-16", author: "jackyu@google.com", message: "Merge ＂Add carrier_config_carrierid_1495_Spitfire.xml for Spitfire＂ into main" },
  { hash: "1da9153", date: "2024-04-16", author: "fferracioli@google.com", message: "Removing privileges not used by Movistar" },
  { hash: "f217237", date: "2024-04-16", author: "fferracioli@google.com", message: "Removing carrier privileges that are not being used" },
]});
repoLogs.push({ path: "packages/apps/CellBroadcastReceiver", logs: [
]});
repoLogs.push({ path: "packages/apps/CertInstaller", logs: [
]});
repoLogs.push({ path: "packages/apps/Contacts", logs: [
]});
repoLogs.push({ path: "packages/apps/DeskClock", logs: [
]});
repoLogs.push({ path: "packages/apps/DevCamera", logs: [
]});
repoLogs.push({ path: "packages/apps/Dialer", logs: [
]});
repoLogs.push({ path: "packages/apps/DocumentsUI", logs: [
]});
repoLogs.push({ path: "packages/apps/EmergencyInfo", logs: [
]});
repoLogs.push({ path: "packages/apps/Gallery", logs: [
]});
repoLogs.push({ path: "packages/apps/Gallery2", logs: [
  { hash: "b079a60ec", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix uses_libs properties for Gallery2.＂ into main" },
]});
repoLogs.push({ path: "packages/apps/HTMLViewer", logs: [
]});
repoLogs.push({ path: "packages/apps/ImsServiceEntitlement", logs: [
]});
repoLogs.push({ path: "packages/apps/KeyChain", logs: [
  { hash: "4b7684a", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "packages/apps/Launcher3", logs: [
  { hash: "2eadab3702", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from quickstep/tests/OWNERS＂ into main" },
  { hash: "f6519bd225", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from tests/OWNERS＂ into main" },
  { hash: "06b1e6da76", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove mateuszc@google.com from tests/shared/com/android/launcher3/testing/OWNERS＂ into main" },
  { hash: "74836e9aee", date: "2024-04-14", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove mateuszc@google.com from tests/shared/com/android/launcher3/testing/OWNERS" },
  { hash: "4142457c19", date: "2024-04-14", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove mateuszc@google.com from tests/OWNERS" },
]});
repoLogs.push({ path: "packages/apps/LegacyCamera", logs: [
]});
repoLogs.push({ path: "packages/apps/ManagedProvisioning", logs: [
  { hash: "c7ff3eb46", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "packages/apps/Messaging", logs: [
  { hash: "c223d1c", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "packages/apps/Music", logs: [
]});
repoLogs.push({ path: "packages/apps/MusicFX", logs: [
]});
repoLogs.push({ path: "packages/apps/Nfc", logs: [
  { hash: "bd88e0e9", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Code cleanup: removed NativeP2pDevice file and dependencies＂ into main" },
  { hash: "259012c8", date: "2024-04-26", author: "georgekgchang@google.com", message: "Merge ＂Code cleanup: removed P2P in NfcDiscoveryParametersTest＂ into main" },
  { hash: "7176a361", date: "2024-04-26", author: "georgekgchang@google.com", message: "Merge ＂Code cleanup: removed support of P2P in NfcDiscoveryParameters＂ into main" },
  { hash: "0e53a49c", date: "2024-04-26", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed NativeP2pDevice file and dependencies" },
  { hash: "23e11641", date: "2024-04-25", author: "georgekgchang@google.com", message: "Code cleanup: removed P2P in NfcDiscoveryParametersTest" },
  { hash: "5df1221b", date: "2024-04-25", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed support of P2P in NfcDiscoveryParameters" },
  { hash: "677a3057", date: "2024-04-24", author: "georgekgchang@google.com", message: "Merge changes from topic ＂NFC_CLEANUP_2024_1＂ into main" },
  { hash: "3d22e3af", date: "2024-04-24", author: "ziyiw@google.com", message: "Merge ＂Test : Adding New Test Cases in to AidRoutingManagerTest＂ into main" },
  { hash: "e13db9e8", date: "2024-04-24", author: "ravikcpd97@gmail.com", message: "Test : Adding New Test Cases in to AidRoutingManagerTest" },
  { hash: "bc5a2490", date: "2024-04-24", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed disconnection of P2P target mode when tag disconnected" },
  { hash: "2c2e5370", date: "2024-04-24", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed P2P cases in case of RF detection" },
  { hash: "59d4377e", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Code cleanup: removed remaining P2P functions in JNI＂ into main" },
  { hash: "aad0bb15", date: "2024-04-23", author: "alisher@google.com", message: "Merge ＂An unpriveledged app can change discovery mask in BG.＂ into main" },
  { hash: "9e486a78", date: "2024-04-23", author: "georgekgchang@google.com", message: "Merge ＂Code cleanup: removed getNfaStorageDir()＂ into main" },
  { hash: "74ac11e4", date: "2024-04-23", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed getNfaStorageDir()" },
  { hash: "692b23d4", date: "2024-04-22", author: "alisher@google.com", message: "An unpriveledged app can change discovery mask in BG." },
  { hash: "879ee39e", date: "2024-04-22", author: "rpius@google.com", message: "Merge ＂Code cleanup: removing doGetLastError() from JNI＂ into main" },
  { hash: "c53906e2", date: "2024-04-19", author: "rpius@google.com", message: "Merge ＂Test : Adding Test Cases for RegisteredAidCache＂ into main" },
  { hash: "1588853c", date: "2024-04-19", author: "ravikcpd97@gmail.com", message: "Test : Adding Test Cases for RegisteredAidCache" },
  { hash: "3e8676b4", date: "2024-04-19", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removed remaining P2P functions in JNI" },
  { hash: "38c7b75d", date: "2024-04-19", author: "alexandra.ducati-manas@st.com", message: "Code cleanup: removing doGetLastError() from JNI" },
  { hash: "14fcff95", date: "2024-04-18", author: "ziyiw@google.com", message: "Merge ＂Test : Adding Test Cases for AidRoutingManager＂ into main" },
  { hash: "18b964e9", date: "2024-04-17", author: "ravikcpd97@gmail.com", message: "Test : Adding Test Cases for AidRoutingManager" },
  { hash: "f7b1a2fa", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update mAlwaysOnState during a recovery procedure.＂ into main" },
  { hash: "c5828a7a", date: "2024-04-10", author: "arach.mohammed.brahim@st.com", message: "Update mAlwaysOnState during a recovery procedure." },
  { hash: "9deb58fe", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix BoxedPrimitiveEquality errorprone issues＂ into main" },
  { hash: "1a1a4b20", date: "2024-04-09", author: "colefaust@google.com", message: "Fix BoxedPrimitiveEquality errorprone issues" },
  { hash: "c24c225a", date: "2024-04-09", author: "rpius@google.com", message: "Merge ＂Optimization during routing table update＂ into main" },
  { hash: "a2e4189b", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Test : New Test Cases testDiscoveryParameters added＂ into main" },
  { hash: "53bc1076", date: "2024-04-05", author: "ravikcpd97@gmail.com", message: "Test : New Test Cases testDiscoveryParameters added" },
  { hash: "0b0f46f7", date: "2024-04-03", author: "rpius@google.com", message: "Merge ＂Test : New Test Cases for ShouldEnableP2p＂ into main" },
  { hash: "1ce8dea5", date: "2024-04-03", author: "ravikcpd97@gmail.com", message: "Test : New Test Cases for ShouldEnableP2p" },
  { hash: "1696e425", date: "2024-04-03", author: "ziyiw@google.com", message: "Merge ＂Test : New Test Cases for NfcDiscoveryParametersTest＂ into main" },
  { hash: "4ab83065", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂nfc(app): Support OEM extension surface＂ into main" },
  { hash: "8cd63932", date: "2024-04-02", author: "ravikcpd97@gmail.com", message: "Test : New Test Cases for NfcDiscoveryParametersTest" },
  { hash: "39ee6d18", date: "2024-04-02", author: "ziyiw@google.com", message: "Merge ＂Test : New Test Cases for IsAntennaBlockedAlertDisabled＂ into main" },
  { hash: "90d11cf3", date: "2024-04-02", author: "rpius@google.com", message: "nfc(app): Support OEM extension surface" },
]});
repoLogs.push({ path: "packages/apps/OnDeviceAppPrediction", logs: [
]});
repoLogs.push({ path: "packages/apps/PhoneCommon", logs: [
]});
repoLogs.push({ path: "packages/apps/Protips", logs: [
]});
repoLogs.push({ path: "packages/apps/Provision", logs: [
]});
repoLogs.push({ path: "packages/apps/QuickAccessWallet", logs: [
]});
repoLogs.push({ path: "packages/apps/QuickSearchBox", logs: [
]});
repoLogs.push({ path: "packages/apps/SafetyRegulatoryInfo", logs: [
]});
repoLogs.push({ path: "packages/apps/SampleLocationAttribution", logs: [
]});
repoLogs.push({ path: "packages/apps/SecureElement", logs: [
]});
repoLogs.push({ path: "packages/apps/Settings", logs: [
  { hash: "4ab7d5bacc2", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove redundant call to SetFlagsRule.initAllFlagsToReleaseConfigDefault()＂ into main" },
  { hash: "1d4d5343cc6", date: "2024-04-24", author: "jeffdq@google.com", message: "Remove redundant call to SetFlagsRule.initAllFlagsToReleaseConfigDefault()" },
  { hash: "1c7a9269a17", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Tightens Accessibility Settings owners.＂ into main" },
  { hash: "cb9cd3fa46c", date: "2024-04-23", author: "annabauza@google.com", message: "Merge ＂Integrating new Avatar Picker App in Settings＂ into main" },
  { hash: "5c32deeb168", date: "2024-04-22", author: "danielnorman@google.com", message: "Tightens Accessibility Settings owners." },
  { hash: "71361dafd3a", date: "2024-04-22", author: "annabauza@google.com", message: "Integrating new Avatar Picker App in Settings" },
  { hash: "52038eb6f2d", date: "2024-04-16", author: "rotkiewicz@google.com", message: "Merge ＂Bluetooth Codec Settings: Assure flag enabled＂ into main" },
  { hash: "c9231031426", date: "2024-04-16", author: "rotkiewicz@google.com", message: "Bluetooth Codec Settings: Assure flag enabled" },
  { hash: "b5d874d9ebe", date: "2024-04-10", author: "matiashe@google.com", message: "Merge ＂Update notification settings OWNERS＂ into main" },
  { hash: "319fafe2ac3", date: "2024-04-10", author: "matiashe@google.com", message: "Update notification settings OWNERS" },
  { hash: "3ecb318354e", date: "2024-04-10", author: "tomhsu@google.com", message: "Merge ＂Change phone number preference to unselectable＂ into main" },
  { hash: "3bfb35c71e5", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix SMS and Calls preference summary displays empty.＂ into main" },
  { hash: "56ab5b2ab14", date: "2024-04-09", author: "quic_hoffc@quicinc.com", message: "Change phone number preference to unselectable" },
  { hash: "c37f89dff9c", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix-up starting style&wallpaper from search＂ into main" },
  { hash: "27b7b2fa504", date: "2024-04-06", author: "emarteca@google.com", message: "Merge ＂Show customized message for private space  while choosing lock＂ into main" },
]});
repoLogs.push({ path: "packages/apps/SettingsIntelligence", logs: [
]});
repoLogs.push({ path: "packages/apps/SpareParts", logs: [
]});
repoLogs.push({ path: "packages/apps/Stk", logs: [
]});
repoLogs.push({ path: "packages/apps/StorageManager", logs: [
]});
repoLogs.push({ path: "packages/apps/SystemUIGo", logs: [
]});
repoLogs.push({ path: "packages/apps/TV", logs: [
]});
repoLogs.push({ path: "packages/apps/Tag", logs: [
]});
repoLogs.push({ path: "packages/apps/Test/connectivity", logs: [
]});
repoLogs.push({ path: "packages/apps/ThemePicker", logs: [
]});
repoLogs.push({ path: "packages/apps/Traceur", logs: [
  { hash: "e5c99b00", date: "2024-04-26", author: "keanmariotti@google.com", message: "Add IME perfetto data source (Winscope traces)" },
  { hash: "0b86bb56", date: "2024-04-22", author: "kevinjeon@google.com", message: "Simplify default trace tag set for user builds" },
  { hash: "77c1a2cd", date: "2024-04-22", author: "kevinjeon@google.com", message: "Align traceStart argument order" },
]});
repoLogs.push({ path: "packages/apps/TvFeedbackConsent", logs: [
]});
repoLogs.push({ path: "packages/apps/TvSettings", logs: [
  { hash: "40ceb026d", date: "2024-04-19", author: "mango.chen@realtek.com", message: "Ensure the UI which impelemts by TwoPanelSettingsLib can enter corresponding fragment by mouse primary key" },
  { hash: "360c58452", date: "2024-04-19", author: "mango.chen@realtek.com", message: "Fix android.appsecurity.cts.StorageHostTest#testFullDisk failed" },
  { hash: "8a829c2df", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix missing PreferenceComparisonCallback＂ into main" },
]});
repoLogs.push({ path: "packages/apps/TvSystemUI", logs: [
]});
repoLogs.push({ path: "packages/apps/UniversalMediaPlayer", logs: [
]});
repoLogs.push({ path: "packages/apps/WallpaperPicker2", logs: [
]});
repoLogs.push({ path: "packages/inputmethods/LatinIME", logs: [
]});
repoLogs.push({ path: "packages/inputmethods/LeanbackIME", logs: [
]});
repoLogs.push({ path: "packages/modules/AdServices", logs: [
  { hash: "345558443", date: "2024-04-09", author: "marcots@google.com", message: "Remove marcots from AdServices OWNERS" },
]});
repoLogs.push({ path: "packages/modules/AppSearch", logs: [
]});
repoLogs.push({ path: "packages/modules/ArtPrebuilt", logs: [
]});
repoLogs.push({ path: "packages/modules/Bluetooth", logs: [
  { hash: "a7ff259133", date: "2024-04-26", author: "licorne@google.com", message: "Merge ＂rootcanal/ec: Use pow for consistency＂ into main" },
  { hash: "d9f72a100a", date: "2024-04-26", author: "rwt@google.com", message: "Merge changes from topic ＂AndroidHeadtrackerService＂ into main" },
  { hash: "7ea6ca886a", date: "2024-04-26", author: "mylesgw@google.com", message: "Merge ＂system/btif: Remove UNUSED_ATTR＂ into main" },
  { hash: "2b692157b7", date: "2024-04-26", author: "mylesgw@google.com", message: "Merge ＂system/stack: Remove UNUSED_ATTR＂ into main" },
  { hash: "843330f962", date: "2024-04-26", author: "rwt@google.com", message: "Map headtracking service characteristics to HOGP report characteristics" },
  { hash: "fb7759eea2", date: "2024-04-26", author: "rwt@google.com", message: "bta_hh_le minor refactor" },
  { hash: "21e48a152b", date: "2024-04-26", author: "rwt@google.com", message: "Use LE transport when Headtracker service is available" },
  { hash: "79aa676043", date: "2024-04-26", author: "rwt@google.com", message: "Add Android Headtracker Service UUIDs" },
  { hash: "de0c6d2921", date: "2024-04-26", author: "rwt@google.com", message: "Add support for Android Headtracker Service in HidHostService" },
  { hash: "a6f8e3f625", date: "2024-04-26", author: "licorne@google.com", message: "Merge ＂flags: Remove android_bluetooth_flags.h wrapper＂ into main" },
  { hash: "f996d0a599", date: "2024-04-26", author: "licorne@google.com", message: "Merge ＂flags: Remove floss workaround from wrapper＂ into main" },
  { hash: "e0c0aef049", date: "2024-04-26", author: "gkolodziejczyk@google.com", message: "Merge ＂flags: add leaudio_broadcast_stop_on_streaming_request＂ into main" },
  { hash: "302a6a6ea1", date: "2024-04-26", author: "gkolodziejczyk@google.com", message: "Merge ＂flags: add leaudio_no_context_validate_streaming_request＂ into main" },
  { hash: "d828b6f9b4", date: "2024-04-26", author: "jpawlowski@google.com", message: "Merge ＂Add flag read_model_num_fix＂ into main" },
  { hash: "ebf5249018", date: "2024-04-26", author: "whalechang@google.com", message: "Merge ＂Floss: Removed unnecessary code related to hold and resume＂ into main" },
  { hash: "8142ca03e5", date: "2024-04-26", author: "rlukasz@google.com", message: "Merge ＂leaudio: Fix bonding during phone call for SwB support＂ into main" },
  { hash: "561c612d17", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂le_audio: Fix test flakiness by waiting for scheduled callbacks＂ into main" },
  { hash: "25b87cd560", date: "2024-04-26", author: "rongxuan@google.com", message: "Merge ＂Add null check in mActiveDeviceManager cleanup＂ into main" },
  { hash: "0dcc5eb5ac", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂bta_dm_sdp_result: reduce indenation＂ into main" },
  { hash: "bd589d7be7", date: "2024-04-25", author: "rprichard@google.com", message: "Merge ＂Workaround clang++ concepts crash＂ into main" },
  { hash: "a90ef97b65", date: "2024-04-25", author: "rongxuan@google.com", message: "le_audio: Fix test flakiness by waiting for scheduled callbacks" },
  { hash: "ee3bac7347", date: "2024-04-25", author: "salsavage@google.com", message: "Merge ＂Randomize media ID to correct lost audio focus＂ into main" },
  { hash: "8019215482", date: "2024-04-25", author: "jpawlowski@google.com", message: "Add flag read_model_num_fix" },
  { hash: "92784d9cca", date: "2024-04-25", author: "licorne@google.com", message: "flags: Remove android_bluetooth_flags.h wrapper" },
  { hash: "3ba3c008d2", date: "2024-04-25", author: "licorne@google.com", message: "flags: Remove floss workaround from wrapper" },
  { hash: "c4c087b557", date: "2024-04-25", author: "licorne@google.com", message: "rootcanal/ec: Use pow for consistency" },
  { hash: "c98bb6b06b", date: "2024-04-25", author: "rongxuan@google.com", message: "Add null check in mActiveDeviceManager cleanup" },
  { hash: "29a256a899", date: "2024-04-25", author: "aditikat@google.com", message: "Randomize media ID to correct lost audio focus" },
  { hash: "b0eeb67cff", date: "2024-04-25", author: "rongxuan@google.com", message: "Merge ＂bass_client: Remove pending source operation when stopping receivers＂ into main" },
  { hash: "50f0dd79bf", date: "2024-04-25", author: "licorne@google.com", message: "Merge ＂rootcanal/ec: Use Jacobian Coordinates in Point implementation＂ into main" },
  { hash: "a3d0393f0b", date: "2024-04-25", author: "jpawlowski@google.com", message: "bta_dm_sdp_result: reduce indenation" },
  { hash: "2b0198431d", date: "2024-04-25", author: "jpawlowski@google.com", message: "Merge ＂Move callback for GATT discovered through SDP to bta_dm_disc_result＂ into main" },
  { hash: "5c87e0ef6e", date: "2024-04-25", author: "jpawlowski@google.com", message: "Merge ＂Get rid of bta_dm_get_remname＂ into main" },
  { hash: "1203883cb3", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂broadcaster: Create notify after address getting＂ into main" },
  { hash: "9f598dcf30", date: "2024-04-25", author: "gkolodziejczyk@google.com", message: "bass_client: Remove pending source operation when stopping receivers" },
  { hash: "dfb1021c17", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Don't replace an existing CoD with one that is unclassified＂ into main" },
  { hash: "1f0ad4913d", date: "2024-04-25", author: "klhyun@google.com", message: "Merge ＂Add a flag to fix le scanning bug＂ into main" },
  { hash: "4e15c37c2a", date: "2024-04-25", author: "salsavage@google.com", message: "Don't replace an existing CoD with one that is unclassified" },
  { hash: "782bed45e8", date: "2024-04-25", author: "gkolodziejczyk@google.com", message: "Merge ＂flags: add leaudio_allowed_context_mask＂ into main" },
  { hash: "517cad81f5", date: "2024-04-25", author: "gkolodziejczyk@google.com", message: "broadcaster: Create notify after address getting" },
  { hash: "5055745ad4", date: "2024-04-25", author: "jpawlowski@google.com", message: "Get rid of bta_dm_get_remname" },
  { hash: "307662e83a", date: "2024-04-25", author: "mylesgw@google.com", message: "Merge ＂system/udrv: Remove UNUSED_ATTR＂ into main" },
  { hash: "2bf55dfd25", date: "2024-04-25", author: "mylesgw@google.com", message: "Merge ＂system/osi: Remove UNUSED_ATTR＂ into main" },
  { hash: "a121c3017c", date: "2024-04-25", author: "mylesgw@google.com", message: "Merge ＂system/test: Remove UNUSED_ATTR＂ into main" },
  { hash: "386e6a04e1", date: "2024-04-25", author: "mylesgw@google.com", message: "Merge ＂system/device: Remove UNUSED_ATTR＂ into main" },
  { hash: "26cf46c7ff", date: "2024-04-25", author: "jpawlowski@google.com", message: "Move callback for GATT discovered through SDP to bta_dm_disc_result" },
  { hash: "bbceb92346", date: "2024-04-25", author: "jpawlowski@google.com", message: "Don't use bta_dm_get_remname outside of device_search.cc" },
  { hash: "53da7c5969", date: "2024-04-25", author: "klhyun@google.com", message: "Add a flag to fix le scanning bug" },
  { hash: "0877721c27", date: "2024-04-25", author: "rlukasz@google.com", message: "leaudio: Fix bonding during phone call for SwB support" },
  { hash: "d362b840d3", date: "2024-04-25", author: "jpawlowski@google.com", message: "Move UUID grabbing logic from bta_dm_disc_result to bta_dm_gatt_disc_complete" },
  { hash: "69a3275f37", date: "2024-04-25", author: "jpawlowski@google.com", message: "Get rid of CancelOpen from bta_dm_disc_result" },
  { hash: "fa5781a4f3", date: "2024-04-25", author: "rlukasz@google.com", message: "Merge ＂vc: Fix null pointer dereference＂ into main" },
  { hash: "63feef097a", date: "2024-04-25", author: "rotkiewicz@google.com", message: "Merge ＂avrcp: Connect AV when peer connected only AVRCP＂ into main" },
  { hash: "40c2704d22", date: "2024-04-25", author: "rotkiewicz@google.com", message: "Merge ＂BluetoothAudioHal fix misleading log type and msg＂ into main" },
  { hash: "1302b0e184", date: "2024-04-25", author: "asoulier@google.com", message: "Merge changes from topic ＂revert-3057587-QWHAZEZPCT＂ into main" },
  { hash: "53b325bb03", date: "2024-04-24", author: "rprichard@google.com", message: "Workaround clang++ concepts crash" },
  { hash: "bd11c96f29", date: "2024-04-25", author: "asoulier@google.com", message: "Revert ＂bt_snoop: Add intermediate copy preventing source packet...＂" },
  { hash: "36c82f7ea4", date: "2024-04-25", author: "asoulier@google.com", message: "Revert ＂hci/hal: Separate AIDL/HIDL in the HAL＂" },
  { hash: "73d31cdfac", date: "2024-04-25", author: "asoulier@google.com", message: "Revert ＂hci/hal: Move ＂Android＂ dependancies into backend＂" },
  { hash: "8724c3a6d6", date: "2024-04-25", author: "cmanton@google.com", message: "bluetooth_test_with_timerfd: Drop alarm reference within callback" },
  { hash: "19ffd23114", date: "2024-04-25", author: "cmanton@google.com", message: "Remove unused bta::jv::BTA_JV_SERVICE and tBTA_JV_ROLE" },
  { hash: "9857069d43", date: "2024-04-25", author: "cmanton@google.com", message: "contextual_callback: Remove unused apis" },
  { hash: "0164b9b9b6", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂system/bta/hearing_aid: Do not print the contents of encoded audio frames＂ into main" },
  { hash: "d33ada1d3f", date: "2024-04-24", author: "mylesgw@google.com", message: "system/stack: Remove UNUSED_ATTR" },
  { hash: "a07de70d84", date: "2024-04-24", author: "cmanton@google.com", message: "net_test_btif_hh: Remove dynamic allocation in test" },
  { hash: "1eec9fee50", date: "2024-04-24", author: "henrichataing@google.com", message: "Merge changes I21eec4ea,I29482a84,I020564e4,Ie8daf0e6 into main" },
  { hash: "99e098b04f", date: "2024-04-24", author: "asoulier@google.com", message: "Merge changes I16d6c158,I23e36af0,I09e126dc into main" },
  { hash: "af34fa00f7", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: Add do_not_replace_existing_cod_with_uncategorized_cod＂ into main" },
  { hash: "f209c86e58", date: "2024-04-24", author: "licorne@google.com", message: "rootcanal/ec: Use Jacobian Coordinates in Point implementation" },
  { hash: "5edd7bab05", date: "2024-04-24", author: "asoulier@google.com", message: "Merge ＂test: Link statically with libbase due to ABI incompabilities＂ into main" },
  { hash: "19d1fce1ca", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge ＂Merge bta_dm_service_discovery_cmpl into bta_dm_disc_result＂ into main" },
  { hash: "8d6fc592ad", date: "2024-04-24", author: "henrichataing@google.com", message: "system/bta/hearing_aid: Do not print the contents of encoded audio frames" },
  { hash: "f5ceef3a83", date: "2024-04-24", author: "henrichataing@google.com", message: "system: Remove unnecessary calls to std::to_string in fmt arguments" },
  { hash: "b4d62acfea", date: "2024-04-24", author: "henrichataing@google.com", message: "system: Remove explicit formatting of boolean values" },
  { hash: "b7886aa4ec", date: "2024-04-24", author: "cmanton@google.com", message: "net_test_btif_stack: Disable acl during teardown" },
  { hash: "684ea28b42", date: "2024-04-24", author: "henrichataing@google.com", message: "system: Strip unnecessary () around fmt arguments" },
  { hash: "2a614a86e1", date: "2024-04-24", author: "cmanton@google.com", message: "Flag: Remove api_get_connection_state_sync_on_main" },
  { hash: "f274f083df", date: "2024-04-24", author: "henrichataing@google.com", message: "system: Replace loghex by {:x} in log calls" },
  { hash: "a2a0c43037", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge bta_dm_service_discovery_cmpl into bta_dm_disc_result" },
  { hash: "8aa0bf9573", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge ＂Do not call bta_dm_free_sdp_db when GATT discovery is complete＂ into main" },
  { hash: "6cea879ff8", date: "2024-04-24", author: "cmanton@google.com", message: "net_test_btif: Properly call btif_dm_cleanup in tear down" },
  { hash: "52062e7ef3", date: "2024-04-24", author: "jpawlowski@google.com", message: "Do not call bta_dm_free_sdp_db when GATT discovery is complete" },
  { hash: "33eec60f45", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge ＂Don't clear g_disc_raw_data_buf for start of LE service discovery＂ into main" },
  { hash: "07b8f1e210", date: "2024-04-24", author: "asoulier@google.com", message: "hci/hal: Move ＂Android＂ dependancies into backend" },
  { hash: "3ba15b623a", date: "2024-04-24", author: "asoulier@google.com", message: "hci/hal: Separate AIDL/HIDL in the HAL" },
  { hash: "e73086e367", date: "2024-04-24", author: "asoulier@google.com", message: "bt_snoop: Add intermediate copy preventing source packet modification" },
  { hash: "811f9355ad", date: "2024-04-24", author: "asoulier@google.com", message: "test: Link statically with libbase due to ABI incompabilities" },
  { hash: "48f0d0cad0", date: "2024-04-24", author: "henrichataing@google.com", message: "Merge ＂system/log: [FLOSS] Call std::abort on fatal log messages＂ into main" },
  { hash: "fee7487daa", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂RootCanal: Set support for APCF Transport Discovery Service filter to false＂ into main" },
  { hash: "4f14d961f4", date: "2024-04-24", author: "gkolodziejczyk@google.com", message: "flags: add leaudio_broadcast_stop_on_streaming_request" },
  { hash: "d88f7c25bb", date: "2024-04-24", author: "gkolodziejczyk@google.com", message: "flags: add leaudio_no_context_validate_streaming_request" },
  { hash: "f5dd7a8f2f", date: "2024-04-24", author: "gkolodziejczyk@google.com", message: "flags: add leaudio_allowed_context_mask" },
  { hash: "a114cd0c3e", date: "2024-04-24", author: "belusiak@google.com", message: "Merge ＂flags: add leaudio_broadcast_extract_periodic_scanner_from_state_machine＂ into main" },
  { hash: "0dc952e939", date: "2024-04-24", author: "jpawlowski@google.com", message: "Don't clear g_disc_raw_data_buf for start of LE service discovery" },
  { hash: "b66aa61846", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge ＂Get rid of tBTA_DM_SDP_RESULT＂ into main" },
  { hash: "2b5515a399", date: "2024-04-24", author: "rlukasz@google.com", message: "vc: Fix null pointer dereference" },
  { hash: "71251ff5fc", date: "2024-04-24", author: "tyszkowski@google.com", message: "Merge changes I9c28afa5,I1e29d42f,Ibe29cce0 into main" },
  { hash: "393d993424", date: "2024-04-24", author: "belusiak@google.com", message: "flags: add leaudio_broadcast_extract_periodic_scanner_from_state_machine" },
  { hash: "d89102b961", date: "2024-04-24", author: "jpawlowski@google.com", message: "Merge ＂Remove unused messages＂ into main" },
  { hash: "389812b483", date: "2024-04-24", author: "wescande@google.com", message: "Merge changes Ibd740f0b,I4bffa752 into main" },
  { hash: "20bb5ff6bd", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂le_audio: Fix broadcast test flakiness by waiting for scheduled callbacks＂ into main" },
  { hash: "be05f75158", date: "2024-04-24", author: "rwt@google.com", message: "Merge ＂Do not remove duplicate non-LE-only device records＂ into main" },
  { hash: "776b8f9a34", date: "2024-04-24", author: "rghanti@google.com", message: "Merge ＂Change version number of the bloom filter＂ into main" },
  { hash: "8f85510b1d", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂AdapterService: Remove unused local metric logger＂＂ into main" },
  { hash: "f6abd63dc4", date: "2024-04-24", author: "rwt@google.com", message: "Do not remove duplicate non-LE-only device records" },
  { hash: "1167e07f9e", date: "2024-04-23", author: "henrichataing@google.com", message: "RootCanal: Set support for APCF Transport Discovery Service filter to false" },
  { hash: "b4d86ee030", date: "2024-04-23", author: "rongxuan@google.com", message: "le_audio: Fix broadcast test flakiness by waiting for scheduled callbacks" },
  { hash: "0760a836eb", date: "2024-04-23", author: "ahujapalash@google.com", message: "Revert ＂AdapterService: Remove unused local metric logger＂" },
  { hash: "1f1a66686d", date: "2024-04-23", author: "siyuanh@google.com", message: "Merge ＂LeAudio: Ase configuration data refactor - part 2＂ into main" },
  { hash: "83eff3c8d2", date: "2024-04-23", author: "rghanti@google.com", message: "Change version number of the bloom filter" },
  { hash: "300eb71a0b", date: "2024-04-23", author: "wescande@google.com", message: "AutoOn: Clear stored timer when setting is toggled" },
  { hash: "aab4e9e01d", date: "2024-04-23", author: "wescande@google.com", message: "AutoOn: Clear stored timer when bluetooth is on" },
  { hash: "07395ffbb2", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Save HID host connection policy on initial successful connection＂ into main" },
  { hash: "52449dc7a5", date: "2024-04-23", author: "rwt@google.com", message: "Merge ＂Flag for Android Headtracker Service＂ into main" },
  { hash: "6bb0933eaf", date: "2024-04-23", author: "rwt@google.com", message: "Save HID host connection policy on initial successful connection" },
  { hash: "b25ffe8969", date: "2024-04-23", author: "rongxuan@google.com", message: "Merge ＂[BassClient] Fix metadata/codecconfig length parsing＂ into main" },
  { hash: "d02ef55477", date: "2024-04-23", author: "cmanton@google.com", message: "dumpsys: Remove user filtering capabilities" },
  { hash: "2809a5c944", date: "2024-04-23", author: "jpawlowski@google.com", message: "Merge changes I7b11a7df,I8ca78f91,I6c269fbc into main" },
  { hash: "362ba731e3", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂contextual_callback: Update API usage＂ into main" },
  { hash: "65aa90566f", date: "2024-04-23", author: "licorne@google.com", message: "Merge ＂Remove gatt_robust_caching_client flag＂ into main" },
  { hash: "feee687412", date: "2024-04-23", author: "licorne@google.com", message: "Merge changes Ic995239d,I434d863d into main" },
  { hash: "c22a2b0b70", date: "2024-04-23", author: "licorne@google.com", message: "Merge ＂flags: Build flag library with gn for floss＂ into main" },
  { hash: "7116a122c1", date: "2024-04-23", author: "cmanton@google.com", message: "Enum-ify tBTA_JV_CONN_TYPE" },
  { hash: "ca89fff838", date: "2024-04-23", author: "cmanton@google.com", message: "contextual_callback: Update API usage" },
  { hash: "65718a9e4e", date: "2024-04-23", author: "klhyun@google.com", message: "Merge ＂Retry reading db hash if canceled＂ into main" },
  { hash: "2a9852d622", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update owners files＂ into main" },
  { hash: "0133aa0229", date: "2024-04-23", author: "rwt@google.com", message: "Flag for Android Headtracker Service" },
  { hash: "267dc78f1c", date: "2024-04-23", author: "michaelfsun@google.com", message: "Merge ＂floss: update bond and connect calls to provide status＂ into main" },
  { hash: "783de1dc73", date: "2024-04-23", author: "jpawlowski@google.com", message: "Get rid of tBTA_DM_SDP_RESULT" },
  { hash: "260e369ec9", date: "2024-04-23", author: "jpawlowski@google.com", message: "Remove unused messages" },
  { hash: "9716aff345", date: "2024-04-23", author: "rwt@google.com", message: "Merge ＂Flag to save HID connection policy on initial successful connection＂ into main" },
  { hash: "f9e5a89195", date: "2024-04-23", author: "rlukasz@google.com", message: "Merge changes I492b345e,I5e283bff,I3fc890e1 into main" },
  { hash: "96b545552d", date: "2024-04-23", author: "tyszkowski@google.com", message: "LeAudio: Fix not releasing audio interface" },
  { hash: "e040b7475e", date: "2024-04-23", author: "tyszkowski@google.com", message: "LeAudio: Fix redundant audio hal stop" },
  { hash: "211d47832f", date: "2024-04-23", author: "tyszkowski@google.com", message: "LeAudio: Fix error on updating config after session is stopped" },
  { hash: "be38871d69", date: "2024-04-23", author: "klhyun@google.com", message: "Retry reading db hash if canceled" },
  { hash: "b43465af55", date: "2024-04-23", author: "tyszkowski@google.com", message: "LeAudio: Ase configuration data refactor - part 2" },
  { hash: "a5c8cb8a89", date: "2024-04-23", author: "jpawlowski@google.com", message: "bta_dm_find_services: reduce indendation" },
  { hash: "9d59fb500d", date: "2024-04-23", author: "jpawlowski@google.com", message: "bta_dm_find_services: add log describing SDP end" },
  { hash: "26506b4950", date: "2024-04-23", author: "jpawlowski@google.com", message: "bta_dm_find_services" },
  { hash: "16c0ec1494", date: "2024-04-23", author: "jpawlowski@google.com", message: "Make BTA_DM_DISCOVERY_RESULT_EVT prettier" },
  { hash: "bb9fe5deae", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Style improvements in bta_dm_discover_services＂ into main" },
  { hash: "d912922fdd", date: "2024-04-23", author: "jrwu@google.com", message: "Merge ＂Flag to fix threading issue in BLE ClockRecovery＂ into main" },
  { hash: "460c3614e0", date: "2024-04-23", author: "jpawlowski@google.com", message: "Style improvements in bta_dm_discover_services" },
  { hash: "61d17e2d7a", date: "2024-04-23", author: "rghanti@google.com", message: "Merge ＂[BluetoothMetrics] Update the bloom filter＂ into main" },
  { hash: "8016a3e615", date: "2024-04-23", author: "jrwu@google.com", message: "Flag to fix threading issue in BLE ClockRecovery" },
  { hash: "44ce5e1918", date: "2024-04-23", author: "jpawlowski@google.com", message: "Merge changes I635dd29d,Iec20d21c into main" },
  { hash: "b79679bebc", date: "2024-04-23", author: "jrwu@google.com", message: "Merge ＂Floss: print log on A2DP audio state update＂ into main" },
  { hash: "2626737cae", date: "2024-04-23", author: "jrwu@google.com", message: "Merge ＂LEA: correct include names in le_audio_types.h＂ into main" },
  { hash: "fb102e5083", date: "2024-04-23", author: "michaelfsun@google.com", message: "floss: update bond and connect calls to provide status" },
  { hash: "e29c85bd74", date: "2024-04-23", author: "chharry@google.com", message: "Merge ＂SCO: Don't assert a valid handle when status != success＂ into main" },
  { hash: "42344c2b0e", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂floss: Add timeout for git clone＂ into main" },
  { hash: "4563873c31", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂le_audio: Schedule broadcast, unicast callbacks on MainLoop＂ into main" },
  { hash: "c1342e8a7d", date: "2024-04-22", author: "abhishekpandit@google.com", message: "floss: Add timeout for git clone" },
  { hash: "3c63f99c7f", date: "2024-04-22", author: "rghanti@google.com", message: "[BluetoothMetrics] Update the bloom filter" },
  { hash: "7f0f3ed8ca", date: "2024-04-22", author: "licorne@google.com", message: "Merge ＂floss: Add aconfig to floss docker image＂ into main" },
  { hash: "40cd3a1f75", date: "2024-04-22", author: "rlukasz@google.com", message: "Merge ＂LeAudio/Broadcast: Fix channel map creation＂ into main" },
  { hash: "2e609b445f", date: "2024-04-22", author: "licorne@google.com", message: "Merge ＂floss: Add a libflags shim＂ into main" },
  { hash: "04f646b877", date: "2024-04-22", author: "mylesgw@google.com", message: "Merge ＂AlarmTest: Synchronize the callback with promises＂ into main" },
  { hash: "9d897c3fde", date: "2024-04-22", author: "jpawlowski@google.com", message: "Cleanup tBTA_DM_SERVICE_DISCOVERY_CB" },
  { hash: "c9462b40ef", date: "2024-04-22", author: "jpawlowski@google.com", message: "Device search/service discovery header cleanup" },
  { hash: "9380fb660c", date: "2024-04-22", author: "cmanton@google.com", message: "net_test_btif_rc: Clean up BtifTrackChangeCBTest" },
  { hash: "01f2f5d7a8", date: "2024-04-22", author: "cmanton@google.com", message: "unit_test: Make global legacy mocks thread safe" },
  { hash: "454db675a4", date: "2024-04-22", author: "mylesgw@google.com", message: "system/osi: Remove UNUSED_ATTR" },
  { hash: "1df3e520f3", date: "2024-04-22", author: "mylesgw@google.com", message: "system/device: Remove UNUSED_ATTR" },
  { hash: "cccc556882", date: "2024-04-22", author: "mylesgw@google.com", message: "system/udrv: Remove UNUSED_ATTR" },
  { hash: "b01df986f9", date: "2024-04-22", author: "rotkiewicz@google.com", message: "avrcp: Connect AV when peer connected only AVRCP" },
  { hash: "d9e3cc8c9f", date: "2024-04-22", author: "mylesgw@google.com", message: "system/btif: Remove UNUSED_ATTR" },
  { hash: "4b6c0d00bd", date: "2024-04-22", author: "rlukasz@google.com", message: "LeAudio: Improve logging Codec Configuration" },
  { hash: "623bdeba4b", date: "2024-04-22", author: "rlukasz@google.com", message: "leaudio: Fix channel count provided to Java layer." },
  { hash: "1e62960255", date: "2024-04-22", author: "rlukasz@google.com", message: "leaudio: Add missing coding format" },
  { hash: "59cf0050c9", date: "2024-04-22", author: "mylesgw@google.com", message: "system/test: Remove UNUSED_ATTR" },
  { hash: "b5d4905cdc", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove aritrasen@google.com from android/app/OWNERS＂ into main" },
  { hash: "d2401d645e", date: "2024-04-22", author: "henrichataing@google.com", message: "system/log: [FLOSS] Call std::abort on fatal log messages" },
  { hash: "33a40b47d2", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂BluetoothLeBroadcastMetadata: log updates＂ into main" },
  { hash: "71effbf46f", date: "2024-04-22", author: "rwt@google.com", message: "Flag to save HID connection policy on initial successful connection" },
  { hash: "de95de359b", date: "2024-04-22", author: "jpawlowski@google.com", message: "Merge changes I04d55fd1,I5e7f88e8,Idfc3ded8 into main" },
  { hash: "831ee4eaf4", date: "2024-04-22", author: "apusaka@google.com", message: "Merge ＂Demote some debug logs to verbose level＂ into main" },
  { hash: "564c4ce872", date: "2024-04-22", author: "chharry@google.com", message: "SCO: Don't assert a valid handle when status != success" },
  { hash: "5cce71494e", date: "2024-04-20", author: "jpawlowski@google.com", message: "Move device search to separate file" },
  { hash: "e092babdde", date: "2024-04-20", author: "jpawlowski@google.com", message: "Separate search and discovery control blocks" },
  { hash: "b45c4285e5", date: "2024-04-20", author: "jpawlowski@google.com", message: "Get rid of on_name_read discovery callback" },
  { hash: "79ef6b4283", date: "2024-04-20", author: "tyszkowski@google.com", message: "Merge changes I96d0deb2,Ie12c0331 into main" },
  { hash: "8752dbc5f8", date: "2024-04-20", author: "jpawlowski@google.com", message: "Split bta_dm_execute_queued_request to search and discovery" },
  { hash: "2deeb7b5ac", date: "2024-04-20", author: "jpawlowski@google.com", message: "BTA discovery/search: clean up logic for picking transport." },
  { hash: "fc57e5f81f", date: "2024-04-20", author: "jpawlowski@google.com", message: "Separate service and device discovery state machines" },
  { hash: "51a837e3b0", date: "2024-04-19", author: "salsavage@google.com", message: "flags: Add do_not_replace_existing_cod_with_uncategorized_cod" },
  { hash: "65413be023", date: "2024-04-19", author: "henrichataing@google.com", message: "Merge ＂system: Remove include directives for <stdio.h>＂ into main" },
  { hash: "f946aa98f5", date: "2024-04-19", author: "mylesgw@google.com", message: "Merge ＂PDL: Add another array test＂ into main" },
  { hash: "d1476dd4cc", date: "2024-04-19", author: "jpawlowski@google.com", message: "Merge changes I8ba33334,Icf238a7c,I843c499b into main" },
  { hash: "92e8fe6cae", date: "2024-04-19", author: "licorne@google.com", message: "Remove private_gatt flag" },
  { hash: "e20528cf51", date: "2024-04-19", author: "licorne@google.com", message: "Merge ＂floss: Update dockerfile rust version to 1.77.1＂ into main" },
  { hash: "a20c2803ab", date: "2024-04-19", author: "licorne@google.com", message: "Remove rust_event_loop flag" },
  { hash: "290353a4af", date: "2024-04-19", author: "henrichataing@google.com", message: "system: Remove include directives for <stdio.h>" },
  { hash: "f100f0ab60", date: "2024-04-19", author: "jpawlowski@google.com", message: "Get rid of bta_dm string checking tests" },
  { hash: "5b44509e8c", date: "2024-04-19", author: "jpawlowski@google.com", message: "Separate discovery complete method from bta_dm_search_cmpl" },
  { hash: "9759406949", date: "2024-04-19", author: "siyuanh@google.com", message: "Flag bta_dm_disc into new and legacy code" },
  { hash: "5c01e7113b", date: "2024-04-19", author: "licorne@google.com", message: "Remove gatt_robust_caching_client flag" },
  { hash: "30bd4820e4", date: "2024-04-19", author: "rlukasz@google.com", message: "Merge ＂gatt: Fix handling GATT connect timeout＂ into main" },
  { hash: "74db3d8180", date: "2024-04-19", author: "henrichataing@google.com", message: "Merge changes I950f76bd,I52fdf98b into main" },
  { hash: "b01c730724", date: "2024-04-19", author: "tyszkowski@google.com", message: "LeAudio/Broadcast: Fix channel map creation" },
  { hash: "791fbaf6a0", date: "2024-04-19", author: "siyuanh@google.com", message: "Add flag separate_service_and_device_discovery" },
  { hash: "eba77ae3f3", date: "2024-04-19", author: "cmanton@google.com", message: "Enum-ify tBTA_JV_CONN_STATE" },
  { hash: "27a9748eb2", date: "2024-04-19", author: "rlukasz@google.com", message: "gatt: Fix handling GATT connect timeout" },
  { hash: "e28c6ad4dd", date: "2024-04-19", author: "belusiak@google.com", message: "BluetoothLeBroadcastMetadata: log updates" },
  { hash: "6460734da3", date: "2024-04-19", author: "rotkiewicz@google.com", message: "Merge ＂flags: Add avrcp_connect_a2dp_delayed flag＂ into main" },
  { hash: "6d6d4abab8", date: "2024-04-19", author: "yuyangh@google.com", message: "Merge ＂Support LE Audio to HFP handover in non-idle call state＂ into main" },
  { hash: "27da434b76", date: "2024-04-19", author: "rlukasz@google.com", message: "Merge ＂leaudio: Fix for one CSIP member not streaming (race)＂ into main" },
  { hash: "d0e574f5fd", date: "2024-04-19", author: "rlukasz@google.com", message: "Merge changes I3976c998,Ie4e62edc into main" },
  { hash: "c34785b7de", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "c77c9a4e24", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂system/stack/fuzzers: split client and server portions of fuzzers＂ into main" },
  { hash: "03b1937560", date: "2024-04-18", author: "mylesgw@google.com", message: "PDL: Add another array test" },
  { hash: "e0524b14a9", date: "2024-04-18", author: "rongxuan@google.com", message: "[BassClient] Fix metadata/codecconfig length parsing" },
  { hash: "7f66bef2ba", date: "2024-04-18", author: "rwt@google.com", message: "Allow pairing over unseen transport" },
  { hash: "3398c071e0", date: "2024-04-18", author: "henrichataing@google.com", message: "system: Remove most ADDRESS_TO_LOGGABLE_(CSTR|STR)" },
  { hash: "e234dced47", date: "2024-04-18", author: "henrichataing@google.com", message: "system: Implement formatters for bluetooth::hci::(Address|AddressWithType)" },
  { hash: "04864c398f", date: "2024-04-18", author: "rlukasz@google.com", message: "Merge changes I20d44988,I95fb8919,Id7e0ba5f,I1482180e into main" },
  { hash: "13ce8d1a42", date: "2024-04-18", author: "kalder@google.com", message: "system/stack/fuzzers: split client and server portions of fuzzers" },
  { hash: "b0e7acecaa", date: "2024-04-18", author: "cmanton@google.com", message: "bta::jv Given a socket type return the associated transport" },
  { hash: "203320b7db", date: "2024-04-18", author: "rlukasz@google.com", message: "leaudio: Remove reduntant check" },
  { hash: "e48b0f74e0", date: "2024-04-18", author: "rlukasz@google.com", message: "leaudio: Remove reduntant GroupStatus callback" },
  { hash: "361274f0e1", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a null check to avoid crash when identity address is unknown＂ into main" },
  { hash: "df0ad92515", date: "2024-04-18", author: "salsavage@google.com", message: "Add a null check to avoid crash when identity address is unknown" },
  { hash: "4bb26bb35c", date: "2024-04-18", author: "gkolodziejczyk@google.com", message: "le_audio: Schedule broadcast, unicast callbacks on MainLoop" },
  { hash: "bbf35af715", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂PublicBroadcastData: remove exception throw＂ into main" },
  { hash: "15aa243e69", date: "2024-04-18", author: "rlukasz@google.com", message: "leaudio: Fix for one CSIP member not streaming (race)" },
  { hash: "10ae78fb02", date: "2024-04-18", author: "tyszkowski@google.com", message: "LeAudio: Move the SWB support toggle handling to Codec Manager" },
  { hash: "dd53fcba4a", date: "2024-04-18", author: "tyszkowski@google.com", message: "LeAudio: Minor argument passing improvement" },
  { hash: "64ecda51f3", date: "2024-04-18", author: "tyszkowski@google.com", message: "LeAudio: Minor NumOfConnected() method cleanup" },
  { hash: "59ec0897bb", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Refactored libbt_audio_hal_hearing_aid_software_encoding_fuzzer＂ into main" },
  { hash: "e44fb9dcc0", date: "2024-04-18", author: "rotkiewicz@google.com", message: "Merge ＂a2dp_api: allow binding to tA2DP_FIND_CBACK＂ into main" },
  { hash: "f62454a080", date: "2024-04-18", author: "klhyun@google.com", message: "Merge ＂Add a flag for fixing discovery stuck issue＂ into main" },
  { hash: "2b8fbe6f61", date: "2024-04-18", author: "rotkiewicz@google.com", message: "flags: Add avrcp_connect_a2dp_delayed flag" },
  { hash: "ca1c69a6be", date: "2024-04-18", author: "rlukasz@google.com", message: "Merge ＂LeAudio: Minor logging and comments improvement＂ into main" },
  { hash: "eb950a88a1", date: "2024-04-18", author: "rlukasz@google.com", message: "Merge ＂LeAudioService: Add unit tests and minor fixes＂ into main" },
  { hash: "ed3264ed00", date: "2024-04-17", author: "yuyangh@google.com", message: "Support LE Audio to HFP handover in non-idle call state" },
  { hash: "d2f120c5de", date: "2024-04-18", author: "howardchung@google.com", message: "Merge ＂Floss: Only enable page scan when necessary＂ into main" },
  { hash: "4f7a972845", date: "2024-04-18", author: "johnlai@google.com", message: "Merge changes I648da896,I76df131e,I5ddfe446,I0e26708e into main" },
  { hash: "a25efa37ca", date: "2024-04-18", author: "mylesgw@google.com", message: "Merge changes Iff110614,I733840c1 into main" },
  { hash: "e9dc89c772", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove reference to internal TF construct tradefed-test-framework＂ into main" },
  { hash: "9a684c9ed7", date: "2024-04-18", author: "licorne@google.com", message: "Merge ＂Re-enable -Wformat as error＂ into main" },
  { hash: "68716e334e", date: "2024-04-17", author: "rwt@google.com", message: "Merge changes I1432b4fc,I1e23f5d6 into main" },
  { hash: "c8df9a6a3d", date: "2024-04-17", author: "rwt@google.com", message: "Merge ＂Add a flag to guard removing the address mapping on device removal＂ into main" },
  { hash: "0cbf0db690", date: "2024-04-17", author: "rwt@google.com", message: "Merge ＂Flag to allow pairing over transport not seen＂ into main" },
  { hash: "c8d2a49e93", date: "2024-04-17", author: "licorne@google.com", message: "Re-enable -Wformat as error" },
  { hash: "83f77de24e", date: "2024-04-17", author: "cmanton@google.com", message: "Encapsulate btif::set_hal_cbacks" },
  { hash: "0ec3ff5417", date: "2024-04-17", author: "jdesprez@google.com", message: "Remove reference to internal TF construct tradefed-test-framework" },
  { hash: "28b4dfe24b", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Remove empty source files＂＂ into main" },
  { hash: "0a3f1d88b5", date: "2024-04-17", author: "rwt@google.com", message: "Remove remove_bond_with_address_map flag" },
  { hash: "ab06891d29", date: "2024-04-17", author: "rwt@google.com", message: "Add a flag to guard removing the address mapping on device removal" },
  { hash: "08e9b191bd", date: "2024-04-17", author: "rwt@google.com", message: "Remove device properties after BOND_NONE is processed" },
  { hash: "5001c44f26", date: "2024-04-17", author: "yikong@google.com", message: "Merge ＂Remove test that triggers undefined behavior＂ into main" },
  { hash: "29a7f76cae", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Fix condition in device address mapping removal＂＂ into main" },
  { hash: "c586e60e55", date: "2024-04-17", author: "rwt@google.com", message: "Revert ＂Fix condition in device address mapping removal＂" },
  { hash: "a2bc3f0926", date: "2024-04-17", author: "cmanton@google.com", message: "net_test_stack_sdp: Add sdpu_compare_uuid" },
  { hash: "23a83877d5", date: "2024-04-17", author: "yikong@google.com", message: "Remove test that triggers undefined behavior" },
  { hash: "7c50ba836b", date: "2024-04-17", author: "henrichataing@google.com", message: "Revert^2 ＂Remove empty source files＂" },
  { hash: "27baad7e5b", date: "2024-04-17", author: "rlukasz@google.com", message: "LeAudioService: Add unit tests and minor fixes" },
  { hash: "35a901cb88", date: "2024-04-17", author: "rotkiewicz@google.com", message: "BluetoothAudioHal fix misleading log type and msg" },
  { hash: "ba8294efbe", date: "2024-04-17", author: "mylesgw@google.com", message: "Log LeAddressManager::AddressPolicy" },
  { hash: "a4b39a46f1", date: "2024-04-17", author: "tyszkowski@google.com", message: "LeAudio/Brodcaster: Adjust the configuration struct" },
  { hash: "01e90bd3ea", date: "2024-04-17", author: "tyszkowski@google.com", message: "LeAudio: Split unicast and broadcast offload capabilities" },
  { hash: "e5e2b6023e", date: "2024-04-17", author: "tyszkowski@google.com", message: "LeAudio: Decouple helper functions" },
  { hash: "9bfd8965cd", date: "2024-04-17", author: "tyszkowski@google.com", message: "LeAudio: Minor logging and comments improvement" },
  { hash: "c59c751334", date: "2024-04-17", author: "rotkiewicz@google.com", message: "a2dp_api: allow binding to tA2DP_FIND_CBACK" },
  { hash: "e4efe7b26b", date: "2024-04-17", author: "rlukasz@google.com", message: "leaudio: Send codec config just before device is ACTIVE" },
  { hash: "f9f8388451", date: "2024-04-17", author: "belusiak@google.com", message: "PublicBroadcastData: remove exception throw" },
  { hash: "dfd5df581e", date: "2024-04-17", author: "rlukasz@google.com", message: "Merge ＂leaudio: Fix group set active race＂ into main" },
  { hash: "24420138bd", date: "2024-04-17", author: "rlukasz@google.com", message: "Merge ＂leaudio: Fix build warnings in logs＂ into main" },
  { hash: "171968e804", date: "2024-04-17", author: "howardchung@google.com", message: "Floss: Only enable page scan when necessary" },
  { hash: "218a2f7a6a", date: "2024-04-17", author: "howardchung@google.com", message: "Merge ＂Floss: Restrict allowed packet types of SCO codec＂ into main" },
  { hash: "8b671facfd", date: "2024-04-17", author: "howardchung@google.com", message: "Merge ＂Floss: Allow fallback to CVSD S1 from CVSD S3 or S4＂ into main" },
  { hash: "80cc29b5b4", date: "2024-04-17", author: "howardchung@google.com", message: "Merge ＂Floss: Don't retry sco settings if we are not initiator＂ into main" },
  { hash: "8833f41478", date: "2024-04-17", author: "howardchung@google.com", message: "Merge ＂Floss: Fix SCO state when retrying different parameters＂ into main" },
  { hash: "6e9e49735f", date: "2024-04-17", author: "mylesgw@google.com", message: "Merge ＂Use fmt to build enum cases＂ into main" },
  { hash: "523051107f", date: "2024-04-16", author: "mylesgw@google.com", message: "Use string macros for btif_core_test" },
  { hash: "f468c16deb", date: "2024-04-16", author: "mylesgw@google.com", message: "Use fmt to build enum cases" },
  { hash: "1ab4538c54", date: "2024-04-17", author: "cmanton@google.com", message: "osi::test::test_stubs Include what you use" },
  { hash: "f86f053e23", date: "2024-04-16", author: "mylesgw@google.com", message: "AlarmTest: Synchronize the callback with promises" },
  { hash: "7b8db98c0c", date: "2024-04-16", author: "poahlo@google.com", message: "Merge ＂btif_sock_rfc: log rfc_port_handle before crash＂ into main" },
  { hash: "a99dc63fc2", date: "2024-04-16", author: "rwt@google.com", message: "Flag to allow pairing over transport not seen" },
  { hash: "373166f9d4", date: "2024-04-16", author: "mylesgw@google.com", message: "Merge ＂Check RemoteNameRequestCancel status＂ into main" },
  { hash: "ce923e8355", date: "2024-04-16", author: "rlukasz@google.com", message: "leaudio: Fix group set active race" },
  { hash: "588637ec6f", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂leaudio: Allow unidirectional Assistant.＂ into main" },
  { hash: "484eb01947", date: "2024-04-16", author: "rlukasz@google.com", message: "Merge ＂LeAudioService: Fix behaviour of getCodecStatus＂ into main" },
  { hash: "65f7b08fa2", date: "2024-04-16", author: "henrichataing@google.com", message: "Merge ＂Revert ＂Remove empty source files＂＂ into main" },
  { hash: "fa36ffd675", date: "2024-04-16", author: "poahlo@google.com", message: "btif_sock_rfc: log rfc_port_handle before crash" },
  { hash: "bee0ec2631", date: "2024-04-16", author: "henrichataing@google.com", message: "Revert ＂Remove empty source files＂" },
  { hash: "65d9089b36", date: "2024-04-16", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove aritrasen@google.com from android/app/OWNERS" },
  { hash: "742935012a", date: "2024-04-16", author: "mylesgw@google.com", message: "Merge ＂HCI: Don't abort for unsuccessful connections＂ into main" },
  { hash: "237e640c73", date: "2024-04-16", author: "henrichataing@google.com", message: "Merge ＂Remove empty source files＂ into main" },
  { hash: "e41c94494e", date: "2024-04-16", author: "mylesgw@google.com", message: "Check RemoteNameRequestCancel status" },
  { hash: "7c58336d59", date: "2024-04-16", author: "rlukasz@google.com", message: "LeAudioService: Fix behaviour of getCodecStatus" },
  { hash: "cebb0e7a55", date: "2024-04-16", author: "rlukasz@google.com", message: "leaudio: Fix invalid direction issue" },
  { hash: "8923190fe7", date: "2024-04-16", author: "rlukasz@google.com", message: "leaudio: Fix sending current config to Java" },
  { hash: "61c134fead", date: "2024-04-16", author: "rlukasz@google.com", message: "leaudio: Fix build warnings in logs" },
  { hash: "9da407a965", date: "2024-04-16", author: "saba.sarabta@exalt.ps", message: "Floss: Implement Pandora HFP profile (part2)." },
  { hash: "9b217496b7", date: "2024-04-16", author: "mohammad.kh.sabri@exalt.ps", message: "Floss: Implement Pandora HFP profile (part1)." },
  { hash: "8e6a4445b4", date: "2024-04-16", author: "rajaa.abdallah@exalt.ps", message: "Floss: Implement Pandora modem profile" },
  { hash: "56fbe0f73b", date: "2024-04-16", author: "rajaa.abdallah@exalt.ps", message: "Floss: Implements BluetoothTelephony D-Bus client" },
  { hash: "2647f6d00a", date: "2024-04-16", author: "klhyun@google.com", message: "Add a flag for fixing discovery stuck issue" },
  { hash: "879535220e", date: "2024-04-16", author: "apusaka@google.com", message: "Demote some debug logs to verbose level" },
  { hash: "1cfd65e07f", date: "2024-04-16", author: "chienyuanhuang@google.com", message: "Merge ＂RAS: Parse Ranging Data segments from remote＂ into main" },
  { hash: "4d7a7c8117", date: "2024-04-16", author: "rwt@google.com", message: "Merge ＂Renaming some local variables for readability＂ into main" },
  { hash: "6b1f088b38", date: "2024-04-16", author: "licorne@google.com", message: "flags: Build flag library with gn for floss" },
  { hash: "e40ee3f274", date: "2024-04-16", author: "licorne@google.com", message: "floss: Add aconfig to floss docker image" },
  { hash: "56df38a04b", date: "2024-04-16", author: "licorne@google.com", message: "floss: Add a libflags shim" },
  { hash: "5d0d5e840c", date: "2024-04-16", author: "licorne@google.com", message: "floss: Update dockerfile rust version to 1.77.1" },
  { hash: "d9609462ff", date: "2024-04-16", author: "howardchung@google.com", message: "Floss: Restrict allowed packet types of SCO codec" },
  { hash: "eb4b03cea1", date: "2024-04-16", author: "howardchung@google.com", message: "Floss: Allow fallback to CVSD S1 from CVSD S3 or S4" },
  { hash: "16a909f3d6", date: "2024-04-16", author: "howardchung@google.com", message: "Floss: Don't retry sco settings if we are not initiator" },
  { hash: "d50b7538d9", date: "2024-04-16", author: "howardchung@google.com", message: "Floss: Fix SCO state when retrying different parameters" },
  { hash: "e98fd80556", date: "2024-04-16", author: "howardchung@google.com", message: "Merge ＂Add flag fix_hfp_qual_1_9＂ into main" },
  { hash: "c1a0253d93", date: "2024-04-16", author: "yikong@google.com", message: "Merge ＂Suppress ubsan for TestCodecIndexStr test＂ into main" },
  { hash: "4b0082f6c3", date: "2024-04-16", author: "henrichataing@google.com", message: "Remove empty source files" },
  { hash: "e1b7c4ff31", date: "2024-04-16", author: "henrichataing@google.com", message: "Merge changes I3298e94c,I71623f70,Ie7d177d3 into main" },
  { hash: "307c9a00fc", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂LeAudio: Fix running configuration matcher on nullptr＂ into main" },
  { hash: "9a6244ada4", date: "2024-04-15", author: "chienyuanhuang@google.com", message: "RAS: Parse Ranging Data segments from remote" },
  { hash: "e9e18004de", date: "2024-04-15", author: "henrichataing@google.com", message: "system/gd: Remove unused modules Discoverability, Page, Inquiry" },
  { hash: "13493a4939", date: "2024-04-15", author: "henrichataing@google.com", message: "system/gd: Remove unused RPC endpoints from neighbor facade" },
  { hash: "9e42a0e9bd", date: "2024-04-15", author: "tyszkowski@google.com", message: "LeAudio: Fix running configuration matcher on nullptr" },
  { hash: "14dace69cb", date: "2024-04-15", author: "mylesgw@google.com", message: "HCI: Don't abort for unsuccessful connections" },
  { hash: "a36742b81f", date: "2024-04-15", author: "henrichataing@google.com", message: "blueberry: Remove unused shim facade" },
  { hash: "bbd13a8665", date: "2024-04-15", author: "rlukasz@google.com", message: "Merge ＂leaudio: Add location of both direction to the dumpsys＂ into main" },
  { hash: "026c0fd11f", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂leaudio: Fix reconfiguration for sonification types＂ into main" },
  { hash: "62abc0dc50", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂system/gd: Remove connectability module＂ into main" },
  { hash: "67dadff7d2", date: "2024-04-15", author: "henrichataing@google.com", message: "Merge ＂SystemServer: Remove RequiresPermission from code＂ into main" },
  { hash: "6adfec06ff", date: "2024-04-15", author: "jrwu@google.com", message: "LEA: correct include names in le_audio_types.h" },
  { hash: "74e5ef4000", date: "2024-04-15", author: "jrwu@google.com", message: "Floss: print log on A2DP audio state update" },
  { hash: "f4f42a309d", date: "2024-04-15", author: "gkolodziejczyk@google.com", message: "Merge ＂le_audio: Queue broadcast when unicast is getting active＂ into main" },
  { hash: "16cee82fbe", date: "2024-04-15", author: "rlukasz@google.com", message: "Merge ＂LeAudio: Decouple BAP logic from Audio HAL client type＂ into main" },
  { hash: "5fb46c92d7", date: "2024-04-13", author: "yikong@google.com", message: "Suppress ubsan for TestCodecIndexStr test" },
  { hash: "ffac08f592", date: "2024-04-12", author: "rghanti@google.com", message: "Merge ＂Log RDI with metric ID during connection＂ into main" },
  { hash: "42176bf2fa", date: "2024-04-12", author: "charliebout@google.com", message: "Merge ＂Pandora: build python without the embedded launcher＂ into main" },
  { hash: "f873353a4e", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂SystemServer: Delete non-oneway call never used＂ into main" },
  { hash: "54043c67a7", date: "2024-04-12", author: "henrichataing@google.com", message: "Merge ＂Remove gd cert test suite NeighborTest＂ into main" },
  { hash: "6e3ac8aff1", date: "2024-04-12", author: "henrichataing@google.com", message: "system/gd: Remove connectability module" },
  { hash: "7a4d90345f", date: "2024-04-12", author: "rwt@google.com", message: "Renaming some local variables for readability" },
  { hash: "0c027b3732", date: "2024-04-12", author: "rwt@google.com", message: "Flag to prevent removal of duplicate non-LE-only device records" },
  { hash: "26c1b06a90", date: "2024-04-12", author: "jpawlowski@google.com", message: "Merge ＂BTA DM: Clean up name read loop.＂ into main" },
  { hash: "c5bd52ae74", date: "2024-04-12", author: "rlukasz@google.com", message: "leaudio: Add location of both direction to the dumpsys" },
  { hash: "890ef86bb6", date: "2024-04-12", author: "gkolodziejczyk@google.com", message: "le_audio: Queue broadcast when unicast is getting active" },
  { hash: "dc5952077e", date: "2024-04-12", author: "rlukasz@google.com", message: "leaudio: Fix reconfiguration for sonification types" },
  { hash: "ab8f9b204e", date: "2024-04-12", author: "tyszkowski@google.com", message: "Merge ＂LeAudio/CodecManager: Add configuration requirements＂ into main" },
  { hash: "432097640c", date: "2024-04-12", author: "rlukasz@google.com", message: "Merge ＂LeAudio: Minor header cleanup＂ into main" },
  { hash: "cdfa2b65dc", date: "2024-04-12", author: "wescande@google.com", message: "Merge ＂SystemServer: use handler for BroadcastReceiver＂ into main" },
  { hash: "cd62966cc5", date: "2024-04-12", author: "klhyun@google.com", message: "Merge ＂Remove unused code＂ into main" },
  { hash: "1fca3b3f8e", date: "2024-04-12", author: "howardchung@google.com", message: "Add flag fix_hfp_qual_1_9" },
  { hash: "854daee2c0", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[le audio] Broadcast control sink devices volume by setVolume＂ into main" },
  { hash: "b974c6c6b1", date: "2024-04-12", author: "chharry@google.com", message: "Merge ＂floss: Defer unregister_scanner if it comes on suspending/ed＂ into main" },
  { hash: "5aa12b8e38", date: "2024-04-12", author: "rongxuan@google.com", message: "[le audio] Broadcast control sink devices volume by setVolume" },
  { hash: "7f9f864265", date: "2024-04-11", author: "wescande@google.com", message: "SystemServer: use handler for BroadcastReceiver" },
  { hash: "43613237f6", date: "2024-04-11", author: "henrichataing@google.com", message: "Merge ＂system/main: Remove unused modules from shim＂ into main" },
  { hash: "223001a022", date: "2024-04-11", author: "wescande@google.com", message: "SystemServer: Remove RequiresPermission from code" },
  { hash: "29bedba887", date: "2024-04-11", author: "wescande@google.com", message: "Merge changes I0492696b,I24f8df97 into main" },
  { hash: "ce2f1cad11", date: "2024-04-11", author: "wescande@google.com", message: "Merge ＂SystemServer: remove unused import＂ into main" },
  { hash: "66c6a5e491", date: "2024-04-11", author: "okamil@google.com", message: "Update DCK tests to use TestParameterInjector." },
  { hash: "f8fdb78579", date: "2024-04-11", author: "rghanti@google.com", message: "Log RDI with metric ID during connection" },
  { hash: "f742a42bc1", date: "2024-04-11", author: "okamil@google.com", message: "Merge ＂Fixes null pointer dereferences introduced when moving scanning callbacks into their own object.＂ into main" },
  { hash: "07d4083e7c", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[BluetoothMetrics]: Logging RDI for A2DP Metric＂ into main" },
  { hash: "867dea2226", date: "2024-04-11", author: "sarveshkalwit@google.com", message: "Merge ＂floss: Allow sending a GATT server request response with btclient＂ into main" },
  { hash: "abc379b032", date: "2024-04-11", author: "sarveshkalwit@google.com", message: "Merge ＂floss: Align included service handling with Android GattService＂ into main" },
  { hash: "764e52c931", date: "2024-04-11", author: "wescande@google.com", message: "SystemServer: remove unused import" },
  { hash: "cca2f4b170", date: "2024-04-11", author: "tyszkowski@google.com", message: "LeAudio: Decouple BAP logic from Audio HAL client type" },
  { hash: "fc7824bd03", date: "2024-04-11", author: "tyszkowski@google.com", message: "LeAudio/CodecManager: Add configuration requirements" },
  { hash: "edb1700855", date: "2024-04-11", author: "tyszkowski@google.com", message: "LeAudio: Minor header cleanup" },
  { hash: "3ffd8d728a", date: "2024-04-11", author: "jpawlowski@google.com", message: "BTA DM: Clean up name read loop." },
  { hash: "34a2505066", date: "2024-04-11", author: "wescande@google.com", message: "SystemServer: Sanitize build rules" },
  { hash: "d551cf9347", date: "2024-04-11", author: "yuyangh@google.com", message: "Merge ＂If sink audio policy makes the device active for a call, then after call ends, resume previous active device＂ into main" },
  { hash: "d6879be627", date: "2024-04-11", author: "henrichataing@google.com", message: "Remove gd cert test suite NeighborTest" },
  { hash: "cd222b3ef4", date: "2024-04-11", author: "rlukasz@google.com", message: "Merge ＂leaudio: Additional improvement to handle no available context types＂ into main" },
  { hash: "8df39a27e7", date: "2024-04-11", author: "yuyangh@google.com", message: "Merge ＂Resume LE Audio active device when HFP handover is occured.＂ into main" },
  { hash: "fef0800d9d", date: "2024-04-11", author: "charliebout@google.com", message: "Pandora: build python without the embedded launcher" },
  { hash: "a60b738a93", date: "2024-04-11", author: "yuyangh@google.com", message: "If sink audio policy makes the device active for a call, then after call ends, resume previous active device" },
  { hash: "2941ad79cd", date: "2024-04-11", author: "jpawlowski@google.com", message: "Fix condition in device address mapping removal" },
  { hash: "c0b24b6b70", date: "2024-04-11", author: "rlukasz@google.com", message: "leaudio: Additional improvement to handle no available context types" },
  { hash: "6ebdd72683", date: "2024-04-11", author: "jpawlowski@google.com", message: "Merge changes Ib7815fd9,Ib1dd3ce9 into main" },
  { hash: "59d8660b29", date: "2024-04-10", author: "henrichataing@google.com", message: "system/main: Remove unused modules from shim" },
  { hash: "09d55be6c4", date: "2024-04-11", author: "sarveshkalwit@google.com", message: "floss: Allow sending a GATT server request response with btclient" },
  { hash: "9987ebfa1e", date: "2024-04-11", author: "kihongs@google.com", message: "Merge ＂Fix AdapterPropertiesTest#testCleanupPrevBondRecordsFor＂ into main" },
  { hash: "7e4e72ba96", date: "2024-04-11", author: "chharry@google.com", message: "Merge ＂Revert ＂Floss: Only enable page scan when necessary＂＂ into main" },
  { hash: "c5e5eda875", date: "2024-04-10", author: "wescande@google.com", message: "Merge changes I4adbf8fb,I5b291b5e,I8c6de8a4 into main" },
  { hash: "b05739d3f1", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I21d29af4,I2c257af8 into main" },
  { hash: "bb67f715af", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: add leaudio_broadcast_volume_control_with_set_volume＂ into main" },
  { hash: "ff68f67eaf", date: "2024-04-10", author: "wescande@google.com", message: "Build files: remove barely used default" },
  { hash: "ce2829d9a1", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂system/gd: Remove dependency from AclManager on SecurityModule＂ into main" },
  { hash: "53a120f989", date: "2024-04-10", author: "rongxuan@google.com", message: "flags: add leaudio_broadcast_volume_control_with_set_volume" },
  { hash: "0d0db4307e", date: "2024-04-10", author: "henrichataing@google.com", message: "system/gd: Remove dependency from AclManager on SecurityModule" },
  { hash: "a7340e73cb", date: "2024-04-10", author: "wescande@google.com", message: "SystemServer aidl: Remove dependency to framework" },
  { hash: "fc5884ba82", date: "2024-04-10", author: "wescande@google.com", message: "SystemServer: DISABLE_MESSAGE handle in function" },
  { hash: "e26529a579", date: "2024-04-10", author: "wescande@google.com", message: "SystemServer: ENABLE_MESSAGE handle in function" },
  { hash: "b9ef05cabb", date: "2024-04-10", author: "jaydenk@google.com", message: "Merge ＂Increase the timeout for energy info update to ensure reception＂ into main" },
  { hash: "ad05a25815", date: "2024-04-10", author: "cmanton@google.com", message: "Ensure remote name callback is sent at cancel" },
  { hash: "684636df25", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Flags: add brcm_better_le_scan_params＂＂ into main" },
  { hash: "6ab2e4d1f5", date: "2024-04-10", author: "rongxuan@google.com", message: "Merge changes I0d5a01c7,I2125994b into main" },
  { hash: "0eceda728c", date: "2024-04-10", author: "henrichataing@google.com", message: "Merge ＂system/gd: Remove unused modules IsoModule, IsoManager, IsoFacade＂ into main" },
  { hash: "2939790b48", date: "2024-04-10", author: "jaydenk@google.com", message: "Increase the timeout for energy info update to ensure reception" },
  { hash: "9224679ddf", date: "2024-04-10", author: "wescande@google.com", message: "Merge changes I939444e4,Ie4b0b6f8,I285734be,Ic049d4d1 into main" },
  { hash: "adc4fb44d0", date: "2024-04-10", author: "wescande@google.com", message: "Merge ＂A2DP: Skip A2DP SDP for IOT devices＂ into main" },
  { hash: "5e36438a97", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes Ic4db008a,I3c41d85d into main" },
  { hash: "d7474b80fa", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂LeAudioStackEvent: Add missing log＂ into main" },
  { hash: "4e6e7fc298", date: "2024-04-10", author: "wescande@google.com", message: "SystemServer: Satellite mode disable even BLE_ON" },
  { hash: "1a5773732d", date: "2024-04-10", author: "jpawlowski@google.com", message: "Revert ＂Flags: add brcm_better_le_scan_params＂" },
  { hash: "867fd0c36f", date: "2024-04-10", author: "henrichataing@google.com", message: "system/gd: Remove unused modules IsoModule, IsoManager, IsoFacade" },
  { hash: "de1b272982", date: "2024-04-10", author: "howardchung@google.com", message: "Revert ＂Floss: Only enable page scan when necessary＂" },
  { hash: "b41b19226b", date: "2024-04-10", author: "gkolodziejczyk@google.com", message: "bass_client: Don't remove source on stream suspension" },
  { hash: "b5acd327c2", date: "2024-04-10", author: "rlukasz@google.com", message: "leaudio: Fix assert on group disconnect while CIG creation" },
  { hash: "e7ceccfba3", date: "2024-04-10", author: "gkolodziejczyk@google.com", message: "bass_client: Use PA_Sync value in update source context" },
  { hash: "89291600d8", date: "2024-04-10", author: "rlukasz@google.com", message: "leaudio: Fix unit test verifier" },
  { hash: "e69cdcd54f", date: "2024-04-10", author: "chharry@google.com", message: "floss: Defer unregister_scanner if it comes on suspending/ed" },
  { hash: "1d02fa29a1", date: "2024-04-10", author: "rlukasz@google.com", message: "LeAudioStackEvent: Add missing log" },
  { hash: "6aa6a728bb", date: "2024-04-10", author: "jpawlowski@google.com", message: "Add flag key_missing_classic_device" },
  { hash: "fb721fae4d", date: "2024-04-10", author: "jpawlowski@google.com", message: "Merge ＂Use address, not address with type when writing to storage.＂ into main" },
  { hash: "57a0d19177", date: "2024-04-10", author: "wescande@google.com", message: "Merge changes I5b689187,Iffd988ab,Ibccf6a93 into main" },
  { hash: "9161557478", date: "2024-04-10", author: "chharry@google.com", message: "Merge ＂floss: Add advertisement monitor quirk for WCN3991＂ into main" },
  { hash: "ad354101fd", date: "2024-04-10", author: "wescande@google.com", message: "Merge ＂SystemServer: add Ble information during dump＂ into main" },
  { hash: "fafb4c3cd2", date: "2024-04-10", author: "yameidu@amazon.com", message: "A2DP: Skip A2DP SDP for IOT devices" },
  { hash: "e76084a84e", date: "2024-04-09", author: "henrichataing@google.com", message: "system/gd: Remove sources for unimplemented module AttModule" },
  { hash: "d749bacea3", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂eatt: Minor fix confusing log＂ into main" },
  { hash: "5615752463", date: "2024-04-09", author: "henrichataing@google.com", message: "system: Remove unused soong declarations" },
  { hash: "61be53f0af", date: "2024-04-10", author: "wescande@google.com", message: "Merge ＂Regression in LOG_DUMPSYS formatting＂ into main" },
  { hash: "4668afcd10", date: "2024-04-09", author: "okamil@google.com", message: "Fixes null pointer dereferences introduced when moving scanning callbacks into their own object." },
  { hash: "1153aece47", date: "2024-04-10", author: "sarveshkalwit@google.com", message: "Merge ＂floss: Complete BTIF to Floss GATT attribute type conversions＂ into main" },
  { hash: "48bf865530", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I62acf212,I4bf1b50b into main" },
  { hash: "078e201220", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂BluetoothAdapter: Cleanup oob callback＂ into main" },
  { hash: "fed8925434", date: "2024-04-09", author: "wescande@google.com", message: "SystemServer: move smaller if branch first" },
  { hash: "9a5fa11e0e", date: "2024-04-09", author: "wescande@google.com", message: "SystemServer: Extract airplane turn off logic" },
  { hash: "ef814a2bde", date: "2024-04-09", author: "wescande@google.com", message: "SystemServer: change variable name" },
  { hash: "3d62f5b215", date: "2024-04-09", author: "henrichataing@google.com", message: "Regression in LOG_DUMPSYS formatting" },
  { hash: "6262df7794", date: "2024-04-09", author: "wescande@google.com", message: "SystemServer: add Ble information during dump" },
  { hash: "6f6d95a4e2", date: "2024-04-09", author: "yuyangh@google.com", message: "Resume LE Audio active device when HFP handover is occured." },
  { hash: "0551cac04b", date: "2024-04-09", author: "henrichataing@google.com", message: "Merge changes I031ddff1,I06f2e788 into main" },
  { hash: "3d5bbcd88b", date: "2024-04-09", author: "wescande@google.com", message: "AdapterService: Apply google-java-format" },
  { hash: "9056c35883", date: "2024-04-09", author: "wescande@google.com", message: "AdapterService: Remove unused local metric logger" },
  { hash: "b9592c3f44", date: "2024-04-09", author: "wescande@google.com", message: "AdapterService: Inline methods" },
  { hash: "f0c3d7ca6f", date: "2024-04-09", author: "rlukasz@google.com", message: "eatt: Minor fix confusing log" },
  { hash: "26b6382ae2", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂SystemServer X FastBind: prevent double enable＂ into main" },
  { hash: "021643657e", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: Add sink_audio_policy_handover＂ into main" },
  { hash: "ffe9dcdd1c", date: "2024-04-09", author: "rwt@google.com", message: "Merge ＂Allow LE encryption while BR/EDR encryption is going on＂ into main" },
  { hash: "c7e227e8c5", date: "2024-04-09", author: "henrichataing@google.com", message: "Merge ＂system: Remove logbool()＂ into main" },
  { hash: "8679a2b60d", date: "2024-04-09", author: "yuyangh@google.com", message: "flags: Add sink_audio_policy_handover" },
  { hash: "ef9c4e97e0", date: "2024-04-09", author: "henrichataing@google.com", message: "system/gd: Remove unimplemented Module virtual methods" },
  { hash: "1bb1d1f380", date: "2024-04-09", author: "henrichataing@google.com", message: "system/gd: Inline ModuleStateDumper class into Module class" },
  { hash: "42e450dbb8", date: "2024-04-09", author: "henrichataing@google.com", message: "system: Remove logbool()" },
  { hash: "40d4610e86", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[BluetoothMetrics]: Logging RDI for HFP metric＂ into main" },
  { hash: "8c2d5c40c4", date: "2024-04-09", author: "cmanton@google.com", message: "Move to compilation unit BT_EVT_BTIF" },
  { hash: "2ff84ba04b", date: "2024-04-09", author: "cmanton@google.com", message: "Move to compilation unit BLE_EVT_CONNECTABLE_BIT" },
  { hash: "92a43184c3", date: "2024-04-09", author: "cmanton@google.com", message: "Flag: Clear rnr in-progress-state when rnr_cancel called" },
  { hash: "fcb80ba8b6", date: "2024-04-09", author: "sarveshkalwit@google.com", message: "floss: Complete BTIF to Floss GATT attribute type conversions" },
  { hash: "c68a22c6c1", date: "2024-04-09", author: "sarveshkalwit@google.com", message: "floss: Complete Floss to BTIF GATT attribute type conversions" },
  { hash: "a8a4b199b0", date: "2024-04-09", author: "sarveshkalwit@google.com", message: "floss: Add a sample GATT service with btclient" },
  { hash: "b937f2d562", date: "2024-04-09", author: "jpawlowski@google.com", message: "Use address, not address with type when writing to storage." },
  { hash: "44a88cea36", date: "2024-04-09", author: "jpawlowski@google.com", message: "Get rid of tBTA_DM_SEARCH_CB.services" },
  { hash: "1a399acb8c", date: "2024-04-09", author: "jpawlowski@google.com", message: "Split bta_dm_discover into bta_dm_discover_services and bta_dm_discover_name" },
  { hash: "1ac3b36620", date: "2024-04-09", author: "jpawlowski@google.com", message: "Merge ＂Get rid of ＂services＂ parameter to start search request＂ into main" },
  { hash: "06f471fb2e", date: "2024-04-09", author: "whalechang@google.com", message: "Floss: Removed unnecessary code related to hold and resume" },
  { hash: "25cdb0fad8", date: "2024-04-09", author: "chharry@google.com", message: "floss: Add advertisement monitor quirk for WCN3991" },
  { hash: "6e18bacb7d", date: "2024-04-09", author: "rwt@google.com", message: "Allow LE encryption while BR/EDR encryption is going on" },
  { hash: "b7681157f4", date: "2024-04-09", author: "kihongs@google.com", message: "Fix AdapterPropertiesTest#testCleanupPrevBondRecordsFor" },
  { hash: "fa465edd69", date: "2024-04-08", author: "wescande@google.com", message: "SystemServer X FastBind: prevent double enable" },
  { hash: "b5594d46db", date: "2024-04-09", author: "hdmoon@google.com", message: "Merge ＂Add flag gatt_server_add_handler_to_run_callbacks_on＂ into main" },
  { hash: "019b10c9a5", date: "2024-04-09", author: "hdmoon@google.com", message: "Merge changes Ic32034c5,Ie6f5bb31 into main" },
  { hash: "e90d394b53", date: "2024-04-09", author: "hallstrom@google.com", message: "Add GattServer connection tests" },
  { hash: "c75e7a405b", date: "2024-04-09", author: "hdmoon@google.com", message: "BluetoothGattServer: Pass address type to native" },
  { hash: "0666af0137", date: "2024-04-09", author: "cmanton@google.com", message: "bta:: Use proper types tBTA_JV_CONN_TYPE" },
  { hash: "d35df7b6ce", date: "2024-04-09", author: "hdmoon@google.com", message: "Merge ＂OPP: Adjust margins in file transfer activity＂ into main" },
  { hash: "4531a5f27a", date: "2024-04-08", author: "henrichataing@google.com", message: "Merge ＂system/main: Remove librchrome log initialization＂ into main" },
  { hash: "528ee9cce7", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Reduce metric error from assert to warn＂ into main" },
  { hash: "0b72b499d0", date: "2024-04-08", author: "klhyun@google.com", message: "Remove unused code" },
  { hash: "8bcf3f60f5", date: "2024-04-08", author: "ahujapalash@google.com", message: "[BluetoothMetrics]: Logging RDI for A2DP Metric" },
  { hash: "8f76d61d52", date: "2024-04-08", author: "ahujapalash@google.com", message: "[BluetoothMetrics]: Logging RDI for HFP metric" },
  { hash: "88484087ea", date: "2024-04-08", author: "wescande@google.com", message: "Reduce metric error from assert to warn" },
  { hash: "69eeeabd22", date: "2024-04-08", author: "rghanti@google.com", message: "Merge ＂[BluetoothMetrics] Update the bloom filter＂ into main" },
  { hash: "e3641ed300", date: "2024-04-08", author: "jpawlowski@google.com", message: "Get rid of ＂services＂ parameter to start search request" },
  { hash: "b4bdc78831", date: "2024-04-08", author: "henrichataing@google.com", message: "system/main: Remove librchrome log initialization" },
  { hash: "c73a64d44a", date: "2024-04-08", author: "rwt@google.com", message: "Merge changes I62b501ad,I19103cf8 into main" },
  { hash: "2f1a23f3d4", date: "2024-04-08", author: "rghanti@google.com", message: "[BluetoothMetrics] Update the bloom filter" },
  { hash: "6c58e30890", date: "2024-04-08", author: "wescande@google.com", message: "Update owners files" },
  { hash: "df63ea0575", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂SystemServer mask address in logs＂ into main" },
  { hash: "f3e34d9d95", date: "2024-04-08", author: "henrichataing@google.com", message: "Merge changes Iea14d270,I55c74797,Ib9d21f91 into main" },
  { hash: "97c921ede5", date: "2024-04-08", author: "henrichataing@google.com", message: "Merge ＂Inline DISALLOW_COPY_AND_ASSIGN＂ into main" },
  { hash: "21c606da4f", date: "2024-04-08", author: "rongxuan@google.com", message: "Merge changes I02c57178,I7a2ae680 into main" },
  { hash: "a309b70941", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Convert various android.bluetooth unit tests to go/truth＂ into main" },
  { hash: "d93c6d5e6f", date: "2024-04-08", author: "henrichataing@google.com", message: "Strip remaining system/gd/os/log.h definitions" },
  { hash: "81b7bcec1f", date: "2024-04-08", author: "henrichataing@google.com", message: "Remove legacy header system/include/check.h" },
  { hash: "4fa6358632", date: "2024-04-08", author: "gkolodziejczyk@google.com", message: "LeAudio: Check for start request mutext before getting value" },
  { hash: "76ebc85513", date: "2024-04-08", author: "henrichataing@google.com", message: "Remove unused header system/include/notreached.h" },
  { hash: "a2e71022e9", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂gatt: Fix handling direct connect＂ into main" },
  { hash: "194d9bc990", date: "2024-04-08", author: "hdmoon@google.com", message: "Add flag gatt_server_add_handler_to_run_callbacks_on" },
  { hash: "dbfaa5b5e9", date: "2024-04-08", author: "belusiak@google.com", message: "LeAudioService: Destroy broadcast if it fails to start in time" },
  { hash: "6a9e0af1ff", date: "2024-04-08", author: "belusiak@google.com", message: "flags: add leaudio_broadcast_destroy_after_timeout" },
  { hash: "001d87cc93", date: "2024-04-08", author: "gkolodziejczyk@google.com", message: "Merge changes I76a74016,I2dbf41aa into main" },
  { hash: "06071ced06", date: "2024-04-08", author: "rwt@google.com", message: "HidHost: Refactor uhid thread entry function" },
  { hash: "e38502d35f", date: "2024-04-08", author: "rwt@google.com", message: "Break from UHID polling early if HID host disconnects " },
  { hash: "7e838eaad8", date: "2024-04-07", author: "cmanton@google.com", message: "bta:: Remove UNUSED_ATTR and comment out unused params" },
  { hash: "6c5ae33139", date: "2024-04-06", author: "wescande@google.com", message: "BluetoothAdapter: Cleanup oob callback" },
  { hash: "44ea9eb106", date: "2024-04-06", author: "ofy@google.com", message: "Convert various android.bluetooth unit tests to go/truth" },
  { hash: "6a67df8221", date: "2024-04-06", author: "wescande@google.com", message: "SystemServer: Delete non-oneway call never used" },
  { hash: "1849e4ae3d", date: "2024-04-05", author: "wescande@google.com", message: "SystemServer mask address in logs" },
  { hash: "e6036ec819", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove includes of <base/logging.h>＂ into main" },
  { hash: "cafa0e52ca", date: "2024-04-05", author: "henrichataing@google.com", message: "Inline DISALLOW_COPY_AND_ASSIGN" },
  { hash: "1cf9e42d6f", date: "2024-04-06", author: "salsavage@google.com", message: "Merge ＂Fix AvrcpControllerStateMachineTest NPEs on calls to service＂ into main" },
  { hash: "d9d218cbd9", date: "2024-04-06", author: "wescande@google.com", message: "Merge ＂Notification: Display on a regular basis＂ into main" },
  { hash: "b83d9d6ca2", date: "2024-04-05", author: "henrichataing@google.com", message: "Remove includes of <base/logging.h>" },
  { hash: "cb542d0c1d", date: "2024-04-05", author: "salsavage@google.com", message: "Fix AvrcpControllerStateMachineTest NPEs on calls to service" },
  { hash: "f74910d437", date: "2024-04-05", author: "henrichataing@google.com", message: "Merge ＂system: Migrate CHECK to log::assert_that＂ into main" },
  { hash: "57032ee251", date: "2024-04-05", author: "jpawlowski@google.com", message: "Merge ＂memory safe bta_dm_search_cb.pending_discovery_queue memory＂ into main" },
  { hash: "4d715ed0f0", date: "2024-04-05", author: "henrichataing@google.com", message: "system: Migrate CHECK to log::assert_that" },
  { hash: "c4befe7da7", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Split service search result from name read result＂ into main" },
  { hash: "e04d45bca5", date: "2024-04-05", author: "cmanton@google.com", message: "Remove stack::hcic::btsnd_hcic_rmt_name_req" },
  { hash: "6b0af6b463", date: "2024-04-05", author: "cmanton@google.com", message: "Remove stack::hcic::btsnd_hcic_rmt_name_req_cancel" },
  { hash: "1272c7ae69", date: "2024-04-05", author: "cmanton@google.com", message: "stack::btm::btm_process_remote_name Handle null name" },
  { hash: "a4f46ff6fb", date: "2024-04-05", author: "cmanton@google.com", message: "Introduce stack::btm::btm_eir.h" },
  { hash: "8ec0f183e0", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂le_audio: Avoid activation unicast and broadcast at the same time＂ into main" },
  { hash: "19fd265596", date: "2024-04-05", author: "henrichataing@google.com", message: "Merge ＂system/log: Warn against adding //vendor to the visibility＂ into main" },
  { hash: "9058b0b8f0", date: "2024-04-05", author: "henrichataing@google.com", message: "Merge changes Ia6812ab2,I17e25f54 into main" },
  { hash: "49167f3c76", date: "2024-04-05", author: "jpawlowski@google.com", message: "memory safe bta_dm_search_cb.pending_discovery_queue memory" },
  { hash: "9bbd89d187", date: "2024-04-05", author: "jpawlowski@google.com", message: "Split service search result from name read result" },
  { hash: "8696b16c4c", date: "2024-04-05", author: "henrichataing@google.com", message: "system/log: Warn against adding //vendor to the visibility" },
  { hash: "c8eb2ee5ce", date: "2024-04-05", author: "rlukasz@google.com", message: "gatt: Fix handling direct connect" },
  { hash: "8e4a94d519", date: "2024-04-05", author: "gkolodziejczyk@google.com", message: "flags: add leaudio_broadcast_assistant_peripheral_entrustment" },
  { hash: "753f2b0270", date: "2024-04-05", author: "gkolodziejczyk@google.com", message: "flags: add leaudio_start_request_state_mutex_check" },
  { hash: "9e1513cfbd", date: "2024-04-05", author: "jeongik@google.com", message: "Add //packages/modules/common/build" },
  { hash: "f4429e4782", date: "2024-04-05", author: "rlukasz@google.com", message: "Merge ＂flags: Add le_audio_support_unidirectional_voice_assistant＂ into main" },
  { hash: "14696a19be", date: "2024-04-05", author: "gkolodziejczyk@google.com", message: "le_audio: Avoid activation unicast and broadcast at the same time" },
  { hash: "0fc0339fce", date: "2024-04-05", author: "apusaka@google.com", message: "Merge ＂Floss: Hcidoc: Clear NOCP on carryover section＂ into main" },
  { hash: "a01121f8fd", date: "2024-04-05", author: "jiangzp@google.com", message: "Merge ＂floss: start resume if suspend is aborted＂ into main" },
  { hash: "dbebad04dc", date: "2024-04-05", author: "jpawlowski@google.com", message: "Merge changes Ia7ea581e,If22dda80 into main" },
  { hash: "b69c1a2b5c", date: "2024-04-05", author: "mylesgw@google.com", message: "Merge ＂LeAddressManager: Warn when clients aren't paused＂ into main" },
  { hash: "aea5476de3", date: "2024-04-05", author: "henrichataing@google.com", message: "Replace use of CHECK in test by gtest helpers" },
  { hash: "e86439cb93", date: "2024-04-05", author: "henrichataing@google.com", message: "system: Migrate LOG_ASSERT to log::assert_that" },
  { hash: "24287b55aa", date: "2024-04-05", author: "hdmoon@google.com", message: "Merge ＂OPP: Delete incomplete download file＂ into main" },
  { hash: "6af3053f84", date: "2024-04-05", author: "henrichataing@google.com", message: "Merge changes I8f61001c,I52dafb82,I79d5fec6,I344fe614,I8c96c500, ... into main" },
  { hash: "bd306babde", date: "2024-04-05", author: "wescande@google.com", message: "Merge changes Id36f4d43,I5c97a8f6 into main" },
  { hash: "4a0bc43984", date: "2024-04-04", author: "jiangzp@google.com", message: "Merge ＂floss: reduce descriptor of uhid＂ into main" },
  { hash: "ab77f99891", date: "2024-04-04", author: "wescande@google.com", message: "Merge ＂A2dpStateMachineTest: Move to truth＂ into main" },
  { hash: "43d96a0b6b", date: "2024-04-04", author: "mylesgw@google.com", message: "Merge ＂Silence ConnectabilityState Warning＂ into main" },
  { hash: "42d7f09933", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂A2dpServiceTest: Move to truth for clear message＂ into main" },
  { hash: "d263280c04", date: "2024-04-04", author: "jpawlowski@google.com", message: "Memory safe events in bta_dm_disc" },
  { hash: "1fffd9879c", date: "2024-04-04", author: "jpawlowski@google.com", message: "Make bta_dm_disc separate from BTA layer" },
  { hash: "ec1d90fe2e", date: "2024-04-04", author: "mylesgw@google.com", message: "LeAddressManager: Warn when clients aren't paused" },
  { hash: "6ba42076f3", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function gatt_num_clcb_by_bd_addr" },
  { hash: "a8072c153f", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused functions btsock_thread_post_cmd, btsock_thread_remove_fd_and_close" },
  { hash: "60b021bbd0", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused legacy HCI command serializers" },
  { hash: "6541142bcf", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btm_read_link_quality_timeout" },
  { hash: "195710ca90", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btm_queue_start_sync_req" },
  { hash: "289ab47f3c", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function BTM_IsAclConnectionUpFromHandle" },
  { hash: "7f67f528e6", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btm_is_sco_active" },
  { hash: "1bfe15ff20", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused functions btm_inq_db_init, btm_inq_db_free" },
  { hash: "5036d90b7b", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btm_dev_support_role_switch" },
  { hash: "b103e31e06", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused module BtifConfigCache" },
  { hash: "150ee880ba", date: "2024-04-04", author: "samdaria@google.com", message: "Merge ＂Update automotive owners＂ into main" },
  { hash: "f71e07601d", date: "2024-04-04", author: "cmanton@google.com", message: "net_test_stack_btm: Remove Wno-unused-parameter" },
  { hash: "8193d76ff6", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂leaudio: Allow to connect profile only when device is bonded＂ into main" },
  { hash: "46468ae357", date: "2024-04-04", author: "mylesgw@google.com", message: "Silence ConnectabilityState Warning" },
  { hash: "15e217458f", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove debug function btif_debug_config_dump" },
  { hash: "a54d63e26f", date: "2024-04-04", author: "henrichataing@google.com", message: "Merge changes Id3dde894,I8d586fab,I3d8c5700,I06f2d9a2,I64b8a1b7, ... into main" },
  { hash: "47417a5bf2", date: "2024-04-04", author: "wescande@google.com", message: "A2dpStateMachineTest: Move to truth" },
  { hash: "d6c1269be7", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btif_storage_get_remote_addr_type" },
  { hash: "b7763e3f8f", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btif_storage_set_remote_addr_type" },
  { hash: "6656ac9f72", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btif_storage_get_remote_device_type" },
  { hash: "a88a315b90", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function btif_storage_set_remote_device_type" },
  { hash: "78119d5f21", date: "2024-04-04", author: "poahlo@google.com", message: "Merge ＂l2c_link_check_send_pkts: Add null checks＂ into main" },
  { hash: "05520f81c6", date: "2024-04-04", author: "cmanton@google.com", message: "stack::btm:: Introduce stack_btm_inq_test" },
  { hash: "14b95b689a", date: "2024-04-04", author: "cmanton@google.com", message: "dumpsys: Acquire stack manager lock upon execution" },
  { hash: "fb0d2313f7", date: "2024-04-04", author: "cmanton@google.com", message: "shim: Expose updatable shim stack internals" },
  { hash: "f7951765e1", date: "2024-04-04", author: "mylesgw@google.com", message: "Merge ＂alarm_unittest: Add TwoAlarmTest＂ into main" },
  { hash: "41c0487161", date: "2024-04-04", author: "mylesgw@google.com", message: "Merge ＂Gatt Rust: Convince rustc that OwnedHandle is used＂ into main" },
  { hash: "3430e05df9", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function BTA_VendorInit" },
  { hash: "7c6dcd09f9", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_sys_ssr_cfg_register" },
  { hash: "0b60f04489", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_sys_chg_ssr_config" },
  { hash: "e1e2ba519c", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function BTA_GetEirService" },
  { hash: "0734416061", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_dm_close_acl" },
  { hash: "114e61d9b7", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function BTA_DmCloseACL" },
  { hash: "0b85cd81a5", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_dm_disc_stop_service_discovery" },
  { hash: "d4979ff657", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function BTA_AvOffloadStartRsp" },
  { hash: "89847a7a8e", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_av_set_scb_sst_incoming" },
  { hash: "af70d55a69", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_av_rc_browse_close" },
  { hash: "ef6cd959ac", date: "2024-04-04", author: "henrichataing@google.com", message: "Remove unused function bta_av_is_scb_init" },
  { hash: "4829c38e96", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂has: Allow to connect profile only when device is bonded＂ into main" },
  { hash: "9f21470042", date: "2024-04-04", author: "yinghsu@google.com", message: "Merge ＂Floss: RTL8852 MSFT support＂ into main" },
  { hash: "52a2ee9fcb", date: "2024-04-04", author: "chienyuanhuang@google.com", message: "Merge ＂RAS: Handle On-Demand Ranging Data＂ into main" },
  { hash: "fbbb9b3592", date: "2024-04-04", author: "hdmoon@google.com", message: "OPP: Adjust margins in file transfer activity" },
  { hash: "e9fd49050f", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_GetClockOffset" },
  { hash: "5ae07b0fdd", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_default_block_role_switch" },
  { hash: "fef44dface", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_BothEndsSupportSecureConnections" },
  { hash: "809ea597dc", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_BleReadDiscoverability" },
  { hash: "18f583cb59", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_BleReadConnectability" },
  { hash: "97a4baa813", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function BTM_BleMaxMultiAdvInstanceCount" },
  { hash: "9613c1e682", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function btif_storage_remove_ble_local_keys" },
  { hash: "f5be6523a2", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function tm_ble_biginfo_adv_report_rcvd" },
  { hash: "d5fb2fd6c9", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function btm_ble_periodic_syc_transfer_param_cmpl" },
  { hash: "edc2eaa926", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function btm_ble_periodic_syc_transfer_cmd_cmpl" },
  { hash: "81f13ee572", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused symbol btm_ble_dir_adv_tout" },
  { hash: "92d7667a69", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused symbol btm_ble_periodic_adv_sync_tx_rcvd" },
  { hash: "1d2aa8aeca", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function btif_gatt_move_track_adv_data" },
  { hash: "16bfc60666", date: "2024-04-03", author: "henrichataing@google.com", message: "Remove unused function btif_storage_get_num_bonded_devices" },
  { hash: "a444f4cda5", date: "2024-04-03", author: "henrichataing@google.com", message: "Missing android metric impl bluetooth::os::void LogMetricMmcTranscodeRttStats" },
  { hash: "f0000f4893", date: "2024-04-04", author: "chharry@google.com", message: "Merge ＂floss: sysprop: Use CString for easier conversion＂ into main" },
  { hash: "be8789fd35", date: "2024-04-04", author: "chharry@google.com", message: "Merge ＂floss: mgmt: Fix unused variable warning＂ into main" },
  { hash: "784bc0450b", date: "2024-04-04", author: "chharry@google.com", message: "Merge ＂floss: Fix ＂unused manifest key＂ warning＂ into main" },
  { hash: "3732d90db1", date: "2024-04-03", author: "wescande@google.com", message: "SystemServer: stop repeating getPackageName" },
  { hash: "3150c6e80a", date: "2024-04-04", author: "chienyuanhuang@google.com", message: "Merge ＂RAS: Update Ranging Data segments format＂ into main" },
  { hash: "bbae533fb8", date: "2024-04-04", author: "wescande@google.com", message: "Merge ＂Revert ＂SystemServer: AutoOn: Hidden api listener＂＂ into main" },
  { hash: "cec30fc0d5", date: "2024-04-04", author: "chienyuanhuang@google.com", message: "RAS: Handle On-Demand Ranging Data" },
  { hash: "7145246fc6", date: "2024-04-03", author: "wescande@google.com", message: "SystemServer: Static import of BluetoothProtoEnums" },
  { hash: "7f78ff2d87", date: "2024-04-04", author: "charliebout@google.com", message: "Merge ＂PandoraServer: support extended scanning＂ into main" },
  { hash: "a8f0a07812", date: "2024-04-04", author: "wescande@google.com", message: "Merge ＂AudioRoutingManager: Fix flaky test＂ into main" },
  { hash: "6e7b0f0639", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂SystemServer: Delete dead code isBleAppPresent＂ into main" },
  { hash: "685b330fe1", date: "2024-04-03", author: "wescande@google.com", message: "A2dpServiceTest: Move to truth for clear message" },
  { hash: "c1c9d30983", date: "2024-04-04", author: "cmanton@google.com", message: "stack::btm:: Consolidate test fixtures btm_test_fixtures.h" },
  { hash: "3f7adffa90", date: "2024-04-04", author: "henrichataing@google.com", message: "Merge ＂system/bta/av: Removed unused method bta_av_chk_2nd_start＂ into main" },
  { hash: "b4a69aee73", date: "2024-04-04", author: "mylesgw@google.com", message: "Gatt Rust: Convince rustc that OwnedHandle is used" },
  { hash: "5f6e5e5992", date: "2024-04-03", author: "henrichataing@google.com", message: "system/bta/av: Removed unused method bta_av_chk_2nd_start" },
  { hash: "cb6f683224", date: "2024-04-03", author: "wescande@google.com", message: "Notification: Display on a regular basis" },
  { hash: "275e5735b0", date: "2024-04-03", author: "mylesgw@google.com", message: "Merge ＂Alarm: Add a test using kernel timerfd＂ into main" },
  { hash: "69e28691ed", date: "2024-04-03", author: "charliebout@google.com", message: "PandoraServer: support extended scanning" },
  { hash: "81294eef46", date: "2024-04-03", author: "delwiche@google.com", message: "Merge ＂Fix handling for coded and all supported PHY＂ into main" },
  { hash: "fe5368b81c", date: "2024-04-03", author: "wescande@google.com", message: "SystemServer: Delete dead code isBleAppPresent" },
  { hash: "6fc592b659", date: "2024-04-03", author: "wescande@google.com", message: "Revert ＂SystemServer: AutoOn: Hidden api listener＂" },
  { hash: "d61e8dc2ec", date: "2024-04-03", author: "cmanton@google.com", message: "net_test_stack_btm: Add btm_sec_rmt_name_request_complete" },
  { hash: "8794d542bb", date: "2024-04-03", author: "wescande@google.com", message: "Merge ＂Msft: Remove dead code from android target＂ into main" },
  { hash: "7ab8833471", date: "2024-04-03", author: "wescande@google.com", message: "AudioRoutingManager: Fix flaky test" },
  { hash: "31546bd843", date: "2024-04-03", author: "wescande@google.com", message: "Merge changes I9018aa6e,I34560be4 into main" },
  { hash: "93b3fc7ddd", date: "2024-04-03", author: "chienyuanhuang@google.com", message: "RAS: Update Ranging Data segments format" },
  { hash: "0ba20e52b8", date: "2024-04-03", author: "wescande@google.com", message: "Merge changes Ia7f7ef15,Id40dd4a8,I09d0e440,I52ffe9cb into main" },
  { hash: "29e69ca64c", date: "2024-04-03", author: "siyuanh@google.com", message: "Merge ＂vc: Remove internal operation cancel＂ into main" },
  { hash: "f127d804f3", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂vc: Fix operation removal on device disconnection＂ into main" },
  { hash: "254f6195bb", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂vc: Fix operation removal on Write Error response＂ into main" },
  { hash: "c6064cbee3", date: "2024-04-03", author: "wescande@google.com", message: "Merge ＂DatabaseManager: Allow more flexible cleanup＂ into main" },
  { hash: "7ff6e1dc78", date: "2024-04-03", author: "mylesgw@google.com", message: "Alarm: Add a test using kernel timerfd" },
  { hash: "8e0be6a705", date: "2024-04-03", author: "wescande@google.com", message: "Msft: Remove dead code from android target" },
  { hash: "1e5aa55a59", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: randomize_device_level_media_ids＂ into main" },
  { hash: "3fb235acbf", date: "2024-04-03", author: "aditikat@google.com", message: "flags: randomize_device_level_media_ids" },
  { hash: "ac83152c87", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂csis: Allow to connect profile only when device is bonded＂ into main" },
  { hash: "bd74936eb5", date: "2024-04-03", author: "rlukasz@google.com", message: "leaudio: Allow unidirectional Assistant." },
  { hash: "fa54e3a7a2", date: "2024-04-03", author: "rlukasz@google.com", message: "flags: Add le_audio_support_unidirectional_voice_assistant" },
  { hash: "e41ccc4cb9", date: "2024-04-03", author: "yinghsu@google.com", message: "floss: Align included service handling with Android GattService" },
  { hash: "efb90576e1", date: "2024-04-03", author: "chharry@google.com", message: "floss: Fix ＂unused manifest key＂ warning" },
  { hash: "2d452bf873", date: "2024-04-03", author: "chharry@google.com", message: "floss: mgmt: Fix unused variable warning" },
  { hash: "ccbd1f01cf", date: "2024-04-03", author: "ofy@google.com", message: "If ScanRecord ManufacturerData has multiple values, merge them" },
  { hash: "f7bbdc8148", date: "2024-04-02", author: "wescande@google.com", message: "DatabaseManager: Allow more flexible cleanup" },
  { hash: "742b8de703", date: "2024-04-03", author: "rwt@google.com", message: "Merge changes I574f3346,I5142beb6 into main" },
  { hash: "d2fac2b4ac", date: "2024-04-03", author: "chharry@google.com", message: "floss: sysprop: Use CString for easier conversion" },
  { hash: "1bb40fccca", date: "2024-04-03", author: "howardchung@google.com", message: "Merge ＂Floss: Only enable page scan when necessary＂ into main" },
  { hash: "318600235c", date: "2024-04-02", author: "wescande@google.com", message: "OppTransfer: use final variable from constructor" },
  { hash: "5ef6c68694", date: "2024-04-02", author: "wescande@google.com", message: "OppService: use final variable from constructor" },
  { hash: "dc5ba2f4d7", date: "2024-04-03", author: "rwt@google.com", message: "HidHost: Initialize HID DB version" },
  { hash: "38d2d4a5df", date: "2024-04-03", author: "rwt@google.com", message: "HidHost: Do not reject first outgoing connection attempt" },
  { hash: "ad6f98ea87", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Framework: Add the flag library in stub＂ into main" },
  { hash: "d40c5a1bbc", date: "2024-04-03", author: "wescande@google.com", message: "Framework: Add the flag library in stub" },
  { hash: "5b614fc424", date: "2024-04-02", author: "poahlo@google.com", message: "l2c_link_check_send_pkts: Add null checks" },
  { hash: "f2bf4d9af2", date: "2024-04-02", author: "cmanton@google.com", message: "bta:: Remove BTA_EIR_CANNED_UUID_LIST" },
  { hash: "c6394f6f86", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: add le_audio_base_ecosystem_interval＂ into main" },
  { hash: "b63d637b3f", date: "2024-04-02", author: "jpawlowski@google.com", message: "flags: add le_audio_base_ecosystem_interval" },
  { hash: "2eda90f86f", date: "2024-04-02", author: "cmanton@google.com", message: "Remove contextual_callback::InvokeIfNotEmpty" },
  { hash: "a90234763f", date: "2024-04-02", author: "wescande@google.com", message: "SystemServer: remove flag injection" },
  { hash: "3454737701", date: "2024-04-02", author: "wescande@google.com", message: "SystemServer: rm shipped flag - new_satellite_mode" },
  { hash: "45456511af", date: "2024-04-02", author: "wescande@google.com", message: "SystemServer: rm shipped flag - new_airplane_mode" },
  { hash: "d5d4a683fa", date: "2024-04-02", author: "wescande@google.com", message: "SystemServer: rm shipped flag - resources_in_app" },
  { hash: "82f829de91", date: "2024-04-02", author: "charliebout@google.com", message: "Merge ＂Rfcomm.proto: Rename ServerOptions＂ into main" },
  { hash: "2bfd91e35c", date: "2024-04-02", author: "rlukasz@google.com", message: "Merge ＂vc: Allow to connect profile only when device is bonded＂ into main" },
  { hash: "66a4893a25", date: "2024-04-02", author: "henrichataing@google.com", message: "Merge ＂system/gd/os: Deprecate ASSERT＂ into main" },
  { hash: "fe65c7999d", date: "2024-04-02", author: "yuyangh@google.com", message: "Merge ＂reset HFP p_scb when collision happened and rfcomm port is in opening state＂ into main" },
  { hash: "e85a40e5b8", date: "2024-04-02", author: "delwiche@google.com", message: "Fix handling for coded and all supported PHY" },
  { hash: "deba154f50", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂flags: add leaudio_getting_active_state_support＂ into main" },
  { hash: "e1c81a1360", date: "2024-04-02", author: "rlukasz@google.com", message: "vc: Remove internal operation cancel" },
  { hash: "bee744eea8", date: "2024-04-02", author: "rlukasz@google.com", message: "vc: Fix operation removal on device disconnection" },
  { hash: "75ea31c514", date: "2024-04-02", author: "rlukasz@google.com", message: "vc: Fix operation removal on Write Error response" },
  { hash: "79dc4ca56a", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Prevent variables with type java.lang.Boolean＂ into main" },
  { hash: "c38260751a", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Create an Android Lint rule to find guarded log invocations＂ into main" },
  { hash: "9fc977cf21", date: "2024-04-02", author: "klay_liu@realsil.com.cn", message: "Floss: RTL8852 MSFT support" },
  { hash: "3ed23cb31c", date: "2024-04-02", author: "howardchung@google.com", message: "Floss: Only enable page scan when necessary" },
  { hash: "ceca2d93b0", date: "2024-04-02", author: "howardchung@google.com", message: "Merge ＂Floss: Add phone-ops mode in btclient＂ into main" },
  { hash: "b7a810d981", date: "2024-04-02", author: "yuyangh@google.com", message: "Merge ＂flags: Add HFP AG reset_after_collision＂ into main" },
  { hash: "c5c72647ff", date: "2024-04-01", author: "henrichataing@google.com", message: "Merge changes from topic ＂bluetooth-log-vts＂ into main" },
  { hash: "e543014552", date: "2024-04-01", author: "wescande@google.com", message: "Merge changes I1bae4dd2,Ic5578204,I995c5c11,Iecf9e9e7 into main" },
  { hash: "bdcec97c57", date: "2024-04-01", author: "rwt@google.com", message: "Merge ＂Dead code removed from btif_hh.cc＂ into main" },
  { hash: "4f348de328", date: "2024-04-01", author: "bhuthaiah@google.com", message: "Dead code removed from btif_hh.cc" },
  { hash: "43cb1f81af", date: "2024-04-01", author: "yuyangh@google.com", message: "reset HFP p_scb when collision happened and rfcomm port is in opening state" },
  { hash: "bd49ea5e3e", date: "2024-04-01", author: "cmanton@google.com", message: "Remove dup definition tBTA_DM_ENCRYPT_CBACK" },
  { hash: "a2db61ca8a", date: "2024-04-01", author: "cmanton@google.com", message: "Re-include a select bta:: headers" },
  { hash: "c36810d648", date: "2024-04-01", author: "cmanton@google.com", message: "Explicit pass in this pointer to lambda closures" },
  { hash: "98048d8da4", date: "2024-04-01", author: "wescande@google.com", message: "Merge ＂Revert ＂Clear calling identity when calling getConnectionState internally＂＂ into main" },
]});
repoLogs.push({ path: "packages/modules/CaptivePortalLogin", logs: [
  { hash: "9a3b742", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add file exists logs to testDownloadFile＂ into main" },
  { hash: "7b5fb34", date: "2024-04-04", author: "reminv@google.com", message: "Add file exists logs to testDownloadFile" },
  { hash: "595a183", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix formatting errors in DownloadServiceTest＂ into main" },
  { hash: "be5c8e7", date: "2024-04-02", author: "xiaom@google.com", message: "Make CaptivePortalLogin module build against module_current SDK." },
]});
repoLogs.push({ path: "packages/modules/CellBroadcastService", logs: [
]});
repoLogs.push({ path: "packages/modules/ConfigInfrastructure", logs: [
]});
repoLogs.push({ path: "packages/modules/Connectivity", logs: [
  { hash: "0f579646cd", date: "2024-04-26", author: "junyulai@google.com", message: "Fix linter error in TestableNetworkCallback" },
  { hash: "75c2def0ea", date: "2024-04-25", author: "maze@google.com", message: "NetBpfLoad: move into android namespace" },
  { hash: "5016d6f801", date: "2024-04-25", author: "maze@google.com", message: "KernelUtils.h - add helpers" },
  { hash: "a1b23e8caa", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I33d138ed,I0b7e9597 into main" },
  { hash: "cf82190df0", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make com.android.tethering the flag container instead of system＂ into main" },
  { hash: "45f71b0b3d", date: "2024-04-25", author: "kholoudm@google.com", message: "Merge ＂Fix DO check on headless devices＂ into main" },
  { hash: "8a4c9f6485", date: "2024-04-25", author: "paulduffin@google.com", message: "Make com.android.tethering the flag container instead of system" },
  { hash: "8731ad1e45", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add flag definition for metered network firewall chains＂ into main" },
  { hash: "e6295a2326", date: "2024-04-25", author: "motomuman@google.com", message: "Add flag definition for metered network firewall chains" },
  { hash: "2640757910", date: "2024-04-25", author: "motomuman@google.com", message: "Merge ＂Move VPN hardware assumption check to the end of setup＂ into main" },
  { hash: "e5650a3d78", date: "2024-04-24", author: "prohr@google.com", message: "Have ByteBuffer.wrap() use the appropriate subarray" },
  { hash: "4baf85b794", date: "2024-04-25", author: "maze@google.com", message: "Merge ＂Revert ＂bpf: offload.c - comment out CRITICAL mark＂＂ into main" },
  { hash: "b2c9957fde", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Do not run testDropPingReply before V＂ into main" },
  { hash: "1fdc0feede", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a test for prefilled memory slots＂ into main" },
  { hash: "07fd9ba215", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂netd.c: BACKGROUND_MATCH bypass for 'lo' traffic＂ into main" },
  { hash: "c95998623e", date: "2024-04-24", author: "prohr@google.com", message: "Move APF memory clear into its own function" },
  { hash: "95d85068a3", date: "2024-04-24", author: "maze@google.com", message: "netd.c: BACKGROUND_MATCH bypass for 'lo' traffic" },
  { hash: "1ed72bc5f0", date: "2024-04-24", author: "prohr@google.com", message: "Do not run testDropPingReply before V" },
  { hash: "1266ac139f", date: "2024-04-24", author: "prohr@google.com", message: "Add a test for prefilled memory slots" },
  { hash: "b874d197dc", date: "2024-04-24", author: "handaw@google.com", message: "Merge changes from topic ＂nsd-public-key＂ into main" },
  { hash: "d992ae133a", date: "2024-04-24", author: "motomuman@google.com", message: "Move VPN hardware assumption check to the end of setup" },
  { hash: "ff0736f19e", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] fix CTS for U branches＂ into main" },
  { hash: "4008d43e17", date: "2024-04-24", author: "motomuman@google.com", message: "Merge ＂Add @RequiresApi(TIRAMISU) to BpfNetMapsUtils＂ into main" },
  { hash: "8b74e11492", date: "2024-04-24", author: "handaw@google.com", message: "[mdns] allow only one registration to have addresses for a hostname" },
  { hash: "52497d66cc", date: "2024-04-24", author: "handaw@google.com", message: "[mdns] service implementation for public key" },
  { hash: "364aa570e2", date: "2024-04-24", author: "handaw@google.com", message: "[mdns] add hidden API for public key" },
  { hash: "42ea5408ae", date: "2024-04-24", author: "handaw@google.com", message: "[Thread] fix CTS for U branches" },
  { hash: "1b7c5e097c", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂Test whether APF program actually runs＂ into main" },
  { hash: "2c248d2108", date: "2024-04-24", author: "motomuman@google.com", message: "Add @RequiresApi(TIRAMISU) to BpfNetMapsUtils" },
  { hash: "c04493234e", date: "2024-04-24", author: "motomuman@google.com", message: "Merge ＂Add firewall chains for HAPPY_BOX and user/admin PENALTY_BOX＂ into main" },
  { hash: "22e571353f", date: "2024-04-23", author: "prohr@google.com", message: "Test whether APF program actually runs" },
  { hash: "bd50241d03", date: "2024-04-23", author: "prohr@google.com", message: "Only listen to echo replies" },
  { hash: "2ec433dd58", date: "2024-04-23", author: "prohr@google.com", message: "Move turnScreenOff to BeforeClass setUp" },
  { hash: "c83731b8d9", date: "2024-04-23", author: "prohr@google.com", message: "Reapply ＂Send ICMPv6 ping to support IPv6-only network＂" },
  { hash: "5ec06b7a65", date: "2024-04-23", author: "prohr@google.com", message: "Only run APF tests on physical devices" },
  { hash: "173ffb9278", date: "2024-04-23", author: "sunytt@google.com", message: "Merge ＂Use helper function getIndexForValue in MulticastRoutingCoordinator.＂ into main" },
  { hash: "4e7baadc71", date: "2024-04-23", author: "sunytt@google.com", message: "Use helper function getIndexForValue in MulticastRoutingCoordinator." },
  { hash: "0fc03c7c31", date: "2024-04-23", author: "pengjuhsieh@google.com", message: "Merge ＂Revert ＂Send ICMPv6 ping to support IPv6-only network＂＂ into main" },
  { hash: "98219a4e8a", date: "2024-04-23", author: "pengjuhsieh@google.com", message: "Revert ＂Send ICMPv6 ping to support IPv6-only network＂" },
  { hash: "11d3345daa", date: "2024-04-23", author: "motomuman@google.com", message: "Add firewall chains for HAPPY_BOX and user/admin PENALTY_BOX" },
  { hash: "926f012615", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂NetBpfLoad: prog names are only valid on 4.15+＂ into main" },
  { hash: "0168ae22f6", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Assert fixed test method count in ConnectivityServiceTest＂ into main" },
  { hash: "d601d1156c", date: "2024-04-23", author: "maze@google.com", message: "Merge ＂Send ICMPv6 ping to support IPv6-only network＂ into main" },
  { hash: "89efcc36e7", date: "2024-04-23", author: "maze@google.com", message: "NetBpfLoad: prog names are only valid on 4.15+" },
  { hash: "23a6d34788", date: "2024-04-23", author: "handaw@google.com", message: "Merge ＂[mdns] add elapsedRealTime() to Dependencies for MdnsRecordRepository＂ into main" },
  { hash: "bba9e006b1", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂NetBpfLoad: map names are only valid on 4.15+＂ into main" },
  { hash: "d0bb172371", date: "2024-04-22", author: "maze@google.com", message: "NetBpfLoad: map names are only valid on 4.15+" },
  { hash: "03e958226e", date: "2024-04-22", author: "prohr@google.com", message: "Send ICMPv6 ping to support IPv6-only network" },
  { hash: "522d5c7e7a", date: "2024-04-22", author: "prohr@google.com", message: "CompletableFuture can only be completed once" },
  { hash: "2eb48f0265", date: "2024-04-22", author: "prohr@google.com", message: "Log ping packet and reply and use ByteArray.toHexString" },
  { hash: "a1a80ad9c3", date: "2024-04-22", author: "handaw@google.com", message: "[mdns] add elapsedRealTime() to Dependencies for MdnsRecordRepository" },
  { hash: "c03867b757", date: "2024-04-22", author: "handaw@google.com", message: "Merge ＂[mdns] separate the multicast reply quota for IPv4 and IPv6＂ into main" },
  { hash: "08f5b59482", date: "2024-04-22", author: "junyulai@google.com", message: "Assert fixed test method count in ConnectivityServiceTest" },
  { hash: "c8de4cb79f", date: "2024-04-22", author: "handaw@google.com", message: "[mdns] separate the multicast reply quota for IPv4 and IPv6" },
  { hash: "3dd052ea45", date: "2024-04-20", author: "maze@google.com", message: "Revert ＂bpf: offload.c - comment out CRITICAL mark＂" },
  { hash: "503a25c8f0", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Wait for start() to finish＂ into main" },
  { hash: "3d14144698", date: "2024-04-20", author: "maze@google.com", message: "NetBpfLoad: consistently use logging tag of 'NetBpfLoad'" },
  { hash: "8099c3b1b8", date: "2024-04-19", author: "maze@google.com", message: "bpf: offload.c - comment out CRITICAL mark" },
  { hash: "1588303666", date: "2024-04-19", author: "prohr@google.com", message: "Wait for start() to finish" },
  { hash: "7a7d1ac87d", date: "2024-04-19", author: "kholoudm@google.com", message: "Fix DO check on headless devices" },
  { hash: "a114c93950", date: "2024-04-19", author: "maze@google.com", message: "Merge ＂Add a placeholder test to test IcmpPacketReader and sendPing＂ into main" },
  { hash: "c0863c003e", date: "2024-04-19", author: "maze@google.com", message: "Merge changes I1d0b73ef,I753dac68,Id3fb329b,I7037bee1 into main" },
  { hash: "c2c667ba43", date: "2024-04-18", author: "prohr@google.com", message: "Add a placeholder test to test IcmpPacketReader and sendPing" },
  { hash: "977573efd0", date: "2024-04-18", author: "prohr@google.com", message: "Add support for sendPing" },
  { hash: "a89976d5f9", date: "2024-04-18", author: "prohr@google.com", message: "Add support to expect ping reply or dropped ping" },
  { hash: "125deb970a", date: "2024-04-18", author: "prohr@google.com", message: "Bind socket to WiFi network" },
  { hash: "824a659921", date: "2024-04-18", author: "prohr@google.com", message: "Add IcmpPacketReader to ApfIntegrationTest" },
  { hash: "53babdfee5", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Return current testable networks directly in instant mode＂ into main" },
  { hash: "82e396394b", date: "2024-04-18", author: "paulhu@google.com", message: "Return current testable networks directly in instant mode" },
  { hash: "7e6f10ce0a", date: "2024-04-17", author: "cdesir@google.com", message: "Add safeguard against previous ethernet interfaces existing" },
  { hash: "fd207b88e7", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow MAC addresses to configure IP configurations＂ into main" },
  { hash: "dbbada4d7b", date: "2024-04-16", author: "cdesir@google.com", message: "Allow MAC addresses to configure IP configurations" },
  { hash: "f41e6019dd", date: "2024-04-16", author: "handaw@google.com", message: "Merge ＂[mdns] allow hostnames beginning with a digit＂ into main" },
  { hash: "22d42e6079", date: "2024-04-16", author: "xiaom@google.com", message: "Merge ＂Add prefixmsg struct to parse RTM_NEWPREFIX message header.＂ into main" },
  { hash: "44df982062", date: "2024-04-16", author: "xiaom@google.com", message: "Add prefix_cacheinfo struct to parse PREFIX_CACHEINFO attribute." },
  { hash: "a25a09d2c2", date: "2024-04-16", author: "xiaom@google.com", message: "Add prefixmsg struct to parse RTM_NEWPREFIX message header." },
  { hash: "8310a5e2d4", date: "2024-04-16", author: "handaw@google.com", message: "[mdns] allow hostnames beginning with a digit" },
  { hash: "52b6244b67", date: "2024-04-16", author: "xiaom@google.com", message: "Merge ＂Convert RTM_NEWPREFIX nlmsg type to string in stringForRtMsgType().＂ into main" },
  { hash: "1648a9d984", date: "2024-04-15", author: "colibie@google.com", message: "Merge ＂Reland cronet 121_0_6167_71: remove http_client_logging lib＂ into main" },
  { hash: "1a908b008c", date: "2024-04-15", author: "colibie@google.com", message: "Merge ＂Reland [Cronet] Disable one of setURLStreamHandlerFactory test＂ into main" },
  { hash: "1a7eed6848", date: "2024-04-15", author: "maze@google.com", message: "Merge ＂NetBpfLoad: use exec path for api level 35+ (ie. V)＂ into main" },
  { hash: "32ec9e0235", date: "2024-04-15", author: "colibie@google.com", message: "Reland cronet 121_0_6167_71: remove http_client_logging lib" },
  { hash: "3218a81a57", date: "2024-04-15", author: "maze@google.com", message: "NetBpfLoad: use exec path for api level 35+ (ie. V)" },
  { hash: "65ce1f2aa2", date: "2024-04-15", author: "liutongbo@google.com", message: "Add missing mcts tags" },
  { hash: "8d1cad9a11", date: "2024-04-15", author: "xiaom@google.com", message: "Convert RTM_NEWPREFIX nlmsg type to string in stringForRtMsgType()." },
  { hash: "21b36d8c68", date: "2024-04-12", author: "junyulai@google.com", message: "Temporary disable rate-limit cache for TrafficStats" },
  { hash: "aa72ee2dd5", date: "2024-04-12", author: "sunytt@google.com", message: "Merge ＂Add OT multicast addresses to tun interface.＂ into main" },
  { hash: "76b02a456c", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add RTM_NEWPREFIX and RTMGRP_IPV6_PREFIX netlink message constants.＂ into main" },
  { hash: "c6678bbd71", date: "2024-04-11", author: "prohr@google.com", message: "Merge ＂Revert ＂Use bpf map based isUidNetworkingBlocked on V+＂＂ into main" },
  { hash: "a658220234", date: "2024-04-11", author: "prohr@google.com", message: "Revert ＂Use bpf map based isUidNetworkingBlocked on V+＂" },
  { hash: "cede6542da", date: "2024-04-11", author: "paulhu@google.com", message: "Merge ＂Report sent query count in resolution stop metrics＂ into main" },
  { hash: "c6e2d82510", date: "2024-04-11", author: "xiaom@google.com", message: "Add RTM_NEWPREFIX and RTMGRP_IPV6_PREFIX netlink message constants." },
  { hash: "cbcbec8bc1", date: "2024-04-11", author: "reminv@google.com", message: "Merge ＂Request INTERNET capability in ensureWifiConnected＂ into main" },
  { hash: "244dce3722", date: "2024-04-11", author: "sunytt@google.com", message: "Add OT multicast addresses to tun interface." },
  { hash: "47c819640d", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes from topic ＂rate-limit-trafficstats＂ into main" },
  { hash: "e67e1a7166", date: "2024-04-11", author: "handaw@google.com", message: "Merge ＂[Thread] ignore the flaky test case advertisingProxy_srpClientUnregistersService_serviceIsNotDiscoverableByMdns＂ into main" },
  { hash: "2d23887beb", date: "2024-04-11", author: "reminv@google.com", message: "Merge ＂Migrate ConnectivityManagerTest to callback rule＂ into main" },
  { hash: "7ade29d142", date: "2024-04-11", author: "handaw@google.com", message: "[Thread] ignore the flaky test case advertisingProxy_srpClientUnregistersService_serviceIsNotDiscoverableByMdns" },
  { hash: "681dcd1ef1", date: "2024-04-10", author: "maze@google.com", message: "Update OWNERS to reflect reorg." },
  { hash: "8431bdb333", date: "2024-04-10", author: "colibie@google.com", message: "Reland [Cronet] Disable one of setURLStreamHandlerFactory test" },
  { hash: "9671e9a6d8", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] ignore the flaky test case meshcopService_joinedNetwork_discoveredHasNetwork＂ into main" },
  { hash: "edaeecda7b", date: "2024-04-10", author: "paulhu@google.com", message: "Report sent query count in resolution stop metrics" },
  { hash: "e435650d41", date: "2024-04-10", author: "wgtdkp@google.com", message: "Merge ＂dataset selects a channel from channel 11 to 24＂ into main" },
  { hash: "df357e3612", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] loose the restriction on the setEnabled API behavior＂ into main" },
  { hash: "dac352d489", date: "2024-04-10", author: "zhanglongxia@google.com", message: "dataset selects a channel from channel 11 to 24" },
  { hash: "81804470f9", date: "2024-04-10", author: "handaw@google.com", message: "[Thread] ignore the flaky test case meshcopService_joinedNetwork_discoveredHasNetwork" },
  { hash: "689f1cbb6d", date: "2024-04-10", author: "reminv@google.com", message: "Request INTERNET capability in ensureWifiConnected" },
  { hash: "93b08e202e", date: "2024-04-10", author: "reminv@google.com", message: "Migrate ConnectivityManagerTest to callback rule" },
  { hash: "504fe7d510", date: "2024-04-10", author: "wgtdkp@google.com", message: "[Thread] loose the restriction on the setEnabled API behavior" },
  { hash: "7e68d550f7", date: "2024-04-10", author: "sunytt@google.com", message: "Merge ＂Dynamically set mesh-local addresses preferred lifetime.＂ into main" },
  { hash: "6a9eacca94", date: "2024-04-09", author: "colibie@google.com", message: "Merge ＂Revert^2 ＂Revert ＂Revert ＂Revert ＂[Cronet] Disable one of setURLSt...＂＂ into main" },
  { hash: "a7c3b506d7", date: "2024-04-09", author: "colibie@google.com", message: "Merge ＂Revert^2 ＂Revert ＂Revert ＂Revert ＂cronet 121_0_6167_71: remove htt...＂＂ into main" },
  { hash: "9957a8bb71", date: "2024-04-09", author: "colibie@google.com", message: "Revert^2 ＂Revert ＂Revert ＂Revert ＂[Cronet] Disable one of setURLSt...＂" },
  { hash: "2a85b5e7da", date: "2024-04-09", author: "colibie@google.com", message: "Revert^2 ＂Revert ＂Revert ＂Revert ＂cronet 121_0_6167_71: remove htt...＂" },
  { hash: "6e634b3440", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add DevSdkIgnoreRule to ApfIntegrationTest＂ into main" },
  { hash: "79b202ac9f", date: "2024-04-09", author: "sunytt@google.com", message: "Dynamically set mesh-local addresses preferred lifetime." },
  { hash: "01e091b1fb", date: "2024-04-09", author: "markchien@google.com", message: "Merge ＂Move setupOnce from EthernetTetheringTestBase to EthernetTetheringTest＂ into main" },
  { hash: "7780b674b6", date: "2024-04-09", author: "reminv@google.com", message: "Add DevSdkIgnoreRule to ApfIntegrationTest" },
  { hash: "588a9d5b26", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Drop circular dependency＂ into main" },
  { hash: "312c70c459", date: "2024-04-08", author: "wgtdkp@google.com", message: "Merge ＂[Thread] wait for Thread address updates on thread-wpan＂ into main" },
  { hash: "233362bf28", date: "2024-04-08", author: "junyulai@google.com", message: "Make cache duration and max entries configurable" },
  { hash: "5ed8003915", date: "2024-04-08", author: "junyulai@google.com", message: "Create TestRule: SetFeatureFlagsRule" },
  { hash: "1cf1b5f785", date: "2024-04-08", author: "xiaom@google.com", message: "Merge ＂Improve the nduser option log readability.＂ into main" },
  { hash: "8f105009af", date: "2024-04-07", author: "wgtdkp@google.com", message: "[Thread] wait for Thread address updates on thread-wpan" },
  { hash: "1d73c6bea5", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Deflaking network access checks in CtsHostsideNetworkTests＂ into main" },
  { hash: "db5b55dda8", date: "2024-04-05", author: "prohr@google.com", message: "Merge changes I62fdb034,I31f04f4d,I21f95499 into main" },
  { hash: "9c3cbe5dd2", date: "2024-04-05", author: "prohr@google.com", message: "Suppress ktlint:standard:comment-wrapping warning" },
  { hash: "30c9382181", date: "2024-04-05", author: "prohr@google.com", message: "Toggle screen state before and after ApfIntegrationTest" },
  { hash: "6fc458350a", date: "2024-04-05", author: "xiaom@google.com", message: "Improve the nduser option log readability." },
  { hash: "093a4cfa95", date: "2024-04-05", author: "jiyong@google.com", message: "Drop circular dependency" },
  { hash: "f421a45491", date: "2024-04-05", author: "reminv@google.com", message: "Merge ＂Add current clients to servicediscovery dumpsys＂ into main" },
  { hash: "02a3604464", date: "2024-04-05", author: "prohr@google.com", message: "Merge ＂Add testReadWriteProgram to ApfIntegrationTest for V+＂ into main" },
  { hash: "39c203f431", date: "2024-04-04", author: "prohr@google.com", message: "Resume before releasing network request" },
  { hash: "4790aa9831", date: "2024-04-04", author: "prohr@google.com", message: "Add testReadWriteProgram to ApfIntegrationTest for V+" },
  { hash: "027cdcee74", date: "2024-04-04", author: "cdesir@google.com", message: "Merge ＂Store MAC address of tethering interface in EthernetTracker＂ into main" },
  { hash: "027b914b1d", date: "2024-04-04", author: "cdesir@google.com", message: "Store MAC address of tethering interface in EthernetTracker" },
  { hash: "f0766dc9e1", date: "2024-04-04", author: "prohr@google.com", message: "Align APF capabilities test closer to VSR requirements" },
  { hash: "6a62806a52", date: "2024-04-04", author: "prohr@google.com", message: "Do not use runShellCommandOrThrow in setUp / tearDown" },
  { hash: "737a0be559", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] add E2E UDP test for app usage＂ into main" },
  { hash: "e9daad6264", date: "2024-04-04", author: "wgtdkp@google.com", message: "[Thread] add E2E UDP test for app usage" },
  { hash: "63abf95dcb", date: "2024-04-04", author: "reminv@google.com", message: "Add current clients to servicediscovery dumpsys" },
  { hash: "22cc321820", date: "2024-04-03", author: "colibie@google.com", message: "Merge changes from topic ＂revert-3005178-revert-3001326-revert-2998737-revert-2980591-cronet_121_0_6167_71-JBOUFGJXPX-ICXECJPUPA-OOMALUYYUV-HXQZEVTNSQ＂ into main" },
  { hash: "08b316bab0", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Use NsdServiceInfo ifIndex in MdnsDiscoveryManager＂ into main" },
  { hash: "d5a8d41172", date: "2024-04-03", author: "reminv@google.com", message: "Merge ＂Replace connectToCell -> NetworkCallbackRule＂ into main" },
  { hash: "894f181c89", date: "2024-04-03", author: "reminv@google.com", message: "Use NsdServiceInfo ifIndex in MdnsDiscoveryManager" },
  { hash: "ad4f132c29", date: "2024-04-02", author: "prohr@google.com", message: "Call getCapabilities in setUp" },
  { hash: "ac9b287b2c", date: "2024-04-02", author: "prohr@google.com", message: "Use truth assumption checks" },
  { hash: "0634c7c4d2", date: "2024-04-02", author: "shayba@google.com", message: "Merge ＂Do faster bitmask checks on NetworkCapabilities＂ into main" },
  { hash: "36061871d7", date: "2024-04-02", author: "cdesir@google.com", message: "Merge ＂Allow HW address retrieval from EthernetNetworkFactory＂ into main" },
  { hash: "e380bc0000", date: "2024-04-02", author: "prohr@google.com", message: "check lateinit property ifname isInitialized in tearDown" },
  { hash: "67df9f0870", date: "2024-04-02", author: "colibie@google.com", message: "Revert ＂Revert ＂Revert ＂Revert ＂[Cronet] Disable one of setURLSt...＂" },
  { hash: "1ba19c9c67", date: "2024-04-02", author: "colibie@google.com", message: "Revert ＂Revert ＂Revert ＂Revert ＂cronet 121_0_6167_71: remove htt...＂" },
  { hash: "8b15cc8f8e", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[Thread] add NetworkCapability.NOT_METERED for Thread network＂ into main" },
  { hash: "777b9ba0ca", date: "2024-04-02", author: "wgtdkp@google.com", message: "Merge ＂[mDNS] pretty print txt values in log＂ into main" },
  { hash: "a92080f443", date: "2024-04-02", author: "handaw@google.com", message: "[Thread] add NetworkCapability.NOT_METERED for Thread network" },
  { hash: "3c9089c1d1", date: "2024-04-02", author: "junyulai@google.com", message: "Rate-limit on TrafficStats#get*[Bytes|Packets] API calls" },
  { hash: "6c277682d5", date: "2024-04-02", author: "junyulai@google.com", message: "Clear TrafficStats cache before getting readings from TrafficStats" },
  { hash: "b454fdefa7", date: "2024-04-02", author: "handaw@google.com", message: "Merge ＂[Thread] enable Service Discovery integration tests＂ into main" },
  { hash: "aca202e4d9", date: "2024-04-02", author: "wgtdkp@google.com", message: "[mDNS] pretty print txt values in log" },
  { hash: "a8ad3d5ef0", date: "2024-04-02", author: "suprabh@google.com", message: "Deflaking network access checks in CtsHostsideNetworkTests" },
  { hash: "aeacff5033", date: "2024-04-02", author: "suprabh@google.com", message: "Merge ＂Add a flag to disable the background firewall chain＂ into main" },
  { hash: "c634eb5726", date: "2024-04-02", author: "yuyanghuang@google.com", message: "Merge ＂Tethering: Throw exception when register null callback to avoid a crash＂ into main" },
  { hash: "5250ebe96e", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Allow enable DBG/VDBG without having to rebuild the module.＂ into main" },
  { hash: "54fa56def5", date: "2024-04-02", author: "markchien@google.com", message: "Move setupOnce from EthernetTetheringTestBase to EthernetTetheringTest" },
  { hash: "b40140dcd0", date: "2024-04-02", author: "handaw@google.com", message: "[Thread] enable Service Discovery integration tests" },
  { hash: "9f69605fa0", date: "2024-04-02", author: "markchien@google.com", message: "Allow enable DBG/VDBG without having to rebuild the module." },
  { hash: "609bfabfdd", date: "2024-04-02", author: "maze@google.com", message: "Merge changes Ic4b586ae,I1b1345a6,I468ef544,I61b6263e into main" },
  { hash: "455b186710", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix flakes due to networks obtained via sync APIs＂ into main" },
  { hash: "4775bb519a", date: "2024-04-02", author: "markchien@google.com", message: "Merge ＂Remove mWifiTetherRequested＂ into main" },
  { hash: "54c9c90f27", date: "2024-04-02", author: "reminv@google.com", message: "Merge ＂Obtain BluetoothAdapter through BluetoothManager＂ into main" },
  { hash: "e629bb7c84", date: "2024-04-02", author: "reminv@google.com", message: "Replace connectToCell -> NetworkCallbackRule" },
  { hash: "f8999e32e1", date: "2024-04-02", author: "reminv@google.com", message: "Fix flakes due to networks obtained via sync APIs" },
]});
repoLogs.push({ path: "packages/modules/CrashRecovery", logs: [
]});
repoLogs.push({ path: "packages/modules/Cronet", logs: [
]});
repoLogs.push({ path: "packages/modules/DeviceLock", logs: [
]});
repoLogs.push({ path: "packages/modules/DnsResolver", logs: [
]});
repoLogs.push({ path: "packages/modules/ExtServices", logs: [
]});
repoLogs.push({ path: "packages/modules/GeoTZ", logs: [
]});
repoLogs.push({ path: "packages/modules/Gki", logs: [
]});
repoLogs.push({ path: "packages/modules/HealthFitness", logs: [
  { hash: "6c0839dd", date: "2024-04-26", author: "taraojo@google.com", message: "Use insertRecords response in HealthConnectManagerTest" },
  { hash: "18f52fe1", date: "2024-04-17", author: "jeongik@google.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "6aa08e6a", date: "2024-04-15", author: "jstembridge@google.com", message: "Update component to ＂Health Connect > Platform Implementation＂" },
  { hash: "6f139be4", date: "2024-04-11", author: "taraojo@google.com", message: "Merge ＂Use response from calls to insertRecords in tests＂ into main" },
  { hash: "7598592a", date: "2024-04-11", author: "taraojo@google.com", message: "Merge ＂Use response from calls to insertRecords in tests (datatypes P-W)＂ into main" },
  { hash: "e4a8a4e9", date: "2024-04-08", author: "taraojo@google.com", message: "Use response from calls to insertRecords in tests" },
  { hash: "c7c39ba8", date: "2024-04-08", author: "taraojo@google.com", message: "Use response from calls to insertRecords in tests (datatypes P-W)" },
  { hash: "d09446f5", date: "2024-04-08", author: "taraojo@google.com", message: "Revert^2 ＂Use response from calls to insertRecords in tests (datatypes E-O)＂" },
  { hash: "eff98529", date: "2024-04-08", author: "mpodolian@google.com", message: "Revert ＂Use response from calls to insertRecords in tests (datatypes E-O)＂" },
  { hash: "3b5158a9", date: "2024-04-05", author: "jeongik@google.com", message: "Add //packages/modules/common/build" },
  { hash: "020e262a", date: "2024-04-05", author: "taraojo@google.com", message: "Use response from calls to insertRecords in tests (datatypes E-O)" },
]});
repoLogs.push({ path: "packages/modules/IPsec", logs: [
]});
repoLogs.push({ path: "packages/modules/ImsMedia", logs: [
]});
repoLogs.push({ path: "packages/modules/IntentResolver", logs: [
]});
repoLogs.push({ path: "packages/modules/Media", logs: [
]});
repoLogs.push({ path: "packages/modules/ModuleMetadata", logs: [
]});
repoLogs.push({ path: "packages/modules/NetworkPermissionConfig", logs: [
]});
repoLogs.push({ path: "packages/modules/NetworkStack", logs: [
  { hash: "04868cd7", date: "2024-04-26", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Rename JNEBS to JBSMATCH and update document＂ into main" },
  { hash: "0c868413", date: "2024-04-26", author: "yuyanghuang@google.com", message: "Rename JNEBS to JBSMATCH and update document" },
  { hash: "02f0f4df", date: "2024-04-26", author: "xiaom@google.com", message: "Simplify the test flags in IpReachabilityMonitor unit test." },
  { hash: "224ea135", date: "2024-04-26", author: "xiaom@google.com", message: "Format the IpReachabilityMonitorTest." },
  { hash: "030f86a6", date: "2024-04-26", author: "xiaom@google.com", message: "Merge ＂Simplify the logic of checking the loss of IP provisioning in IpReachabilityMonitor.＂ into main" },
  { hash: "b43ebac6", date: "2024-04-26", author: "maze@google.com", message: "Merge ＂Replace CollectionUtils.isEmpty() in favor of null check＂ into main" },
  { hash: "c3e111b9", date: "2024-04-26", author: "maze@google.com", message: "Merge ＂maxImmSize is guaranteed to be larger than 0＂ into main" },
  { hash: "1dddaba0", date: "2024-04-26", author: "xiaom@google.com", message: "Merge ＂Enable sending GARP and unsolicited multicast NA post roaming by default.＂ into main" },
  { hash: "8a6337c0", date: "2024-04-26", author: "xiaom@google.com", message: "Simplify the logic of checking the loss of IP provisioning in IpReachabilityMonitor." },
  { hash: "86615456", date: "2024-04-25", author: "prohr@google.com", message: "Replace CollectionUtils.isEmpty() in favor of null check" },
  { hash: "8cf8b43e", date: "2024-04-25", author: "prohr@google.com", message: "maxImmSize is guaranteed to be larger than 0" },
  { hash: "761e6019", date: "2024-04-25", author: "maze@google.com", message: "Merge changes from topic ＂oneof-dis＂ into main" },
  { hash: "a7e42830", date: "2024-04-25", author: "maze@google.com", message: "Merge ＂Enforce byte length limit check＂ into main" },
  { hash: "e1db3ba0", date: "2024-04-25", author: "yuyanghuang@google.com", message: "Enforce byte length limit check" },
  { hash: "de1a3ad2", date: "2024-04-25", author: "yuyanghuang@google.com", message: "Add test for disassembling the JONEOF_EXT_OPCODE instruction" },
  { hash: "6a98faee", date: "2024-04-25", author: "yuyanghuang@google.com", message: "Implement addJumpIf{One|None}Of() in ApfV6GeneratorBase" },
  { hash: "eef05f76", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂Clean up the onClatInterfaceStateUpdate() in IpClient＂ into main" },
  { hash: "5dcad345", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂Update testFullApfV4ProgramGenerationNatTKeepAliveV4 to use new APIs＂ into main" },
  { hash: "a739e914", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂Update testInfiniteLifetimeFullApfV4ProgramGeneration to use new APIs＂ into main" },
  { hash: "65c9f5d7", date: "2024-04-24", author: "yuyanghuang@google.com", message: "Clean up the onClatInterfaceStateUpdate() in IpClient" },
  { hash: "a597b1c3", date: "2024-04-24", author: "maze@google.com", message: "Merge ＂Expose APF generator and associated classes to test＂ into main" },
  { hash: "99ce3a6b", date: "2024-04-23", author: "maze@google.com", message: "Merge ＂ApfV4GeneratorBase: allow negative offsets in addLoad{8,16,32}Indexed＂ into main" },
  { hash: "04e5540f", date: "2024-04-23", author: "yuyanghuang@google.com", message: "Update testFullApfV4ProgramGenerationNatTKeepAliveV4 to use new APIs" },
  { hash: "cd0286e8", date: "2024-04-23", author: "yuyanghuang@google.com", message: "Update testInfiniteLifetimeFullApfV4ProgramGeneration to use new APIs" },
  { hash: "74374991", date: "2024-04-22", author: "prohr@google.com", message: "Expose APF generator and associated classes to test" },
  { hash: "285d354a", date: "2024-04-23", author: "xiaom@google.com", message: "Merge ＂Rename preferredTimeout to deprecationTimeout.＂ into main" },
  { hash: "98cc2784", date: "2024-04-23", author: "maze@google.com", message: "ApfV4GeneratorBase: allow negative offsets in addLoad{8,16,32}Indexed" },
  { hash: "f6a0bc59", date: "2024-04-22", author: "xiaom@google.com", message: "Rename preferredTimeout to deprecationTimeout." },
  { hash: "d481f2b0", date: "2024-04-20", author: "maze@google.com", message: "Merge ＂v5: fix a comment wrt. PASSDROP counter endianness＂ into main" },
  { hash: "980fa039", date: "2024-04-19", author: "maze@google.com", message: "Merge ＂Update APFv4 golden test to use addCountAndDropIfR0XXX API＂ into main" },
  { hash: "f9a5cb67", date: "2024-04-19", author: "maze@google.com", message: "v5: fix a comment wrt. PASSDROP counter endianness" },
  { hash: "8f9675c6", date: "2024-04-19", author: "yuyanghuang@google.com", message: "Update APFv4 golden test to use addCountAndDropIfR0XXX API" },
  { hash: "c82d5611", date: "2024-04-18", author: "yuyanghuang@google.com", message: "Handle IllegalArgumentException to prevent IpClient crashes" },
  { hash: "f908feb5", date: "2024-04-17", author: "maze@google.com", message: "Merge ＂Track clat interface status via IpClientLinkObserver for accuracy＂ into main" },
  { hash: "4df36512", date: "2024-04-18", author: "lorenzo@google.com", message: "Simplify test flag annotations." },
  { hash: "fdcf3bdb", date: "2024-04-17", author: "yuyanghuang@google.com", message: "Track clat interface status via IpClientLinkObserver for accuracy" },
  { hash: "c6739331", date: "2024-04-17", author: "yuyanghuang@google.com", message: "Merge ＂Enhance readPacketFilter() logging to differentiate event triggers＂ into main" },
  { hash: "60abcae3", date: "2024-04-17", author: "yuyanghuang@google.com", message: "Enhance readPacketFilter() logging to differentiate event triggers" },
  { hash: "68f32716", date: "2024-04-17", author: "yuyanghuang@google.com", message: "Initialize PASSED_MLD counter before jump in LegacyApfFilter" },
  { hash: "79b2fed8", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add convenience functions to parse IP addresses from strings.＂ into main" },
  { hash: "0d7cfa8d", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add PopulateLinkAddressLifetime annotation in IpClient integration test.＂ into main" },
  { hash: "e5bae256", date: "2024-04-16", author: "xiaom@google.com", message: "Add PopulateLinkAddressLifetime annotation in IpClient integration test." },
  { hash: "6f5df325", date: "2024-04-14", author: "maze@google.com", message: "ApfTest: fix a test case with too short IPv4 packet" },
  { hash: "47eb9ef4", date: "2024-04-14", author: "maze@google.com", message: "Apf: introduce MemorySlot enum" },
  { hash: "e74d475d", date: "2024-04-12", author: "maze@google.com", message: "enable APFv6 on V+ devices with APFv6 wifi firmware" },
  { hash: "2cea4e42", date: "2024-04-11", author: "maze@google.com", message: "reverse order of addStoreToMemory arguments" },
  { hash: "b2ed6f75", date: "2024-04-11", author: "yuyanghuang@google.com", message: "Enforce minimum ARP packet length with zero padding" },
  { hash: "37f449ed", date: "2024-04-11", author: "xiaom@google.com", message: "Merge ＂Add an experiment flag for PIO P bit (DHCPv6 PD preferred flag).＂ into main" },
  { hash: "966949ab", date: "2024-04-11", author: "maze@google.com", message: "Merge ＂ApfV6Generator - move overrides to Base class＂ into main" },
  { hash: "16febe8e", date: "2024-04-10", author: "maze@google.com", message: "ApfV6Generator - move overrides to Base class" },
  { hash: "67a6fb18", date: "2024-04-11", author: "yuyanghuang@google.com", message: "Implements ARP offload program in ApfFilter" },
  { hash: "19fe3a9c", date: "2024-04-10", author: "xiaom@google.com", message: "Add an experiment flag for PIO P bit (DHCPv6 PD preferred flag)." },
  { hash: "84f28bb3", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Only increase the TOTAL_PACKETS in APFv4" },
  { hash: "0e57f01d", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Merge changes I54e451a2,I6087c6c7 into main" },
  { hash: "8358678b", date: "2024-04-10", author: "maze@google.com", message: "move getUniqueLabel from ApfV6Generator into BaseApfGenerator" },
  { hash: "1b5a1ab3", date: "2024-04-10", author: "maze@google.com", message: "update FIRST_PREFILLED_MEMORY_SLOT to match current APFv6" },
  { hash: "12813aff", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Enforce 3-byte content check before skipping in skipEmptyData()" },
  { hash: "8f94ad43", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Fix linter error ＂standard:import-ordering＂" },
  { hash: "55fa1b22", date: "2024-04-09", author: "maze@google.com", message: "fix ApfV6Generator.supportsVersion(2) returning true." },
  { hash: "9cb3c0fd", date: "2024-04-09", author: "maze@google.com", message: "Make sure mVersion is sane" },
  { hash: "8ec19176", date: "2024-04-09", author: "maze@google.com", message: "ApfFilter: remove dead code in mHasClat case" },
  { hash: "86778a39", date: "2024-04-10", author: "maze@google.com", message: "Merge ＂Remove unused maybeSetupCounter in ApfFilter＂ into main" },
  { hash: "48370f96", date: "2024-04-10", author: "maze@google.com", message: "Merge ＂Drop ARP packets in IPv6-only networks (mHasClat is true)＂ into main" },
  { hash: "41dbc692", date: "2024-04-10", author: "maze@google.com", message: "Merge ＂move add{Load,Store}Data out of ApfV4GeneratedBase class into ApfV4Generator class＂ into main" },
  { hash: "3713df4d", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Drop ARP packets in IPv6-only networks (mHasClat is true)" },
  { hash: "ff536a4e", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Remove unused maybeSetupCounter in ApfFilter" },
  { hash: "ed4982a1", date: "2024-04-10", author: "maze@google.com", message: "Merge ＂Improve ARP filter comment for clarity＂ into main" },
  { hash: "d65495c0", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I2d011461,If88d967f into main" },
  { hash: "3b7d93c4", date: "2024-04-10", author: "yuyanghuang@google.com", message: "Merge changes I6a939bd2,I63e9dabf,I223ce00e into main" },
  { hash: "6779b1f0", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂implement maybeAddLoadCounterOffset(register, ...)＂ into main" },
  { hash: "fc8f8ac6", date: "2024-04-10", author: "maze@google.com", message: "move add{Load,Store}Data out of ApfV4GeneratedBase class into ApfV4Generator class" },
  { hash: "044c3dc8", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂implement Register.other()＂ into main" },
  { hash: "3241fefb", date: "2024-04-09", author: "maze@google.com", message: "ApfV6GeneratorBase: remove mIsV6 field" },
  { hash: "7164f640", date: "2024-04-09", author: "maze@google.com", message: "rename MIN_APF_VERSION_IN_DEV to APF_VERSION_6" },
  { hash: "a42d994f", date: "2024-04-09", author: "maze@google.com", message: "rename MIN_APF_VERSION to APF_VERSION_2" },
  { hash: "b3da11f7", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Use Counter helpers to streamline ApfFilter counter logic" },
  { hash: "c9a7a0e5", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Add helper functions for v6 mode LDDW/STDW handling" },
  { hash: "cd4603c1", date: "2024-04-09", author: "maze@google.com", message: "implement maybeAddLoadCounterOffset(register, ...)" },
  { hash: "a8a8165d", date: "2024-04-09", author: "prohr@google.com", message: "Merge ＂Implement APF cmd support APIs in LegacyApfFilter＂ into main" },
  { hash: "1c962ff5", date: "2024-04-09", author: "maze@google.com", message: "implement Register.other()" },
  { hash: "1ce16b7b", date: "2024-04-09", author: "prohr@google.com", message: "Implement APF cmd support APIs in LegacyApfFilter" },
  { hash: "a5c4bb92", date: "2024-04-09", author: "maze@google.com", message: "Merge ＂Optimize ARP filter comparison with addCountAndDropIfR0NotEquals＂ into main" },
  { hash: "3def5238", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Enforce v6 mode code generation in ApfV6Generator" },
  { hash: "fdbc6959", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Optimize ARP filter comparison with addCountAndDropIfR0NotEquals" },
  { hash: "d28c0df6", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Improve ARP filter comment for clarity" },
  { hash: "ced03975", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Adapt disassembler tests for updated PASS/DROP output＂ into main" },
  { hash: "f785c92c", date: "2024-04-09", author: "yuyanghuang@google.com", message: "Adapt disassembler tests for updated PASS/DROP output" },
  { hash: "9a18255f", date: "2024-04-07", author: "yuyanghuang@google.com", message: "Pass all ARP requests when there is no IPv4 address and no CLAT" },
  { hash: "f136894a", date: "2024-04-07", author: "yuyanghuang@google.com", message: "Refactor ARP filter into decision tree for clarity" },
  { hash: "05926e8f", date: "2024-04-07", author: "yuyanghuang@google.com", message: "Refactor ARP counter" },
  { hash: "66bea450", date: "2024-04-06", author: "yuyanghuang@google.com", message: "Fix comment in emitEpilogue()" },
  { hash: "fe22a2e1", date: "2024-04-06", author: "yuyanghuang@google.com", message: "Remove redundant check in emitEpilogue()" },
  { hash: "2ac07ff9", date: "2024-04-06", author: "yuyanghuang@google.com", message: "Explicitly increment counter and pass IPV6_ICMP for clarity" },
  { hash: "1ebffda1", date: "2024-04-06", author: "lorenzo@google.com", message: "Add convenience functions to parse IP addresses from strings." },
  { hash: "d9d2a442", date: "2024-04-05", author: "yuyanghuang@google.com", message: "Remove duplicate trampoline logic from ApfFilter" },
  { hash: "41feee75", date: "2024-04-05", author: "yuyanghuang@google.com", message: "Simplify ApfFilter counters update logic" },
  { hash: "5b2ab59a", date: "2024-04-05", author: "yuyanghuang@google.com", message: "Simplify ApfFilter counters with addCountAndPassIfBytesAtR0NotEqual" },
  { hash: "4be28bbd", date: "2024-04-05", author: "yuyanghuang@google.com", message: "Make the indentation consist in ApfV5Test" },
  { hash: "e31b560b", date: "2024-04-05", author: "xiaom@google.com", message: "Merge ＂Deflaky testIpReachabilityMonitor_ignoreOnLinkIpv6DnsOrganicNudFailure_flagoff＂ into main" },
  { hash: "44a68d94", date: "2024-04-04", author: "maze@google.com", message: "ApfFilter: drop arp requests only if clat is running" },
  { hash: "e89a7971", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add debugging log to see if DHCPv6 client sends Renew/Rebind message.＂ into main" },
  { hash: "e9ab9ce3", date: "2024-04-04", author: "xiaom@google.com", message: "Add debugging log to see if DHCPv6 client sends Renew/Rebind message." },
  { hash: "493fcaad", date: "2024-04-04", author: "xiaom@google.com", message: "Merge ＂Revert ＂Add debugging log in IpReachabilityMonitor to check avoidingBadLinks.＂＂ into main" },
  { hash: "c933566d", date: "2024-04-04", author: "xiaom@google.com", message: "Merge ＂Revert ＂Add debugging log in IpReachabilityMonitor constructor to check flag value.＂＂ into main" },
  { hash: "10e103e3", date: "2024-04-04", author: "xiaom@google.com", message: "Deflaky testIpReachabilityMonitor_ignoreOnLinkIpv6DnsOrganicNudFailure_flagoff" },
  { hash: "f4fcdeb1", date: "2024-04-04", author: "xiaom@google.com", message: "Revert ＂Add debugging log in IpReachabilityMonitor to check avoidingBadLinks.＂" },
  { hash: "7fb02749", date: "2024-04-04", author: "xiaom@google.com", message: "Revert ＂Add debugging log in IpReachabilityMonitor constructor to check flag value.＂" },
  { hash: "26758957", date: "2024-04-03", author: "yuyanghuang@google.com", message: "Simplify ApfFilter counters with addCountAndDropIfBytesAtR0NotEqual" },
  { hash: "1a67e465", date: "2024-04-03", author: "yuyanghuang@google.com", message: "Fix comment for addJumpIfBytesAtR0[Not]Equal" },
  { hash: "851bd2da", date: "2024-04-03", author: "xiaom@google.com", message: "Add debugging log in IpReachabilityMonitor to check avoidingBadLinks." },
  { hash: "daaf2237", date: "2024-04-02", author: "prohr@google.com", message: "Merge ＂Check MIN_APF_VERSION in maybeCreate＂ into main" },
  { hash: "df28eb4a", date: "2024-04-02", author: "prohr@google.com", message: "Check MIN_APF_VERSION in maybeCreate" },
  { hash: "0bd99d6a", date: "2024-04-02", author: "maze@google.com", message: "Merge ＂Add addWrite32() to write 4-byte arrays to the buffer＂ into main" },
  { hash: "3469a170", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add addWrite32() for encoding integers＂ into main" },
  { hash: "6f159d21", date: "2024-04-03", author: "yuyanghuang@google.com", message: "Add addWrite32() to write 4-byte arrays to the buffer" },
  { hash: "403f1ce7", date: "2024-04-03", author: "yuyanghuang@google.com", message: "Add addWrite32() for encoding integers" },
  { hash: "9ff08559", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add debugging log in IpReachabilityMonitor constructor to check flag value.＂ into main" },
  { hash: "c8aaefe9", date: "2024-04-02", author: "xiaom@google.com", message: "Add debugging log in IpReachabilityMonitor constructor to check flag value." },
  { hash: "a958e11d", date: "2024-04-02", author: "yuyanghuang@google.com", message: "Merge ＂Cap installableProgramSizeClamp at 1024＂ into main" },
  { hash: "faf67164", date: "2024-04-02", author: "yuyanghuang@google.com", message: "Cap installableProgramSizeClamp at 1024" },
  { hash: "096526f5", date: "2024-04-02", author: "prohr@google.com", message: "Merge ＂Use CompletableFuture#get with a timeout＂ into main" },
]});
repoLogs.push({ path: "packages/modules/NeuralNetworks", logs: [
]});
repoLogs.push({ path: "packages/modules/OnDevicePersonalization", logs: [
]});
repoLogs.push({ path: "packages/modules/Permission", logs: [
  { hash: "9d3682b1c", date: "2024-04-17", author: "jeongik@google.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "813859bc3", date: "2024-04-09", author: "zhanghai@google.com", message: "Mark openDefaultAppListThenIsNotDefaultAppInList as @FlakyTest" },
  { hash: "795d666c1", date: "2024-04-05", author: "jeongik@google.com", message: "Add //packages/modules/common/build" },
]});
repoLogs.push({ path: "packages/modules/Profiling", logs: [
]});
repoLogs.push({ path: "packages/modules/RemoteKeyProvisioning", logs: [
  { hash: "9aed84b", date: "2024-04-26", author: "aliceywang@google.com", message: "[test] Fix deadlock in AvfIntegrationTest" },
  { hash: "a021d60", date: "2024-04-15", author: "vikramgaur@google.com", message: "Merge ＂Replace the periodic provisioner job at reboot.＂ into main" },
  { hash: "3340fd9", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂[avf] Add rkpdapp variation for e2e VM attestation test＂＂ into main" },
  { hash: "47365ca", date: "2024-04-13", author: "vikramgaur@google.com", message: "Replace the periodic provisioner job at reboot." },
  { hash: "1aeee25", date: "2024-04-12", author: "aliceywang@google.com", message: "Revert ＂[avf] Add rkpdapp variation for e2e VM attestation test＂" },
  { hash: "5804cc9", date: "2024-04-09", author: "vikramgaur@google.com", message: "Merge ＂Add connection_timeout system property.＂ into main" },
  { hash: "6b0b036", date: "2024-04-04", author: "vikramgaur@google.com", message: "Clear attestation keys in case of bad certificates" },
  { hash: "60d19de", date: "2024-04-03", author: "vikramgaur@google.com", message: "Fix unit tests to avoid failures when no network is present." },
]});
repoLogs.push({ path: "packages/modules/RuntimeI18n", logs: [
]});
repoLogs.push({ path: "packages/modules/SEPolicy", logs: [
]});
repoLogs.push({ path: "packages/modules/Scheduling", logs: [
]});
repoLogs.push({ path: "packages/modules/SdkExtensions", logs: [
  { hash: "284a9aa", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "4f0db6e", date: "2024-04-05", author: "paulduffin@google.com", message: "Improve error reporting for SdkExtensionsHostTest.broadcast(...)" },
]});
repoLogs.push({ path: "packages/modules/StatsD", logs: [
  { hash: "ccb64f90", date: "2024-04-26", author: "jeffreyhuang@google.com", message: "Merge ＂UseV2 soft memory calculations＂ into main" },
  { hash: "10e01641", date: "2024-04-25", author: "jeffreyhuang@google.com", message: "UseV2 soft memory calculations" },
  { hash: "ad018fc9", date: "2024-04-25", author: "singhtejinder@google.com", message: "[Statsd socket] Batch reads" },
  { hash: "64110d43", date: "2024-04-19", author: "sharaienko@google.com", message: "Merge ＂[statsd] Added data corruption reason propagation to EventMetric＂ into main" },
  { hash: "e4082743", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make StatsdStats print nicer＂ into main" },
  { hash: "573d2765", date: "2024-04-18", author: "sharaienko@google.com", message: "[statsd] Added data corruption reason propagation to EventMetric" },
  { hash: "cf30969a", date: "2024-04-18", author: "sharaienko@google.com", message: "Merge ＂[StatsCompanionService] Updated ShutdownEventReceiver handling＂ into main" },
  { hash: "45201b86", date: "2024-04-18", author: "sharaienko@google.com", message: "Added support to log atrace event" },
  { hash: "3331ca5c", date: "2024-04-17", author: "jeffreyhuang@google.com", message: "Pass StatsdConfigOptions to MetricProducers" },
  { hash: "b6255c80", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Enable multiple aggregation types in Value Metric＂ into main" },
  { hash: "632dead6", date: "2024-04-15", author: "sharaienko@google.com", message: "[StatsCompanionService] Updated ShutdownEventReceiver handling" },
  { hash: "d7e34efa", date: "2024-04-12", author: "tsaichristine@google.com", message: "Enable multiple aggregation types in Value Metric" },
  { hash: "c9e128c9", date: "2024-04-12", author: "sharaienko@google.com", message: "[statsd] Set name to the readLogs() thread" },
  { hash: "e6d895fb", date: "2024-04-10", author: "sharaienko@google.com", message: "Merge ＂[statsd] Removed extra aliases from the DurationAnomalyTracker header＂ into main" },
  { hash: "3c9c9a0d", date: "2024-04-09", author: "sharaienko@google.com", message: "[statsd] Removed extra aliases from the DurationAnomalyTracker header" },
  { hash: "4032132b", date: "2024-04-08", author: "ahujapalash@google.com", message: "Adding Bluetooth Extension Atoms to the extension registry." },
  { hash: "9b6437d9", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Increase statsd guardrails for atoms and metrics＂ into main" },
  { hash: "eba93fa3", date: "2024-04-03", author: "tsaichristine@google.com", message: "Enable pull sampling for pulled gauge metrics" },
]});
repoLogs.push({ path: "packages/modules/Telephony", logs: [
]});
repoLogs.push({ path: "packages/modules/TestModule", logs: [
]});
repoLogs.push({ path: "packages/modules/ThreadNetwork", logs: [
]});
repoLogs.push({ path: "packages/modules/Uwb", logs: [
  { hash: "e5455549", date: "2024-04-25", author: "rpius@google.com", message: "Merge ＂uwb: set remote address for onDataReceived＂ into main" },
  { hash: "19b1f7d9", date: "2024-04-24", author: "ziyiw@google.com", message: "[unit test] Add unit tests for uci_jni_android_newi" },
  { hash: "29e57e4f", date: "2024-04-19", author: "phenixchen@google.com", message: "Merge ＂Revert ＂[jni] Add an overlay to indicate whether multicast ntf v...＂＂ into main" },
  { hash: "af00d2bd", date: "2024-04-19", author: "phenixchen@google.com", message: "Revert ＂[jni] Add an overlay to indicate whether multicast ntf v...＂" },
  { hash: "03cae028", date: "2024-04-18", author: "ziyiw@google.com", message: "Merge ＂[jni] Add an overlay to indicate whether multicast ntf v2 is supported.＂ into main" },
  { hash: "fbed8623", date: "2024-04-17", author: "ziyiw@google.com", message: "[unit_test] Add unit tests for jni helper." },
  { hash: "26a2c78d", date: "2024-04-17", author: "ziyiw@google.com", message: "[jni] Add an overlay to indicate whether multicast ntf v2 is supported." },
  { hash: "942e0724", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[unit_test] Add unit tests for notification_manager_android.＂ into main" },
  { hash: "be14f97b", date: "2024-04-17", author: "jeongik@google.com", message: "Merge ＂Add //packages/modules/common/build＂ into main" },
  { hash: "47f3805d", date: "2024-04-17", author: "ziyiw@google.com", message: "[unit_test] Add unit tests for notification_manager_android." },
  { hash: "ea200151", date: "2024-04-11", author: "ziyiw@google.com", message: "Merge ＂[uwb] Add option for parsing segment metrics through shell cmd.＂ into main" },
  { hash: "98eb5457", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Flush all received session callback events before attempting tear down＂ into main" },
  { hash: "4e62eefd", date: "2024-04-11", author: "henrichataing@google.com", message: "Flush all received session callback events before attempting tear down" },
  { hash: "b32dbeeb", date: "2024-04-10", author: "ziyiw@google.com", message: "[uwb] Add option for parsing segment metrics through shell cmd." },
  { hash: "66fb117b", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add UCI version as part of SpecificationInfo＂ into main" },
  { hash: "9761cabd", date: "2024-04-08", author: "bhautik.ardeshana@nxp.com", message: "Add UCI version as part of SpecificationInfo" },
  { hash: "2fbd5165", date: "2024-04-05", author: "jeongik@google.com", message: "Add //packages/modules/common/build" },
  { hash: "1d20a6aa", date: "2024-04-04", author: "ziyiw@google.com", message: "[Uwb] Support Update Multicast list ntf v1 and v2." },
  { hash: "9ec865f0", date: "2024-04-04", author: "bhautik.ardeshana@nxp.com", message: "Race condition while processing session status notification." },
  { hash: "53183736", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂uwb(support_lib): add protocol_type for oemextension＂ into main" },
  { hash: "8ff0ea97", date: "2024-04-04", author: "hwoo.ko@samsung.corp-partner.google.com", message: "uwb(support_lib): add protocol_type for oemextension" },
  { hash: "74694b93", date: "2024-04-03", author: "gmoturu@google.com", message: "[uwb_manager_test] Remove dependency between test cases." },
  { hash: "5699f8d1", date: "2024-04-03", author: "mathieu.mandret@qorvo.com", message: "uwb: set remote address for onDataReceived" },
  { hash: "c3f6d685", date: "2024-04-02", author: "rpius@google.com", message: "Merge ＂uwb: add data range ntf for ccc reconfigure＂ into main" },
]});
repoLogs.push({ path: "packages/modules/Virtualization", logs: [
  { hash: "947eb00d", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[attestation] Validate vendor module loaded by client VM in RKP VM＂ into main" },
  { hash: "9eebbab9", date: "2024-04-25", author: "aliceywang@google.com", message: "[attestation] Validate vendor module loaded by client VM in RKP VM" },
  { hash: "b19fd08b", date: "2024-04-24", author: "davidai@google.com", message: "pvmfw: Expand number of cpus allowed per cluster" },
  { hash: "9ddfab54", date: "2024-04-24", author: "ptosi@google.com", message: "pvmfw: Increase STACK_PAGES to 12" },
  { hash: "a14e5e84", date: "2024-04-23", author: "spickl@google.com", message: "Merge ＂Adding arm64-v8a-hwasan abi memory mapping＂ into main" },
  { hash: "5b06c355", date: "2024-04-23", author: "spickl@google.com", message: "Adding arm64-v8a-hwasan abi memory mapping" },
  { hash: "7f0dc242", date: "2024-04-23", author: "ioffe@google.com", message: "Merge ＂Update kernel to builds 11745483＂ into main" },
  { hash: "8dda210a", date: "2024-04-22", author: "ioffe@google.com", message: "Update kernel to builds 11745483" },
  { hash: "649a7dd3", date: "2024-04-23", author: "jeongik@google.com", message: "Optimize VmLauncherApp" },
  { hash: "7b7cb113", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂pvmfw: Expect proper CPU compatible ＂arm,armv8＂＂ into main" },
  { hash: "43104c68", date: "2024-04-18", author: "ioffe@google.com", message: "Merge changes from topics ＂PRODUCT_AVF_MICRODROID_GUEST_GKI_VERSION＂, ＂microdroid_gki_android14-6.1-pkvm_experimental＂ into main" },
  { hash: "82567205", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂vmconfig: Introduce get_debug_level()＂ into main" },
  { hash: "6ae8fe26", date: "2024-04-17", author: "ptosi@google.com", message: "pvmfw: Expect proper CPU compatible ＂arm,armv8＂" },
  { hash: "d3bbe1d5", date: "2024-04-17", author: "ptosi@google.com", message: "vmconfig: Introduce get_debug_level()" },
  { hash: "96a29a01", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂virtmgr: Make new_with_debug_level() test-only＂ into main" },
  { hash: "c57c4dfa", date: "2024-04-17", author: "ptosi@google.com", message: "virtmgr: Make new_with_debug_level() test-only" },
  { hash: "ad4c100f", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂virtmgr: Log failed sysprop read for custom DP＂ into main" },
  { hash: "31c67686", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂virtmgr: Clean up unnecessary match statement＂ into main" },
  { hash: "a93fea91", date: "2024-04-16", author: "rprichard@google.com", message: "Merge ＂MicrodroidHostTests: unset LD_LIBRARY_PATH＂ into main" },
  { hash: "4fdf103a", date: "2024-04-16", author: "ioffe@google.com", message: "Hide android14-6.1-pkvm_experimental GKI behind separate product flag" },
  { hash: "e4d9f391", date: "2024-04-16", author: "ptosi@google.com", message: "virtmgr: Log failed sysprop read for custom DP" },
  { hash: "e156cd1d", date: "2024-04-16", author: "ptosi@google.com", message: "Merge ＂pvmfw: Avoid panic if OPP table too large＂ into main" },
  { hash: "048fae05", date: "2024-04-16", author: "ptosi@google.com", message: "Merge ＂pvmfw: Unify Config::new() calls into a single one＂ into main" },
  { hash: "147addfc", date: "2024-04-16", author: "ptosi@google.com", message: "pvmfw: Unify Config::new() calls into a single one" },
  { hash: "df272a5a", date: "2024-04-16", author: "ptosi@google.com", message: "pvmfw: Avoid panic if OPP table too large" },
  { hash: "e7df57a8", date: "2024-04-16", author: "ioffe@google.com", message: "Add -pkvm_experimental to the microdroid_gki_android14-6.1 artifacts" },
  { hash: "f414ca78", date: "2024-04-16", author: "jiyong@google.com", message: "Merge ＂Add libminijail to the compos APEX＂ into main" },
  { hash: "aad4dd11", date: "2024-04-16", author: "jiyong@google.com", message: "Add libminijail to the compos APEX" },
  { hash: "0a7e92ef", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Edit the description for the vm launcher app＂ into main" },
  { hash: "dd633e51", date: "2024-04-16", author: "jiyong@google.com", message: "Edit the description for the vm launcher app" },
  { hash: "01c83131", date: "2024-04-15", author: "ptosi@google.com", message: "virtmgr: Clean up unnecessary match statement" },
  { hash: "26826b0a", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a tap device if it is available＂ into main" },
  { hash: "6be4f8b0", date: "2024-04-16", author: "jeongik@google.com", message: "Add a tap device if it is available" },
  { hash: "23363c4a", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Implement basic keyboard input＂ into main" },
  { hash: "17ae4e6e", date: "2024-04-15", author: "aliceywang@google.com", message: "[test] Fix permission for attestation test with GKI kernel" },
  { hash: "985b640c", date: "2024-04-15", author: "jeongik@google.com", message: "Implement basic keyboard input" },
  { hash: "ec8fd19b", date: "2024-04-15", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂VmLauncherApp: Fix runtime crash＂ into main" },
  { hash: "6ec66e9a", date: "2024-04-15", author: "jaewan@google.com", message: "VmLauncherApp: Fix runtime crash" },
  { hash: "daf396aa", date: "2024-04-15", author: "seungjaeyoo@google.com", message: "Make SecurityException being detected in nativeSpawn" },
  { hash: "c3219d5f", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[test] Use on-demand key provisioning in AvfRkpdVmAttestationTestApp＂ into main" },
  { hash: "b59cda45", date: "2024-04-12", author: "chiw@google.com", message: "Fix formatting issues" },
  { hash: "cad8ca45", date: "2024-04-12", author: "aliceywang@google.com", message: "[test] Use on-demand key provisioning in AvfRkpdVmAttestationTestApp" },
  { hash: "ac14e5d5", date: "2024-04-12", author: "jeongik@google.com", message: "Implement single touch for custom vm" },
  { hash: "b621fc88", date: "2024-04-11", author: "jiyong@google.com", message: "Merge ＂Refactor android display backend＂ into main" },
  { hash: "aada42c8", date: "2024-04-11", author: "seungjaeyoo@google.com", message: "Merge changes I7809768c,I8cf3efb8 into main" },
  { hash: "1c981bb0", date: "2024-04-11", author: "fmayle@google.com", message: "Merge ＂Upgrade nix to 0.28.0＂ into main" },
  { hash: "71ec663d", date: "2024-04-11", author: "jeongik@google.com", message: "Merge changes I68639dec,Ic48a707c into main" },
  { hash: "c181be71", date: "2024-04-11", author: "jeongik@google.com", message: "Add InputDevice in VirtualMachineRawConfig" },
  { hash: "798401cc", date: "2024-04-11", author: "jeongik@google.com", message: "Add paravirtualized_devices config" },
  { hash: "bb5a8422", date: "2024-04-11", author: "seungjaeyoo@google.com", message: "Add more checks on field of atomVmExited in testTelemetryPushedAtoms" },
  { hash: "329f286a", date: "2024-04-11", author: "seungjaeyoo@google.com", message: "Add CAP_SYS_NICE to virtmgr to sync with crosvm's capability." },
  { hash: "133c319b", date: "2024-04-10", author: "rprichard@google.com", message: "MicrodroidHostTests: unset LD_LIBRARY_PATH" },
  { hash: "0f3002ac", date: "2024-04-10", author: "chiw@google.com", message: "Merge ＂Update needed for Rust v1.77.1＂ into main" },
  { hash: "e5b78343", date: "2024-04-10", author: "chiw@google.com", message: "Update needed for Rust v1.77.1" },
  { hash: "212ed492", date: "2024-04-10", author: "shikhapanwar@google.com", message: "Virt presubmits: Remove secetkeepr & policy test" },
  { hash: "7d869776", date: "2024-04-10", author: "jiyong@google.com", message: "Refactor android display backend" },
  { hash: "fbbcfcd1", date: "2024-04-09", author: "fmayle@google.com", message: "Upgrade nix to 0.28.0" },
  { hash: "dc184756", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I3b1d64c2,Iffa70df0 into main" },
  { hash: "ae51f67a", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Prevent removing instance when changing DebugLevel＂ into main" },
  { hash: "209ccd7a", date: "2024-04-09", author: "jeongik@google.com", message: "Disable VmLauncherApp by default" },
  { hash: "748b2aab", date: "2024-04-09", author: "shikhapanwar@google.com", message: "Prevent removing instance when changing DebugLevel" },
  { hash: "184db23c", date: "2024-04-09", author: "shikhapanwar@google.com", message: "Merge ＂Do not delete original VM after it is transferred＂ into main" },
  { hash: "ef450795", date: "2024-04-09", author: "drysdale@google.com", message: "Merge ＂Add a limit to how many VMs one app can own＂ into main" },
  { hash: "ca773027", date: "2024-04-09", author: "jeongik@google.com", message: "Embed VmLauncherApp into com.android.virt" },
  { hash: "6cdb8773", date: "2024-04-08", author: "shikhapanwar@google.com", message: "Do not delete original VM after it is transferred" },
  { hash: "825c90f1", date: "2024-04-08", author: "drysdale@google.com", message: "Add a limit to how many VMs one app can own" },
  { hash: "d5cd6d3c", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂README fixes＂ into main" },
  { hash: "289d5b0a", date: "2024-04-08", author: "alanstokes@google.com", message: "README fixes" },
  { hash: "d801a14a", date: "2024-04-08", author: "shikhapanwar@google.com", message: "claimInstance is last step while moving vm bw apps" },
  { hash: "566e2b01", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂[attestation] Document pVM remote attestation＂ into main" },
  { hash: "9eaae1d4", date: "2024-04-08", author: "ioffe@google.com", message: "Merge changes from topics ＂derive-microdroid-vendor-dice-node-for-real＂, ＂rollback-index＂ into main" },
  { hash: "2833e3ec", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Re-enable clippy check for let_underscore_lock＂ into main" },
  { hash: "31302908", date: "2024-04-08", author: "aliceywang@google.com", message: "[attestation] Document pVM remote attestation" },
  { hash: "656095bc", date: "2024-04-08", author: "chiw@google.com", message: "Update needed for Rust v1.77.1" },
  { hash: "cf97561f", date: "2024-04-07", author: "jiyong@google.com", message: "Re-enable clippy check for let_underscore_lock" },
  { hash: "cd31a066", date: "2024-04-05", author: "chiw@google.com", message: "Update needed for Rust v1.77.0" },
  { hash: "da8eacce", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add display config for CustomImageConfig＂ into main" },
  { hash: "1df1c038", date: "2024-04-06", author: "jeongik@google.com", message: "Add display config for CustomImageConfig" },
  { hash: "7e8f6b5b", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update documentation for preinstalled access＂ into main" },
  { hash: "c79bf280", date: "2024-04-05", author: "alanstokes@google.com", message: "Update documentation for preinstalled access" },
  { hash: "a609e842", date: "2024-04-05", author: "jeongik@google.com", message: "Merge ＂clearDisplayService before launching the vm＂ into main" },
  { hash: "1c52f8c8", date: "2024-04-05", author: "shikhapanwar@google.com", message: "Merge ＂Notify VS of an instance being removed＂ into main" },
  { hash: "ef24801c", date: "2024-04-05", author: "shikhapanwar@google.com", message: "Merge ＂Claim ownership of VM instance during VM transfer＂ into main" },
  { hash: "157b2d38", date: "2024-04-05", author: "jeongik@google.com", message: "clearDisplayService before launching the vm" },
  { hash: "39605c3a", date: "2024-04-05", author: "jeongik@google.com", message: "VmLauncherApp supports the display from vm" },
  { hash: "eee137df", date: "2024-04-05", author: "jeongik@google.com", message: "Add clearDisplayService in IVirtualizationServiceInternal" },
  { hash: "7add2a46", date: "2024-04-05", author: "jeongik@google.com", message: "Add setDisplayService and waitDisplayService in IVirtualizationServiceInternal" },
  { hash: "e9764720", date: "2024-04-05", author: "jiyong@google.com", message: "Add native lib for the android display backend" },
  { hash: "07d701c8", date: "2024-04-04", author: "shikhapanwar@google.com", message: "Notify VS of an instance being removed" },
  { hash: "bd5eba99", date: "2024-04-04", author: "shikhapanwar@google.com", message: "Claim ownership of VM instance during VM transfer" },
  { hash: "abb6d8ad", date: "2024-04-04", author: "ioffe@google.com", message: "Actually derive microdroid vendor dice node" },
  { hash: "ea99b3d3", date: "2024-04-04", author: "ioffe@google.com", message: "libvbmeta: add getter for rollback_index" },
  { hash: "7a3f403d", date: "2024-04-02", author: "chiw@google.com", message: "Merge ＂Update needed for Rust v1.77.1＂ into main" },
  { hash: "ae05ea3d", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update stub.c＂ into main" },
  { hash: "d048b273", date: "2024-04-02", author: "jaewan@google.com", message: "[automerger skipped] Add missing '/' to the path am: 9905f631c7 -s ours" },
  { hash: "7f79e69e", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add libEGL, libGLESv2 into requireNativeLibs＂ into main" },
  { hash: "c0b3da5f", date: "2024-04-02", author: "chiw@google.com", message: "Update needed for Rust v1.77.1" },
  { hash: "9905f631", date: "2024-04-02", author: "jaewan@google.com", message: "Add missing '/' to the path" },
]});
repoLogs.push({ path: "packages/modules/Wifi", logs: [
  { hash: "d91b853ade", date: "2024-04-05", author: "qiangjiang@google.com", message: "Fix Aware mobly test am: f70eec4ef8" },
]});
repoLogs.push({ path: "packages/modules/adb", logs: [
  { hash: "e1098448", date: "2024-04-23", author: "shaju@google.com", message: "Merge ＂Include <print> header＂ into main" },
  { hash: "6e55ec1d", date: "2024-04-22", author: "rprichard@google.com", message: "Include <print> header" },
  { hash: "df2d3fe1", date: "2024-04-22", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "1d87c972", date: "2024-04-22", author: "caditya@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
  { hash: "8b970569", date: "2024-04-19", author: "ioffe@google.com", message: "Improve comment around CAP_SYS_NICE capability" },
  { hash: "89a9afc2", date: "2024-04-19", author: "ioffe@google.com", message: "adbd: Keep CAP_SYS_NICE when dropping capabitilies" },
  { hash: "2ce30230", date: "2024-04-15", author: "shaju@google.com", message: "Retrofitting usb port display format compatibility" },
  { hash: "2cd62837", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂adb: Write LinePrinter output to stderr instead of stdout.＂ into main" },
  { hash: "ab5eaf00", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Increase track-app/track-jdwp max maxpayload＂ into main" },
  { hash: "fca0ef54", date: "2024-04-08", author: "pcc@google.com", message: "adb: Write LinePrinter output to stderr instead of stdout." },
  { hash: "2e9756ad", date: "2024-04-06", author: "sanglardf@google.com", message: "Increase track-app/track-jdwp max maxpayload" },
  { hash: "4b4421df", date: "2024-04-05", author: "tavip@google.com", message: "Add dev-raw service" },
]});
repoLogs.push({ path: "packages/modules/common", logs: [
  { hash: "90b7726c", date: "2024-04-26", author: "rprichard@google.com", message: "Merge ＂Revert ＂Switch to libc++ prebuilt＂＂ into main" },
  { hash: "c978d8fa", date: "2024-04-26", author: "rprichard@google.com", message: "Revert ＂Switch to libc++ prebuilt＂" },
  { hash: "daabc31f", date: "2024-04-25", author: "rprichard@google.com", message: "Merge ＂Switch to libc++ prebuilt＂ into main" },
  { hash: "73d55fb9", date: "2024-04-25", author: "marcots@google.com", message: "Add marcots to modules/common OWNERS" },
  { hash: "319930a6", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add .impl libs of sdk_library to allowed_deps.txt＂ into main" },
  { hash: "72d6b673", date: "2024-04-24", author: "jihoonkang@google.com", message: "Add .impl libs of sdk_library to allowed_deps.txt" },
  { hash: "e8341a81", date: "2024-04-23", author: "tedbauer@google.com", message: "Merge ＂Add allowed_deps for CPP codegen in mainline＂ into main" },
  { hash: "f1028f40", date: "2024-04-23", author: "tedbauer@google.com", message: "Add allowed_deps for CPP codegen in mainline" },
  { hash: "cb3226c0", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE: Define aosp_mainline_modules＂ into main" },
  { hash: "4b7ec314", date: "2024-04-22", author: "jeongik@google.com", message: "DO NOT MERGE: Define aosp_mainline_modules" },
  { hash: "30147393", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add sdk_library modules to allowed_deps.txt＂ into main" },
  { hash: "e11d13de", date: "2024-04-19", author: "jihoonkang@google.com", message: "Add sdk_library modules to allowed_deps.txt" },
  { hash: "cebb84de", date: "2024-04-17", author: "chaohuiw@google.com", message: "Add kotlinx_serialization_core as allowed" },
  { hash: "ddc80f66", date: "2024-04-10", author: "alanv@google.com", message: "Update allowed_deps to account for no-op refactor of -nodeps targets" },
  { hash: "074190fd", date: "2024-04-09", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove hsnali@google.com from OWNERS" },
  { hash: "9a4153da", date: "2024-04-08", author: "renikindi@google.com", message: "Update tracing_tracing-ktx and tracing_tracing-ktx-nodeps" },
]});
repoLogs.push({ path: "packages/modules/vndk", logs: [
]});
repoLogs.push({ path: "packages/providers/BlockedNumberProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/BookmarkProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/CalendarProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/CallLogProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/ContactsProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/DownloadProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/MediaProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/PartnerBookmarksProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/TelephonyProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/TvProvider", logs: [
]});
repoLogs.push({ path: "packages/providers/UserDictionaryProvider", logs: [
]});
repoLogs.push({ path: "packages/screensavers/Basic", logs: [
]});
repoLogs.push({ path: "packages/screensavers/PhotoTable", logs: [
]});
repoLogs.push({ path: "packages/services/AlternativeNetworkAccess", logs: [
]});
repoLogs.push({ path: "packages/services/BuiltInPrintService", logs: [
]});
repoLogs.push({ path: "packages/services/Car", logs: [
  { hash: "4e2c80311a", date: "2024-04-23", author: "ericjeong@google.com", message: "Update OWNERS file to the latest" },
  { hash: "c9b8821725", date: "2024-04-23", author: "paulduffin@google.com", message: "Merge ＂Remove unused check_api args＂ into main" },
  { hash: "8a678db6ec", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Reformat car-lib/Android.bp with bpfmt＂ into main" },
  { hash: "e7ebc24507", date: "2024-04-23", author: "paulduffin@google.com", message: "Remove unused check_api args" },
  { hash: "1518e4462c", date: "2024-04-23", author: "paulduffin@google.com", message: "Reformat car-lib/Android.bp with bpfmt" },
  { hash: "b94801c3d4", date: "2024-04-23", author: "caditya@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
  { hash: "b0e790b963", date: "2024-04-15", author: "samdaria@google.com", message: "Enable art cover for A2DP source profile" },
  { hash: "9f6a02c8a9", date: "2024-04-11", author: "oscarazu@google.com", message: "Move audio device callback behind dynamic routing" },
  { hash: "9c4edabe6f", date: "2024-04-10", author: "samdaria@google.com", message: "Merge ＂Reapply ＂Enable A2DP source and AVRCP target service for car builds＂＂ into main" },
  { hash: "f9955e5d1c", date: "2024-04-10", author: "samdaria@google.com", message: "Merge ＂Update the bluetooth.prop owners＂ into main" },
  { hash: "4fe20b229e", date: "2024-04-10", author: "samdaria@google.com", message: "Update the bluetooth.prop owners" },
  { hash: "c126f60c1b", date: "2024-04-10", author: "samdaria@google.com", message: "Reapply ＂Enable A2DP source and AVRCP target service for car builds＂" },
]});
repoLogs.push({ path: "packages/services/DeviceAsWebcam", logs: [
]});
repoLogs.push({ path: "packages/services/Iwlan", logs: [
]});
repoLogs.push({ path: "packages/services/Mms", logs: [
]});
repoLogs.push({ path: "packages/services/Mtp", logs: [
]});
repoLogs.push({ path: "packages/services/Telecomm", logs: [
]});
repoLogs.push({ path: "packages/services/Telephony", logs: [
  { hash: "b414473b2", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Do not call close on onCreateIncomingConnectionFailed＂ into main" },
]});
repoLogs.push({ path: "packages/wallpapers/ImageWallpaper", logs: [
]});
repoLogs.push({ path: "packages/wallpapers/LivePicker", logs: [
]});
repoLogs.push({ path: "pdk", logs: [
]});
repoLogs.push({ path: "platform_testing", logs: [
  { hash: "5ed616d49", date: "2024-04-25", author: "xianyuanjia@google.com", message: "Add embedded_launcher: false to betocq_test_suite" },
  { hash: "d0c862c90", date: "2024-04-25", author: "kaishi@google.com", message: "Merge ＂Integrate the latest changes＂ into main" },
  { hash: "714fde685", date: "2024-04-25", author: "kaishi@google.com", message: "Integrate the latest changes" },
  { hash: "8e2f9463d", date: "2024-04-23", author: "congxiliu@google.com", message: "Added a strict robolectric test module" },
  { hash: "19f497343", date: "2024-04-23", author: "caditya@google.com", message: "Migrate Test Targets to New Android Ownership Model" },
  { hash: "c1f7d95e0", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add Aware test case and enable it for QuickShare CUJ.＂ into main" },
  { hash: "26a8f228e", date: "2024-04-17", author: "kaishi@google.com", message: "Add Aware test case and enable it for QuickShare CUJ." },
  { hash: "6341b27f7", date: "2024-04-17", author: "kaishi@google.com", message: "Update test instructions and fix a typo in BLE test" },
  { hash: "a2d60b74b", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add the test instructions＂ into main" },
  { hash: "fd58e17cb", date: "2024-04-11", author: "kaishi@google.com", message: "Add the test instructions" },
  { hash: "b76d8a49c", date: "2024-04-11", author: "steveliu@google.com", message: "fix typoes for scc_5g_all_wifi_dbs_2g_sta_test" },
  { hash: "d5ae1c749", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add run_identifier property to BetoCQ v2 tests＂ into main" },
  { hash: "025a7bbfd", date: "2024-04-11", author: "xianyuanjia@google.com", message: "Add run_identifier property to BetoCQ v2 tests" },
  { hash: "8af5867b0", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add an option for package name in CompilationFilterRule＂ into main" },
  { hash: "f9c7e6498", date: "2024-04-10", author: "steveliu@google.com", message: "rename test suite name rename and cleanup the testbed name rename the cuj_tests as compound_tests" },
  { hash: "5aad56224", date: "2024-04-10", author: "jinghuanwen@google.com", message: "Add an option for package name in CompilationFilterRule" },
  { hash: "200bdd488", date: "2024-04-09", author: "steveliu@google.com", message: "correct the result message for the failure of 'prior BT' connection." },
  { hash: "a398478e6", date: "2024-04-08", author: "kaishi@google.com", message: "Integrate the latest changes" },
  { hash: "986888b47", date: "2024-04-08", author: "steveliu@google.com", message: "fix typo for the low throughput tip" },
]});
repoLogs.push({ path: "prebuilts/abi-dumps/ndk", logs: [
]});
repoLogs.push({ path: "prebuilts/abi-dumps/platform", logs: [
]});
repoLogs.push({ path: "prebuilts/abi-dumps/vndk", logs: [
]});
repoLogs.push({ path: "prebuilts/android-emulator", logs: [
]});
repoLogs.push({ path: "prebuilts/asuite", logs: [
]});
repoLogs.push({ path: "prebuilts/bazel/common", logs: [
]});
repoLogs.push({ path: "prebuilts/bazel/darwin-x86_64", logs: [
]});
repoLogs.push({ path: "prebuilts/bazel/linux-x86_64", logs: [
]});
repoLogs.push({ path: "prebuilts/build-tools", logs: [
]});
repoLogs.push({ path: "prebuilts/bundletool", logs: [
]});
repoLogs.push({ path: "prebuilts/checkcolor", logs: [
]});
repoLogs.push({ path: "prebuilts/checkstyle", logs: [
]});
repoLogs.push({ path: "prebuilts/clang-tools", logs: [
]});
repoLogs.push({ path: "prebuilts/clang/host/darwin-x86", logs: [
]});
repoLogs.push({ path: "prebuilts/clang/host/linux-x86", logs: [
]});
repoLogs.push({ path: "prebuilts/cmdline-tools", logs: [
]});
repoLogs.push({ path: "prebuilts/devtools", logs: [
]});
repoLogs.push({ path: "prebuilts/gcc/linux-x86/host/x86_64-linux-glibc2.17-4.8", logs: [
]});
repoLogs.push({ path: "prebuilts/gcc/linux-x86/host/x86_64-w64-mingw32-4.8", logs: [
]});
repoLogs.push({ path: "prebuilts/go/darwin-x86", logs: [
]});
repoLogs.push({ path: "prebuilts/go/linux-x86", logs: [
]});
repoLogs.push({ path: "prebuilts/gradle-plugin", logs: [
]});
repoLogs.push({ path: "prebuilts/jdk/jdk17", logs: [
]});
repoLogs.push({ path: "prebuilts/jdk/jdk21", logs: [
]});
repoLogs.push({ path: "prebuilts/jdk/jdk8", logs: [
]});
repoLogs.push({ path: "prebuilts/ktlint", logs: [
]});
repoLogs.push({ path: "prebuilts/manifest-merger", logs: [
]});
repoLogs.push({ path: "prebuilts/maven_repo/bumptech", logs: [
]});
repoLogs.push({ path: "prebuilts/misc", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/AdServices", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/AppSearch", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Bluetooth", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/ConfigInfrastructure", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Connectivity", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/CrashRecovery", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/DeviceLock", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/HealthFitness", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/IPsec", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Media", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/MediaProvider", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/OnDevicePersonalization", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Permission", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Profiling", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/RemoteKeyProvisioning", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Scheduling", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/SdkExtensions", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/StatsD", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Uwb", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/Wifi", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/art", logs: [
]});
repoLogs.push({ path: "prebuilts/module_sdk/conscrypt", logs: [
]});
repoLogs.push({ path: "prebuilts/ndk", logs: [
]});
repoLogs.push({ path: "prebuilts/qemu-kernel", logs: [
]});
repoLogs.push({ path: "prebuilts/r8", logs: [
]});
repoLogs.push({ path: "prebuilts/remoteexecution-client", logs: [
]});
repoLogs.push({ path: "prebuilts/runtime", logs: [
]});
repoLogs.push({ path: "prebuilts/rust", logs: [
]});
repoLogs.push({ path: "prebuilts/sdk", logs: [
]});
repoLogs.push({ path: "prebuilts/tools", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v29", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v30", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v31", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v32", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v33", logs: [
]});
repoLogs.push({ path: "prebuilts/vndk/v34", logs: [
]});
repoLogs.push({ path: "sdk", logs: [
]});
repoLogs.push({ path: "system/apex", logs: [
  { hash: "a9035b08", date: "2024-04-25", author: "jiyong@google.com", message: "Merge ＂Revert ＂Apexd logs metrics atoms for rebootless installs＂＂ into main" },
  { hash: "48bc5d07", date: "2024-04-25", author: "jiyong@google.com", message: "Revert ＂Apexd logs metrics atoms for rebootless installs＂" },
  { hash: "019cdea9", date: "2024-04-23", author: "kfrankel@google.com", message: "Merge ＂Apexd logs metrics atoms for rebootless installs＂ into main" },
  { hash: "e81e95b6", date: "2024-04-18", author: "jooyung@google.com", message: "Need INSTALL_TEST_ONLY_PACKAGE permission to install test apex" },
  { hash: "8a8158b0", date: "2024-04-17", author: "kfrankel@google.com", message: "Apexd logs metrics atoms for rebootless installs" },
  { hash: "cd8f9ea7", date: "2024-04-04", author: "colefaust@google.com", message: "Bpfmt files in system/apex" },
  { hash: "65502eef", date: "2024-04-03", author: "colefaust@google.com", message: "Set embedded_launcher: true on apexer_test and apex_compression_test" },
  { hash: "b8043623", date: "2024-04-02", author: "colefaust@google.com", message: "Set embedded_launcher: true on apexer_with_DCLA_preprocessing_test" },
]});
repoLogs.push({ path: "system/authgraph", logs: [
  { hash: "e4d193b", date: "2024-04-26", author: "drysdale@google.com", message: "Upgrade to syn2 dep" },
  { hash: "ea9e75e", date: "2024-04-18", author: "hasinitg@google.com", message: "Use a partially decoded DICE chain entry payload in the key exchange" },
]});
repoLogs.push({ path: "system/bpf", logs: [
]});
repoLogs.push({ path: "system/bpfprogs", logs: [
]});
repoLogs.push({ path: "system/ca-certificates", logs: [
]});
repoLogs.push({ path: "system/chre", logs: [
]});
repoLogs.push({ path: "system/connectivity/wificond", logs: [
]});
repoLogs.push({ path: "system/core", logs: [
  { hash: "563c1a83a", date: "2024-04-26", author: "wloh@google.com", message: "Merge ＂Create app-metadata directory＂ into main" },
  { hash: "6f5205229", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂ueventd: Add `devname sys_name` to `subsystem`, pulling device names from sysfs＂ into main" },
  { hash: "188b64778", date: "2024-04-25", author: "wloh@google.com", message: "Create app-metadata directory" },
  { hash: "b24f4c969", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Load modules from _16K dir when running on 16K kernel＂ into main" },
  { hash: "b479666e3", date: "2024-04-25", author: "schuffelen@google.com", message: "ueventd: Add `devname sys_name` to `subsystem`, pulling device names from sysfs" },
  { hash: "946a35524", date: "2024-04-25", author: "zhangkelvin@google.com", message: "Merge ＂Allow querying for fstab for a mount point with fstype＂ into main" },
  { hash: "ffdb017e7", date: "2024-04-25", author: "zhangkelvin@google.com", message: "Load modules from _16K dir when running on 16K kernel" },
  { hash: "6cdee65b8", date: "2024-04-25", author: "zhangkelvin@google.com", message: "Allow querying for fstab for a mount point with fstype" },
  { hash: "6f7fb5a0b", date: "2024-04-24", author: "zhengdaniel@google.com", message: "Merge ＂libsnapshot: remove hard coded cow version＂ into main" },
  { hash: "b46dcf4fc", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Only write appcompat properties if flag is defined＂ into main" },
  { hash: "ef3679a78", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂libmodprobe: remove dummy parameters for kernel＂ into main" },
  { hash: "d774ab22c", date: "2024-04-23", author: "rprichard@google.com", message: "Merge ＂sysutils: add missing <vector> include＂ into main" },
  { hash: "455fe568b", date: "2024-04-22", author: "rprichard@google.com", message: "sysutils: add missing <vector> include" },
  { hash: "b69633f50", date: "2024-04-23", author: "fmayer@google.com", message: "Merge ＂Avoid confusing `main_thread` name＂ into main" },
  { hash: "1db2d481e", date: "2024-04-22", author: "chungkai@google.com", message: "libmodprobe: remove dummy parameters for kernel" },
  { hash: "2d45331a9", date: "2024-04-22", author: "fmayer@google.com", message: "Avoid confusing `main_thread` name" },
  { hash: "bbdc19b7e", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂storageproxyd: Fix x86 builds＂ into main" },
  { hash: "4f75b6699", date: "2024-04-22", author: "donpollitz@google.com", message: "storageproxyd: Fix x86 builds" },
  { hash: "63ef65c13", date: "2024-04-22", author: "donpollitz@google.com", message: "Merge ＂storageproxyd: Add arguments for storage mapping and max file＂ into main" },
  { hash: "6901df0eb", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂init.rc: remove 4.9/4.14 support＂ into main" },
  { hash: "dd8050f68", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂init.rc: remove xt_qtaguid configuration＂ into main" },
  { hash: "95403fce0", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Build init-debug.rc with Soong＂ into main" },
  { hash: "ff086da56", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂setprop: check if not setprop value but setprop name starts with ＂ro.＂＂ into main" },
  { hash: "2c6b83f4d", date: "2024-04-22", author: "sanga1.lee@lge.com", message: "setprop: check if not setprop value but setprop name starts with ＂ro.＂" },
  { hash: "a95be37d2", date: "2024-04-20", author: "maze@google.com", message: "init.rc: remove 4.9/4.14 support" },
  { hash: "8b29034b8", date: "2024-04-20", author: "maze@google.com", message: "init.rc: remove xt_qtaguid configuration" },
  { hash: "f0db2406f", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Null terminate the std::array given to execve＂ into main" },
  { hash: "e873e1d31", date: "2024-04-20", author: "jiyong@google.com", message: "Null terminate the std::array given to execve" },
  { hash: "32677ae8f", date: "2024-04-19", author: "ntmyren@google.com", message: "Only write appcompat properties if flag is defined" },
  { hash: "885bd1c8d", date: "2024-04-19", author: "zhengdaniel@google.com", message: "libsnapshot: remove hard coded cow version" },
  { hash: "4113b658a", date: "2024-04-19", author: "inseob@google.com", message: "Build init-debug.rc with Soong" },
  { hash: "8c7b66629", date: "2024-04-19", author: "inseob@google.com", message: "Merge ＂Build etc/hosts with Soong＂ into main" },
  { hash: "b45c8ad05", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes Ie74b9c27,If2224475 into main" },
  { hash: "a078141ec", date: "2024-04-18", author: "jdesprez@google.com", message: "Merge ＂snapshotctl: Check for cow path when allocated from /data＂ into main" },
  { hash: "7d9d171e4", date: "2024-04-18", author: "tjmercier@google.com", message: "libprocessgroup: Check validity of uid and pid arguments for createProcessGroup" },
  { hash: "29e30f25b", date: "2024-04-18", author: "tjmercier@google.com", message: "Revert ＂libprocessgroup: Check validity of uid and pid arguments＂" },
  { hash: "fa5cf6884", date: "2024-04-18", author: "akailash@google.com", message: "snapshotctl: Check for cow path when allocated from /data" },
  { hash: "8a92f2d74", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Updated fuzz_config in Android.bp file＂ into main" },
  { hash: "f1ddc62db", date: "2024-04-18", author: "inseob@google.com", message: "Build etc/hosts with Soong" },
  { hash: "68c7869e8", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Don't install Android-only dependencies to microdroid＂ into main" },
  { hash: "a8934ddc2", date: "2024-04-17", author: "drysdale@google.com", message: "Merge ＂Warn that reboot might be needed after setting IDs＂ into main" },
  { hash: "8005cfa7e", date: "2024-04-17", author: "drysdale@google.com", message: "Warn that reboot might be needed after setting IDs" },
  { hash: "12c64a758", date: "2024-04-17", author: "jiyong@google.com", message: "Don't install Android-only dependencies to microdroid" },
  { hash: "6d6ff398b", date: "2024-04-16", author: "tjmercier@google.com", message: "Merge changes from topic ＂memcg_v2_soong_flags＂ into main" },
  { hash: "636234beb", date: "2024-04-15", author: "donpollitz@google.com", message: "storageproxyd: Add arguments for storage mapping and max file" },
  { hash: "73c6f08f5", date: "2024-04-13", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Wait for disconnect when rebooting to userspace FB＂ into main" },
  { hash: "4922633d3", date: "2024-04-12", author: "shrinidhihegde@google.com", message: "Merge ＂Throttle reboot from native watchdog＂ into main" },
  { hash: "56fde7cc2", date: "2024-04-12", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Do not disable LLNDK symbols in header files＂ into main" },
  { hash: "dcce9e044", date: "2024-04-12", author: "justinyun@google.com", message: "Do not disable LLNDK symbols in header files" },
  { hash: "ab9b68384", date: "2024-04-11", author: "shrinidhihegde@google.com", message: "Throttle reboot from native watchdog" },
  { hash: "541f85037", date: "2024-04-11", author: "akshata.jadhav@ittiam.com", message: "Updated fuzz_config in Android.bp file" },
  { hash: "ef1a559b1", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂vts_fs_test: Annotate fs type test for VSR.＂ into main" },
  { hash: "57fb5b705", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Updated 'cc' field of fuzz_config in Android.bp file＂ into main" },
  { hash: "c22ef3bd6", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Temporarily disable mte_illegal_setjump＂ into main" },
  { hash: "e6eda1f80", date: "2024-04-10", author: "tedbauer@google.com", message: "Merge ＂Create new file for test_mission_1 marker file＂ into main" },
  { hash: "921649032", date: "2024-04-10", author: "fmayer@google.com", message: "Temporarily disable mte_illegal_setjump" },
  { hash: "361120ca7", date: "2024-04-10", author: "zhengdaniel@google.com", message: "Merge ＂support negative zstd compression levels＂ into main" },
  { hash: "3785e7b1f", date: "2024-04-10", author: "zhengdaniel@google.com", message: "support negative zstd compression levels" },
  { hash: "7443b82ce", date: "2024-04-10", author: "tedbauer@google.com", message: "Create new file for test_mission_1 marker file" },
  { hash: "b8a10dca8", date: "2024-04-10", author: "mitchp@google.com", message: "Merge ＂[GWP-ASan] [debuggerd] Change test to handle default recoverable＂ into main" },
  { hash: "fb6957c64", date: "2024-04-10", author: "akshata.jadhav@ittiam.com", message: "Updated 'cc' field of fuzz_config in Android.bp file" },
  { hash: "a2f5335b8", date: "2024-04-09", author: "mitchp@google.com", message: "[GWP-ASan] [debuggerd] Change test to handle default recoverable" },
  { hash: "793679f47", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂skip nop persistent property writes＂ into main" },
  { hash: "1cfa2c411", date: "2024-04-08", author: "tjmercier@google.com", message: "Add build flag to split the cgroup v2 hierarchy into apps/system" },
  { hash: "f8901767e", date: "2024-04-08", author: "tjmercier@google.com", message: "Add build flag to force memcg to the v2 cgroup hierarchy" },
  { hash: "d1e048f95", date: "2024-04-08", author: "tjmercier@google.com", message: "Use ConvertUid{Pid}ToPath for all path generation" },
  { hash: "44eb70548", date: "2024-04-08", author: "tjmercier@google.com", message: "Fix unused params and remove unneeded cflags" },
  { hash: "f5e9af16b", date: "2024-04-08", author: "zhengdaniel@google.com", message: "Merge ＂libsnapshot: fix warnings＂ into main" },
  { hash: "c079a6c34", date: "2024-04-08", author: "ioffe@google.com", message: "Merge ＂Restorecon /microdroid_resources in setup_selinux＂ into main" },
  { hash: "20c3933ed", date: "2024-04-08", author: "rherouart@google.com", message: "Merge ＂lib/trusty: tipc-test should not print results to error stream＂ into main" },
  { hash: "b238b90a7", date: "2024-04-08", author: "rherouart@google.com", message: "lib/trusty: tipc-test should not print results to error stream" },
  { hash: "78a7365ff", date: "2024-04-07", author: "jiyong@google.com", message: "Merge ＂init: Remove encryption=DeleteIfNecessary from /data/misc/bootanim＂ into main" },
  { hash: "ef2e67eec", date: "2024-04-05", author: "rherouart@google.com", message: "Merge ＂lib/trusty: tipc-test suite name is incorrect in JSON output＂ into main" },
  { hash: "4f3a4cbc5", date: "2024-04-05", author: "rherouart@google.com", message: "lib/trusty: tipc-test suite name is incorrect in JSON output" },
  { hash: "09071c46d", date: "2024-04-05", author: "shrinidhihegde@google.com", message: "Merge ＂Revert ＂Update native watchdog to be triggered after 20 restarts instead of 4.＂＂ into main" },
  { hash: "ae5ce6f7c", date: "2024-04-04", author: "shrinidhihegde@google.com", message: "Revert ＂Update native watchdog to be triggered after 20 restarts instead of 4.＂" },
  { hash: "f0a1a724c", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix typo in comment.＂ into main" },
  { hash: "d334b826c", date: "2024-04-04", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I456aa53d,I286c6947 into main" },
  { hash: "9261e262c", date: "2024-04-04", author: "shrinidhihegde@google.com", message: "Merge ＂Update native watchdog to be triggered after 20 restarts instead of 4.＂ into main" },
  { hash: "867f0ada9", date: "2024-04-04", author: "mkbestas@gmail.com", message: "init: Remove encryption=DeleteIfNecessary from /data/misc/bootanim" },
  { hash: "08686936b", date: "2024-04-04", author: "hcutts@google.com", message: "getevent: print error message when failing to get event" },
  { hash: "b8f9475fd", date: "2024-04-04", author: "hcutts@google.com", message: "getevent: add Framework Input team as owners" },
  { hash: "2f8efe00a", date: "2024-04-04", author: "jiyong@google.com", message: "skip nop persistent property writes" },
  { hash: "feb7e0ea9", date: "2024-04-04", author: "ioffe@google.com", message: "Restorecon /microdroid_resources in setup_selinux" },
  { hash: "bf3326869", date: "2024-04-04", author: "enh@google.com", message: "Merge ＂linker.config.json: remove libpac.so.＂ into main" },
  { hash: "a45e51339", date: "2024-04-03", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add dm-thin support＂ into main" },
  { hash: "dbb87ec8a", date: "2024-04-03", author: "enh@google.com", message: "Fix typo in comment." },
  { hash: "1d928ca80", date: "2024-04-03", author: "shrinidhihegde@google.com", message: "Update native watchdog to be triggered after 20 restarts instead of 4." },
  { hash: "2f814176e", date: "2024-04-03", author: "jooyung@google.com", message: "Add dm-thin support" },
  { hash: "62963d97c", date: "2024-04-02", author: "chiw@google.com", message: "Merge ＂Update needed for Rust v1.77.0＂ into main" },
  { hash: "2dab9f296", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂snapshotctl: Build few commands only for userdebug/eng builds＂ into main" },
  { hash: "bc4f870aa", date: "2024-04-02", author: "devinmoore@google.com", message: "Merge ＂init_kill_services_test: don't always try to kill hwservicemanager＂ into main" },
  { hash: "d4bd799fc", date: "2024-04-02", author: "enh@google.com", message: "linker.config.json: remove libpac.so." },
  { hash: "42fe7733a", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add libEGL, libGLESv2 into provideLibs＂ into main" },
  { hash: "0f42bd4a8", date: "2024-04-02", author: "chiw@google.com", message: "Update needed for Rust v1.77.0" },
  { hash: "91d82fb63", date: "2024-04-02", author: "jeongik@google.com", message: "Add libEGL, libGLESv2 into provideLibs" },
]});
repoLogs.push({ path: "system/dmesgd", logs: [
]});
repoLogs.push({ path: "system/extras", logs: [
  { hash: "5080f93c", date: "2024-04-23", author: "dhavale@google.com", message: "Merge ＂lpdump: Add info about super partition＂ into main" },
  { hash: "897f8fa1", date: "2024-04-22", author: "dhavale@google.com", message: "lpdump: Add info about super partition" },
  { hash: "bbc0bef4", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-70381af1ffc5488eae2b942658dfabd3＂ into main" },
  { hash: "f12e08aa", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-4212e85279cd4af49081bfd97be33764＂ into android14-tests-dev am: 6df0a78dd6 -s ours" },
  { hash: "472ef7a8", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev am: 6b5a8b2336＂ into android13-tests-dev am: 57b29e5ba9 -s ours am: 04d7e66ade -s ours" },
  { hash: "35dccce0", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-e9cc26aa52074db0a6d764cfe3878879＂ into main" },
  { hash: "92fe18f3", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-58ca7d8a2c394672818c16262cc7b67b＂ into android14-tests-dev am: 8961961b84 -s ours" },
  { hash: "a8e2663b", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev am: d9fb8dd703＂ into android13-tests-dev am: bc87a068b5 -s ours am: 39f3b7a553 -s ours" },
  { hash: "6df0a78d", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-4212e85279cd4af49081bfd97be33764＂ into android14-tests-dev" },
  { hash: "04d7e66a", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev am: 6b5a8b2336＂ into android13-tests-dev am: 57b29e5ba9 -s ours" },
  { hash: "dc9ea1d1", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev am: 6b5a8b2336 am: 5cec5340a8 -s ours" },
  { hash: "8961961b", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge changes from topic ＂am-58ca7d8a2c394672818c16262cc7b67b＂ into android14-tests-dev" },
  { hash: "39f3b7a5", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev am: d9fb8dd703＂ into android13-tests-dev am: bc87a068b5 -s ours" },
  { hash: "9885f02b", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev am: d9fb8dd703 am: 0498708589 -s ours" },
  { hash: "57b29e5b", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev am: 6b5a8b2336＂ into android13-tests-dev" },
  { hash: "5cec5340", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev am: 6b5a8b2336" },
  { hash: "bc87a068", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev am: d9fb8dd703＂ into android13-tests-dev" },
  { hash: "04987085", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev am: d9fb8dd703" },
  { hash: "6b5a8b23", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725＂ into android12L-tests-dev" },
  { hash: "ea16ef7c", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev am: e4cc9c7725" },
  { hash: "d9fb8dd7", date: "2024-04-19", author: "android-build-automerger-merge-worker@system.gserviceaccount.com", message: "Merge ＂Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800＂ into android12L-tests-dev" },
  { hash: "93e1ebdd", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev am: 927e0ca800" },
  { hash: "e4cc9c77", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simpleperf: Fix flaky test check_trampoline_after_art_jni_methods＂ into android12-tests-dev" },
  { hash: "927e0ca8", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simpleperf: Fix record_cmd#check_trampoline test＂ into android12-tests-dev" },
  { hash: "26cd565b", date: "2024-04-18", author: "yabinc@google.com", message: "simpleperf: Fix flaky test check_trampoline_after_art_jni_methods" },
  { hash: "b85662a9", date: "2024-04-18", author: "yabinc@google.com", message: "simpleperf: Fix record_cmd#check_trampoline test" },
  { hash: "c6e61744", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂simpleperf: Mark cycle counting in ETM config register.＂ into main" },
  { hash: "f7d8406b", date: "2024-04-17", author: "yabinc@google.com", message: "Merge changes I6905e8b5,I194a387c,Ia80fac97 into main" },
  { hash: "08466993", date: "2024-04-17", author: "tamas.zsoldos@arm.com", message: "simpleperf: Mark cycle counting in ETM config register." },
  { hash: "8da16c26", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂profcollect: Change config namespace to aconfig_flags.profcollect_native_boot＂ into main" },
  { hash: "d22e1c74", date: "2024-04-17", author: "yikong@google.com", message: "profcollect: Change config namespace to aconfig_flags.profcollect_native_boot" },
  { hash: "f41d0fd7", date: "2024-04-16", author: "yabinc@google.com", message: "simpleperf: Check sched:sched_switch event in HasTracepointEvents" },
  { hash: "19ce98ee", date: "2024-04-16", author: "yabinc@google.com", message: "simpleperf: Handle empty string in TracepointStringFinder" },
  { hash: "7d8db107", date: "2024-04-16", author: "yabinc@google.com", message: "simpleperf: skip checking tracepoint events in the list cmd" },
  { hash: "21f7cd36", date: "2024-04-16", author: "yabinc@google.com", message: "Merge ＂simpleperf: Don't check symbols when getting no samples in emulator＂ into main" },
  { hash: "b68f0f9e", date: "2024-04-15", author: "yabinc@google.com", message: "simpleperf: Don't check symbols when getting no samples in emulator" },
  { hash: "bda10da0", date: "2024-04-09", author: "yabinc@google.com", message: "Merge ＂simpleperf: report_html.py: Format event counts with commas, right-align＂ into main" },
  { hash: "1ac7ee8a", date: "2024-04-09", author: "yabinc@google.com", message: "simpleperf: report_html.py: Format event counts with commas, right-align" },
  { hash: "4fb32f94", date: "2024-04-08", author: "yikong@google.com", message: "Merge ＂Do not reset profcollectd on sampling_period change＂ into main" },
  { hash: "0507c803", date: "2024-04-08", author: "yikong@google.com", message: "Do not reset profcollectd on sampling_period change" },
  { hash: "86ff8847", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add debug logging showing the llvm-objdump command＂ into main" },
  { hash: "57bad062", date: "2024-04-05", author: "yabinc@google.com", message: "Merge ＂simpleperf: Suppress kernel module read warnings＂ into main" },
  { hash: "90c27b08", date: "2024-04-04", author: "markhansen@google.com", message: "Add debug logging showing the llvm-objdump command" },
  { hash: "c67e0b07", date: "2024-04-04", author: "yabinc@google.com", message: "Merge ＂simpleperf: clarify --binary_filter in report_html.py＂ into main" },
  { hash: "2c928d6e", date: "2024-04-03", author: "yabinc@google.com", message: "simpleperf: Suppress kernel module read warnings" },
  { hash: "2d7af967", date: "2024-04-03", author: "yabinc@google.com", message: "simpleperf: clarify --binary_filter in report_html.py" },
  { hash: "0744f4b1", date: "2024-04-02", author: "yabinc@google.com", message: "Merge ＂simpleperf: Add CDD annotation for CtsSimpleperfTestCases＂ into main" },
]});
repoLogs.push({ path: "system/gatekeeper", logs: [
]});
repoLogs.push({ path: "system/gsid", logs: [
  { hash: "84b64f6", date: "2024-04-18", author: "dvander@google.com", message: "[automerger skipped] Align /data partition rules with vts_fs_test. am: 59f2b11c48 am: 8a065645ab -s ours" },
  { hash: "8a06564", date: "2024-04-18", author: "dvander@google.com", message: "Align /data partition rules with vts_fs_test. am: 59f2b11c48" },
  { hash: "59f2b11", date: "2024-04-18", author: "dvander@google.com", message: "Align /data partition rules with vts_fs_test." },
]});
repoLogs.push({ path: "system/hardware/interfaces", logs: [
  { hash: "bbc7f24", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "542506a", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
]});
repoLogs.push({ path: "system/hwservicemanager", logs: [
  { hash: "e7a2ed0", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "2ae935f", date: "2024-04-17", author: "devinmoore@google.com", message: "Promote CtsOsTestCases to presubmits" },
  { hash: "2b39a65", date: "2024-04-08", author: "devinmoore@google.com", message: "Merge ＂move hwservicemanager fragments＂ into main" },
  { hash: "6d1e2e2", date: "2024-04-05", author: "devinmoore@google.com", message: "Deprecate hwservicemanager" },
  { hash: "1f63de7", date: "2024-04-05", author: "devinmoore@google.com", message: "move hwservicemanager fragments" },
  { hash: "fbaf71c", date: "2024-04-04", author: "devinmoore@google.com", message: "Merge ＂Stop registering android.hidl.token＂ into main" },
  { hash: "9a4cbc7", date: "2024-04-04", author: "devinmoore@google.com", message: "Stop registering android.hidl.token" },
]});
repoLogs.push({ path: "system/incremental_delivery", logs: [
]});
repoLogs.push({ path: "system/iorap", logs: [
]});
repoLogs.push({ path: "system/keymaster", logs: [
]});
repoLogs.push({ path: "system/keymint", logs: [
  { hash: "eaf90c9", date: "2024-04-26", author: "drysdale@google.com", message: "Upgrade to syn2 dep" },
  { hash: "3793dea", date: "2024-04-18", author: "alizhang@google.com", message: "Fix outdated or broken links" },
  { hash: "3731232", date: "2024-04-09", author: "drysdale@google.com", message: "Merge ＂Make batch attestation keys/certs optional＂ into main" },
]});
repoLogs.push({ path: "system/libartpalette", logs: [
]});
repoLogs.push({ path: "system/libbase", logs: [
  { hash: "5df5be0", date: "2024-04-24", author: "jiakaiz@google.com", message: "Capture errno first during ErrnoErrorf." },
  { hash: "563175c", date: "2024-04-23", author: "jiakaiz@google.com", message: "Revert^2 ＂Make android::base:Result more code-size-efficient.＂" },
  { hash: "a1e8cb0", date: "2024-04-23", author: "maze@google.com", message: "Revert ＂Make android::base:Result more code-size-efficient.＂" },
]});
repoLogs.push({ path: "system/libcppbor", logs: [
]});
repoLogs.push({ path: "system/libfmq", logs: [
]});
repoLogs.push({ path: "system/libhidl", logs: [
  { hash: "7b7db07", date: "2024-04-25", author: "devinmoore@google.com", message: "Merge ＂Move ishidlSupported logic to libhwbinder＂ into main" },
  { hash: "4af50ba", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "17355cb", date: "2024-04-17", author: "devinmoore@google.com", message: "Move ishidlSupported logic to libhwbinder" },
  { hash: "b56bbc5", date: "2024-04-17", author: "devinmoore@google.com", message: "Promote CtsOsTestCases to presubmits" },
  { hash: "3197026", date: "2024-04-11", author: "rprichard@google.com", message: "hidl_vec::iter: don't inherit from std::iterator" },
  { hash: "f78d765", date: "2024-04-09", author: "kiyoungkim@google.com", message: "Merge ＂Remove VNDK definition(s)＂ into main" },
  { hash: "40cb40c", date: "2024-04-09", author: "jeongik@google.com", message: "Merge ＂Add //visibility:any_system_partition＂ into main" },
  { hash: "19f98bd", date: "2024-04-08", author: "devinmoore@google.com", message: "Merge ＂Add hwservicemanager vintf fragments to system_ext＂ into main" },
  { hash: "4c25a9f", date: "2024-04-05", author: "devinmoore@google.com", message: "Add hwservicemanager vintf fragments to system_ext" },
  { hash: "50ced9f", date: "2024-04-05", author: "devinmoore@google.com", message: "Check hwservicemanager.disabled for isHidlSupported" },
  { hash: "4e0961b", date: "2024-04-05", author: "devinmoore@google.com", message: "Remove kTempHidlSupport to stop supporting HIDL in 202404" },
  { hash: "ef80b00", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add CtsOsTestCases:android.os.cts.HwBinderTest to postsubmits＂ into main" },
]});
repoLogs.push({ path: "system/libhwbinder", logs: [
  { hash: "48965b3", date: "2024-04-25", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Handle BR_FROZEN_REPLY in libhwbinder＂ into main" },
  { hash: "5cb000e", date: "2024-04-25", author: "devinmoore@google.com", message: "Merge changes from topic ＂hwbinder_logs＂ into main" },
  { hash: "50935d8", date: "2024-04-24", author: "devinmoore@google.com", message: "Log when threadpool is being used/configured and HIDL is disabled" },
  { hash: "6e0bd99", date: "2024-04-24", author: "devinmoore@google.com", message: "Move isHidlSupported to libhwbinder" },
  { hash: "5ea12af", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "caf3b30", date: "2024-04-17", author: "devinmoore@google.com", message: "Promote CtsOsTestCases to presubmits" },
  { hash: "b1e1fd6", date: "2024-04-10", author: "devinmoore@google.com", message: "Handle BR_FROZEN_REPLY in libhwbinder" },
  { hash: "48e2f60", date: "2024-04-09", author: "jeongik@google.com", message: "Merge ＂Add //visibility:any_system_partition＂ into main" },
]});
repoLogs.push({ path: "system/libprocinfo", logs: [
]});
repoLogs.push({ path: "system/librustutils", logs: [
]});
repoLogs.push({ path: "system/libsysprop", logs: [
]});
repoLogs.push({ path: "system/libufdt", logs: [
]});
repoLogs.push({ path: "system/libvintf", logs: [
]});
repoLogs.push({ path: "system/libziparchive", logs: [
]});
repoLogs.push({ path: "system/linkerconfig", logs: [
  { hash: "c2e44b6", date: "2024-04-23", author: "kiyoungkim@google.com", message: "Add linker configuration from system_ext" },
]});
repoLogs.push({ path: "system/logging", logs: [
]});
repoLogs.push({ path: "system/media", logs: [
  { hash: "87e785ca", date: "2024-04-23", author: "ronish@google.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "system/memory/libdmabufheap", logs: [
]});
repoLogs.push({ path: "system/memory/libion", logs: [
]});
repoLogs.push({ path: "system/memory/libmeminfo", logs: [
  { hash: "2d6281a", date: "2024-04-17", author: "kaleshsingh@google.com", message: "VTS: Elf alignment test: Ignore VNDK apexes" },
  { hash: "ab4e836", date: "2024-04-17", author: "kaleshsingh@google.com", message: "VTS: Elf alignment test: Don't allow opting out of required ELF alignment" },
  { hash: "4107a85", date: "2024-04-17", author: "kaleshsingh@google.com", message: "VTS: Elf alignment test: Only Require alignment >= 16KB" },
  { hash: "07b56d1", date: "2024-04-08", author: "carlosgalo@google.com", message: "memevents: Adding support for new oom/mark_victim fields" },
]});
repoLogs.push({ path: "system/memory/libmemtrack", logs: [
]});
repoLogs.push({ path: "system/memory/libmemunreachable", logs: [
]});
repoLogs.push({ path: "system/memory/lmkd", logs: [
  { hash: "02de790", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "c2d8bfd", date: "2024-04-09", author: "enh@google.com", message: "Don't define LINE_MAX." },
  { hash: "20de82d", date: "2024-04-05", author: "surenb@google.com", message: "lmkd: update watermarks before the first kill" },
  { hash: "63dd699", date: "2024-04-04", author: "surenb@google.com", message: "lmkd: introduce swap_compression_ratio tunable" },
  { hash: "6593e2c", date: "2024-04-03", author: "carlosgalo@google.com", message: "Adding kswapd state monitoring with memevent_listener" },
  { hash: "f9dfb20", date: "2024-04-03", author: "carlosgalo@google.com", message: "Renaming direct reclaim monitoring to memevent monitoring" },
]});
repoLogs.push({ path: "system/netd", logs: [
  { hash: "ddf2f2cb", date: "2024-04-25", author: "maze@google.com", message: "kernel_test: use the new helpers" },
  { hash: "4fafa6f6", date: "2024-04-24", author: "prohr@google.com", message: "Support allowing a UID to bypass VPNs only on a specific network" },
  { hash: "418de296", date: "2024-04-20", author: "maze@google.com", message: "remove dead isFirewallEnabled()" },
  { hash: "606d04f5", date: "2024-04-15", author: "maze@google.com", message: "Merge ＂Delete disableBandwidthControl since it is never called＂ into main" },
  { hash: "b1327e0f", date: "2024-04-12", author: "prohr@google.com", message: "Delete disableBandwidthControl since it is never called" },
  { hash: "be4fc0cc", date: "2024-04-12", author: "prohr@google.com", message: "Remove support for setSharedAlert / removeSharedAlert" },
]});
repoLogs.push({ path: "system/nfc", logs: [
  { hash: "c033e8fe", date: "2024-04-09", author: "nattharatj@google.com", message: "Capture missing commands by accompanying HAL_WRITE" },
]});
repoLogs.push({ path: "system/nvram", logs: [
]});
repoLogs.push({ path: "system/secretkeeper", logs: [
  { hash: "f13cfb7", date: "2024-04-19", author: "shikhapanwar@google.com", message: "Skip updating policy if existing one is same" },
  { hash: "4df3b8f", date: "2024-04-13", author: "shikhapanwar@google.com", message: "Secretkeeper TA: Nothing to validate" },
]});
repoLogs.push({ path: "system/security", logs: [
  { hash: "98e175b6", date: "2024-04-15", author: "drysdale@google.com", message: "Merge ＂Drop unused PerBootDbKeepAlive type＂ into main" },
  { hash: "e2b37b6c", date: "2024-04-12", author: "drysdale@google.com", message: "Drop unused PerBootDbKeepAlive type" },
  { hash: "e5b6854f", date: "2024-04-11", author: "fmayle@google.com", message: "Merge ＂Upgrade nix to 0.28.0＂ into main" },
  { hash: "5c5a412b", date: "2024-04-10", author: "sethmo@google.com", message: "Merge ＂Cope with rkp-only devices in legacy keyblob test＂ into main" },
  { hash: "b0914ea7", date: "2024-04-10", author: "drysdale@google.com", message: "Cope with rkp-only devices in legacy keyblob test" },
  { hash: "42632079", date: "2024-04-09", author: "fmayle@google.com", message: "Upgrade nix to 0.28.0" },
  { hash: "3acb6db5", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Update needed for Rust v1.77.1＂ into main" },
  { hash: "4339115a", date: "2024-04-02", author: "chiw@google.com", message: "Update needed for Rust v1.77.1" },
  { hash: "8717347c", date: "2024-04-02", author: "inseob@google.com", message: "Merge ＂Add support for rsp inputs＂ into main" },
]});
repoLogs.push({ path: "system/sepolicy", logs: [
  { hash: "96a0742dc", date: "2024-04-26", author: "wloh@google.com", message: "Merge ＂Add policy for /data/app-metadata＂ into main" },
  { hash: "1c9073773", date: "2024-04-25", author: "emarteca@google.com", message: "Merge ＂Fix the neverallow parser so it can parse comments＂ into main" },
  { hash: "38b57bcc4", date: "2024-04-25", author: "wloh@google.com", message: "Add policy for /data/app-metadata" },
  { hash: "ec218a767", date: "2024-04-25", author: "inseob@google.com", message: "Guard proc_compaction_proactiveness" },
  { hash: "7cf8c7186", date: "2024-04-25", author: "emarteca@google.com", message: "Fix the neverallow parser so it can parse comments" },
  { hash: "81bf7bd5a", date: "2024-04-23", author: "inseob@google.com", message: "Merge ＂Allow vendor init to access compaction_proactiveness＂ into main" },
  { hash: "221da46b1", date: "2024-04-23", author: "inseob@google.com", message: "Merge changes Ib43d8e17,Ibb124fbb into main" },
  { hash: "13f4811f5", date: "2024-04-23", author: "liumartin@google.com", message: "Allow vendor init to access compaction_proactiveness" },
  { hash: "68b071e4b", date: "2024-04-23", author: "inseob@google.com", message: "Reland ＂Check added types/attributes on freeze test too＂" },
  { hash: "3458c57e5", date: "2024-04-23", author: "inseob@google.com", message: "Guard new types with starting_at_board_api macro" },
  { hash: "150b800c9", date: "2024-04-23", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add selinux_policy_system_soong phony module＂ into main" },
  { hash: "f8079faaa", date: "2024-04-22", author: "inseob@google.com", message: "Fix BOARD_API_FROZEN conditions" },
  { hash: "7ea1dd6dd", date: "2024-04-20", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂c2: add default1 and default2＂ into main" },
  { hash: "f877f5dbe", date: "2024-04-19", author: "smoreland@google.com", message: "c2: add default1 and default2" },
  { hash: "38f029ee7", date: "2024-04-19", author: "schfan@google.com", message: "Merge ＂Remove the usage of the pm.archiving.enabled system property＂ into main" },
  { hash: "151562f64", date: "2024-04-19", author: "inseob@google.com", message: "Add selinux_policy_system_soong phony module" },
  { hash: "8697fc80f", date: "2024-04-19", author: "inseob@google.com", message: "Add macro for board API level guard" },
  { hash: "015429cc8", date: "2024-04-18", author: "schfan@google.com", message: "Remove the usage of the pm.archiving.enabled system property" },
  { hash: "ff2018fa8", date: "2024-04-17", author: "inseob@google.com", message: "Fix bpfmt" },
  { hash: "d0188d8bc", date: "2024-04-17", author: "inseob@google.com", message: "Merge ＂Finalize prebuilt CTS artifacts＂ into main" },
  { hash: "4b94b1f5d", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix selinux denial when running adb shell cmd virtual_camera commands＂ into main" },
  { hash: "4b9929e2f", date: "2024-04-16", author: "inseob@google.com", message: "Finalize prebuilt CTS artifacts" },
  { hash: "edf58243d", date: "2024-04-16", author: "inseob@google.com", message: "Add debugfs permission to 29.0 and 30.0 compat cil" },
  { hash: "7f271ce06", date: "2024-04-15", author: "jsebechlebsky@google.com", message: "Fix selinux denial when running adb shell cmd virtual_camera commands" },
  { hash: "021596b37", date: "2024-04-15", author: "inseob@google.com", message: "Run neverallow tests on build time" },
  { hash: "1f24c3788", date: "2024-04-12", author: "shrinidhihegde@google.com", message: "Merge ＂Adding a new property＂ into main" },
  { hash: "24aba1e12", date: "2024-04-11", author: "shrinidhihegde@google.com", message: "Adding a new property" },
  { hash: "949b5d7e4", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert^2 ＂Add pm.archiving.enabled system property＂＂ into main" },
  { hash: "e972e936d", date: "2024-04-11", author: "inseob@google.com", message: "Revert^2 ＂Add pm.archiving.enabled system property＂" },
  { hash: "808a734c0", date: "2024-04-11", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂Add pm.archiving.enabled system property＂＂ into main" },
  { hash: "64a23c81f", date: "2024-04-10", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂add compaction_proactiveness type＂ into main" },
  { hash: "ba5998d7a", date: "2024-04-10", author: "tedbauer@google.com", message: "Merge ＂Let system server set permissions on marker file＂ into main" },
  { hash: "840041d5d", date: "2024-04-10", author: "schfan@google.com", message: "Revert ＂Add pm.archiving.enabled system property＂" },
  { hash: "86405531d", date: "2024-04-10", author: "tedbauer@google.com", message: "Let system server set permissions on marker file" },
  { hash: "f7396914b", date: "2024-04-10", author: "liumartin@google.com", message: "add compaction_proactiveness type" },
  { hash: "d51e54db8", date: "2024-04-09", author: "vikramgaur@google.com", message: "Merge ＂Add remote_provisioning.connect_timeout_millis as sysprop＂ into main" },
  { hash: "3999879dd", date: "2024-04-09", author: "vikramgaur@google.com", message: "Add remote_provisioning.connect_timeout_millis as sysprop" },
  { hash: "575211637", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Introduce vmlauncher_app domain＂ into main" },
  { hash: "77a3ca6b4", date: "2024-04-09", author: "jeongik@google.com", message: "Introduce vmlauncher_app domain" },
  { hash: "015384b11", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix docs in seapp_contexts to point to right file＂ into main" },
  { hash: "c9d42b553", date: "2024-04-09", author: "nikolayelenkov@google.com", message: "Merge ＂Allow system_server to call ISecretKeeper.deleteAll()＂ into main" },
  { hash: "3315a9085", date: "2024-04-09", author: "emarteca@google.com", message: "Fix docs in seapp_contexts to point to right file" },
  { hash: "5cc6dff1d", date: "2024-04-08", author: "ioffe@google.com", message: "Merge ＂Add sepolicy rules for microdroid_resources_file＂ into main" },
  { hash: "bc71c77f9", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove sepolicy for viewcompiler＂ into main" },
  { hash: "1c6d3054b", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Install cil_compat_map module's output＂ into main" },
  { hash: "a9d412d37", date: "2024-04-05", author: "inseob@google.com", message: "Install cil_compat_map module's output" },
  { hash: "dcd387eed", date: "2024-04-05", author: "surenb@google.com", message: "Merge ＂lmkd: Add ro.lmkd.swap_compression_ratio property policies＂ into main" },
  { hash: "bc287fb76", date: "2024-04-05", author: "jeongik@google.com", message: "Merge ＂Sepolicy for crosvm to show display＂ into main" },
  { hash: "5a528b4e9", date: "2024-04-04", author: "surenb@google.com", message: "lmkd: Add ro.lmkd.swap_compression_ratio property policies" },
  { hash: "abf12e1e9", date: "2024-04-04", author: "jdduke@google.com", message: "Remove sepolicy for viewcompiler" },
  { hash: "996a89905", date: "2024-04-04", author: "steventerrell@google.com", message: "Merge ＂Changes to allow trace redactor to run＂ into main" },
  { hash: "f1d47f78d", date: "2024-04-04", author: "ioffe@google.com", message: "Add sepolicy rules for microdroid_resources_file" },
  { hash: "f09f43c4f", date: "2024-04-04", author: "jeongik@google.com", message: "Sepolicy for crosvm to show display" },
  { hash: "c5401edfb", date: "2024-04-03", author: "steventerrell@google.com", message: "Changes to allow trace redactor to run" },
]});
repoLogs.push({ path: "system/server_configurable_flags", logs: [
  { hash: "fae15de", date: "2024-04-25", author: "dzshen@google.com", message: "storage daemon: persist local flag overrides" },
  { hash: "250d1ce", date: "2024-04-24", author: "dzshen@google.com", message: "storage daemon update" },
  { hash: "2ba584d", date: "2024-04-23", author: "dzshen@google.com", message: "Merge ＂aconfig storage daemon: add local override removal capability＂ into main" },
  { hash: "5565a83", date: "2024-04-23", author: "dzshen@google.com", message: "aconfig storage daemon: add local override removal capability" },
  { hash: "52a58d0", date: "2024-04-22", author: "dzshen@google.com", message: "Remove unexpected commit." },
  { hash: "3a94ae8", date: "2024-04-17", author: "dzshen@google.com", message: "aconfig storage daemon: support local flag override" },
  { hash: "48b80c0", date: "2024-04-12", author: "dzshen@google.com", message: "storage daemon: handle flag info file update" },
  { hash: "261a8c0", date: "2024-04-11", author: "dzshen@google.com", message: "aconfig storage daemon: update storage flag read apis" },
  { hash: "5615384", date: "2024-04-11", author: "dzshen@google.com", message: "put new storage daemon behind a fixed read only flag" },
  { hash: "7f199c6", date: "2024-04-10", author: "dzshen@google.com", message: "update aconfig storage daemon flag read api" },
  { hash: "70f047b", date: "2024-04-10", author: "dzshen@google.com", message: "aconfigd: minor update flag offset query" },
  { hash: "260c7f3", date: "2024-04-09", author: "dzshen@google.com", message: "aconfigd: create flag info file when a new container is added" },
]});
repoLogs.push({ path: "system/teeui", logs: [
]});
repoLogs.push({ path: "system/testing/gtest_extras", logs: [
]});
repoLogs.push({ path: "system/timezone", logs: [
  { hash: "ebc77019", date: "2024-04-19", author: "vichang@google.com", message: "Regenerate data files for ICU 75 upgrade" },
]});
repoLogs.push({ path: "system/tools/aidl", logs: [
  { hash: "3718f9dd", date: "2024-04-25", author: "ayrton@google.com", message: "Add arrays to FixedSize parcelable and union tests" },
]});
repoLogs.push({ path: "system/tools/hidl", logs: [
  { hash: "e74490b0", date: "2024-04-12", author: "devinmoore@google.com", message: "hidl_test_java: Check double array for precision" },
  { hash: "f176b43a", date: "2024-04-09", author: "devinmoore@google.com", message: "Merge ＂Add log and use ExpectDeepEq for testing arrays with doubles＂ into main" },
]});
repoLogs.push({ path: "system/tools/mkbootimg", logs: [
]});
repoLogs.push({ path: "system/tools/sysprop", logs: [
]});
repoLogs.push({ path: "system/tools/xsdc", logs: [
]});
repoLogs.push({ path: "system/unwinding", logs: [
  { hash: "60f47c0", date: "2024-04-11", author: "mast@google.com", message: "Make libasync_safe dependency available when libunwindstack is linked statically into another library." },
  { hash: "79d8862", date: "2024-04-05", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Remove duplicate <elf.h> definitions.＂ into main" },
]});
repoLogs.push({ path: "system/update_engine", logs: [
  { hash: "65481161", date: "2024-04-23", author: "zhengdaniel@google.com", message: "disable op count overhead for v2" },
  { hash: "ecbd6b01", date: "2024-04-12", author: "enh@google.com", message: "update_engine: never enable BCJ." },
  { hash: "6a00fe9b", date: "2024-04-10", author: "zhengdaniel@google.com", message: "prefs: return success if nothing to delete" },
  { hash: "0b735f6c", date: "2024-04-08", author: "zhengdaniel@google.com", message: "cow estimator: terminate on bad write" },
]});
repoLogs.push({ path: "system/vold", logs: [
  { hash: "41d3e8d1", date: "2024-04-25", author: "zhangkelvin@google.com", message: "Merge ＂Get the correct fstab entry if there are more than one＂ into main" },
  { hash: "fd5eb260", date: "2024-04-24", author: "zhangkelvin@google.com", message: "Get the correct fstab entry if there are more than one" },
  { hash: "7c7fb49a", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
  { hash: "a078ea36", date: "2024-04-18", author: "emarteca@google.com", message: "Merge ＂Replace string secret with a byte[] for CE storage in vold binder＂ into main" },
  { hash: "5177ed2e", date: "2024-04-17", author: "emarteca@google.com", message: "Replace string secret with a byte[] for CE storage in vold binder" },
  { hash: "77f8b00c", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Fix some special usb can't mount issue.＂ into main" },
  { hash: "22fa5348", date: "2024-04-17", author: "xiuqin.wang@mediatek.com", message: "Fix some special usb can't mount issue." },
]});
repoLogs.push({ path: "test/app_compat/csuite", logs: [
  { hash: "4fbe624", date: "2024-04-22", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Migrate Test Targets to New Android Ownership Model＂ into main" },
]});
repoLogs.push({ path: "test/catbox", logs: [
]});
repoLogs.push({ path: "test/cts-root", logs: [
]});
repoLogs.push({ path: "test/dittosuite", logs: [
]});
repoLogs.push({ path: "test/framework", logs: [
]});
repoLogs.push({ path: "test/mlts/benchmark", logs: [
]});
repoLogs.push({ path: "test/mlts/models", logs: [
]});
repoLogs.push({ path: "test/mts", logs: [
  { hash: "8d2edede", date: "2024-04-17", author: "essick@google.com", message: "Mark mediaprovider configs owned by android storage" },
]});
repoLogs.push({ path: "test/robolectric-extensions", logs: [
]});
repoLogs.push({ path: "test/suite_harness", logs: [
]});
repoLogs.push({ path: "test/vts", logs: [
  { hash: "fb7971dc5", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Update VTS tag version to V13_R9＂ into android13-tests-dev am: 014628a8ab -s ours am: f48fb6c16c -s ours" },
  { hash: "54cfcf705", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V13_R9 am: f92298e940 -s ours am: 0e39736796 -s ours" },
  { hash: "c013a03c7", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Update VTS tag version to V14_R5＂ into android14-tests-dev am: dfaa469769" },
  { hash: "2f586039b", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V14_R5 am: 1852b767f7 -s ours" },
  { hash: "f48fb6c16", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge ＂DO NOT MERGE Update VTS tag version to V13_R9＂ into android13-tests-dev am: 014628a8ab -s ours" },
  { hash: "0e3973679", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V13_R9 am: f92298e940 -s ours" },
  { hash: "014628a8a", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Update VTS tag version to V13_R9＂ into android13-tests-dev" },
  { hash: "c7d19cde6", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V11_R17 am: b938c77c5b -s ours am: 21e923b859 -s ours am: e39cde2e19 -s ours am: 3606cfbc09 -s ours am: f7a1740462 -s ours" },
  { hash: "dcb1ac7c2", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12_R13 am: 1263268af5 -s ours am: 9b8dbec19b -s ours am: 3e5ee0a149 -s ours am: ab84cb6b9d -s ours" },
  { hash: "3d8feefc9", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12.1_R11 am: 99cba185b8 -s ours am: 1722be7d88 -s ours am: ee0601ce83 -s ours" },
  { hash: "dfaa46976", date: "2024-04-09", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂DO NOT MERGE Update VTS tag version to V14_R5＂ into android14-tests-dev" },
  { hash: "f7a174046", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V11_R17 am: b938c77c5b -s ours am: 21e923b859 -s ours am: e39cde2e19 -s ours am: 3606cfbc09 -s ours" },
  { hash: "ab84cb6b9", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12_R13 am: 1263268af5 -s ours am: 9b8dbec19b -s ours am: 3e5ee0a149 -s ours" },
  { hash: "ee0601ce8", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12.1_R11 am: 99cba185b8 -s ours am: 1722be7d88 -s ours" },
  { hash: "3606cfbc0", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V11_R17 am: b938c77c5b -s ours am: 21e923b859 -s ours am: e39cde2e19 -s ours" },
  { hash: "3e5ee0a14", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12_R13 am: 1263268af5 -s ours am: 9b8dbec19b -s ours" },
  { hash: "1722be7d8", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12.1_R11 am: 99cba185b8 -s ours" },
  { hash: "e39cde2e1", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V11_R17 am: b938c77c5b -s ours am: 21e923b859 -s ours" },
  { hash: "9b8dbec19", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V12_R13 am: 1263268af5 -s ours" },
  { hash: "21e923b85", date: "2024-04-09", author: "dmulabagal@google.com", message: "[automerger skipped] DO NOT MERGE Update VTS tag version to V11_R17 am: b938c77c5b -s ours" },
  { hash: "b938c77c5", date: "2024-04-09", author: "dmulabagal@google.com", message: "DO NOT MERGE Update VTS tag version to V11_R17" },
  { hash: "1263268af", date: "2024-04-09", author: "dmulabagal@google.com", message: "DO NOT MERGE Update VTS tag version to V12_R13" },
  { hash: "99cba185b", date: "2024-04-09", author: "dmulabagal@google.com", message: "DO NOT MERGE Update VTS tag version to V12.1_R11" },
  { hash: "f92298e94", date: "2024-04-09", author: "dmulabagal@google.com", message: "DO NOT MERGE Update VTS tag version to V13_R9" },
  { hash: "1852b767f", date: "2024-04-09", author: "dmulabagal@google.com", message: "DO NOT MERGE Update VTS tag version to V14_R5" },
  { hash: "2c62d2bd7", date: "2024-04-03", author: "nkapron@google.com", message: "[automerger skipped] Merge ＂VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError＂ into android14-tests-dev am: 64961a036f -s ours" },
  { hash: "2e8db7d16", date: "2024-04-03", author: "nkapron@google.com", message: "[automerger skipped] VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError am: 748b0c61ca -s ours" },
  { hash: "64961a036", date: "2024-04-03", author: "nkapron@google.com", message: "Merge ＂VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError＂ into android14-tests-dev" },
  { hash: "23fb555ca", date: "2024-04-02", author: "nkapron@google.com", message: "[automerger skipped] VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError am: 1f697687bd am: 43f3b45935 am: ad2dd4b48f am: 8660bf4aca -s ours am: f016fb1fb0 -s ours" },
  { hash: "f016fb1fb", date: "2024-04-02", author: "nkapron@google.com", message: "[automerger skipped] VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError am: 1f697687bd am: 43f3b45935 am: ad2dd4b48f am: 8660bf4aca -s ours" },
  { hash: "8660bf4ac", date: "2024-04-02", author: "nkapron@google.com", message: "VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError am: 1f697687bd am: 43f3b45935 am: ad2dd4b48f" },
  { hash: "ad2dd4b48", date: "2024-04-02", author: "nkapron@google.com", message: "VtsKernelProcFileApiTest: Fix testProcUidProcstatSet IndexError am: 1f697687bd am: 43f3b45935" },
]});
repoLogs.push({ path: "test/vts-testcase/hal", logs: [
  { hash: "916e95ae", date: "2024-04-05", author: "devinmoore@google.com", message: "Set max HIDL for V to 0!" },
]});
repoLogs.push({ path: "test/vts-testcase/hal-trace", logs: [
]});
repoLogs.push({ path: "test/vts-testcase/kernel", logs: [
  { hash: "7b363746", date: "2024-04-22", author: "willmcvicker@google.com", message: "Merge ＂16k: VTS: Add NoBionicPageSizeMacro test＂ into main" },
  { hash: "90079fde", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove joefradley@google.com from ltp/OWNERS" },
  { hash: "028c5ee7", date: "2024-04-17", author: "kaleshsingh@google.com", message: "VTS: Elf alignment test: x86_64 requires >= 16KB ELF alignment" },
  { hash: "1afe203f", date: "2024-04-05", author: "edliaw@google.com", message: "[automerger skipped] ltp: disable bpf_prog06 (cve-2021-4204) am: bd76e57423 -s ours" },
  { hash: "bd76e574", date: "2024-04-03", author: "edliaw@google.com", message: "ltp: disable bpf_prog06 (cve-2021-4204)" },
  { hash: "6693ac30", date: "2024-04-02", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "[automerger skipped] Merge changes from topic ＂ltp-20230929-android14-tests＂ into android14-tests-dev am: 18d536c504 -s ours" },
  { hash: "6a77f9cd", date: "2024-04-02", author: "edliaw@google.com", message: "[automerger skipped] cgroup_core01: disable cve-2021-4197_1 am: 74a0aa2dac -s ours" },
]});
repoLogs.push({ path: "test/vts-testcase/nbu", logs: [
]});
repoLogs.push({ path: "test/vts-testcase/performance", logs: [
]});
repoLogs.push({ path: "test/vts-testcase/security", logs: [
]});
repoLogs.push({ path: "test/vts-testcase/vndk", logs: [
]});
repoLogs.push({ path: "toolchain/pgo-profiles", logs: [
]});
repoLogs.push({ path: "tools/aadevtools", logs: [
]});
repoLogs.push({ path: "tools/acloud", logs: [
  { hash: "cafb3198", date: "2024-04-25", author: "jaeman@google.com", message: "Merge ＂Add local-vendor-boot-image argument to set vendor boot image＂ into main" },
  { hash: "e1d40e5e", date: "2024-04-25", author: "jaeman@google.com", message: "Add local-vendor-boot-image argument to set vendor boot image" },
  { hash: "6f9587a4", date: "2024-04-24", author: "colefaust@google.com", message: "Disable embedded_launcher on acloud" },
]});
repoLogs.push({ path: "tools/apifinder", logs: [
]});
repoLogs.push({ path: "tools/apksig", logs: [
]});
repoLogs.push({ path: "tools/apkzlib", logs: [
]});
repoLogs.push({ path: "tools/asuite", logs: [
  { hash: "13d17a92", date: "2024-04-26", author: "yuexima@google.com", message: "Merge changes I2d9da101,I90d0d657 into main" },
  { hash: "40ea9a18", date: "2024-04-26", author: "zhuoyao@google.com", message: "Merge ＂Remove the definition of trendy_team_adte＂ into main" },
  { hash: "a0993f3d", date: "2024-04-25", author: "zhuoyao@google.com", message: "Remove the definition of trendy_team_adte" },
  { hash: "1194379a", date: "2024-04-24", author: "yuexima@google.com", message: "Remove bazel resources from integration test snapshot" },
  { hash: "86716739", date: "2024-04-24", author: "yuexima@google.com", message: "Snapshot the entire prebuilt directory in integration test" },
  { hash: "7cc540d9", date: "2024-04-24", author: "yuexima@google.com", message: "Enable log uploading by default" },
  { hash: "da481c30", date: "2024-04-24", author: "yuexima@google.com", message: "Enable embedded launcher in atest" },
  { hash: "750c6560", date: "2024-04-24", author: "yuexima@google.com", message: "Explicitly specify whether a device is needed in each integration test" },
  { hash: "ed991d2d", date: "2024-04-23", author: "yuexima@google.com", message: "Add command environment variables to integration test debug log" },
  { hash: "97942932", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Make the atest run id the same between clearcut and log upload＂ into main" },
  { hash: "e1f81d6e", date: "2024-04-19", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge changes I222a8fbe,I4ef6b189,I900166dd into main" },
  { hash: "103bb769", date: "2024-04-19", author: "yuexima@google.com", message: "Make the atest run id the same between clearcut and log upload" },
  { hash: "e5930bae", date: "2024-04-17", author: "kevindagostino@google.com", message: "Fix failing Adevice update commands" },
  { hash: "de53b1ee", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Do not enable device update for 'unit' device tests＂ into main" },
  { hash: "f3b5309c", date: "2024-04-17", author: "yuexima@google.com", message: "Use atest command instead of target_name in test archetype integration test" },
  { hash: "03950a8a", date: "2024-04-17", author: "yuexima@google.com", message: "Print log path after integration tests for easier debugging" },
  { hash: "437325fc", date: "2024-04-17", author: "yuexima@google.com", message: "Add atest_test_archetype_integration_tests to integration test list" },
  { hash: "121900bb", date: "2024-04-16", author: "mgeisler@google.com", message: "As per go/ldap and go/ldap-is-discouraged usernames are no longer related to LDAP." },
  { hash: "5006b4be", date: "2024-04-16", author: "yuexima@google.com", message: "Merge changes Ib75e5b9a,I1f1f2956,I8f5d9ca5,I9b519a72,If30bf919 into main" },
  { hash: "1abc5796", date: "2024-04-16", author: "yuexima@google.com", message: "Capture outputs when calling log uploader binary" },
  { hash: "0302399a", date: "2024-04-16", author: "yuexima@google.com", message: "Check gcert in log uploader" },
  { hash: "b87ffdeb", date: "2024-04-16", author: "yuexima@google.com", message: "Stream logs to stdout instead of stderr" },
  { hash: "8a987b4b", date: "2024-04-16", author: "yuexima@google.com", message: "Only accept true and 1 values for enabling log uploading and add unittests" },
  { hash: "5ddb173e", date: "2024-04-16", author: "yuexima@google.com", message: "Print error message when attempting to upload log from unsupported branch" },
  { hash: "9868d57b", date: "2024-04-16", author: "yikezh@google.com", message: "Do not enable device update for 'unit' device tests" },
  { hash: "27faf74e", date: "2024-04-16", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add a banner for single command workflow＂ into main" },
  { hash: "1866927d", date: "2024-04-16", author: "yikezh@google.com", message: "Add a banner for single command workflow" },
  { hash: "fc5b53dd", date: "2024-04-15", author: "yuexima@google.com", message: "Temporarily add hard coded vendor config path" },
  { hash: "46dee940", date: "2024-04-15", author: "yuexima@google.com", message: "Load vendor config from json if available in the environment" },
  { hash: "47e6fefb", date: "2024-04-15", author: "yuexima@google.com", message: "Make sure resource id is unique during log uploading" },
  { hash: "54ddd38d", date: "2024-04-15", author: "yuexima@google.com", message: "Reorganize and cleanup the build rules" },
  { hash: "300cc4d5", date: "2024-04-15", author: "yuexima@google.com", message: "Remove some unused constants" },
  { hash: "54eea281", date: "2024-04-15", author: "yuexima@google.com", message: "Add test archetype integration tests" },
  { hash: "725afcc8", date: "2024-04-15", author: "yuexima@google.com", message: "Merge changes I1d9435c3,I5f6d1acc into main" },
  { hash: "b5f5b574", date: "2024-04-11", author: "yikezh@google.com", message: "Merge ＂Remove Adevice banner＂ into main" },
  { hash: "89a79869", date: "2024-04-11", author: "yuexima@google.com", message: "Improve the log upload reminder message print logic and code clarity" },
  { hash: "ed9869be", date: "2024-04-11", author: "yikezh@google.com", message: "Remove Adevice banner" },
  { hash: "a7ba9aaf", date: "2024-04-11", author: "yuexima@google.com", message: "Delete an integration test case" },
  { hash: "becbd890", date: "2024-04-11", author: "yuexima@google.com", message: "Improve the logic to determine whether result upload is enabled" },
  { hash: "44d3a7f4", date: "2024-04-11", author: "yuexima@google.com", message: "Solidify all the imports" },
  { hash: "f7b628ef", date: "2024-04-11", author: "yuexima@google.com", message: "Fix up the request-upload-result feature" },
  { hash: "bc89843c", date: "2024-04-11", author: "yuexima@google.com", message: "Add logging to log uploader and redirect stdout and stderr" },
  { hash: "14b71d04", date: "2024-04-11", author: "yuexima@google.com", message: "Add atest run id to AnTS invocation properties" },
  { hash: "842f66fe", date: "2024-04-11", author: "yuexima@google.com", message: "Support uploading python logs in a background detached process" },
  { hash: "08586d24", date: "2024-04-10", author: "yuexima@google.com", message: "Add atest-beta target with embedded_launcher enabled" },
  { hash: "ccb904f9", date: "2024-04-08", author: "yuexima@google.com", message: "Add a custom http3 certs file locator" },
  { hash: "cc2f72f5", date: "2024-04-08", author: "yuexima@google.com", message: "Support read version information from resources" },
  { hash: "20f91249", date: "2024-04-08", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Replace the bazel mode tests with non bazel mode in atest integration tests＂ into main" },
  { hash: "4af5158b", date: "2024-04-08", author: "yikong@google.com", message: "Merge ＂[atest/coverage] Read clang version from soong＂ into main" },
  { hash: "42ae9d4a", date: "2024-04-05", author: "yuexima@google.com", message: "Load additional module search path from PYTHONPATH" },
  { hash: "9f7bf511", date: "2024-04-05", author: "yuexima@google.com", message: "Fix a lint error about bazel mode pathlib import" },
  { hash: "4ab1fa47", date: "2024-04-05", author: "yuexima@google.com", message: "Enable bazel mode able to extract resources from atest binary" },
  { hash: "83fe1901", date: "2024-04-05", author: "yuexima@google.com", message: "Replace the bazel mode tests with non bazel mode in atest integration tests" },
  { hash: "7b496c07", date: "2024-04-03", author: "olivernguyen@google.com", message: "Merge ＂Removes LLVM-related error messages with coverage.＂ into main" },
  { hash: "110549ad", date: "2024-04-03", author: "pirama@google.com", message: "[atest/coverage] Read clang version from soong" },
  { hash: "5eda97bc", date: "2024-04-02", author: "olivernguyen@google.com", message: "Removes LLVM-related error messages with coverage." },
  { hash: "45533951", date: "2024-04-02", author: "agueeva@google.com", message: "Add unit tests for module and class finders and add fix module not found exception." },
]});
repoLogs.push({ path: "tools/carrier_settings", logs: [
]});
repoLogs.push({ path: "tools/content_addressed_storage/prebuilts", logs: [
]});
repoLogs.push({ path: "tools/currysrc", logs: [
]});
repoLogs.push({ path: "tools/deviceinfra/prebuilts", logs: [
  { hash: "6324ab1", date: "2024-04-26", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 606-20240425-180026, GitHub version dd3d1d49ee27dd64c0d2ce6a4abb264af5a1f411" },
  { hash: "532bf34", date: "2024-04-24", author: "zhangxh@google.com", message: "Release deviceinfra prebuilts: version 596-20240423-180738, GitHub version ce61ad09689d2f0847b377e9ebc23aababb31257" },
  { hash: "f0dda3b", date: "2024-04-22", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 589-20240422-000837, GitHub version ef4e261c36d8013b082b999191b22a294f64c891" },
  { hash: "11745c3", date: "2024-04-21", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 584-20240420-180034, GitHub version 3b8d49bc402398cbe4b7b16c99b9b1e4b768a587" },
  { hash: "ee272b2", date: "2024-04-18", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 573-20240418-061005, GitHub version a4e64e9a2449cf6016f765f9c19a86f758e7a197" },
  { hash: "b9b0e28", date: "2024-04-18", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 571-20240417-180046, GitHub version 21c1141c12295a1bdcec93c2ba87fd2090bd08ba" },
  { hash: "bf8655b", date: "2024-04-17", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 566-20240416-120028, GitHub version 0f1063cf4867269a90981fd3f637adc6447ce00a" },
  { hash: "22dc709", date: "2024-04-15", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 561-20240415-060033, GitHub version a6ae06742414640102f97a80d279d44c761bc8e3" },
  { hash: "5daf429", date: "2024-04-12", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 547-20240411-232223, GitHub version ea2b89c7af795bc692d1e3d277e6d4011e25ac5b" },
  { hash: "34b4ec8", date: "2024-04-11", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 543-20240411-000026, GitHub version 555c8ff124eb70d2a574bb44b794be78639dca55" },
  { hash: "fe50afc", date: "2024-04-11", author: "zhangxh@google.com", message: "Release deviceinfra prebuilts: version 542-20240410-180029, GitHub version 11a3ac87679e4c1a92391777a7479a198a3d1597" },
  { hash: "836bfda", date: "2024-04-08", author: "shian@google.com", message: "Release deviceinfra prebuilts: version 530-20240407-180030, GitHub version ed7900330d969f1563463724d258b6205fd2a72b" },
]});
repoLogs.push({ path: "tools/dexter", logs: [
]});
repoLogs.push({ path: "tools/doc_generation", logs: [
]});
repoLogs.push({ path: "tools/external/fat32lib", logs: [
]});
repoLogs.push({ path: "tools/external_updater", logs: [
  { hash: "f63b5ef", date: "2024-04-24", author: "sadafebrahimi@google.com", message: "Set embeded_launcher to false" },
  { hash: "2515f0b", date: "2024-04-18", author: "sadafebrahimi@google.com", message: "Add primary_source to metadata.proto" },
  { hash: "3bcbc4e", date: "2024-04-16", author: "sadafebrahimi@google.com", message: "Skip banned words" },
  { hash: "37f5530", date: "2024-04-05", author: "danalbert@google.com", message: "Remove dead code." },
]});
repoLogs.push({ path: "tools/lint_checks", logs: [
]});
repoLogs.push({ path: "tools/loganalysis", logs: [
]});
repoLogs.push({ path: "tools/metalava", logs: [
  { hash: "1dbc25002", date: "2024-04-25", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "18024624b", date: "2024-04-25", author: "paulduffin@google.com", message: "Match any API surface in the SDK extension directory" },
  { hash: "cbc76a524", date: "2024-04-24", author: "aurimas@google.com", message: "Upgrade to Gradle 8.7 and KGP 1.9.23" },
  { hash: "9569645de", date: "2024-04-23", author: "paulduffin@google.com", message: "Use ItemVisitor in createReportFile(...) instead of ApiVisitor" },
  { hash: "5ffb2c746", date: "2024-04-23", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "57027f1af", date: "2024-04-23", author: "paulduffin@google.com", message: "Remove @deprecated tag when reverting deprecation change" },
  { hash: "757a9a4dc", date: "2024-04-23", author: "paulduffin@google.com", message: "Fix api-version.xml when reverting a deprecation change" },
  { hash: "6afff5035", date: "2024-04-23", author: "paulduffin@google.com", message: "Add api versions check to flagged API test" },
  { hash: "80b11cbf4", date: "2024-04-23", author: "paulduffin@google.com", message: "Expand tests of changes to deprecation status." },
  { hash: "1d4ef78cc", date: "2024-04-23", author: "paulduffin@google.com", message: "Remove optional value from --api-lint" },
  { hash: "8dd8deb07", date: "2024-04-23", author: "paulduffin@google.com", message: "Remove unused --api-xml option" },
  { hash: "edcabb46f", date: "2024-04-23", author: "paulduffin@google.com", message: "Migrate JDiffXmlTest to use SignatureToJDiffCommandTest" },
  { hash: "e6a97bd6d", date: "2024-04-23", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "a42c24248", date: "2024-04-22", author: "paulduffin@google.com", message: "Add --api-lint-previous-api" },
  { hash: "9d42700dd", date: "2024-04-22", author: "paulduffin@google.com", message: "Merge ＂Remove unnecessary JDiffXmlTest ＂Half float short from source＂＂ into metalava-main" },
  { hash: "eac80e3b7", date: "2024-04-22", author: "paulduffin@google.com", message: "Merge ＂Remove unused --input-api-jar option＂ into metalava-main" },
  { hash: "70de80d62", date: "2024-04-22", author: "paulduffin@google.com", message: "Expand revert modifier changes tests to cover more cases" },
  { hash: "1f2282971", date: "2024-04-20", author: "paulduffin@google.com", message: "Support reverting changes to modifiers" },
  { hash: "c349a3168", date: "2024-04-20", author: "paulduffin@google.com", message: "Include reverted item in stubs for extending API surface" },
  { hash: "b4c986107", date: "2024-04-19", author: "paulduffin@google.com", message: "Support controlling Item.emit per signature file" },
  { hash: "39be52265", date: "2024-04-19", author: "paulduffin@google.com", message: "Add SignatureFile wrapper around File for ApiFile" },
  { hash: "ff574c0b7", date: "2024-04-19", author: "paulduffin@google.com", message: "Remove unnecessary JDiffXmlTest ＂Half float short from source＂" },
  { hash: "f9ae1a46c", date: "2024-04-19", author: "paulduffin@google.com", message: "Remove unused --input-api-jar option" },
  { hash: "3a668629b", date: "2024-04-19", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "d2a0b57ea", date: "2024-04-19", author: "paulduffin@google.com", message: "Make jar-to-jdiff suitable for coverage use" },
  { hash: "502cdfa85", date: "2024-04-19", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "f3f63eecf", date: "2024-04-18", author: "paulduffin@google.com", message: "Add JarToJDiffCommand" },
  { hash: "782953ea2", date: "2024-04-18", author: "paulduffin@google.com", message: "Add StandaloneJarCodebaseLoader for use by AndroidJarsToSignaturesCommand" },
  { hash: "b666220b7", date: "2024-04-18", author: "paulduffin@google.com", message: "Extract JarCodebaseLoader from ActionContext.loadFromJarFile(...)" },
  { hash: "5121f6944", date: "2024-04-18", author: "paulduffin@google.com", message: "Remove apiPredicateConfig from ActionContext.loadFromJarFile(...)" },
  { hash: "61da2a3fd", date: "2024-04-18", author: "paulduffin@google.com", message: "Merge ＂Remove codebaseValidator from ActionContext.loadFromJarFile(...)＂ into metalava-main" },
  { hash: "7539d98c9", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Add test to ensure that @FlaggedApi in stubs uses literals＂ into metalava-main" },
  { hash: "6659d90c8", date: "2024-04-18", author: "paulduffin@google.com", message: "Add test to ensure that @FlaggedApi in stubs uses literals" },
  { hash: "ba01a6742", date: "2024-04-18", author: "paulduffin@google.com", message: "Remove codebaseValidator from ActionContext.loadFromJarFile(...)" },
  { hash: "6a950584a", date: "2024-04-18", author: "jsjeon@google.com", message: "Merge ＂Showcase K2 is correct for deprecated util with wildcard suppression＂ into metalava-main" },
  { hash: "92546b8c0", date: "2024-04-17", author: "paulduffin@google.com", message: "Include FlaggedApi annotations in the stub files" },
  { hash: "1cc6c8b39", date: "2024-04-17", author: "paulduffin@google.com", message: "FlaggedApiTest: Pass the whole previously released API" },
  { hash: "493152586", date: "2024-04-17", author: "paulduffin@google.com", message: "Show existing broken behavior when reverting modifier change" },
  { hash: "d1de58429", date: "2024-04-17", author: "paulduffin@google.com", message: "FlaggedApiTest: Support multiple previously released APIs" },
  { hash: "feafb9094", date: "2024-04-17", author: "paulduffin@google.com", message: "Clarify ＂ no flagged API＂ comment in FlaggedApi test" },
  { hash: "fcf4f2b9e", date: "2024-04-17", author: "paulduffin@google.com", message: "Cache the previously released codebases locally" },
  { hash: "62f1375f4", date: "2024-04-17", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Set the default visibility modifier to package-private when no visibility flags are provided.＂ into metalava-main" },
  { hash: "5c04f29db", date: "2024-04-17", author: "caditya@google.com", message: "Set the default visibility modifier to package-private when no visibility flags are provided." },
  { hash: "bac286365", date: "2024-04-17", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "20f64056e", date: "2024-04-17", author: "paulduffin@google.com", message: "Only report compatibility issues against API being generated" },
  { hash: "52aef6a50", date: "2024-04-17", author: "paulduffin@google.com", message: "Fix overwriting of compatibility check files during testing" },
  { hash: "a7efc0e10", date: "2024-04-17", author: "paulduffin@google.com", message: "Improve testing of multiple previously released API files" },
  { hash: "bb78cb81a", date: "2024-04-16", author: "jsjeon@google.com", message: "Showcase K2 is correct for deprecated util with wildcard suppression" },
  { hash: "57c630f07", date: "2024-04-16", author: "paulduffin@google.com", message: "Clarify that previouslyReleasedCodebases(...) does not support jars" },
  { hash: "bf69f44c0", date: "2024-04-16", author: "paulduffin@google.com", message: "Disallow mixing jar and signature files for compatibility check" },
  { hash: "c36d6b1ca", date: "2024-04-16", author: "paulduffin@google.com", message: "Pass File to mergeAnnotationsSignatureFile(...)" },
  { hash: "3531d83fc", date: "2024-04-16", author: "paulduffin@google.com", message: "Remove unused CacheKey.load(...)" },
  { hash: "6925b2e31", date: "2024-04-16", author: "paulduffin@google.com", message: "Add CheckRequest.loadPreviouslyReleasedApi(...)" },
  { hash: "cc634238d", date: "2024-04-16", author: "paulduffin@google.com", message: "Improve documentation of CompatibilityCheckOptions.CheckRequest" },
  { hash: "80b1cd511", date: "2024-04-14", author: "jsjeon@google.com", message: "Upgrade to AGP 8.5.0-alpha05" },
  { hash: "9b8d4dc60", date: "2024-04-12", author: "paulduffin@google.com", message: "Remove unused ClassItem.isDefined()" },
  { hash: "f779cb630", date: "2024-04-12", author: "paulduffin@google.com", message: "Remove Psi overrides of DefaultItem.emit" },
  { hash: "9d2b7d9ed", date: "2024-04-12", author: "paulduffin@google.com", message: "Correct some unrealistic compatibility tests" },
  { hash: "be230cb4f", date: "2024-04-11", author: "paulduffin@google.com", message: "Remove unnnecessary preFiltered parameter" },
  { hash: "f936b0adb", date: "2024-04-11", author: "paulduffin@google.com", message: "Stop ApiVisitor depending on options.apiVisitorConfig" },
  { hash: "71b054089", date: "2024-04-10", author: "paulduffin@google.com", message: "Use same ApiVisitor.Config when traversing added items" },
  { hash: "9e7f2f35a", date: "2024-04-08", author: "paulduffin@google.com", message: "Do not duplicate a field from an interface onto itself" },
  { hash: "646fbc507", date: "2024-04-04", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
  { hash: "d12de82ce", date: "2024-04-04", author: "paulduffin@google.com", message: "Treat revert annotations as hide annotations" },
  { hash: "c8bebfbd8", date: "2024-04-04", author: "paulduffin@google.com", message: "Add test to show incorrect behavior of flagged fields in public API" },
  { hash: "aacbca554", date: "2024-04-03", author: "caditya@google.com", message: "Merge ＂Ensure only Java files are included in turbine source parser.＂ into metalava-main" },
  { hash: "2252fdfe9", date: "2024-04-03", author: "jsjeon@google.com", message: "Merge changes from topic ＂metalava-agp-8.5.0-alpha3＂ into metalava-main" },
  { hash: "43920f786", date: "2024-04-03", author: "jsjeon@google.com", message: "Simplify MetalavaCliClient" },
  { hash: "c386425e0", date: "2024-04-03", author: "jsjeon@google.com", message: "Upgrade to AGP 8.5.0-alpha03" },
  { hash: "5a4661736", date: "2024-04-03", author: "caditya@google.com", message: "Ensure only Java files are included in turbine source parser." },
  { hash: "5466595e2", date: "2024-04-02", author: "paulduffin@google.com", message: "Merge ＂Fix issue with trailing whitespace in annotation attributes＂ into metalava-main" },
  { hash: "344ea4511", date: "2024-04-02", author: "paulduffin@google.com", message: "Merge remote-tracking branch 'aosp/metalava-main' into 'aosp/main'" },
]});
repoLogs.push({ path: "tools/ndkports", logs: [
]});
repoLogs.push({ path: "tools/netsim", logs: [
  { hash: "f85d47d", date: "2024-04-25", author: "hyunjaemoon@google.com", message: "Replace depreacted method for DateTime from from_utc to from_naive_utc_and_offset" },
  { hash: "e2e428c", date: "2024-04-25", author: "hyunjaemoon@google.com", message: "Merge ＂Locally running InstallEmulator task also occurs for distribution directory.＂ into main" },
  { hash: "cf8301b", date: "2024-04-25", author: "hyunjaemoon@google.com", message: "Locally running InstallEmulator task also occurs for distribution directory." },
  { hash: "322e4c5", date: "2024-04-24", author: "shuohsu@google.com", message: "Merge ＂Add --emulator_target to install_emulator_task＂ into main" },
  { hash: "e523b8c", date: "2024-04-24", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Version Bump to 0.3.6＂ into main" },
  { hash: "954d2b2", date: "2024-04-24", author: "shuohsu@google.com", message: "Add --emulator_target to install_emulator_task" },
  { hash: "e30373d", date: "2024-04-24", author: "hyunjaemoon@google.com", message: "Merge ＂Only strip binaries for distribution (installation) of netsim and netsimd＂ into main" },
  { hash: "7c64bc7", date: "2024-04-24", author: "hyunjaemoon@google.com", message: "Merge ＂Include CMAKE_BUILD_TYPE variable for build configuration＂ into main" },
  { hash: "fbed821", date: "2024-04-24", author: "hyunjaemoon@google.com", message: "Version Bump to 0.3.6" },
  { hash: "de31143", date: "2024-04-24", author: "hyunjaemoon@google.com", message: "Include CMAKE_BUILD_TYPE variable for build configuration" },
  { hash: "f9b8bbe", date: "2024-04-23", author: "hyunjaemoon@google.com", message: "Only strip binaries for distribution (installation) of netsim and netsimd" },
  { hash: "7f02d72", date: "2024-04-23", author: "schilit@google.com", message: "Merge ＂Replace RwLock with AtomicU32 for generating unique Chip IDs. Add the ChipManager to hold all lazy_static fields.＂ into main" },
  { hash: "8be2577", date: "2024-04-22", author: "schilit@google.com", message: "Replace RwLock with AtomicU32 for generating unique Chip IDs. Add the ChipManager to hold all lazy_static fields." },
  { hash: "7f8eb06", date: "2024-04-22", author: "shuohsu@google.com", message: "Merge ＂Replace netsim cli log with tracing＂ into main" },
  { hash: "8bea682", date: "2024-04-22", author: "schilit@google.com", message: "Merge ＂Remove Mutex from SharedEmulatedChip. Locking should be done within the modules rather than by callers.＂ into main" },
  { hash: "df76d7f", date: "2024-04-19", author: "shuohsu@google.com", message: "Replace netsim cli log with tracing" },
  { hash: "7f9c4ac", date: "2024-04-18", author: "formosa@google.com", message: "Merge ＂Generate Rust gRPC modules by proto_update.sh＂ into main" },
  { hash: "701af9f", date: "2024-04-18", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Version Bump to 0.3.5＂ into main" },
  { hash: "3f6ac7a", date: "2024-04-17", author: "formosa@google.com", message: "Generate Rust gRPC modules by proto_update.sh" },
  { hash: "a43e7de", date: "2024-04-17", author: "schilit@google.com", message: "Remove Mutex from SharedEmulatedChip. Locking should be done within the modules rather than by callers." },
  { hash: "dade5ea", date: "2024-04-17", author: "hyunjaemoon@google.com", message: "Version Bump to 0.3.5" },
  { hash: "6dec25b", date: "2024-04-16", author: "formosa@google.com", message: "Improve Wi-Fi performance" },
  { hash: "019b187", date: "2024-04-16", author: "hyunjaemoon@google.com", message: "Add ＂ZipArtifact＂ to build script task" },
  { hash: "1167f9e", date: "2024-04-12", author: "hyunjaemoon@google.com", message: "Set the out_dir to ＂out/objs＂ before commencing build with buildbots" },
  { hash: "871b28f", date: "2024-04-11", author: "hyunjaemoon@google.com", message: "Selective rmtree to avoid removing ＂out/caches＂ directory during windows build" },
  { hash: "56c5773", date: "2024-04-11", author: "hyunjaemoon@google.com", message: "Merge ＂In run_fd_transport, add all chips before registering any transports.＂ into main" },
  { hash: "81b2c34", date: "2024-04-11", author: "hyunjaemoon@google.com", message: "Merge ＂Version Bump to 0.3.4＂ into main" },
  { hash: "71bd0e7", date: "2024-04-11", author: "hyunjaemoon@google.com", message: "In run_fd_transport, add all chips before registering any transports." },
  { hash: "48e63d6", date: "2024-04-10", author: "hyunjaemoon@google.com", message: "Version Bump to 0.3.4" },
  { hash: "b820850", date: "2024-04-09", author: "formosa@google.com", message: "Merge ＂Allow to disable Wi-Fi p2p features＂ into main" },
  { hash: "798f8b3", date: "2024-04-09", author: "formosa@google.com", message: "Allow to disable Wi-Fi p2p features" },
  { hash: "5aa54b2", date: "2024-04-09", author: "hyunjaemoon@google.com", message: "Merge ＂Process UWB packet requests in grpc server＂ into main" },
  { hash: "3b848c5", date: "2024-04-09", author: "hyunjaemoon@google.com", message: "Merge ＂Reland: grpc read callback safely streams non-hci packets with distinct contexts＂ into main" },
  { hash: "862a574", date: "2024-04-08", author: "hyunjaemoon@google.com", message: "Reland: grpc read callback safely streams non-hci packets with distinct contexts" },
  { hash: "9461d0a", date: "2024-04-08", author: "hyunjaemoon@google.com", message: "Add CXX flags & prepend 'lib' for shared library & duplicate glib2 library in Windows" },
  { hash: "f5168d1", date: "2024-04-06", author: "android-test-infra-autosubmit@system.gserviceaccount.com", message: "Merge ＂Revert ＂grpc read callback safely streams non-hci packets with d...＂＂ into main" },
  { hash: "74831cd", date: "2024-04-05", author: "dshi@google.com", message: "Revert ＂grpc read callback safely streams non-hci packets with d...＂" },
  { hash: "e843b92", date: "2024-04-04", author: "hyunjaemoon@google.com", message: "Version Bump to 0.3.3" },
  { hash: "9158bfe", date: "2024-04-04", author: "formosa@google.com", message: "Add optimization C flags and strip binaries for netsim-dev build" },
  { hash: "5fdd3fd", date: "2024-04-04", author: "formosa@google.com", message: "Reduce Wi-Fi log" },
  { hash: "b2af781", date: "2024-04-03", author: "hyunjaemoon@google.com", message: "Process UWB packet requests in grpc server" },
  { hash: "cbbfeb0", date: "2024-04-02", author: "formosa@google.com", message: "Merge ＂Support --host-dns CLI flag＂ into main" },
  { hash: "404b7cb", date: "2024-04-02", author: "formosa@google.com", message: "Merge ＂Upgrade Android API to get Nsd service info＂ into main" },
  { hash: "0f23368", date: "2024-04-02", author: "schilit@google.com", message: "Merge ＂Use interior mutability pattern where this class manages the locks.＂ into main" },
  { hash: "d79b8c0", date: "2024-04-02", author: "hyunjaemoon@google.com", message: "Merge ＂grpc read callback safely streams non-hci packets with distinct contexts＂ into main" },
  { hash: "9831fa9", date: "2024-04-02", author: "formosa@google.com", message: "Upgrade Android API to get Nsd service info" },
  { hash: "6827aa9", date: "2024-04-02", author: "schilit@google.com", message: "Use interior mutability pattern where this class manages the locks." },
  { hash: "0f3ab11", date: "2024-04-01", author: "hyunjaemoon@google.com", message: "grpc read callback safely streams non-hci packets with distinct contexts" },
]});
repoLogs.push({ path: "tools/platform-compat", logs: [
  { hash: "226f4d2", date: "2024-04-05", author: "anothermark@google.com", message: "Updates to platform-compat OWNERS" },
]});
repoLogs.push({ path: "tools/repohooks", logs: [
]});
repoLogs.push({ path: "tools/rr_prebuilt", logs: [
]});
repoLogs.push({ path: "tools/security", logs: [
]});
repoLogs.push({ path: "tools/test/connectivity", logs: [
  { hash: "71aea260b", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove alfiechen@google.com from acts_tests/acts_contrib/test_utils/wifi/OWNERS＂ into main" },
  { hash: "8511db039", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove alfiechen@google.com from acts/framework/acts/controllers/openwrt_lib/OWNERS＂ into main" },
  { hash: "b3586c462", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove alfiechen@google.com from acts/framework/acts/controllers/OWNERS＂ into main" },
  { hash: "df94a1cb7", date: "2024-04-22", author: "juliepan@google.com", message: "Merge ＂Remove alfiechen@google.com from acts_tests/tests/google/wifi/OWNERS＂ into main" },
  { hash: "963f257da", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alfiechen@google.com from acts_tests/acts_contrib/test_utils/wifi/OWNERS" },
  { hash: "102c4f09f", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alfiechen@google.com from acts/framework/acts/controllers/openwrt_lib/OWNERS" },
  { hash: "814a38dbf", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alfiechen@google.com from acts/framework/acts/controllers/OWNERS" },
  { hash: "7ee94473d", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alfiechen@google.com from acts_tests/tests/google/wifi/OWNERS" },
  { hash: "931bd1a46", date: "2024-04-19", author: "swarming-tasks@owners-cleanup-prod.google.com.iam.gserviceaccount.com", message: "Remove alfiechen@google.com from acts_tests/tests/OWNERS" },
]});
repoLogs.push({ path: "tools/test/graphicsbenchmark", logs: [
]});
repoLogs.push({ path: "tools/test/mobly_extensions", logs: [
  { hash: "97c42ee", date: "2024-04-10", author: "xianyuanjia@google.com", message: "results_uploader v0.3 release notes" },
  { hash: "d9b8d84", date: "2024-04-10", author: "xianyuanjia@google.com", message: "Lower the log level in Resultstore client to reduce noise" },
]});
repoLogs.push({ path: "tools/test/mobly_snippets", logs: [
]});
repoLogs.push({ path: "tools/test/openhst", logs: [
]});
repoLogs.push({ path: "tools/tradefederation/contrib", logs: [
]});
repoLogs.push({ path: "tools/tradefederation/core", logs: [
  { hash: "25bac5a57", date: "2024-04-26", author: "sdiwas@google.com", message: "Add rollback detection for InstallApexModuleTargetPreparer" },
  { hash: "6901c4f1d", date: "2024-04-25", author: "jdesprez@google.com", message: "Also download STS via CAS" },
  { hash: "fbbf00cb5", date: "2024-04-25", author: "jdesprez@google.com", message: "Log when build key are unchanged" },
  { hash: "7d00c53c0", date: "2024-04-25", author: "jdesprez@google.com", message: "Copy the logs for post processing" },
  { hash: "311a9507a", date: "2024-04-24", author: "vitalidim@google.com", message: "Add MP4 file as part of Artifacts." },
  { hash: "d4eed3010", date: "2024-04-24", author: "jdesprez@google.com", message: "Push the metric processor inside the sandbox to avoid duplication" },
  { hash: "e1423d839", date: "2024-04-24", author: "slotus@google.com", message: "Hide error dialogs in baseline" },
  { hash: "6cbc2db34", date: "2024-04-23", author: "jdesprez@google.com", message: "Log the module configuration" },
  { hash: "f6a795699", date: "2024-04-23", author: "jdesprez@google.com", message: "Allow to switch baseline to unzip for map snapshot" },
  { hash: "058ebc8fc", date: "2024-04-22", author: "jdesprez@google.com", message: "With Apply-snapshot we can still flash image" },
  { hash: "8476ed4d8", date: "2024-04-22", author: "jdesprez@google.com", message: "Allow experiment with heuristic levels to continue analysis" },
  { hash: "ca219d56d", date: "2024-04-22", author: "sanjanasunil@google.com", message: "Remove the need for AppModeSdkSandbox annotation" },
  { hash: "8caa82d18", date: "2024-04-19", author: "jdesprez@google.com", message: "Add a metric to capture zip name" },
  { hash: "c4e0ce981", date: "2024-04-19", author: "jdesprez@google.com", message: "Make the delegation a bit safer" },
  { hash: "3e0345055", date: "2024-04-19", author: "jdesprez@google.com", message: "Log the name of entry received by Skipmanager" },
  { hash: "9bbd3f519", date: "2024-04-19", author: "jdesprez@google.com", message: "Move snapuserd to be blocking before releasing" },
  { hash: "10c3114ef", date: "2024-04-19", author: "jdesprez@google.com", message: "Ensure that SKIPPED status aren't treated like failures" },
  { hash: "5512e24a6", date: "2024-04-19", author: "jdesprez@google.com", message: "Consider build key abort separately from device_image" },
  { hash: "871b72281", date: "2024-04-18", author: "murj@google.com", message: "Actually fall back to strict sharding if splitting ITestSuite fails." },
  { hash: "42b719d47", date: "2024-04-18", author: "jdesprez@google.com", message: "Fix log of the moving head comment" },
  { hash: "e2abd8910", date: "2024-04-17", author: "jdesprez@google.com", message: "Report the actual list of files changes in device images" },
  { hash: "81d0b5910", date: "2024-04-17", author: "jdesprez@google.com", message: "REport SKIPPED status instead of failure+not_Executed" },
  { hash: "1c03b3546", date: "2024-04-17", author: "jdesprez@google.com", message: "Enable delay download after sharding" },
  { hash: "e6a8856c8", date: "2024-04-17", author: "jahinimtiaz@google.com", message: "prepare a metric for flashstation downloaded bytes" },
  { hash: "e2d7180bd", date: "2024-04-16", author: "murj@google.com", message: "Handles the case when ITestSuite.split() returns null." },
  { hash: "089e3c5b4", date: "2024-04-16", author: "jdesprez@google.com", message: "Only clear snapuserd wait at release not postInvocationTeardown" },
  { hash: "962b25d44", date: "2024-04-16", author: "jdesprez@google.com", message: "Tune teardown for incremental snapshot" },
  { hash: "313896257", date: "2024-04-16", author: "jdesprez@google.com", message: "Prevent http retries on 400 for GoogleApi" },
  { hash: "fd6dc8933", date: "2024-04-16", author: "jdesprez@google.com", message: "Support flashing unzipped images" },
  { hash: "434c40c1c", date: "2024-04-15", author: "jdesprez@google.com", message: "Ensure module can opt-out of bugreport" },
  { hash: "2463011fa", date: "2024-04-10", author: "matthewsedam@google.com", message: "TestAppInstallSetup.java: Fix small typo" },
  { hash: "dbb46cf0d", date: "2024-04-08", author: "onshimiye@google.com", message: "Add Tradefed support for RequireRunOnPrivateProfile" },
  { hash: "af227103e", date: "2024-04-06", author: "jdesprez@google.com", message: "Avoid redownloading jars in stageSuite" },
  { hash: "f9ee2471c", date: "2024-04-05", author: "theianchen@google.com", message: "Add Sdk35ModuleController" },
  { hash: "675f1e99d", date: "2024-04-05", author: "dshi@google.com", message: "Add an error signature for detecting bluetooth failure during cf boot" },
  { hash: "126ac7db1", date: "2024-04-05", author: "jdesprez@google.com", message: "Add timeout and no retry to dismiss-keyguard" },
  { hash: "bfe19a7f0", date: "2024-04-05", author: "jdesprez@google.com", message: "Convert some of the stayon command to shellV2" },
  { hash: "14de88f4e", date: "2024-04-05", author: "jdesprez@google.com", message: "Instrument baseline unzipping further" },
  { hash: "6b2e07fee", date: "2024-04-05", author: "alanstokes@google.com", message: "Fix adbConnectToMicrodroid failure handling" },
  { hash: "c42a79b45", date: "2024-04-05", author: "jdesprez@google.com", message: "Delay download after sharding" },
  { hash: "5726a66ec", date: "2024-04-05", author: "jemoreira@google.com", message: "Use override_cvd_path in Oxygen client" },
  { hash: "1b61c5f13", date: "2024-04-05", author: "jemoreira@google.com", message: "Don't assume fetch_cvd is in an android build" },
  { hash: "3da08967d", date: "2024-04-04", author: "fmayle@google.com", message: "add use-snapshot-before-first-module option" },
  { hash: "a8997ec5f", date: "2024-04-04", author: "frankfeng@google.com", message: "Handle artifacts as dir or file" },
  { hash: "2a6233f1c", date: "2024-04-04", author: "jdesprez@google.com", message: "Finish deprecating error collection built-in ITestSuite" },
  { hash: "175dc660a", date: "2024-04-04", author: "jdesprez@google.com", message: "Give workFolder a local group so it continue to be used" },
  { hash: "9f4b61d87", date: "2024-04-03", author: "jdesprez@google.com", message: "Create a mode where we stage artifacts per module" },
  { hash: "b04d9af88", date: "2024-04-03", author: "fmayle@google.com", message: "return error when device type doesn't support snapshotting" },
  { hash: "bb6794884", date: "2024-04-02", author: "jahinimtiaz@google.com", message: "Apply other flags even if one flag throw exception" },
  { hash: "1f261f6e8", date: "2024-04-02", author: "fmayle@google.com", message: "don't require ＂use_cvd＂ for CF snapshot support" },
  { hash: "389c2c23d", date: "2024-04-02", author: "fmayle@google.com", message: "use new cuttlefish options to simplify snapshot-restore integration" },
  { hash: "69716c29b", date: "2024-04-02", author: "harrytczhang@google.com", message: "Parse iterations from either the class or method name." },
]});
repoLogs.push({ path: "tools/tradefederation/prebuilts", logs: [
]});
repoLogs.push({ path: "tools/treble", logs: [
]});
repoLogs.push({ path: "tools/trebuchet", logs: [
]});
repoLogs.push({ path: "trusty/device/arm/generic-arm64", logs: [
]});
repoLogs.push({ path: "trusty/device/arm/vexpress-a15", logs: [
]});
repoLogs.push({ path: "trusty/device/nxp/imx7d", logs: [
]});
repoLogs.push({ path: "trusty/device/x86/generic-x86_64", logs: [
]});
repoLogs.push({ path: "trusty/hardware/nxp", logs: [
]});
repoLogs.push({ path: "trusty/host/common", logs: [
]});
repoLogs.push({ path: "trusty/interfaces", logs: [
]});
repoLogs.push({ path: "trusty/kernel", logs: [
  { hash: "7e58db4", date: "2024-04-08", author: "ahomescu@google.com", message: "ubsan: Update Rust libbinder exemption" },
]});
repoLogs.push({ path: "trusty/user/app/avb", logs: [
]});
repoLogs.push({ path: "trusty/user/app/cast-auth", logs: [
  { hash: "2d76f6d", date: "2024-04-08", author: "mikemcternan@google.com", message: "trusty: cast-auth: fix incorrect return value on error path" },
]});
repoLogs.push({ path: "trusty/user/app/confirmationui", logs: [
]});
repoLogs.push({ path: "trusty/user/app/gatekeeper", logs: [
]});
repoLogs.push({ path: "trusty/user/app/keymaster", logs: [
]});
repoLogs.push({ path: "trusty/user/app/keymint", logs: [
]});
repoLogs.push({ path: "trusty/user/app/sample", logs: [
  { hash: "0f48cc3", date: "2024-04-19", author: "ahomescu@google.com", message: "stats-test: Disable if error reporting is turned off" },
  { hash: "66d18ee", date: "2024-04-15", author: "stevenray@google.com", message: "Add trusty rust tests for hwcrypto phase 1" },
  { hash: "13f74f0", date: "2024-04-16", author: "oarbildo@google.com", message: "Add HwCrypto to trusty unittests" },
  { hash: "f8489f5", date: "2024-04-12", author: "oarbildo@google.com", message: "Implement key derivation" },
  { hash: "eaf64a8", date: "2024-04-11", author: "oarbildo@google.com", message: "Initial implementation of hwkeyDeriveVersioned" },
  { hash: "34991a3", date: "2024-04-08", author: "oarbildo@google.com", message: "Implemented key generation for AES and HMAC" },
  { hash: "f12b41f", date: "2024-04-08", author: "oarbildo@google.com", message: "Implemented internal key handling" },
]});
repoLogs.push({ path: "trusty/user/app/secretkeeper", logs: [
]});
repoLogs.push({ path: "trusty/user/app/storage", logs: [
]});
repoLogs.push({ path: "trusty/user/base", logs: [
  { hash: "ac993d3", date: "2024-04-23", author: "mikemcternan@google.com", message: "trusty:hwaes: enlarge the test buffers and correct enc/dec values" },
  { hash: "18654eb", date: "2024-04-19", author: "oarbildo@google.com", message: "Added Rust is_ptr_err function" },
  { hash: "a3a0cbe", date: "2024-04-17", author: "ahomescu@google.com", message: "libstdc++-trusty: Update license file name" },
  { hash: "a4c2c8c", date: "2024-04-12", author: "kettro@google.com", message: "[tipc] Replace Vec with ArrayVec in TIPC" },
  { hash: "6fe5334", date: "2024-04-11", author: "rherouart@google.com", message: "build-config: Missing some port tests in the test map" },
  { hash: "d72d0d5", date: "2024-04-08", author: "perlarsen@google.com", message: "lib: trusty-std: Don't implicitly depend on rust_support" },
]});
repoLogs.push({ path: "trusty/vendor/google/aosp", logs: [
  { hash: "abf3090", date: "2024-04-25", author: "ahomescu@google.com", message: "test-map: Enable binderRpcToTrustyTest" },
  { hash: "d78e71c", date: "2024-04-23", author: "westoncarvalho@google.com", message: "scripts: Stop incorrectly reporting tests as flakes" },
  { hash: "b47d8ee", date: "2024-04-22", author: "mikemcternan@google.com", message: "trusty: build: fix double archiving of lk.elf.lst" },
  { hash: "c9dac18", date: "2024-04-20", author: "mikemcternan@google.com", message: "trusty: build: archive .lst files" },
  { hash: "6962374", date: "2024-04-06", author: "ahomescu@google.com", message: "Export soong_ui if available" },
]});
