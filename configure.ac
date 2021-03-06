AC_INIT(index.js,0.01)
AM_INIT_AUTOMAKE
AC_PREFIX_DEFAULT(/usr/local)

PACKAGE=lorem

AC_CHECK_PROG(HAVE_NODE, node, true, false, /bin /usr/local/bin /usr/bin)
if test "x$HAVE_NODE" = "xfalse"; then
	AC_MSG_ERROR([Requested program node not found])
fi
AC_PATH_PROG([node],[node])
AC_PATH_PROG([NODE],[node])
dnl AC_SUBST(node, node)

AC_CHECK_PROG(HAVE_NPM, npm, true, false, /bin /usr/local/bin /usr/bin)
if test "x$HAVE_NPM" = "xfalse"; then
	AC_MSG_ERROR([Requested program npm not found])
fi
AC_SUBST(npm, npm)
AC_PATH_PROG([NPM],[npm])
AC_PATH_PROG([npm],[npm])

AC_CHECK_PROG(HAVE_CP, cp, true, false, /bin /usr/local/bin /usr/bin)
if test "x$HAVE_CP" = "xfalse"; then
	AC_MSG_ERROR([Requested program cp not found])
fi
AC_PATH_PROG([CP],[cp])

AC_PROG_INSTALL

AC_CANONICAL_HOST

case $host_os in
    *freebsd* )
	AC_SUBST(ROOT_GROUP, "wheel")
	AM_CONDITIONAL(FREEBSD_OS, true)
	AM_CONDITIONAL(LINUX_OS, false)
	OSNAME=freebsd
	ROOT_GROUP=wheel
        ;;
    *linux* )
	AC_SUBST(ROOT_GROUP, "root")
	AM_CONDITIONAL(FREEBSD_OS, false)
	AM_CONDITIONAL(LINUX_OS, true)
	OSNAME=linux
	ROOT_GROUP=root
        ;;
esac

AM_CONDITIONAL(SYSTEMD, false)
if test -d /lib/systemd/system; then
	AM_CONDITIONAL(SYSTEMD, true)
fi

AC_ARG_ENABLE([devel-mode],
    AS_HELP_STRING([--enable-devel-mode], [Enable developmend mode]))


AS_IF([test "x$enable_devel_mode" = "xyes"], [
    SRCDIR=`pwd`/backend
    enable_devel_mode=yes
    prefix=$SRCDIR
    prefix=$SRCDIR
    sbindir=$prefix
])

test "x$prefix" == "xNONE" && prefix=$ac_default_prefix
PREFIX=$prefix

dnl --------------------------------------------------------------------------------------
AC_ARG_WITH(confdir,
	AS_HELP_STRING([--with-confdir=PATH],[set configuration dir to PATH (default: "${ac_default_prefix}"/etc/${PACKAGE})]),
	[ if test ! -z "$with_confdir" ; then
		case $with_confdir in
			/*)
				APP_CONFDIR="$with_confdir"
				;;
			*)
                                AC_MSG_ERROR(You must specify an absolute path to --with-confdir=PATH)
				;;
		esac
	else
		APP_CONFDIR="$prefix/etc/${PACKAGE}"
	fi ],
	[
	APP_CONFDIR="$prefix/etc/${PACKAGE}"
	])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
    APP_CONFDIR="${SRCDIR}"
    sysconfdir="${SRCDIR}"
], [
    test "x$APP_CONFDIR" == "x/usr/etc/${PACKAGE}" && APP_CONFDIR="/etc/${PACKAGE}"
    test "x$prefix" == "x/usr" && sysconfdir="/etc"
])

AC_MSG_NOTICE(app_confdir set as ${APP_CONFDIR})

AC_DEFINE_UNQUOTED(APP_CONFDIR, "$APP_CONFDIR", [location of configuration files for ${PACKAGE}])
AC_SUBST(APP_CONFDIR, "$APP_CONFDIR")

AC_DEFINE_UNQUOTED(app_confdir, "$APP_CONFDIR", [location of configuration files for ${PACKAGE}])
AC_SUBST(app_confdir, "$APP_CONFDIR")

dnl --------------------------------------------------------------------------------------
AC_ARG_WITH(logdir,
	AS_HELP_STRING([--with-logdir=PATH],[set file path for source logdir (default: /var/log/${PACKAGE}/${PACKAGE}.log)]),
	[ if test ! -z "$with_logdir" ; then
		case $with_logdir in
			/*)
				APP_LOGDIR="$with_logdir"
				;;
			*)
                                AC_MSG_ERROR(You must specify an absolute path to --with-logdir=PATH)
				;;
		esac
	else
		APP_LOGDIR="/var/log/${PACKAGE}"
	fi ],
	[ 
	APP_LOGDIR="/var/log/${PACKAGE}"
	])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_LOGDIR="${SRCDIR}/log"
])

AC_MSG_NOTICE(app_logdir set as ${APP_LOGDIR})

AC_DEFINE_UNQUOTED(APP_LOGDIR, "$APP_LOGDIR", [location of ${PACKAGE} logdir])
AC_SUBST(APP_LOGDIR, "$APP_LOGDIR")

AC_DEFINE_UNQUOTED(app_logdir, "$APP_LOGDIR", [location of ${PACKAGE} logdir])
AC_SUBST(app_logdir, "$APP_LOGDIR")

dnl --------------------------------------------------------------------------------------
AC_ARG_WITH(rundir,
	AS_HELP_STRING([--with-rundir=PATH],[set file path for source rundir (default: /var/run/${PACKAGE})]),
	[ if test ! -z "$with_rundir" ; then
		case $with_rundir in
			/*)
				APP_RUNDIR="$with_rundir"
				;;
			*)
                                AC_MSG_ERROR(You must specify an absolute path to --with-rundir=PATH)
				;;
		esac
	else
		APP_RUNDIR="/var/run/${PACKAGE}"
	fi ],
	[
	APP_RUNDIR="/var/run/${PACKAGE}"
	])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_RUNDIR="${SRCDIR}/run"
])

AC_MSG_NOTICE(app_rundir set as ${APP_RUNDIR})

AC_DEFINE_UNQUOTED(APP_RUNDIR, "$APP_RUNDIR", [location of pid file])
AC_SUBST(APP_RUNDIR, "$APP_RUNDIR")

AC_DEFINE_UNQUOTED(app_rundir, "$APP_RUNDIR", [location of pid file])
AC_SUBST(app_rundir, "$APP_RUNDIR")


dnl --------------------------------------------------------------------------------------

AC_ARG_WITH(libdir,
	AS_HELP_STRING([--with-libdir=PATH],[set file path for source libdir (default: ${PREFIX}/share/${PACKAGE})]),
	[ if test ! -z "$with_libdir" ; then
		case $with_libdir in
			/*)
				APP_LIBDIR="$with_libdir"
				;;
			*)
                                AC_MSG_ERROR(You must specify an absolute path to --with-libdir=PATH)
				;;
		esac
	else
		APP_LIBDIR="${PREFIX}/share/${PACKAGE}"
	fi ],
	[
	APP_LIBDIR="${PREFIX}/share/${PACKAGE}"
	])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_LIBDIR="${SRCDIR}"
])

AC_MSG_NOTICE(app_libdir set as ${APP_LIBDIR})

AC_DEFINE_UNQUOTED(APP_LIBDIR, "$APP_LIBDIR", [location of libs])
AC_SUBST(APP_LIBDIR, "$APP_LIBDIR")

AC_DEFINE_UNQUOTED(app_libdir, "$APP_LIBDIR", [location of libs])
AC_SUBST(app_libdir, "$APP_LIBDIR")

dnl --------------------------------------------------------------------------------------

case $host_os in
    *freebsd* )
	default_user="www"
	default_group="www"
        ;;
    *linux* )
	default_user="www-data"
	default_group="www-data"
        ;;
esac

AC_ARG_WITH(user,
	AS_HELP_STRING([--with-user=${PACKAGE}],[set executing user name]),
	[ if test ! -z "$with_user" ; then
		case $with_user in
			"")
				AC_MSG_ERROR(You must specify user name)
				;;
			*)
				APP_USER="$with_user"
				;;
		esac
	else
		APP_USER="$default_user"
	fi ],
	[ APP_USER="$default_user" ])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_USER="`id -un`"
])

AC_MSG_NOTICE(app_user set as ${APP_USER})


AC_DEFINE_UNQUOTED(APP_USER, "$APP_USER", [effective user])
AC_SUBST(APP_USER, "$APP_USER")

AC_DEFINE_UNQUOTED(app_user, "$APP_USER", [effective user])
AC_SUBST(app_user, "$APP_USER")

dnl --------------------------------------------------------------------------------------
AC_ARG_WITH(group,
	AS_HELP_STRING([--with-group=${PACKAGE}],[set executing group name]),
	[ if test ! -z "$with_group" ; then
		case $with_group in
			"")
				AC_MSG_ERROR(You must specify group name)
				;;
			*)
				APP_GROUP="$with_group"
				;;
		esac
	else
		APP_GROUP="$default_group"
	fi ],
	[ APP_GROUP="$default_group" ])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_GROUP="`id -gn`"
])

AC_MSG_NOTICE(app_group set as ${APP_GROUP})

AC_DEFINE_UNQUOTED(APP_GROUP, "$APP_GROUP", [effective group id])
AC_SUBST(APP_GROUP, "$APP_GROUP")

AC_DEFINE_UNQUOTED(app_group, "$APP_GROUP", [effective group id])
AC_SUBST(app_group, "$APP_GROUP")

dnl --------------------------------------------------------------------------------------
dnl AC_DEFINE_UNQUOTED(APP_LIBDIR, ${prefix}/share/${PACKAGE}, [application lib directory])
dnl AC_SUBST(APP_LIBDIR, ${prefix}/share/${PACKAGE})

dnl AC_DEFINE_UNQUOTED(app_libdir, ${prefix}/share/${PACKAGE}, [application lib directory])
dnl AC_SUBST(app_libdir, ${prefix}/share/${PACKAGE})

dnl --------------------------------------------------------------------------------------

default_datadir="/var/$PACKAGE"

AC_ARG_WITH(datadir,
	AS_HELP_STRING([--with-datadir=PATH],[set data directory (default: $default_datadir)]),
	[ if test ! -z "$with_datadir" ; then
		case $with_datadir in
			/*)
				APP_DATADIR="$with_datadir"
				;;
			*)
                                AC_MSG_ERROR(You must specify an absolute path to --with-datadir=PATH)
				;;
		esac
	else
		APP_DATADIR="$default_datadir"
	fi ],
	[
	APP_DATADIR="$default_datadir"
	])

AS_IF([test "x$enable_devel_mode" = "xyes"], [
	APP_DATADIR="${SRCDIR}/data"
])

AC_MSG_RESULT(storedir set as ${APP_STOREDIR})


AC_DEFINE_UNQUOTED(APP_DATADIR, "$APP_DATADIR", [location of data dir])
AC_SUBST(APP_DATADIR, "$APP_DATADIR")

AC_DEFINE_UNQUOTED(app_datadir, "$APP_DATADIR", [location of data dir])
AC_SUBST(app_datadir, "$APP_DATADIR")

dnl AC_OUTPUT_COMMANDS([chmod a+x backend/lorem])

AC_OUTPUT([
Makefile
backend/Makefile
backend/lorem
backend/lorem.json
backend/rc.d/lorem
],[chmod a+x backend/lorem])
dnl EOF
